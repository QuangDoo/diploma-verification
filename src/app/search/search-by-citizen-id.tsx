'use client';

// import { searchCertificateByCitizenId } from '@/actions/seach-certificate';
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
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { randomCaptcha } from '@/lib/captcha';
// import { searchByCitizenIdSchema } from '@/types/search-schema';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { RefreshCcw, Search } from 'lucide-react';
// import { useAction } from 'next-safe-action/hooks';
// import { useRef, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import * as z from 'zod';

// const initialCaptcha = randomCaptcha();

const SearchByCitizenId = () => {
  // const captchaRef = useRef<HTMLInputElement>(null);
  // const [captcha, setCaptcha] = useState<string>(initialCaptcha);

  // const form = useForm<z.infer<typeof searchByCitizenIdSchema>>({
  //   resolver: zodResolver(searchByCitizenIdSchema),
  //   defaultValues: {
  //     year: '',
  //     citizenId: '',
  //     captcha: '',
  //     type: 'relative',
  //   },
  // });

  // const { execute } = useAction(searchCertificateByCitizenId);

  // function onSubmit(values: z.infer<typeof searchByCitizenIdSchema>) {
  //   if (values.captcha !== captcha && captchaRef.current) {
  //     captchaRef.current.focus();
  //     return form.setError('captcha', { message: 'Mã xác thực không đúng' });
  //   }

  //   execute(values);
  // }

  return (
    <div>search by citizen id</div>
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
    //           name="citizenId"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>
    //                 CMND/CCCD <span className="text-red-500">*</span>
    //               </FormLabel>
    //               <FormControl>
    //                 <Input
    //                   {...field}
    //                   placeholder="Nhập CMND/CCCD"
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
    //                 citizenId: '',
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

export default SearchByCitizenId;
