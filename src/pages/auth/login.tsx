import LoginForm from "@/components/pages/auth/login-form/LoginForm"

const Login = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
        <LoginForm />
    </div>
  )
}

Login.layout = 'empty'

export default Login