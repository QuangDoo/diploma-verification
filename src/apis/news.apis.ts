import http from '@/lib/http';

type NewsData = { ListTinTuc: News[]; DateTimeFetch: string };

const CONTROLLER = 'CongTraCuu';

const newsApis = {
  getNews: () =>
    http<NewsData>(`${CONTROLLER}/CTC_GetListTinTuc`, {
      cache: 'no-cache',
    }),
  getNew: (id: string) =>
    http<News>(`${CONTROLLER}/CTC_GetTinTucById?id=${id}`),
};

export default newsApis;
