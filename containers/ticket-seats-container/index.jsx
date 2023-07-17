'use client'

import TicketSeats from '@/components/ticket-seats'
import React from 'react'
import { useSelector } from 'react-redux'

function TicketSeatsContainer() {
  const index = useSelector((state) => state.ticket.index)
  console.log(index)
  return (
    <>
      {index && <TicketSeats index={index} />}
    </>
  )
}

export default TicketSeatsContainer