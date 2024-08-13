import * as signalR from '@microsoft/signalr';
import { useEffect, useState } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const useSignalRService = () => {
  const [connection, setConnection] = useState<signalR.HubConnection | null>(
    null,
  );

  const url = `${BASE_URL}/VBCC_SignalRHub_CTC/ctc_hub`;

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(url)
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();

    setConnection(newConnection);

    const startConnection = async () => {
      try {
        await newConnection.start();
        console.log('SignalR Connected.');
      } catch (err) {
        console.error('SignalR Connection Error: ', err);
      }
    };

    startConnection();

    return () => {
      newConnection.stop();
    };
  }, [url]);

  const onReceiveOnlineCount = (updateOnlineCount: (count: number) => void) => {
    connection?.on('ReceiveUpdateUserOnline', (count) => {
      updateOnlineCount(count);
    });
  };

  return { onReceiveOnlineCount };
};

export default useSignalRService;
