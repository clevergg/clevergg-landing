'use client'

import { useEffect } from "react"
import {HeaderLogo} from './components/HeaderLogo'
import { HeaderNav } from './components/HeaderNav'
import { useHideHeader } from "./hooks/useHideHeader"


export function Header() {
  const isHiding = useHideHeader()

  useEffect(() => {
    if (isHiding) {
    }
  }, [isHiding,])
  return (
    <header className="fixed flex items-center justify-center  rounded-full mt-2 px-3 py-4  max-[769px]:flex max-[769px]:justify-center z-10 min-w-[360px] ">
        <div className={`w-fit gap-10 bg-[#211F23] md:w-full flex justify-center md:justify-between duration-300 transition-transform ease-in-out bg-gray-dark p-5 rounded-[33px] ${
          isHiding ? "-translate-y-[140%]" : "translate-y-0"
        }`}>
          <HeaderLogo/>
          <HeaderNav/>
        </div>
    </header>
  );
}
