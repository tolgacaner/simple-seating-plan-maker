'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiPlus } from "react-icons/hi"
import { addBlock, setIndex } from '@/redux/ticket/ticketSlice'
import { nanoid } from 'nanoid'



function TicketRooms() {
  const dispatch = useDispatch()
  const item = useSelector((state) => state.ticket.item.blocks)
  const index = useSelector((state) => state.ticket.index)

  const [roomname, setRoomname] = useState("")
  const onChange = (e) => {
    setRoomname(e.target.value)
  }

  const onClick = () => {
    const id = nanoid()
    dispatch(addBlock({ id, roomname }))
    setRoomname("")
  }

  return (
    <div className="h-1/3 no-scrollbar overflow-x-auto w-full space-x-2 inline-flex items-center bg-white shadow-md px-1 rounded-sm ">
      {item.map((item) => {
        return (
          <div key={item.id} onClick={() => dispatch(setIndex(item.id))} className={`${index == item.id ? 'bg-boho-12' : 'bg-boho-13'} hover:scale-105 transform transition-all duration-500    rounded-sm shadow-md cursor-pointer text-xs flex justify-center items-center px-2 min-w-fit h-6`}>
            {item.roomname}
          </div>
        )
      })}

      <div className="flex w-16   rounded-sm shadow-md h-6">
        <input
          type="text"
          name="room"
          value={roomname}
          className="h-full w-10 rounded-l-sm text-xs p-1 border-boho-1 transition duration-500 focus:ring-0 hover:bg-stone-50 text-stone-500 focus:text-black"
          onChange={onChange}
        />
        <div
          className="w-16 h-full bg-[#6b705c] text-white rounded-r-sm items-center flex justify-center cursor-pointer transition duration-500 hover:scale-105"
          onClick={onClick}
        >
          +
        </div>
      </div>

    </div>
  )
}

export default TicketRooms