import Button from "@/components/shared/ui/button/Button"
import Textfield from "@/components/shared/ui/textfield/Textfield"
import Link from "next/link"

const PhoneNumberForm = () => {
  return (
    <div className="w-[400px] h-[423px] border p-4">
        <div className="text-3xl font-bold text-center mt-4">پالیـــزبــــان</div>
        <div className="mt-16">
            <div className="text-lg font-bold mb-2">ورود یا ثبت‌نام</div>
            <p className="mb-10 text-sm">برای ورود یا ثبت نام شماره موبایل خود را وارد کنید.</p>
            <Textfield placeholder="شماره موبایل خود را وارد کنید" />
            <Button className="w-full bg-black text-white my-6">ادامه</Button>
            <p className="text-sm">
                <span>ورود یا ثبت‌نام شما به منظور پذیرش <Link href='/' className="text-blue-500">شرایط و قوانین پالیزبان</Link> است</span>
            </p>
        </div>
    </div>
  )
}

export default PhoneNumberForm