import MaxWidthWrapper from '@/components/max-width-wrapper';
import Breadcrumb from '@/components/ui/breadcrumb';
import Title from '@/components/ui/title';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

// import { newsApis } from '../utils/api-requests';
import { newsApis } from '@/apis';
import ListNews from './list-news';

export default async function NewsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['news'],
    queryFn: newsApis.getNews,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="bg-slate-50">
      <section>
        <HydrationBoundary state={dehydratedState}>
          <MaxWidthWrapper className="pb-24 pt-3">
            <Breadcrumb pathnames={[{ label: 'Tin tức', link: '' }]} />

            <Title title="Tin tức" />

            <ListNews />
          </MaxWidthWrapper>
        </HydrationBoundary>
      </section>
    </div>
  );
}
