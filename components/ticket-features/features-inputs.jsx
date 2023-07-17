import React from 'react'
import { nanoid } from "@reduxjs/toolkit"
import { useState } from "react"
import { MdEventSeat } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { ticket, changeCheck } from '@/redux/ticket/ticketSlice'


function FeaturesInputs() {
    const { name, date, time, price, seatingArrangement } = useSelector(
        (state) => state.ticket.item
    )

    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)

    const onChangeName = (e) => {
        dispatch(ticket({ type: "name", value: e.target.value }))
    }
    const onChangeDate = (e) => {
        dispatch(ticket({ type: "date", value: e.target.value }))
    }
    const onChangeTime = (e) => {
        dispatch(ticket({ type: "time", value: e.target.value }))
    }
    const onChangePrice = (e) => {
        dispatch(ticket({ type: "price", value: e.target.value }))
    }
    const onChangeFile = (e) => {
        console.log(e.target.files)
    }

    const onCheck = (e) => {
        let value = e.target.checked
        console.log(value)
        if (!seatingArrangement) {
            value = false
            dispatch(changeCheck(value))
        } else {
            value = true
            dispatch(changeCheck(value))
        }
    }
    return (
        <div className="flex flex-col items-center lg:flex-row  overflow-hidden p-5 lg:p-0 lg:space-x-5  w-full  space-y-3 lg:space-y-0  border-t  border-black lg:border-none bg-white lg:bg-inherit lg:px-5">
            <div className="w-full inline-flex flex-col text-xs space-y-1 lg:justify-end  lg:h-full ">
                <label htmlFor="name" className="font-medium text-stone-500">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    className="text-xs w-1/2 lg:w-28 rounded-sm px-1 py-1 lg:h-6 border border-boho-1 transition duration-500 focus:ring-0 hover:bg-stone-50 text-stone-500 focus:text-black"
                    onChange={onChangeName}
                    value={name}
                />

            </div>
            <div className="w-full inline-flex flex-col text-xs space-y-1 lg:justify-end lg:h-full ">
                <label htmlFor="date" className="font-medium text-stone-500">
                    Date
                </label>
                <input
                    id="date"
                    type="date"
                    className="text-xs w-1/2 lg:w-28 rounded-sm px-1 py-1 lg:h-6 border border-boho-1 transition duration-500 focus:ring-0 hover:bg-stone-50 text-stone-500 focus:text-black"
                    onChange={onChangeDate}
                    value={date}
                />
            </div>
            <div className="w-full inline-flex flex-col text-xs space-y-1 lg:justify-end lg:h-full ">
                <label htmlFor="time" className="font-medium text-stone-500">
                    Time
                </label>
                <input
                    id="time"
                    type="time"
                    className="text-xs w-1/2 lg:w-28 rounded-sm px-1 py-1 lg:h-6 border border-boho-1 transition duration-500 focus:ring-0 hover:bg-stone-50 text-stone-500 focus:text-black"
                    onChange={onChangeTime}
                    value={time}
                />
            </div>
            <div className="w-full inline-flex flex-col text-xs space-y-1 lg:justify-end lg:h-full">
                <label htmlFor="price" className="font-medium text-stone-500">
                    Price
                </label>
                <input
                    id="price"
                    type="text"
                    className="text-xs w-1/2 lg:w-28  rounded-sm px-1 py-1 lg:h-6 border border-boho-1 transition duration-500 focus:ring-0 hover:bg-stone-50 text-stone-500 focus:text-black"
                    onChange={onChangePrice}
                    value={price}
                />
            </div>

            <div className="w-full flex flex-col  h-full  justify-center  relative">
                <MdEventSeat className={`h-8 w-8 absolute transition duration-500 ${seatingArrangement ? 'text-boho-12' : 'text-boho-3'}`} />
                <input
                    className="border-boho-1  transition duration-500 focus:ring-0 opacity-0  h-8 w-8 z-50  cursor-pointer"
                    type="checkbox"
                    onClick={onCheck}
                    checked={seatingArrangement}
                    readOnly
                />
            </div>
        </div>
    )
}

export default FeaturesInputs