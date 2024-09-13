import React from "react"

import { Icons } from "../icons"

export function Header() {
  return (
    <div className="w-full p-6">
      <header className="flex w-full items-center justify-between rounded-xl bg-white p-4 pl-6">
        <Icons.logoIcon className="h-[32px] w-[146px]" />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-[8px] bg-[#EFEBFF] px-[27px] py-[11px] text-base font-semibold leading-[150%] text-[#633CFF]">
            <Icons.linkIcon className="size-[20px]" />
            Links
          </div>
          <div className="flex items-center gap-2 px-[27px] py-[11px] text-[#737373]">
            <Icons.profileIcon className="size-[20px]" />
            Profile Details
          </div>
        </div>
        <button className="h-[46px] w-[114px] items-center justify-center rounded-[8px] border border-[#633CFF] text-base font-semibold text-[#633CFF]">
          Preview
        </button>
      </header>
    </div>
  )
}
