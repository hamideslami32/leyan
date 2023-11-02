import Link from "next/link"
import { ReactNode } from "react"
import SwiperCarousel from "../swiper/Swiper"

interface CustomCarouselProps {
    title: ReactNode,
    link: string,
    data: any[]
}

const CustomCarousel = (props: CustomCarouselProps) => {
    const {link, title, data} = props
  return (
    <div className="relative my-16">
        <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-lg">{title}</span>
            <Link href={link} className="text-blue-500 text-sm">مشاهده همه</Link>
        </div>
        <SwiperCarousel data={data} radius="md"  />
    </div>
  )
}

export default CustomCarousel