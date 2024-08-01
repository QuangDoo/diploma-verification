import http from '@/lib/http';

const CONTROLLER = 'CongTraCuu';

const projectInformationApis = {
  getInformation: () => http<Information>(`${CONTROLLER}/CTC_GetInfo`),
  getNumberOfAccess: () => http<number>(`${CONTROLLER}/CountSoLuongTruyCap`),
};

export default projectInformationApis;
