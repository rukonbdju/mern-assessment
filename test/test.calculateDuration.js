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
    const remainingDays = differenceInDays % 7;

    // Calculate hours and minutes
    const hours = differenceInHours % 24;
    const minutes = differenceInMinutes % 60;

    return {
        weeks,
        days: remainingDays,
        hours,
        minutes
    };
}

const pickUpDate = "2024-06-01T18:00";
const returnDate = "";

const duration = calculateDuration(pickUpDate, returnDate);
console.log(`Duration: ${duration.weeks} weeks, ${duration.days} days, ${duration.hours} hours, ${duration.minutes} minutes`);