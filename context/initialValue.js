let initialValue = {
    customerInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    },
    reservationInfo: {
        reservationId: '',
        pickupDate: '',
        returnDate: '',
        duration: {
            weeks:'',
            days:'',
            hours:''
        },
        discount:''
    },
    vehicleInfo: {
        type: "",
        vehicle: null
    },
    additionalInfo: {
        collisionDamageWaiver: false,
        liabilityInsurance: false,
        rentalTax: false,
    },
    additionalCharges: {
        collisionDamageWaiver: '9',
        liabilityInsurance: '11',
        rentalTax: '5',
    }
}
export default initialValue