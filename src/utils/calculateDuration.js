function calculateDuration(pickUpDate, returnDate) {
    const pickUp = new Date(pickUpDate);
    const returnD = new Date(returnDate);

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = returnD - pickUp;

    // Calculate the difference in seconds, minutes, hours, and days
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const differenceInDays = Math.floor(differenceInHours / 24);

    // Calculate weeks
    const weeks = Math.floor(differenceInDays / 7);
    // Remaining days
    const days = differenceInDays % 7;

    // Calculate hours
    const hours = differenceInHours % 24;


    return {
        weeks,
        days,
        hours
    };
}
export default calculateDuration;