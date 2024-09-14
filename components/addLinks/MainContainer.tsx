import React from "react"

import { LinksAddContainer } from "./LinksAddContainer"
import { LinksDisplayContainer } from "./LinksDisplayContainer"

export function MainContainer() {
  return (
    <div className="flex h-fit gap-6 p-4 sm:px-6 sm:pb-6 sm:pt-0">
      <LinksDisplayContainer />
      <LinksAddContainer />
    </div>
  )
}
