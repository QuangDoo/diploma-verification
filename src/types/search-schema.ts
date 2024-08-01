import * as z from 'zod';

export const searchBySerialSchema = z.object({
  year: z
    .string()
    .min(1, { message: 'Năm tốt nghiệp không được để trống' })
    .refine(
      (year) => {
        const yearNumber = Number(year);
        return (
          !Number.isNaN(yearNumber) && yearNumber >= 1000 && yearNumber <= 9999
        );
      },
      {
        message: 'Năm tốt nghiệp không hợp lệ',
      },
    ),
  serialNumber: z
    .string()
    .min(1, { message: 'Số hiệu văn bằng/chứng chỉ không được để trống' }),
  captcha: z.string().min(1, { message: 'Mã xác thực không được để trống' }),
});

export const searchByNameSchema = z.object({
  year: z
    .string()
    .min(1, { message: 'Năm tốt nghiệp không được để trống' })
    .refine(
      (year) => {
        const yearNumber = Number(year);
        return (
          !Number.isNaN(yearNumber) && yearNumber >= 1000 && yearNumber <= 9999
        );
      },
      {
        message: 'Năm tốt nghiệp không hợp lệ',
      },
    ),
  school: z.string().min(1, { message: 'Trường không được để trống' }),
  name: z.string().min(1, { message: 'Mã xác thực không được để trống' }),
  birthday: z.date({ message: 'Ngày sinh không được để trống' }),
  captcha: z.string().min(1, { message: 'Mã xác thực không được để trống' }),
  type: z.enum(['relative', 'absolute']),
});

export const searchByCitizenIdSchema = z.object({
  year: z
    .string()
    .min(1, { message: 'Năm tốt nghiệp không được để trống' })
    .refine(
      (year) => {
        const yearNumber = Number(year);
        return (
          !Number.isNaN(yearNumber) && yearNumber >= 1000 && yearNumber <= 9999
        );
      },
      {
        message: 'Năm tốt nghiệp không hợp lệ',
      },
    ),
  citizenId: z.string().min(1, { message: 'CMND/CCCD không được để trống' }),
  captcha: z.string().min(1, { message: 'Mã xác thực không được để trống' }),
  type: z.enum(['relative', 'absolute']),
});
