import { useContext, useEffect } from "react"
import { ReservationContext, ReservationDispatchContext } from "../../../context/ReducerProvider"
import calculateDuration from "../../utils/calculateDuration"


const ReservationForm = () => {
    const reservation = useContext(ReservationContext)
    const dispatch = useContext(ReservationDispatchContext)
    const duration = calculateDuration(reservation?.reservationInfo?.returnDate, reservation?.reservationInfo?.pickupDate)
    const displayDuration=duration.weeks?duration.weeks+"week":""+ duration.days?duration.days +"days":""+duration.hours?duration.hours+"hours":""
console.log(duration.days===true)

    const handleInputChange = (e) => {
        const { name: inputName, value } = e.target
        dispatch({
            type: 'reservation',
            inputName, value
        })
    }
    return (
        <div>
            <h1 className="text-2xl font-bold border-b-2 border-b-blue-600 p-2">Reservation Details</h1>
            <div className='p-6 border-2 rounded-lg my-6'>
                <label className='text-gray-700 '>Reservation Id</label>
                <input className='p-3 mt-2 mb-4 border-2 outline-none rounded-md w-full block focus:border-blue-600' type="text" />
                <div className="mb-4">
                    <label className="block  font-medium text-gray-700">Pickup Date</label>
                    <input onChange={handleInputChange} value={reservation?.reservationInfo?.pickupDate} name="pickupDate" type="datetime-local" id="pickup-date" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Select pickup date and time" />
                </div>
                <div className="mb-4">
                    <label className="block  font-medium text-gray-700">Return Date</label>
                    <input onChange={handleInputChange} value={reservation?.reservationInfo?.returnDate} name="returnDate" type="datetime-local" id="pickup-date" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="pickup date" />
                </div>
                <div className='flex flex-row justify-between items-center my-4'>
                    <label className=' text-gray-700'>Duration</label>
                    <input value={displayDuration?displayDuration:""} className=' basis-2/3 p-3 mt-2 border-2 outline-none rounded-md w-full block focus:border-blue-600' type="text" />
                </div>
                <label  className=' text-gray-700'>Discount</label>
                <input onChange={handleInputChange} name="discount" value={reservation?.reservationInfo?.discount} className='p-3 mt-2 border-2 outline-none rounded-md w-full block focus:border-blue-600' type="text" />
            </div>
        </div>
    )
}
export default ReservationForm;