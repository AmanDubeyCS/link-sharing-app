"use client"

import React, { useState } from "react"
import { useStore } from "@/store/listdataStore"

import { DnDContainer } from "./DnDContainer"

export function LinksAddContainer() {
  const [items, setItems] = useState<
    { id: string; link: string; platform: string }[]
  >([])
  const [errorMessages, setErrorMessages] = useState<any>([])

  const platformUrlMap: { [key: string]: string } = {
    GitHub: "https://github.com/",
    YouTube: "https://youtube.com/",
    Linkdin: "https://linkedin.com/",
    Facebook: "https://facebook.com/",
    "Frontend Mentor": "https://frontendmentor.io/",
  }

  const validateLink = (link: string, platform: string): string => {
    const expectedPrefix = platformUrlMap[platform]

    if (expectedPrefix && !link.startsWith(expectedPrefix)) {
      return "wrong URL"
    }

    return ""
  }

  const handleSave = () => {
    const newErrorMessages: { [id: string]: string } = {}

    items.forEach((item) => {
      let error = ""
      if (!item.link.trim()) {
        error = "empty link"
      } else {
        error = validateLink(item.link, item.platform)
      }

      if (error) {
        newErrorMessages[item.id] = error
      }
    })

    if (Object.keys(newErrorMessages).length > 0) {
      setErrorMessages(newErrorMessages)
    } else {
      setErrorMessages([])
      const links = items.map((item) => ({
        id: item.id,
        link: item.link,
        platform: item.platform,
      }))
      // console.log(links)
      useStore.getState().setLinks(links)
    }
  }

  return (
    <div className="flex size-full flex-1 flex-col gap-[2px]">
      <div className="flex size-full flex-col gap-10 rounded-t-xl bg-white p-6 sm:p-10">
        <div className="flex flex-col gap-2">
          <p className="font-bold-sans text-[24px] leading-[150%] text-[#333333] sm:text-[32px]">
            Customize your links
          </p>
          <p className="font-regular-sans text-base leading-[150%] text-[#737373]">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-center">
            <DnDContainer
              items={items}
              setItems={setItems}
              errorMessages={errorMessages}
            />
          </div>
        </div>
      </div>
      <div className="flex h-[96px] w-full justify-end rounded-b-xl bg-white px-10 py-6">
        <button
          onClick={handleSave}
          className="font-semibold-sans h-[46px] w-full rounded-lg bg-[#633CFF] text-base leading-[150%] text-white disabled:bg-[#EFEBFF] sm:w-[91px]"
          disabled={items.length === 0}
        >
          Save
        </button>
      </div>
    </div>
  )
}
