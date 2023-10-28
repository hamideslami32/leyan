import OTPForm from "@/components/pages/auth/otp-form/OTPForm"
import PasswordForm from "@/components/pages/auth/password-form/PasswordForm"
import PhoneNumberForm from "@/components/pages/auth/phone-number-form/PhoneNumberForm"

const Login = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
        <PhoneNumberForm />
        <PasswordForm />
        <OTPForm />
    </div>
  )
}

Login.layout = 'empty'

export default Login