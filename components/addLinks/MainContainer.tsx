import React from "react"

import { LinksAddContainer } from "./LinksAddContainer"
import { LinksDisplayContainer } from "./LinksDisplayContainer"

export function MainContainer() {
  return (
    <div className="flex h-[calc(100vh-126px)] gap-6 px-6 pb-6">
      <LinksDisplayContainer />
      <LinksAddContainer />
    </div>
  )
}
