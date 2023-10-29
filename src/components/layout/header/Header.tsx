import Button from "@/components/shared/ui/button/Button";
import Image from "next/image";

import BasketIcon from "@/assets/icons/basket.svg";
import UserIcon from "@/assets/icons/user.svg";
import SearchBar from "../search-bar/SearchBar";
import Link from "next/link";
import { useWindowSize } from "@/utils/hooks/useWindowSize";

const Header = () => {
  const {width} = useWindowSize()
  return (
    <header className="py-4 border-b border-gray-300 px-2 md:px-0">
      <div className="flex justify-between mx-auto w-full max-w-screen-xl">
        <div className="flex flex-1 items-center">
          {width > 768 && <Link href="/" className="ml-6 flex items-center">
            <Image
              width="132"
              height="33"
              src={"/logo.svg"}
              alt="logo"
              draggable={false}
            />
          </Link>}
          <SearchBar />
        </div>
        {width > 768 && <div className="flex gap-4 flex-end">
          <Button variant="outlined">
            <BasketIcon />
            سبد خرید
          </Button>
          <Button>
            <UserIcon />
            ورود یا ثبت‌نام
          </Button>
        </div>}
      </div>
    </header>
  );
};

export default Header;
