'use client';

import { DownOutlined } from '@ant-design/icons';
import { Drawer, Dropdown, type MenuProps } from 'antd';
import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { MenuBarIcon } from '../../assets/icons';
import { projectInformationApis } from '@/apis';
import { MenuBarIcon } from '@/assets/icons';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mappedLinks: Record<string, string> = {
  'Giới thiệu': '/',
  'Tin tức': '/news',
  'Hướng dẫn sử dụng': 'huong-dan-su-dung',
};
function MenuBar() {
  const pathname = usePathname();

  const [visible, setVisible] = useState(false);

  // const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['information'],
    queryFn: projectInformationApis.getInformation,
    staleTime: 3000,
  });

  const menu = data?.Item.Menu;

  const hrefggleDrawer = () => setVisible((prev) => !prev);

  const items: MenuProps['items'] = [
    {
      key: 'tra-cuu-ho-so',
      label: <Link href={'/tra-cuu-ho-so'}>Tra cứu hồ sơ</Link>,
    },
    {
      key: 'tra-cuu-van-bang',
      label: <Link href={'/tra-cuu-van-bang'}>Tra cứu văn bằng</Link>,
    },
  ];

  const itemsService: MenuProps['items'] = [
    {
      key: 'dang-ky-chinh-sua-van-bang',
      label: (
        <Link href={'/dang-ky-chinh-sua-van-bang'}>
          Đăng ký chỉnh sửa văn bằng
        </Link>
      ),
    },
    {
      key: 'dang-ky-cap-ban-sao',
      label: <Link href={'/dang-ky-cap-ban-sao'}>Đăng ký cấp bản sao</Link>,
    },
  ];

  return (
    <>
      <div className="hidden lg:flex items-center space-x-6">
        {menu
          ?.filter((item) => item.IsActive)
          ?.map((item) => {
            if (!item.ListChilds.length && item.Code !== '02') {
              return (
                <Link
                  key={item.Code}
                  href={mappedLinks[item.Name]}
                  className={
                    pathname === mappedLinks[item.Name]
                      ? 'text-active-link font-bold'
                      : 'text-white font-semibold'
                  }
                >
                  {item.Name}
                </Link>
              );
            }

            if (!item.ListChilds.length && item.Code === '02') {
              return (
                <Dropdown
                  menu={{ items }}
                  trigger={['click', 'hover']}
                  key={item.Code}
                >
                  <p
                    className={`hover:cursor-pointer ${pathname.includes('tra-cuu') ? 'text-active-link font-bold' : 'text-white font-semibold'}`}
                  >
                    Tra cứu
                    <DownOutlined
                      color="white"
                      size={12}
                      className="w-3 h-3 ml-1"
                    />
                  </p>
                </Dropdown>
              );
            }

            if (item.ListChilds.length) {
              return (
                <Dropdown
                  menu={{ items: itemsService }}
                  trigger={['click', 'hover']}
                  key={item.Code}
                >
                  <p
                    className={`hover:cursor-pointer ${pathname.includes('tra-cuu') ? 'text-active-link font-bold' : 'text-white font-semibold'}`}
                  >
                    {item.Name}
                    <DownOutlined
                      color="white"
                      size={12}
                      className="w-3 h-3 ml-1"
                    />
                  </p>
                </Dropdown>
              );
            }
          })}
      </div>

      <button className="lg:hidden block" onClick={hrefggleDrawer}>
        <MenuBarIcon />
      </button>
      {/* <Button
        className="lg:hidden block"
        type="default"
        shape="circle"
        icon={<MenuBarIcon />}
        onClick={hrefggleDrawer}
      /> */}

      {/* mobile */}
      <Drawer
        placement="right"
        closable={false}
        onClose={hrefggleDrawer}
        open={visible}
      >
        <div className="lg:flex items-center flex-col gap-y-3">
          <Link href={'/'}>Giới thiệu</Link>

          <Dropdown menu={{ items }} trigger={['click', 'hover']}>
            <p
              className={`hover:cursor-pointer ${pathname.includes('tra-cuu') ? 'text-active-link font-bold' : 'text-gradient font-semibold'}`}
            >
              Tra cứu
              <DownOutlined color="white" size={12} className="w-3 h-3 ml-1" />
            </p>
          </Dropdown>

          <Link href={'/tin-tuc'}>Tin tức</Link>

          <Dropdown menu={{ items: itemsService }} trigger={['click', 'hover']}>
            <p
              className={`hover:cursor-pointer ${pathname.includes('dang-ky') ? 'text-active-link font-bold' : 'text-gradient font-semibold'}`}
            >
              Dịch vụ
              <DownOutlined color="white" size={12} className="w-3 h-3 ml-1" />
            </p>
          </Dropdown>
        </div>
      </Drawer>
    </>
  );
}

export default MenuBar;
