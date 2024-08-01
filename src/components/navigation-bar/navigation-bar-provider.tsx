import { projectInformationApis } from '@/apis';
import { dehydrate, QueryClient } from '@tanstack/query-core';
import { Navbar } from '..';
import { HydrationBoundary } from '@tanstack/react-query';

async function NavigationBarProvider() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['information'],
    queryFn: projectInformationApis.getInformation,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Navbar />
    </HydrationBoundary>
  );
}

export default NavigationBarProvider;
