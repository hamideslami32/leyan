import TwitterIcon from "@/assets/icons/twitter.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import Link from "next/link";

const FooterContact = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 mr-16">
      <div className="font-bold text-lg">
        هفت روز هفته، میزبان صدای گرم شما هستیم!
      </div>
      <div className="text-sm">
        <span className="text-gray-600 ml-2">تلفن:</span>
        <span className="font-bold">۰۲۱ - ۵۱۲۰۰۸۹۳</span>
      </div>
      <div className="text-sm">
        <span className="text-gray-600 ml-2">ایمیل:</span>
        <span className="font-bold">info@agribazzar.ir</span>
      </div>
      <div className="flex gap-1">
        <Link
          href="/"
          className="border border-gray-300 w-10 h-10 flex justify-center items-center"
        >
          <TwitterIcon />
        </Link>
        <Link
          href="/"
          className="border border-gray-300 w-10 h-10 flex justify-center items-center"
        >
          <LinkedinIcon />
        </Link>
        <Link
          href="/"
          className="border border-gray-300 w-10 h-10 flex justify-center items-center"
        >
          <InstagramIcon />
        </Link>
        <Link
          href="/"
          className="border border-gray-300 w-10 h-10 flex justify-center items-center"
        >
          <YoutubeIcon />
        </Link>
      </div>
    </div>
  );
};

export default FooterContact;
