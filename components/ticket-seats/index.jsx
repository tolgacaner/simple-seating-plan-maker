'use client'
import {
    addRowSeats,
    addSeats,
    changeCol,
    changeRow,
    changeRowName,
    removeRoom,
} from '@/redux/ticket/ticketSlice'
import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { IoChevronForward, IoCloseOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'

function TicketSeats({ index }) {
    const dispatch = useDispatch()
    const itemz = useSelector((state) => state.ticket.item)
    const items = useSelector((state) => state.ticket.item.blocks)
    const item = items.find((item) => item.id === index)
    const id = index

    const makeSeats = () => {
        const seats = []
        for (let i = 0; i < item.row; i++) {
            const rowId = nanoid()
            seats.push({ id: rowId, rowName: "", rowSeats: [] })
            for (let j = 0; j < item.col; j++) {
                const seatId = nanoid()
                seats[i].rowSeats.push({
                    id: seatId,
                    activeSeat: false,
                    seatNumber: -1,
                })
            }
        }
        dispatch(addSeats({ id, seats }))
    }

    const onChangeCol = (e) => {
        const value = e.target.value

        dispatch(changeCol({ id, value }))
    }
    const onChangeRow = (e) => {
        const value = e.target.value

        dispatch(changeRow({ id, value }))
    }


    // const [seatandrowId, setseatandrowId] = useState({ seatId: "", rowId: "" })
    const [distance, setDistance] = useState({ first: -1, last: -1 })
    const distanceChange = ({ type, value }) => {
        if (type === "first") {
            setDistance((state) => ({
                ...state,
                first: value,
            }))
        } else if (type === "last") {
            setDistance((state) => ({
                ...state,
                last: value,
            }))
        }
    }
    return (
        <div className=" bg-white flex-grow p-5  rounded-sm overflow-auto shadow-md">
            <div className="h-1/6 bg-white flex relative lg:space-x-5 shadow-md rounded-sm px-5">
                <div
                    className={`${itemz.seatingArrangement ? "flex" : "hidden"
                        } items-center flex-grow justify-evenly lg:justify-start lg:space-x-5`}
                >
                    <div className="flex flex-col h-full justify-evenly text-xs ">
                        <div className="flex justify-between items-center">
                            <p className=" font-medium text-stone-500">Col</p>
                            <select
                                className="rounded-sm   text-xs py-1 h-6 border-boho-1 transition duration-500 focus:ring-0 hover:bg-stone-50 text-stone-500 focus:text-black"
                                onChange={onChangeCol}
                                value={item.col}
                            >
                                <option value={2}>2</option>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                            </select>
                        </div>
                        <div className="flex items-center space-x-2 ">
                            <p className=" font-medium text-stone-500">Row</p>
                            <select
                                className="rounded-sm  text-xs py-1 h-6 border-boho-1 transition duration-500 focus:ring-0 hover:bg-stone-50 text-stone-500 focus:text-black"
                                onChange={onChangeRow}
                                value={item.row}
                            >
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={30}>30</option>
                                <option value={40}>40</option>
                                <option value={50}>50</option>
                            </select>
                        </div>
                    </div>
                    <button
                        className=" inline-flex items-center justify-center px-5 py-1 bg-boho-12 rounded-sm cursor-pointer text-xs"
                        onClick={makeSeats}
                    >
                        Add
                    </button>
                </div>
                <div className="h-full text-xs  flex flex-col justify-evenly">
                    <div className="space-x-2">
                        <label className="font-medium text-stone-500">From</label>
                        <input
                            type="text"
                            className=" text-xs border-boho-1 transition duration-500 focus:ring-0 hover:bg-stone-50 text-stone-500 focus:text-black h-6 w-14"
                            value={distance.first}
                            onChange={(e) =>
                                distanceChange({ type: "first", value: e.target.value })
                            }
                        />
                    </div >
                    <div className="flex justify-between">
                        <label className="font-medium text-stone-500">To</label>
                        <input
                            type="text"
                            className="text-xs border-boho-1 transition duration-500 focus:ring-0 hover:bg-stone-50 text-stone-500 focus:text-black h-6 w-14"
                            value={distance.last}
                            onChange={(e) =>
                                distanceChange({ type: "last", value: e.target.value })
                            }
                        />
                    </div>
                </div>
                <button
                    className="absolute right-1 top-1"
                    onClick={() => {
                        dispatch(removeRoom(id))
                    }}
                >
                    <IoCloseOutline />
                </button>
            </div>
            <div className="  w-full py-5">
                <div className=" flex-grow  space-y-5 overflow-auto">
                    {item.seats.map((item) => {
                        const rowId = item.id
                        return (
                            <div key={item.id} className="w-full h-5  flex space-x-5 ">
                                <>
                                    <input
                                        type="text"
                                        value={item.rowName}
                                        className="w-10 p-0 text-xs border border-boho-1 transition duration-500 focus:ring-0 hover:bg-stone-50 text-stone-500 focus:text-black"
                                        onChange={(e) =>
                                            dispatch(
                                                changeRowName({
                                                    id,
                                                    rowId: item.id,
                                                    value: e.target.value,
                                                })
                                            )
                                        }
                                    />
                                    {item.rowSeats.map((item) => {
                                        return (
                                            <div
                                                key={item.id}
                                                className={`h-full w-5 flex justify-center items-center ${item.activeSeat ? "bg-green-500" : "bg-boho-15 opacity-50 flex-none"
                                                    } relative  text-[0.5rem] cursor-pointer rounded-sm shadow-md transform hover:scale-105 transition-all hover:bg-red-500 duration-500`}
                                                onClick={() =>
                                                    dispatch(
                                                        addRowSeats({
                                                            id: id,
                                                            rowId: rowId,
                                                            itemId: item.id,
                                                            distanceFirstNum: distance.first,
                                                            distanceLastNum: distance.last,
                                                        })
                                                    )
                                                }
                                            >
                                                {item.seatNumber}
                                            </div>
                                        )
                                    })}
                                </>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TicketSeats