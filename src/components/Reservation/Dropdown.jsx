import { useState, useRef, useEffect, useContext } from 'react';
import Car from '../Car/Car';
import { ReservationContext, ReservationDispatchContext } from '../../../context/ReducerProvider';
import useCars from '../../hooks/useCars';

const Dropdown = ({ selectedType }) => {
    const reservation = useContext(ReservationContext)
     const dispatch = useContext(ReservationDispatchContext)
    const { cars: { data } } = useCars()

    const [isOpen, setIsOpen] = useState(false);
    const [selectedCar,setSelectedCar]=useState(null)
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelectCar = (vehicle) => {
        setSelectedCar(vehicle)
        dispatch({
            type:'vehicle',vehicle
        })
        setIsOpen(false);
    };

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <div
                className="custom-select-trigger flex items-center justify-between w-full p-3 bg-white border border-gray-300 rounded shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onClick={toggleDropdown}
            >
                {selectedCar ? selectedCar.make +" "+selectedCar.make+" "+selectedCar.year : 'Select an option'}
                <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </div>
            {isOpen && (
                <div className="absolute left-0 right-0 z-10 mt-1 bg-white border border-gray-300 rounded shadow-lg">
                    <div className="py-2">
                        {data?.filter(item=>item.type===selectedType).map((item) => (
                            <Car
                                key={item.id}
                                car={item}
                                 handleSelectCar={handleSelectCar}
                            >
                                {item.model}
                            </Car>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
