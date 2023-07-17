import TicketFeatures from "@/components/ticket-features";
import TicketRooms from "@/components/ticket-rooms";
import TicketSeats from "@/components/ticket-seats";
import TicketSeatsContainer from "@/containers/ticket-seats-container";


export default function Home() {
  return (
    <div className='h-screen bg-white flex p-0 lg:p-5 '>
      <div className='w-1/12 h-full hidden lg:block bg-[#ffe8d6] p-5 shadow-md rounded-sm '>
      </div>
      <div className=' h-full w-full lg:w-11/12  rounded-sm pl-0 lg:pl-5 '>

        <div className="flex w-full h-full flex-col space-y-5">
          <div className="h-36 w-full bg-boho-6 p-5 rounded-sm space-y-5 flex flex-col shadow-md flex-none">
            <div className="h-2/3 w-full  bg-white relative  shadow-md rounded-sm ">
              <TicketFeatures/>
            </div>
            <TicketRooms/>
          </div>
          <TicketSeatsContainer/>
        </div>

      </div>
    </div>
  )
}
