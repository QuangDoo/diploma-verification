'use client';

import { projectInformationApis } from '@/apis';
import useSignalRService from '@/hooks/useSignal';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import MaxWidthWrapper from './max-width-wrapper';

function Footer() {
  const queryClient = useQueryClient();

  const { onReceiveOnlineCount } = useSignalRService();
  const [onlineCount, setOnlineCount] = useState<number>(0);

  const data = queryClient.getQueryData<ApiResponse<Information>>([
    'information',
  ]);

  const { LienHe } = data?.Item || ({} as Information);

  useEffect(() => {
    onReceiveOnlineCount(setOnlineCount);
  }, [onReceiveOnlineCount]);

  const { data: numberOfAccessData } = useQuery({
    queryKey: ['numberOfAccessData'],
    queryFn: () => projectInformationApis.getNumberOfAccess(),
  });

  const numberOfSAccess = numberOfAccessData?.Item;

  return (
    <footer className="relative overflow-hidden bg-primary bg-custom-gradient">
      <MaxWidthWrapper className="py-4 lg:px-16">
        <div className="mb-4 flex items-end justify-between">
          <div className="text-slate-100">
            <h2 className="mb-2 text-xs font-medium uppercase lg:text-xl">
              {LienHe?.CoQuanChuQuan || '-'}
            </h2>
            <h5 className="flex items-center text-xs leading-relaxed lg:text-sm">
              {/* <MapPin className="mr-1 h-4 w-4" /> */}
              Địa chỉ liên hệ: {LienHe?.DiaChi}
            </h5>
            <h5 className="flex items-center text-xs leading-relaxed lg:text-sm">
              {/* <Mail className="mr-1 h-4 w-4" /> */}
              Email: {LienHe?.Email}
            </h5>
            <h5 className="flex items-center text-xs leading-relaxed lg:text-sm">
              {/* <Phone className="mr-1 h-4 w-4" /> */}
              Số điện thoại: {LienHe?.SoDienThoai}
            </h5>
          </div>
          <div className="hidden text-slate-100 lg:block">
            <h5 className="text-sm leading-relaxed">
              Đang online: {onlineCount}
            </h5>
            <h5 className="text-sm leading-relaxed">
              Tổng số lượt truy cập: {numberOfSAccess || '-'}
            </h5>
          </div>
        </div>

        <div className="w-full text-center">
          <p className="text-xs text-slate-400">
            Copyright {new Date().getFullYear()} &copy; Bitech | Phần mền quản
            lý chứng chỉ | Bitechco
          </p>
        </div>
      </MaxWidthWrapper>

      <img
        src={'footer_1' || ''}
        alt="footer image"
        className="absolute -bottom-4 left-0"
      />
      <img
        src={'footer_2'}
        alt="footer image"
        className="absolute -top-4 right-0"
      />
    </footer>
  );
}

export default Footer;
