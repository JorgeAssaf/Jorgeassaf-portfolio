import { MainNavItem } from "@/app/types/site"
import { FC } from "react"
import { Icons } from "../icons"
import { siteConfig } from "@/config/site"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
interface MainNavProps {
  items?: MainNavItem[]
}
const MainNav: FC<MainNavProps> = ({ items }) => {
  return (
    <>
      <div className="hidden h-20 items-center md:flex justify-between">
        <Link
          aria-label="Home"
          href="/"
          className="hidden items-center space-x-2 md:flex"
        >

          <p className="hidden text-2xl font-bold md:inline-block">
            JA<span className="text-blue-500">.</span>
          </p>
        </Link>



        <div className="flex gap-6">
          {items?.map((item) => (

            <Link
              key={item.label}
              href={`${item.href}`}
              className="flex items-center space-x-2 text-base hover:text-blue-500 transition-colors font-medium"
            >
              <span>{item.title}</span>
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </>

  )
}

export default MainNav