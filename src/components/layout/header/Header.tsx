import Button from "@/components/shared/ui/button/Button";
import Image from "next/image";

import BasketIcon from "@/assets/icons/basket.svg";
import UserIcon from "@/assets/icons/user.svg";
import SearchBar from "../search-bar/SearchBar";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 grid place-items-center border-b border-gray-300">
      <div className="w-full max-w-screen-xl flex justify-between">
        <div className="flex items-center">
          <Link href="/" className="ml-6 flex items-center">
            <Image
              width="132"
              height="33"
              src={"/logo.svg"}
              alt="logo"
              draggable={false}
            />
          </Link>
          <SearchBar />
        </div>
        <div className="flex gap-4 flex-end">
          <Button variant="outlined">
            <BasketIcon />
            سبد خرید
          </Button>
          <Button>
            <UserIcon />
            ورود یا ثبت‌نام
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
