'use client';

import { projectInformationApis } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import MaxWidthWrapper from '../max-width-wrapper';
import MenuBar from '../menu-bar';

function NavigationBar() {
  const { data } = useQuery({
    queryKey: ['information'],
    queryFn: projectInformationApis.getInformation,
    staleTime: 3000,
  });

  const { LienHe } = data?.Item || ({} as Information);

  return (
    <nav className="bg-custom-gradient transition-all sticky z-40 top-0 left-0">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between h-16 lg:h-20 ">
          <div className="flex items-center gap-2 lg:gap-4">
            <a href={'/'}>
              {LienHe?.AvatarLink ? (
                <img
                  src={LienHe?.AvatarLink}
                  alt={``}
                  sizes="100vw"
                  className="object-cover w-14 h-14 rounded-full lg:w-16 lg:h-16"
                />
              ) : (
                <div className="w-14 h-14 bg-border rounded-full" />
              )}
            </a>

            <div>
              <h2 className="text-xxs font-bold uppercase leading-snug text-slate-100 lg:text-xl">
                {LienHe?.CoQuanChuQuan || ''}
                <br />
                Cổng thông tin tra cứu văn bằng chứng chỉ
              </h2>
            </div>
          </div>

          <MenuBar />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default NavigationBar;
