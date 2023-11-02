import Image from "next/image";
import Button from "@/components/shared/ui/button/Button";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import ProductCard from "@/components/shared/product-card/ProductCard";

const BestSellers = () => {
  return (
    <div className="my-8 relative max-w-[1200px] overflow-x-hidden">
      <Image
        width="1200"
        height="320"
        src="/images/home/best-sellers-bg.png"
        alt="best-sellers-bg"
        className="rounded-lg inline"
      />
      <div className="absolute right-0 top-0 w-full h-full flex items-center mr-16">
        <div>
          <h2 className="text-3xl text-center text-white font-bold mb-3">
            پـــــرفــــــــروش
            <br /> ‌تـریـــــــن‌هــای
            <br /> اخــیــــــــــــــــــــــر
          </h2>
          <Button>
            <span className="ml-2">مشاهده همه کالاها</span>
            <ArrowLeftIcon />
          </Button>
        </div>
        <div className="flex-1 flex gap-4 items-center mr-10 overflow-hidden">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
