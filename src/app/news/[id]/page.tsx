// import { newsApis } from '@/lib/api-requests';
import { newsApis } from '@/apis';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import NewsDetail from './news-details';

// import NewsDetail from './news-detail';

async function NewsDetailPage({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['newsDetail', params.id],
    queryFn: () => newsApis.getNew(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewsDetail id={params.id} />
    </HydrationBoundary>
  );
}

export default NewsDetailPage;
