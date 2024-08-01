'use client';

import { newsApis } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import NewsCard from './news-card';

export default function ListNews() {
  const { data } = useQuery({
    queryKey: ['news'],
    queryFn: newsApis.getNews,
    staleTime: 3000,
  });

  const listOfNews = data?.Item.ListTinTuc;

  return (
    <div className="mt-3 flex flex-col gap-y-2">
      {listOfNews?.map((news) => (
        <Link key={news.Id} href={`/news/${news.Id}`}>
          <NewsCard {...news} />
        </Link>
      ))}
    </div>
  );
}
