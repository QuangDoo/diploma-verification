'use client';

import { projectInformationApis } from '@/apis';
import { useQuery } from '@tanstack/react-query';

function Introduction() {
  const { data } = useQuery({
    queryKey: ['project-information'],
    queryFn: projectInformationApis.getInformation,
    staleTime: 3000,
  });

  const { Title, Value } =
    data?.Item.GioiThieu.Value || ({} as { Title: string; Value: string });

  return (
    <div>
      <h1 className="text-gradient text-center text-base font-bold md:text-xl lg:text-2xl">
        {Title || 'thêm cái giới thiệu trong admin á'}
      </h1>

      <div
        dangerouslySetInnerHTML={{
          __html: Value || '',
        }}
      />
    </div>
  );
}

export default Introduction;
