
const reservationReducer = (reservationData, action) => {
    switch (action.type) {
        case ('customer'):
            return { ...reservationData, customerInfo: { ...reservationData?.customerInfo, [action.inputName]: action.value } }
            break;
        case ('additional'):
            console.log(action)
            return { ...reservationData, additionalInfo: { ...reservationData?.additionalInfo, [action.name]: action.checked } }
            break;

        case ('vehicle'):
            console.log(action)
            return { ...reservationData, vehicleInfo: action.vehicle }
            break;
        case ('reservation'):
            console.log(action)
            return { ...reservationData, reservationInfo: { ...reservationData?.reservationInfo, [action.inputName]: action.value } }
            break;
        case ('duration'):
            if (reservationData?.reservationInfo?.pickupDate && reservation?.reservationInfo?.returnDate) {
                const duration = calculateDuration(reservation?.reservationInfo?.returnDate, reservation?.reservationInfo?.pickupDate)
                return { ...reservationData, reservationInfo: { ...reservationData?.reservationInfo, duration } }
            }
            break;

        default:
            break;
    }

}
export default reservationReducer;