import Link from "next/link";

const linksData = {
  پالیزبان: [
    {
      title: "وبلاگ پالیزبان",
      link: "/",
    },
    {
      title: "عضویت در پنل فروشندگان",
      link: "/",
    },
    {
      title: "فرصت های شغلی",
      link: "/",
    },
    {
      title: "درباره پالیزبان",
      link: "/",
    },
    {
      title: "تماس با پالیزبان",
      link: "/",
    },
  ],
  "خدمات مشتریان": [
    {
      title: "پرسش‌های متداول",
      link: "/",
    },
    {
      title: "قوانین و مقررات",
      link: "/",
    },
    {
      title: "ضمانت کالا",
      link: "/",
    },
    {
      title: "گزارش تخلف فروشنده",
      link: "/",
    },
  ],
  "راهنمای خرید": [
    {
      title: "نحوه ثبت سفارش",
      link: "/",
    },
    {
      title: "رویه ارسال سفارشات",
      link: "/",
    },
    {
      title: "شیوه های پرداخت",
      link: "/",
    },
  ],
};

const FooterLinks = () => {
  return (
    <div className="flex-1 flex">
      {Object.keys(linksData).map((key, index) => {
        const list = (linksData as Record<string, any>)[key];
        return (
          <div key={index} className="flex flex-1 flex-col gap-4">
            <div className="font-bold">{key}</div>
            <ul className="flex flex-col">
              {list.map((item: any, index: number) => (
                <Link href={item.link} key={index} className="inline-block">
                  <li className="text-sm text-gray-600 mb-3">{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default FooterLinks;
