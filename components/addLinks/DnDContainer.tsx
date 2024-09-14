"use client"

import React from "react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

import { Icons } from "../icons"
import { AddLink } from "./AddLink"

interface DnDContainerProps {
  items: { id: string; link: string; platform: string }[]
  setItems: React.Dispatch<
    React.SetStateAction<{ id: string; link: string; platform: string }[]>
  >
  errorMessages: any
}

export function DnDContainer({
  items,
  setItems,
  errorMessages,
}: DnDContainerProps) {
  const addItem = () => {
    const newItem = {
      id: (items.length + 1).toString(),
      link: "",
      platform: "GitHub",
    }
    setItems((prevItems) => [...prevItems, newItem])
  }

  const updateItemIds = (
    items: { id: string; link: string; platform: string }[]
  ) => {
    return items.map((item, index) => ({
      ...item,
      id: (index + 1).toString(),
    }))
  }

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return

    const newItems = Array.from(items)
    const [reorderedItem] = newItems.splice(result.source.index, 1)
    newItems.splice(result.destination.index, 0, reorderedItem)

    setItems(updateItemIds(newItems))
  }

  const handleLinkChange = (id: string, value: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, link: value } : item
      )
    )
  }

  const handlePlatformChange = (id: string, value: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, platform: value } : item
      )
    )
  }

  const updateItemId = (
    items: { id: string; link: string; platform: string }[]
  ) => {
    return items.map((item, index) => ({
      ...item,
      id: (index + 1).toString(),
    }))
  }

  const removeItem = (id: string) => {
    const filteredItems = items.filter((item) => item.id !== id)
    setItems(updateItemId(filteredItems))
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <button
        onClick={addItem}
        className="font-semibold-sans h-[46px] w-full rounded-lg border border-[#633CFF] text-base leading-[150%] text-[#633CFF] hover:bg-[#EFEBFF]"
      >
        + Add new link
      </button>
      {items.length === 0 ? (
        <div className="flex h-[470px] flex-col items-center justify-center gap-10 p-5">
          <Icons.emptyLinksContainer className="w-[124px] sm:w-[250px] sm:max-w-[250px]" />
          <div className="grid max-w-[488px] gap-6 text-center">
            <p className="font-bold-sans text-[24px] leading-[150%] text-[#333333] sm:text-[32px]">
              Let’s get you started
            </p>
            <p className="font-regular-sans text-base leading-[150%] text-[#737373]">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        </div>
      ) : (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="list">
            {(provided: any) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="scrollbar-none grid h-[470px] gap-2 overflow-y-scroll"
              >
                {items.map(({ id, link, platform }: any, index: number) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided: any) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                          ...provided.draggableProps.style,
                        }}
                      >
                        <AddLink
                          key={index}
                          id={id}
                          link={link}
                          platform={platform}
                          removeItem={removeItem}
                          onLinkChange={handleLinkChange}
                          onPlatformChange={handlePlatformChange}
                          errorMessages={errorMessages[id]}
                          dragHandleProps={provided.dragHandleProps}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  )
}
