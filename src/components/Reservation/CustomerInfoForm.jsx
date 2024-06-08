import { useContext } from "react"
import { ReservationContext, ReservationDispatchContext } from "../../../context/ReducerProvider"

const CustomerInfoForm = () => {
    const reservation= useContext(ReservationContext)
    const dispatch= useContext(ReservationDispatchContext)
    const handleInputChange=(e)=>{
        const {name:inputName, value}=e.target
        dispatch({
            type:'customer',inputName,value
        })
    }
    return (
        <div>
            <h1 className="text-2xl font-bold border-b-2 border-b-blue-600 p-2">Customer Information</h1>
            <div className='p-6 border-2 flex flex-col gap-4 rounded-lg my-6'>
                <div>
                    <label className='text-sm inline-block pb-2 '>First Name<span className="text-red-600">*</span></label>
                    <input onChange={handleInputChange} value={reservation?.customerInfo.firstName} name="firstName" className='p-3 border-2 outline-none rounded-md w-full block focus:border-blue-600' type="text" />
                </div>
                <div>
                    <label className='text-sm inline-block pb-2 '>Last Name<span className="text-red-600">*</span></label>
                    <input onChange={handleInputChange} value={reservation?.customerInfo.lastName} name="lastName" className='p-3  border-2 outline-none rounded-md w-full block focus:border-blue-600' type="text" />
                </div>
                <div>
                    <label className='text-sm inline-block pb-2 '>Email<span className="text-red-600">*</span></label>
                    <input onChange={handleInputChange} value={reservation?.customerInfo.email} name="email" className='p-3  border-2 outline-none rounded-md w-full block focus:border-blue-600' type="text" />
                </div>
                <div>
                    <label className='text-sm inline-block pb-2 '>Phone<span className="text-red-600">*</span></label>
                    <input onChange={handleInputChange} value={reservation?.customerInfo.phone} name="phone" className='p-3  border-2 outline-none rounded-md w-full block focus:border-blue-600' type="text" />
                </div>
            </div>
        </div>
    )
}
export default CustomerInfoForm