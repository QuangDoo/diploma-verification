'use client';

// import { newsApis } from '@/app/utils/api-requests';
import { NewsIcon } from '@/assets/icons';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import DateLabel from './ui/date-label';
import Title from './ui/title';
import { newsApis } from '@/apis';

function NewsSidebar({ id }: { id?: string }) {
  const { data: listOfNewsData } = useQuery({
    queryKey: ['news'],
    queryFn: newsApis.getNews,
    staleTime: 5 * 1000,
  });

  console.log('listOfNewsData :>> ', listOfNewsData);

  return (
    <>
      <Title title="Tin tức mới nhất" icon={<NewsIcon />} />

      <div className="mt-3 flex flex-col gap-y-4">
        {/* Tin tức mới nhất */}
        {listOfNewsData?.Item.ListTinTuc.filter((news) => news.Id !== id)
          .slice(0, 3)
          .map((news) => (
            <Link key={news.Id} href={`/news/${news.Id}`} className="group">
              <h3 className="text-gradient text-gradient-hover line-clamp-1 text-sm font-bold group-hover:text-link">
                {news.TieuDe}
              </h3>

              {/* <div
                dangerouslySetInnerHTML={{ __html: news.NoiDung }}
                className="text-indent-20 line-clamp-2 text-sm"
              /> */}

              <p>{news.NoiDung_Text}</p>

              <DateLabel date={news.DateHienThi} />

              <div className="mt-3 h-1 w-full bg-border" />
            </Link>
          ))}
      </div>
    </>
  );
}

export default NewsSidebar;
