import React from "react"

import { Icons } from "../icons"

export function Header() {
  return (
    <div className="w-full sm:p-6">
      <header className="flex w-full items-center justify-between rounded-xl bg-white p-4 pl-6">
        <Icons.logoIcon className="hidden h-[32px] w-[146px] sm:flex" />
        <Icons.logoSmallIcon className="mr-5 flex size-[32px] sm:hidden" />
        <div className="flex items-center sm:gap-4">
          <div className="flex items-center gap-2 rounded-[8px] bg-[#EFEBFF] px-[27px] py-[11px] text-base font-semibold leading-[150%] text-[#633CFF]">
            <Icons.linkIcon className="size-[20px]" />
            <span className="hidden sm:flex"> Links</span>
          </div>
          <div className="flex items-center gap-2 px-[27px] py-[11px] text-[#737373]">
            <Icons.profileIcon className="size-[20px]" />
            <span className="hidden sm:flex">Profile Details</span>
          </div>
        </div>
        <button className="h-[46px] items-center justify-center rounded-[8px] border border-[#633CFF] px-4 py-[11px] text-base font-semibold text-[#633CFF]">
          <Icons.eyeIcon className="size-[20px] sm:hidden" />
          <span className="hidden sm:flex">Preview</span>
        </button>
      </header>
    </div>
  )
}
