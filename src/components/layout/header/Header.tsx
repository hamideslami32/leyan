import Button from "@/components/shared/ui/button/Button";
import Image from "next/image";

import BasketIcon from "@/assets/icons/basket.svg";
import UserIcon from "@/assets/icons/user.svg";
import SearchBar from "./SearchBar";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 grid place-items-center">
      <div className="w-full max-w-screen-xl flex justify-between">
        <Link href="/" className="flex items-center">
          <Image
            width="132"
            height="33"
            src={"/logo.svg"}
            alt="logo"
            draggable={false}
          />
        </Link>
        <SearchBar />
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
