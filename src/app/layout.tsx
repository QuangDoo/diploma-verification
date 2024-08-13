import CustomToastContainer from '@/components/custom-toast-container ';
// import Footer from '@/components/footer';
// import Navbar from '@/components/nav-bar';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import vi from 'antd/locale/vi_VN';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { Footer } from '@/components';
import { NavigationBarProvider } from '@/components/navigation-bar';
import './globals.css';

dayjs.extend(updateLocale);

dayjs.updateLocale('vi', {
  months: [
    'T1',
    'T2',
    'T3',
    'T4',
    'T5',
    'T6',
    'T7',
    'T8',
    'T9',
    'T10',
    'T11',
    'T12',
  ],
  weekdays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
});

const inter = Inter({ subsets: ['latin'] });

const PRIMARY_COLOR = '#0000C5';
const SHADOW = 'rgba(0, 0, 197, 0.5)';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className={inter.className}>
        <CustomToastContainer />

        <ReactQueryProvider>
          <ConfigProvider
            locale={vi}
            theme={{
              token: {
                colorPrimary: PRIMARY_COLOR,
                borderRadius: 2,
                boxShadow: `0 0 0 2px ${SHADOW}`,
              },
              components: {
                Input: {
                  borderRadius: 2,
                  padding: 4,
                  controlHeight: 40,
                },
                DatePicker: {
                  controlHeight: 40,
                  borderRadius: 2,
                  padding: 2,
                  cellActiveWithRangeBg: '#C6DEFF',
                },
                Table: {
                  // headerBorderRadius: 12,
                  // headerColor: '#fff',
                  // headerBg: SHADOW,
                  headerBorderRadius: 8,
                },
              },
            }}
          >
            <AntdRegistry>
              {/* <Navbar /> */}

              <NavigationBarProvider />

              <main className="flex min-h-[calc(100vh-4rem)] flex-col lg:min-h-[calc(100vh-5rem)]">
                <div className="flex h-full flex-1 flex-col bg-slate-50">
                  {children}
                </div>
                <Footer />
              </main>
            </AntdRegistry>
          </ConfigProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
