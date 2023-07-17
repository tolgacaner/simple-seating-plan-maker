'use client'
import React, { useState } from 'react'

import { IoChevronForward } from "react-icons/io5"
import FeaturesInputs from './features-inputs'
import RichTextEditor from './rich-text-editor'

function TicketFeatures() {
    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(false)

    const [textEditorValue, setTextEditorValue] = useState("")

    return (
        <>
            <div className="flex h-full items-center  rounded-sm ">
                <h1 className="h-full w-auto  lg:text-3xl text-xs flex items-center font-bold  px-2 border-r  rounded-l-sm shadow-md text-boho-15">
                    Create
                </h1>

                <div className="hidden lg:block">
                    <FeaturesInputs />
                </div>
                <div className="w-full flex justify-between items-center pr-2 ">
                    <div className="flex justify-center items-start lg:space-x-0 px-2 lg:px-0 flex-col">
                        <div
                            onClick={() => (setToggle(!toggle), setToggle1(false))}
                            className="flex justify-center items-center text-xs h-full cursor-pointer lg:hidden"
                        >
                            <IoChevronForward
                                className={`transform ${toggle ? "rotate-90" : "rotate-0"
                                    }  transition-transform duration-300 `}
                            />{" "}
                            <p>Features</p>
                        </div>
                        <div
                            onClick={() => (setToggle1(!toggle1), setToggle(false))}
                            className="flex justify-center items-center text-xs h-full cursor-pointer "
                        >
                            <IoChevronForward
                                className={`transform ${toggle1 ? "rotate-90" : "rotate-0"
                                    }  transition-transform duration-300 `}
                            />{" "}
                            <p>Details</p>
                        </div>
                    </div>
                    <div
                        className="  flex items-center justify-center px-5 py-1 bg-boho-12 rounded-sm cursor-pointer text-xs transition-all duration-500 transform hover:scale-105 font-medium text-boho-1"
                    // onClick={createFunction}
                    >
                        SAVE
                    </div>
                </div>
            </div>

            <div
                className={`w-full top-full absolute transition-all flex  overflow-hidden duration-500 z-50  rounded-b-sm ${toggle ? "h-72" : "h-0"
                    }`}
            >
                <div className="block lg:hidden w-full">
                    <FeaturesInputs />
                </div>
            </div>
            <div
                className={`w-full top-full absolute transition-all flex  overflow-hidden duration-500 z-50    bg-white  rounded-b-sm ${toggle1 ? "h-72 " : "h-0"
                    }`}
            >
                {/* <RichTextEditor setTextEditorValue={setTextEditorValue} /> */}

            </div>
        </>
    )
}

export default TicketFeatures