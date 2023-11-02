// eslint-disable-next-line @next/next/no-img-element
import StarFilledIcon from "@/assets/icons/star-filled.svg";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="w-[217px] h-[256px] bg-white rounded-md flex flex-col">
      <div className="h-[55%]">
        <img
          className="w-full h-full object-cover roundend-t-md object-scale-down"
          alt="product-1"
          src="/images/product-sample.png"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div className="text-sm">سری آبپاش رونیکس مدل RH-4017</div>
        {/* <div className="flex justify-between items-center">
          <span className="text-red-500">تنها ۲ عدد در انبار باقی مانده</span>
          <span>
            <span className="ml-1">۴.۵</span>
            <StarFilledIcon />
          </span>
        </div> */}
        <div className="flex justify-between">
            {/* TODO // change bg-red-500 and add color pallete */}
            <span className="h-6 bg-red-500 px-3 py-1 rounded-xl text-xs text-white">۱۲٪</span>
            <div className="flex flex-col">
                <span className="text-sm"><span className="text-xl ml-1 font-bold">۲۸,۰۰۰</span>تومان</span>
                <span className="text-gray-600 line-through">۳۵,۵۰۰</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
