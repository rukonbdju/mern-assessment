import { useContext } from "react"
import { ReservationContext } from "../../../context/ReducerProvider"

const ChargesSummary = () => {
    const data= useContext(ReservationContext)
    return (
        <div>
            <h1 className="text-2xl font-bold border-b-2 border-b-blue-600 p-2">Charges Summary</h1>
            <div>
                <div className="p-6 border-2 rounded-lg my-6 bg-blue-200 border-blue-600">
                    <div className="grid grid-cols-2 justify-between py-4 border-b-2 border-b-blue-600 font-bold">
                        <p>Charge</p>
                        <div className="flex flex-row items-center justify-between content-center gap-4">
                            <p>Unit</p>
                            <p>Rate</p>
                            <p>Total</p>
                        </div>
                    </div>
                    {data?.reservationInfo?.duration?.weeks && <div className="grid grid-cols-2 justify-between py-4">
                        <p>Weekly</p>
                        <div className="flex flex-row items-center justify-between content-center gap-4">
                            <p>{data?.reservationInfo?.duration?.weeks}</p>
                            <p>{data?.vehicleInfo?.rates?.weekly}</p>
                            <p>5</p>
                        </div>
                    </div>}
                    {data?.reservationInfo?.duration?.weeks && <div className="grid grid-cols-2 justify-between py-4">
                        <p>Daily</p>
                        <div className="flex flex-row items-center justify-between content-center gap-4">
                            <p>{data?.reservationInfo?.duration?.days}</p>
                            <p>{data?.vehicleInfo?.rates?.daily}</p>
                            <p>5</p>
                        </div>
                    </div>}
                    {data?.reservationInfo?.duration?.weeks && <div className="grid grid-cols-2 justify-between py-4">
                        <p>Hourly</p>
                        <div className="flex flex-row items-center justify-between content-center gap-4">
                            <p>{data?.reservationInfo?.duration?.hours}</p>
                            <p>{data?.vehicleInfo?.rates?.hourly}</p>
                            <p>5</p>
                        </div>
                    </div>}
                    
                    <div className="flex flex-row justify-between font-bold">
                        <h2>Total:</h2>
                        <p>55$</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChargesSummary