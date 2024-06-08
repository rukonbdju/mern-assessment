
import useCars from "../../hooks/useCars"
import Dropdown from "./Dropdown"
import { ReservationContext, ReservationDispatchContext } from "../../../context/ReducerProvider"
import { useContext, useState } from "react"

const VehicleInfoForm = () => {
    const reservation = useContext(ReservationContext)
    const dispatch = useContext(ReservationDispatchContext)
    const [selectedType,setSelectedType]=useState('')
    const { cars: { data } } = useCars()
    //getting unique types of car
    const carTypes = Array.from(new Set(data?.map(item => item.type)))

    const handleTypeSelect = (e) => {
        setSelectedType(e.target.value)
        dispatch({
            type: 'vehicle'
        })
    }
    return (
        <div>
            <h1 className="text-2xl font-bold border-b-2 border-b-blue-600 p-2">Vehicle Information</h1>
            <div className='p-6 border-2 rounded-lg my-6'>
                <div className="flex flex-col">
                    <label>Vehicles type:</label>
                    <select onChange={handleTypeSelect} className='p-3 mt-2 mb-4 border-2 outline-none rounded-md w-full block focus:border-blue-600' name="type">
                        <option>Select</option>
                        {carTypes?.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </div>
                <label>Vehicles:</label>
                <Dropdown selectedType={selectedType} />
            </div>
        </div>
    )
}

export default VehicleInfoForm