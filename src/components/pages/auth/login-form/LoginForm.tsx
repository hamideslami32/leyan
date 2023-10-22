import Button from "@/components/shared/ui/button/Button"
import Textfield from "@/components/shared/ui/textfield/Textfield"
import Link from "next/link"

const LoginForm = () => {
  return (
    <div className="w-[400px] h-[423px] border p-4">
        <span className="text-3xl font-bold">پالیـــزبــــان</span>
        <div className="mt-16">
            <span>ورود یا ثبت‌نام</span>
            <p>برای ورود یا ثبت نام شماره موبایل خود را وارد کنید.</p>
            <Textfield placeholder="شماره موبایل خود را وارد کنید" />
            <Button className="w-full bg-black text-white">ادامه</Button>
            <p>
                <span>ورود یا ثبت‌نام شما به منظور پذیرش <Link href='/'>شرایط و قوانین پالیزبان</Link> است</span>
            </p>
        </div>
    </div>
  )
}

export default LoginForm