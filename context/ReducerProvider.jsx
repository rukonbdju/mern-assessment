import { createContext, useReducer } from "react"
import initialValue from "./initialValue"
import reservationReducer from "../src/reducer/reservationReducer"

export const ReservationContext = createContext(null)
export const ReservationDispatchContext = createContext(null)


const ReducerProvider = ({children}) => {
    
    const [reservationData, dispatch] = useReducer(reservationReducer, initialValue)
    return (
        <ReservationContext.Provider value={reservationData}>
            <ReservationDispatchContext.Provider value={dispatch}>{children}</ReservationDispatchContext.Provider>
        </ReservationContext.Provider>
    )

}

export default ReducerProvider;