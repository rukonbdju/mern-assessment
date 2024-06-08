import { useContext, useState } from "react";
import { ReservationContext, ReservationDispatchContext } from "../../../context/ReducerProvider";


const AdditionalCharges = () => {
    const reservation= useContext(ReservationContext)
    const dispatch= useContext(ReservationDispatchContext)
    const handleChange = (event) => {
        const { name, checked } = event.target;
        dispatch({
            type:'additional',name,checked
        })
    };
    return (
        <div>
            <h1 className="text-2xl font-bold border-b-2 border-b-blue-600 p-2">Additional Charges</h1>
            <div className='p-6 border-2 rounded-lg my-6 flex flex-col gap-8'>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-4 items-center">
                        <input className="transform scale-150" type="checkbox" name="collisionDamageWaiver"
                            checked={reservation?.additionalInfo?.collisionDamageWaiver}
                            onChange={handleChange} />
                        <p>Collision Damage Waiver</p>
                    </div>
                    <p>$9.00</p>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-4 items-center">
                        <input className="transform scale-150" type="checkbox" name="liabilityInsurance"
                            checked={reservation?.additionalInfo?.liabilityInsurance}
                            onChange={handleChange} />
                        <p>Liability Insurance</p>
                    </div>
                    <p>$15.00</p>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-4 items-center">
                        <input className="transform scale-150" type="checkbox" name="rentalTax"
                            checked={reservation?.additionalInfo?.rentalTax}
                            onChange={handleChange}
                        />
                        <p>Rental Tax</p>
                    </div>
                    <p>$11.5%</p>
                </div>
            </div>


        </div>
    )
}
export default AdditionalCharges