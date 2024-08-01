import { projectInformationApis } from '@/apis';
import { useQuery } from '@tanstack/react-query';

export const useGetInfor = () => {
  const { data: dataInfor } = useQuery({
    queryKey: ['getInfor'],
    queryFn: () => projectInformationApis.getInformation(),
  });

  const localLienHe = dataInfor?.Item.LienHe || ({} as Information['LienHe']);
  const MenuActive = dataInfor?.Item?.Menu || ([] as Information['Menu']);

  return { LienHe: localLienHe, MenuActive };
};
