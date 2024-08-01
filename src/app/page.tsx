import { QueryClient, dehydrate } from '@tanstack/query-core';
import { newsApis, projectInformationApis } from '@/apis';
import { HydrationBoundary } from '@tanstack/react-query';
import { MaxWidthWrapper, NewsSideBar } from '@/components';
import { Breadcrumb } from '@/components/ui';
import Title from '@/components/ui/title';
import Introduction from './Introduction';

// import { introductionApis, newsApis } from './utils/api-requests';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['news'],
    queryFn: newsApis.getNews,
  });

  await queryClient.prefetchQuery({
    queryKey: ['project-information'],
    queryFn: projectInformationApis.getInformation,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <section>
      <HydrationBoundary state={dehydratedState}>
        <MaxWidthWrapper className="pb-24 pt-3">
          <Breadcrumb pathnames={[{ label: 'Giới thiệu', link: '' }]} />

          <Title title="Giới thiệu" />

          <div className="mt-3 flex flex-col gap-y-3 lg:flex-row lg:gap-x-5">
            {/* Content Section */}
            <div className="w-full lg:w-4/5">
              <Introduction />
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
              <NewsSideBar />
            </div>
          </div>
        </MaxWidthWrapper>
      </HydrationBoundary>
    </section>
  );
}
