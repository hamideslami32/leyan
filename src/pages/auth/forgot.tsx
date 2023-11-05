import ForgotForm from '@/components/pages/auth/forgot-form/ForgotForm';
import NewPasswordForm from '@/components/pages/auth/new-password-form/NewPasswordForm';

const Forgot = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <ForgotForm />
      <NewPasswordForm />
    </div>
  );
};

Forgot.layout = 'empty';

export default Forgot;
