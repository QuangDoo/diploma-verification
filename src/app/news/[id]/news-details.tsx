'use client';

import { newsApis } from '@/apis';
import { MaxWidthWrapper, NewsSideBar } from '@/components';
import FacebookComment from '@/components/facebook-comment';
import Breadcrumb from '@/components/ui/breadcrumb';
import DateLabel from '@/components/ui/date-label';
import Title from '@/components/ui/title';
import { useQuery } from '@tanstack/react-query';

function NewsDetail({ id }: { id: string }) {
  const { data: newsDetailData } = useQuery({
    queryKey: ['newsDetail', id],
    queryFn: () => newsApis.getNew(id),
    staleTime: 3000,
  });

  if (!newsDetailData?.Item) return null;

  const { TieuDe, NoiDung, DateHienThi } = newsDetailData.Item;

  return (
    <section>
      <MaxWidthWrapper className="pb-24 pt-5 md:pt-8 lg:pt-3">
        <Breadcrumb
          pathnames={[
            { label: 'Tin tức', link: '/tin-tuc' },
            { label: TieuDe, link: '' },
          ]}
        />

        <Title title={TieuDe} />

        <div className="mt-3 flex flex-col gap-y-3 lg:flex-row lg:gap-x-5">
          {/* Content Section */}
          <div className="w-full lg:w-4/5">
            <DateLabel
              date={DateHienThi}
              className="mb-3"
              longText
              iconSize={20}
            />
            <div
              className="mt-4"
              dangerouslySetInnerHTML={{ __html: NoiDung }}
            />

            <h3 className="text-gradient mb-3 mt-4 font-bold">BÌNH LUẬN</h3>

            <FacebookComment dataHref={window.location.href} />
          </div>

          {/* Divider vertical */}
          <div className="h-auto w-1 lg:relative">
            <div className="absolute right-0 top-0 h-full w-1 bg-border" />
          </div>

          {/* Divider horizontal */}
          <div className="relative h-1 w-full lg:hidden">
            <div className="absolute right-0 top-0 h-full w-full bg-border" />
          </div>

          {/* Sidebar Section */}
          <div className="mt-0 flex w-full flex-col lg:mt-0 lg:w-1/5">
            <NewsSideBar id={id} />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default NewsDetail;
