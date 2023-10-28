import Button from "@/components/shared/ui/button/Button";
import Image from "next/image";

import BasketIcon from "@/assets/icons/basket.svg";
import UserIcon from "@/assets/icons/user.svg";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="py-4 grid place-items-center">
      <div className="w-full max-w-screen-xl flex justify-between">
        <Image width="132" height="33" src={"/logo.svg"} alt="logo" draggable={false} />
        <SearchBar />
        <div className="flex gap-4 flex-end">
        <Button variant="outlined">
          <BasketIcon />
          سبد خرید
        </Button>
        <Button className="bg-blck color-white">
          <UserIcon />
          ورود یا ثبت‌نام
        </Button>

        </div>
      </div>
    </header>
  );
};

export default Header;
