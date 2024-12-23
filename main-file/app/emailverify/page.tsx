import EmailVerify from '@/component/emailverify/emailverify';
import { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: "Verify E-mail",
  description: "Developed by Vlack Solutions",
};

const Page = () => {
  return (
    <div>
      <EmailVerify />
    </div>
  );
};

export default Page;
