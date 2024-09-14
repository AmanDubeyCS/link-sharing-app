import React from "react"

import { cn } from "@/lib/utils"

import { Icons } from "../icons"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

interface AddLinkProps {
  id: string
  link: string
  platform: string
  onLinkChange: (_id: string, _value: string) => void
  onPlatformChange: (_id: string, _value: string) => void
  removeItem: (_id: string) => void
  dragHandleProps: any
  errorMessages: any
}

export function AddLink({
  id,
  link,
  platform,
  onLinkChange,
  onPlatformChange,
  dragHandleProps,
  removeItem,
  errorMessages,
}: AddLinkProps) {
  console.log(errorMessages)
  const platformsList = [
    {
      platform: "GitHub",
      icon: <Icons.githubIcon className="size-4" />,
    },
    {
      platform: "YouTube",
      icon: <Icons.youtubeIcon className="size-4" />,
    },
    {
      platform: "Linkdin",
      icon: <Icons.linkdinIcon className="size-4" />,
    },
    {
      platform: "Facebook",
      icon: <Icons.facebookIcon className="size-4" />,
    },
    {
      platform: "Frontend Mentor",
      icon: <Icons.frontendMentorIcon className="size-4" />,
    },
  ]
  return (
    <div className="frid grid h-fit w-full gap-3 rounded-xl bg-[#FAFAFA] p-5">
      <div className="flex justify-between">
        <div className="font-bold-sans flex items-center gap-2 text-base leading-[150%] text-[#737373]">
          <span {...dragHandleProps}>
            {" "}
            <Icons.dragdropIcon className="cursor-grab" />
          </span>
          Link#{id}
        </div>
        <button
          onClick={() => removeItem(id)}
          className="font-regular-sans text-base leading-[150%] text-[#737373]"
        >
          Remove
        </button>
      </div>
      <div className="grid gap-1">
        <p className="font-regular-sans text-xs leading-[150%] text-[#737373]">
          Platform
        </p>
        <Select
          value={platform}
          onValueChange={(value) => onPlatformChange(id, value)}
        >
          <SelectTrigger className="h-[48px] w-full rounded-lg border border-[#D9D9D9] bg-white focus:border-[#633CFF] focus:shadow-[0_0_32px_0_rgba(99,60,255,0.25)]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {platformsList.map((platform, index) => (
                <div key={index}>
                  <SelectItem
                    value={platform.platform}
                    className="w-full px-3 py-4"
                  >
                    <div className="flex w-full cursor-pointer items-center gap-3 text-[#737373] hover:text-[#633CFF]">
                      {platform.icon}
                      <span className="text-[#333333] hover:text-[#633CFF]">
                        {" "}
                        {platform.platform}
                      </span>
                    </div>
                  </SelectItem>
                  {index + 1 < platformsList.length && (
                    <div className="h-px w-full bg-[#D9D9D9] px-4"></div>
                  )}
                </div>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-1">
        <p className="font-regular-sans text-xs leading-[150%] text-[#737373]">
          Link
        </p>
        <div
          className={cn(
            "flex h-[48px] w-full items-center gap-3 rounded-lg border border-[#D9D9D9] bg-white px-4 py-3 focus-within:border-[#633CFF] focus-within:shadow-[0_0_32px_0_rgba(99,60,255,0.25)]",
            errorMessages !== undefined && "border-[#FF3939]"
          )}
        >
          <Icons.linkIcon className="size-[16px] text-[#737373]" />
          <input
            type="text"
            name=""
            id=""
            className="w-full outline-none"
            value={link}
            onChange={(e) => onLinkChange(id, e.target.value)}
          />
          <div className="font-regular-sans text-nowrap text-sm text-[#FF3939]">
            {errorMessages === "empty link" && "Can't be empty"}
            {errorMessages === "wrong URL" && "Please check the URL"}
          </div>
        </div>
      </div>
    </div>
  )
}
