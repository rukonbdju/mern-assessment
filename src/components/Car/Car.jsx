

const Car = ({ car,handleSelectCar }) => {
    const { make, model, year, bags, seats, features, rates, imageURL } = car
    console.log(car)
    return (
        <div onClick={() => handleSelectCar(car)} className="p-4 border-b-2 cursor-pointer hover:bg-blue-200">
            <div className="flex flex-row gap-4">
                <div className=" w-24">
                    <img className="w-full" src={imageURL} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className="text-xl font-bold">{make} {model} {year}</h1>
                        <p>
                            <span className="px-1 inline-block bg-blue-100 rounded-full">{seats} seats</span>
                            <span className="px-1 inline-block bg-blue-100 rounded-full">{bags} bags</span>
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 items-center mt-4">
                        <p className="font-bold border-2 text-red-600 border-blue-600 rounded-full p-1 font-sm">$<span>{rates.hourly}</span>/hour</p>
                        <p className="font-bold border-2 text-red-600 border-blue-600 rounded-full p-1 font-sm">$<span>{rates.daily}</span>/day</p>
                        <p className="font-bold border-2 text-red-600 border-blue-600 rounded-full p-1 font-sm">$<span>{rates.weekly}</span>/weekly</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Car;