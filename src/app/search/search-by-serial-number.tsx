'use client';

// import { Diploma } from '@/@types/Diploma';
// import { searchCertificateBySerialNumber } from '@/actions/seach-certificate';
// import Captcha from '@/components/captcha';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter } from '@/components/ui/card';
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { searchBySerialSchema } from '@/types/search-schema';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useMutation, useQuery } from '@tanstack/react-query';
// import { DatePicker, Input, Spin, Table, TableProps } from 'antd';
// import dayjs, { Dayjs } from 'dayjs';
// import { RefreshCcw, Search } from 'lucide-react';
// import { useAction } from 'next-safe-action/hooks';
// import { DetailedHTMLProps, HTMLAttributes } from 'react';
// import { useForm } from 'react-hook-form';

// import {
//   type Captcha as TCaptcha,
//   diplomaVerificationApis,
// } from '../utils/api-requests';

// type FormValues = {
//   year: Dayjs | null;
//   serialNumber: string;
//   captcha: string;
// };

const SearchBySerialNumber = () => {
  // const form = useForm<FormValues>({
  //   resolver: zodResolver(searchBySerialSchema),
  //   defaultValues: {
  //     year: '',
  //     serialNumber: '',
  //     captcha: '',
  //   },
  // });

  // const { data: captchaData, isLoading: loadingCaptcha } = useQuery({
  //   queryKey: ['generate-captcha'],
  //   queryFn: diplomaVerificationApis.generateCaptcha,
  // });

  // const { Token } = captchaData?.Item || ({} as TCaptcha);

  // const {
  //   mutate: searchDiploma,
  //   data,
  //   isPending,
  // } = useMutation({
  //   mutationFn: diplomaVerificationApis.searchDiplomat,
  // });

  // const { execute } = useAction(searchCertificateBySerialNumber);

  // function onSubmit(values: FormValues) {
  //   execute(values);

  //   if (values && values.year) {
  //     searchDiploma({
  //       GraduatedYear: +values.year || dayjs().year(),
  //       CertNumber: values.serialNumber,
  //       Captcha: {
  //         Key: values?.captcha || '',
  //         Token: Token || '',
  //       },
  //     });
  //   }
  // }

  // const columns: TableProps<Diploma>['columns'] = [
  //   {
  //     title: 'STT',
  //     dataIndex: 'STT',
  //     key: 'STT',
  //     render: (_, __, index) => index + 1,
  //     width: 50,
  //   },
  //   {
  //     title: 'Họ và tên',
  //     dataIndex: 'HoTen',
  //     key: 'HoTen',
  //   },
  //   {
  //     title: 'Ngày sinh',
  //     dataIndex: 'NgaySinh',
  //     key: 'NgaySinh',
  //     render: (date) => dayjs(date).format('DD/MM/YYYY'),
  //   },
  //   {
  //     title: 'Nơi sinh',
  //     dataIndex: 'NoiSinh',
  //     key: 'NoiSinh',
  //   },
  //   {
  //     title: 'Giới tính',
  //     dataIndex: 'GioiTinh',
  //     key: 'GioiTinh',
  //   },
  //   {
  //     title: 'Dân tộc',
  //     dataIndex: 'DanToc',
  //     key: 'DanToc',
  //   },
  //   {
  //     title: 'Xếp loại',
  //     dataIndex: 'XepLoaiChu',
  //     key: 'XepLoaiChu',
  //   },
  //   {
  //     title: 'Số hiệu VBCC',
  //     dataIndex: 'SoHieuChungChi',
  //     key: 'SoHieuChungChi',
  //   },
  //   {
  //     title: 'Số hiệu VBCC',
  //     dataIndex: 'SoVaoSoGoc',
  //     key: 'SoVaoSoGoc',
  //   },
  // ];

  return (
    <>
      search by serial number
      {/* <Spin spinning={isPending}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card className="pt-6">
              <CardContent className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Năm tốt nghiệp <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <DatePicker
                          {...field}
                          value={field.value ? dayjs(field.value) : null}
                          className="w-full"
                          onChange={(date, dateString) =>
                            field.onChange(dateString)
                          }
                          picker="year"
                          format="YYYY"
                          placeholder="Năm tốt nghiệp"
                          status={form.formState.errors.year ? 'error' : ''}
                          disabledDate={(current) => current.isAfter(dayjs())}
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="serialNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Số hiệu văn bằng/chứng chỉ{' '}
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Nhập số hiệu văn bằng"
                          type="text"
                          status={
                            form.formState.errors.serialNumber ? 'error' : ''
                          }
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="captcha"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Mã xác thực <span className="text-red-500">*</span>
                      </FormLabel>

                      <div className="flex items-center gap-2">
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Nhập mã xác thực"
                            type="text"
                            status={
                              form.formState.errors.captcha ? 'error' : ''
                            }
                          />
                        </FormControl>

                        <Captcha loading={loadingCaptcha} />
                      </div>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>

              <CardFooter className="flex justify-end">
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    className="bg-slate-400 text-white hover:bg-slate-400/90"
                    onClick={() => form.reset()}
                  >
                    <RefreshCcw className="mr-1 h-4 w-4" /> Làm mới
                  </Button>

                  <Button type="submit">
                    <Search className="mr-1 h-4 w-4" /> Tra cứu
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </Spin> */}
      {/* result zone */}
      {/* {!!data?.Item?.length && (
        <>
          <p className="text-gradient mt-3 italic">
            Tìm thấy <span>{data?.Item?.length}</span> kết quả trùng khớp
          </p>

          <Table
            columns={columns}
            pagination={false}
            dataSource={data?.Item || []}
            rowKey="Id"
            className="custom-table mt-3"
            scroll={{ x: 1200 }}
            bordered
            components={{
              header: {
                wrapper: (
                  props: DetailedHTMLProps<
                    HTMLAttributes<HTMLTableSectionElement>,
                    HTMLTableSectionElement
                  >,
                ) => <thead {...props} className="gradient-thead" />,
              },
            }}
          />
        </>
      )} */}
    </>
  );
};

export default SearchBySerialNumber;
