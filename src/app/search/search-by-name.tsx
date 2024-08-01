'use client';

// import { searchCertificateByName } from '@/actions/seach-certificate';
// import Captcha from '@/components/captcha';
// import { Button } from '@/components/ui/button';
// import { Calendar } from '@/components/ui/calendar';
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
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { randomCaptcha } from '@/lib/captcha';
// import { cn } from '@/lib/utils';
// import { searchByNameSchema } from '@/types/search-schema';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { format } from 'date-fns';
// import { Calendar as CalendarIcon, RefreshCcw, Search } from 'lucide-react';
// import { useAction } from 'next-safe-action/hooks';
// import { useRef, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import * as z from 'zod';

// const initialCaptcha = randomCaptcha();

const SearchByName = () => {
  // const captchaRef = useRef<HTMLInputElement>(null);

  // const [captcha, setCaptcha] = useState<string>(initialCaptcha);

  // const form = useForm<z.infer<typeof searchByNameSchema>>({
  //   resolver: zodResolver(searchByNameSchema),
  //   defaultValues: {
  //     year: '',
  //     school: '',
  //     name: '',
  //     birthday: new Date(),
  //     captcha: '',
  //     type: 'relative',
  //   },
  // });

  // const { execute } = useAction(searchCertificateByName);

  // function onSubmit(values: z.infer<typeof searchByNameSchema>) {
  //   if (values.captcha !== captcha && captchaRef.current) {
  //     captchaRef.current.focus();
  //     return form.setError('captcha', { message: 'Mã xác thực không đúng' });
  //   }

  //   execute(values);
  // }

  return (
    <div>search by name</div>
    // <Form {...form}>
    //   <form onSubmit={form.handleSubmit(onSubmit)}>
    //     <Card className="pt-6">
    //       <CardContent className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
    //         <FormField
    //           control={form.control}
    //           name="year"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>
    //                 Năm tốt nghiệp <span className="text-red-500">*</span>
    //               </FormLabel>
    //               <FormControl>
    //                 <Input
    //                   {...field}
    //                   placeholder="Nhập năm tốt nghiệp"
    //                   type="text"
    //                 />
    //               </FormControl>
    //               <FormDescription />
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />
    //         <FormField
    //           control={form.control}
    //           name="school"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>
    //                 Trường <span className="text-red-500">*</span>
    //               </FormLabel>
    //               <FormControl>
    //                 <Select
    //                   onValueChange={field.onChange}
    //                   defaultValue={field.value}
    //                 >
    //                   <SelectTrigger className="">
    //                     <SelectValue placeholder="Chọn trường" />
    //                   </SelectTrigger>
    //                   <SelectContent>
    //                     <SelectItem value="apple">Apple</SelectItem>
    //                     <SelectItem value="banana">Banana</SelectItem>
    //                     <SelectItem value="blueberry">Blueberry</SelectItem>
    //                     <SelectItem value="grapes">Grapes</SelectItem>
    //                     <SelectItem value="pineapple">Pineapple</SelectItem>
    //                   </SelectContent>
    //                 </Select>
    //               </FormControl>
    //               <FormDescription />
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />
    //         <FormField
    //           control={form.control}
    //           name="name"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>
    //                 Họ và tên <span className="text-red-500">*</span>
    //               </FormLabel>
    //               <div className="flex items-center gap-2">
    //                 <FormControl>
    //                   <Input
    //                     {...field}
    //                     ref={captchaRef}
    //                     placeholder="Nhập Họ và tên"
    //                     type="text"
    //                   />
    //                 </FormControl>
    //               </div>
    //               <FormDescription />
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />
    //         <FormField
    //           control={form.control}
    //           name="birthday"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>
    //                 Ngày sinh <span className="text-red-500">*</span>
    //               </FormLabel>
    //               <div className="flex items-center gap-2">
    //                 <FormControl>
    //                   <Popover>
    //                     <PopoverTrigger asChild>
    //                       <Button
    //                         variant={'outline'}
    //                         className={cn(
    //                           'flex w-full justify-between text-left font-normal',
    //                           !field.value && 'text-muted-foreground',
    //                         )}
    //                       >
    //                         {field.value ? (
    //                           format(field.value, 'dd/MM/yyyy')
    //                         ) : (
    //                           <span>Nhập ngày sinh</span>
    //                         )}
    //                         <CalendarIcon className="mr-2 h-4 w-4" />
    //                       </Button>
    //                     </PopoverTrigger>
    //                     <PopoverContent className="w-auto p-0">
    //                       <Calendar
    //                         captionLayout="dropdown-buttons"
    //                         mode="single"
    //                         fromYear={1930}
    //                         toYear={new Date().getFullYear()}
    //                         selected={field.value}
    //                         onSelect={field.onChange}
    //                         initialFocus
    //                       />
    //                     </PopoverContent>
    //                   </Popover>
    //                 </FormControl>
    //               </div>
    //               <FormDescription />
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />
    //         <FormField
    //           control={form.control}
    //           name="captcha"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>
    //                 Mã xác thực <span className="text-red-500">*</span>
    //               </FormLabel>
    //               <div className="flex items-center gap-2">
    //                 <FormControl>
    //                   <Input
    //                     {...field}
    //                     ref={captchaRef}
    //                     placeholder="Nhập mã xác thực"
    //                     type="text"
    //                   />
    //                 </FormControl>
    //                 <Captcha
    //                   text={captcha}
    //                   onRefresh={() => setCaptcha(randomCaptcha())}
    //                 />
    //               </div>
    //               <FormDescription />
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />
    //       </CardContent>
    //       <CardFooter className="flex justify-between">
    //         <FormField
    //           control={form.control}
    //           name="type"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormControl>
    //                 <RadioGroup
    //                   onValueChange={field.onChange}
    //                   defaultValue={field.value}
    //                   className="flex gap-4"
    //                 >
    //                   <div className="flex items-center space-x-2">
    //                     <RadioGroupItem value="relative" id="relative" />
    //                     <Label htmlFor="relative">Tìm không dấu</Label>
    //                   </div>
    //                   <div className="flex items-center space-x-2">
    //                     <RadioGroupItem value="absolute" id="absolute" />
    //                     <Label htmlFor="absolute">Tìm chính xác</Label>
    //                   </div>
    //                 </RadioGroup>
    //               </FormControl>
    //             </FormItem>
    //           )}
    //         />
    //         <div className="flex items-center gap-4">
    //           <Button
    //             type="button"
    //             className="bg-slate-400 text-white hover:bg-slate-400/90"
    //             onClick={() =>
    //               form.reset({
    //                 year: '',
    //                 school: '',
    //                 name: '',
    //                 birthday: new Date(),
    //                 captcha: '',
    //                 type: 'relative',
    //               })
    //             }
    //           >
    //             <RefreshCcw className="mr-1 h-4 w-4" /> Làm mới
    //           </Button>
    //           <Button type="submit">
    //             <Search className="mr-1 h-4 w-4" /> Tra cứu
    //           </Button>
    //         </div>
    //       </CardFooter>
    //     </Card>
    //   </form>
    // </Form>
  );
};

export default SearchByName;
