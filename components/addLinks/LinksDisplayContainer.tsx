"use client"

import React from "react"
import Link from "next/link"
import { useStore } from "@/store/listdataStore"

import { Icons } from "../icons"

export function LinksDisplayContainer() {
  const { links } = useStore()

  const getBackgroundColor = (platform: string) => {
    switch (platform) {
      case "GitHub":
        return "#1A1A1A"
      case "YouTube":
        return "#EE3939"
      case "Linkdin":
        return "#2D68FF"
      case "Facebook":
        return "#1877F2"
      default:
        return "#ccc"
    }
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "GitHub":
        return <Icons.githubIcon className="size-4" />
      case "YouTube":
        return <Icons.youtubeIcon className="size-4" />
      case "Linkdin":
        return <Icons.linkdinIcon className="size-4" />
      case "Facebook":
        return <Icons.facebookIcon className="size-4" />
      case "Frontend Mentor":
        return <Icons.frontendMentorIcon className="size-4" />
      default:
        return null
    }
  }

  return (
    <div className="hidden w-full max-w-[560px] items-center justify-center rounded-xl bg-white lg:flex">
      <div className="relative">
        <Icons.phoneMockUp />
        <div className="scrollbar-none absolute bottom-[53px] left-[34px] flex h-[300px] flex-col gap-5 overflow-y-scroll text-white">
          {links.map((link) => (
            <Link
              key={link.id}
              target="_blank"
              href={link.link}
              className="flex h-[44px] w-[237px] shrink-0 items-center gap-2 rounded-lg px-4 py-[11px]"
              style={{
                backgroundColor: getBackgroundColor(link.platform),
              }}
            >
              {getPlatformIcon(link.platform)}
              <p className="font-regular-sans flex flex-1 text-sm leading-[150%]">
                {link.platform}
              </p>
              <Icons.arrowRightIcon className="size-4" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
