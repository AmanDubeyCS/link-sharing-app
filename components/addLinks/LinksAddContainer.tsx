import React from "react"

import { Icons } from "../icons"

export function LinksAddContainer() {
  return (
    <div className="flex w-full flex-1 flex-col gap-[2px]">
      <div className="flex w-full flex-1 flex-col gap-10 rounded-t-xl bg-white p-10">
        <div className="flex flex-col gap-2">
          <p className="font-bold-sans text-[32px] leading-[150%] text-[#333333]">
            Customize your links
          </p>
          <p className="font-regular-sans text-base leading-[150%] text-[#737373]">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <button className="font-semibold-sans h-[46px] w-full rounded-lg border border-[#633CFF] text-base leading-[150%] text-[#633CFF]">
            + Add new link
          </button>
          <div className="flex items-center justify-center p-5">
            <div className="flex flex-col items-center justify-center gap-10">
              <Icons.emptyLinksContainer />
              <div className="grid max-w-[488px] gap-6 text-center">
                <p className="font-bold-sans text-[32px] leading-[150%] text-[#333333]">
                  Let’s get you started
                </p>
                <p className="font-regular-sans text-base leading-[150%] text-[#737373]">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[96px] w-full justify-end rounded-b-xl bg-white px-10 py-6">
        <button className="font-semibold-sans h-[48px] w-[91px] rounded-lg bg-[#EFEBFF] text-base leading-[150%] text-white">
          save
        </button>
      </div>
    </div>
  )
}
