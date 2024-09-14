"use client"

import React from "react"

import { Icons } from "../icons"

// import { useStore } from "@/store/listdataStore"

export function LinksDisplayContainer() {
  // const {links} = useStore()

  return (
    <div className="hidden w-full max-w-[560px] items-center justify-center rounded-xl bg-white md:flex">
      <Icons.phoneMockUp />
    </div>
  )
}
