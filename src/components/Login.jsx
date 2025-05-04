  import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "../images.png";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0c2d48] p-4">
      <img src={logo} alt="لوگو" className="w-32 h-32 mb-4" />
      <h1 className="text-white text-2xl font-bold mb-6">سامانه آنلاین عملیات نگهداری پیشگیرانه</h1>
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">ورود</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">نام کاربری</Label>
                <Input id="username" placeholder="نام کاربری خود را وارد کنید" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">رمز عبور</Label>
                <Input id="password" type="password" placeholder="رمز عبور خود را وارد کنید" />
              </div>
              <Button type="submit" className="w-full bg-[#145da0] hover:bg-[#0c2d48] text-white">
                ورود
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}


تغییرات اعمال شد:

لوگو از مسیر src/images.png بارگذاری می‌شود.

عنوان "سامانه آنلاین عملیات نگهداری پیشگیرانه" زیر لوگو قرار گرفت.

پس‌زمینه تیره و دکمه آبی متناسب با لوگو انتخاب شد.


اکنون می‌توانی صفحه را روی مرورگر باز کنی و ببینی. آیا مایل هستی مرحله بعدی طراحی را انجام دهیم؟

