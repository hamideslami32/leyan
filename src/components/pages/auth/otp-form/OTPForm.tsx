import Button from "@/components/shared/ui/button/Button";
import Textfield from "@/components/shared/ui/textfield/Textfield";
import Link from "next/link";

import ArrowRightIcon from "@/assets/icons/arrow-right.svg";

const OTPForm = () => {
  return (
    <div className="w-[400px] border p-4">
      <div className="relative">
        <div className="text-3xl font-bold text-center mt-4">
          پالیـــزبــــان
        </div>
        <Link className="absolute right-2 top-2" href="/">
          <ArrowRightIcon class />
        </Link>
      </div>
      <div className="mt-16">
        <div className="text-lg font-bold mb-2">کد ورود را وارد کنید</div>
            <p className="mb-10 text-sm">برای ورود یا ثبت نام شماره موبایل خود را وارد کنید.</p>

        <Textfield placeholder="کد را وارد کنید" />
        <div className="text-sm flex flex-col gap-3 mt-6">
          <Link href="/">
            ورود با کد یک بار مصرف
          </Link>
          <div className="my-4 text-gray-400 text-center">۲:۰۰ مانده تا دریافت مجدد کد ورود</div>
        </div>
        <Button className="w-full bg-black text-white my-6">ورود</Button>
      </div>
    </div>
  );
};

export default OTPForm;
