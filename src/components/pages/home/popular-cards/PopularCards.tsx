import Link from "next/link"
import PopularCard from "./PopularCard"

const popularItems = [
  {
    link: '/',
    imageUrl: "/images/home/popular/1.png"
  },
  {
    link: '/',
    imageUrl: "/images/home/popular/2.png"
  },
  {
    link: '/',
    imageUrl: "/images/home/popular/3.png"
  },
  {
    link: '/',
    imageUrl: "/images/home/popular/4.png"
  },
]

const PopularCards = () => {
  return (
    <div className="flex gap-3">
      {popularItems.map((item, index) => <Link key={index} href={item.link}>
        <PopularCard source={item.imageUrl} />
      </Link>)}
    </div>
  )
}

export default PopularCards