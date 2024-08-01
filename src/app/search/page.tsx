import MaxWidthWrapper from '@/components/max-width-wrapper';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

// import SearchByCitizenId from './search-by-citizen-id';
// import SearchByName from './search-by-name';
// import SearchBySerialNumber from './search-by-serial-number';

export default function Search() {
  return (
    <section>
      <MaxWidthWrapper className="pb-20 pt-8">
        <div className="flex items-center gap-4">
          <Image
            src="/search.png"
            alt="search icon"
            // className="h-12 w-12"
            width={48}
            height={48}
          />

          <div className="bg-box w-full rounded-md px-4 py-2">
            <h1 className="text-gradient text-2xl font-bold uppercase">
              Tra cứu thông tin văn bằng chứng chỉ
            </h1>
          </div>
        </div>

        {/* <Tabs defaultValue="serial-number">
          <TabsList className="my-4 flex items-center justify-start gap-2 bg-slate-50 data-[state=active]:font-bold">
            <TabsTrigger
              value="serial-number"
              className="data-[state=active]:bg-box bg-white shadow data-[state=active]:font-bold data-[state=active]:text-primary"
            >
              Tra cứu theo số hiệu
            </TabsTrigger>
            <TabsTrigger
              value="name"
              className="data-[state=active]:bg-box bg-white shadow data-[state=active]:font-bold data-[state=active]:text-primary"
            >
              Tra cứu theo tên
            </TabsTrigger>
            <TabsTrigger
              value="citizen-id"
              className="data-[state=active]:bg-box bg-white shadow data-[state=active]:font-bold data-[state=active]:text-primary"
            >
              Tra cứu theo CMND hoặc CCCD
            </TabsTrigger>
          </TabsList>

          <TabsContent value="serial-number">
            <SearchBySerialNumber />
          </TabsContent>

          <TabsContent value="name">
            <SearchByName />
          </TabsContent>

          <TabsContent value="citizen-id">
            <SearchByCitizenId />
          </TabsContent>
        </Tabs> */}
      </MaxWidthWrapper>
    </section>
  );
}
