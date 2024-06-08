import { useContext, useRef, useState } from "react";
import AdditionalCharges from "./AdditionalCharges";
import ChargesSummary from "./ChargesSummary";
import CustomerInfoForm from "./CustomerInfoForm";
import ReservationForm from "./ReservationForm";
import VehicleInfoForm from "./VehicleInfoForm";
import Invoice from "../Invoice/Invoice";
import { useReactToPrint } from "react-to-print";

const Reservation = () => {
    const ref = useRef();

    const handlePrint = useReactToPrint({
        content: () => ref.current,
    })

    return (
        <div className="w-4/5 mx-auto relative">
            <div ref={ref} className="p-6 absolute border w-full mx-auto my-auto bg-white z-40" style={{
                display: 'hidden'
            }}>
                <div className=" ">
                    <Invoice></Invoice>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center my-10">
                <h1 className="text-2xl font-bold">Reservation</h1>
                <div>
                    <button onClick={handlePrint} className="text-md font-bold rounded-lg bg-blue-600 text-white p-4">Print/Download</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <div>
                    <ReservationForm></ReservationForm>
                    <VehicleInfoForm></VehicleInfoForm>
                </div>
                <div>
                    <CustomerInfoForm></CustomerInfoForm>
                    <AdditionalCharges></AdditionalCharges>
                </div>
                <ChargesSummary></ChargesSummary>
            </div>
        </div>

    )
}
export default Reservation;