import { Fragment } from "react";
import CountWrapper from "react-countdown";
const CountDown = () => {
    return (
        <Fragment>
            <CountWrapper  
            date={Date.now() + 1000 * 60 * 60 * 24 * 30} 
            renderer={CustomCountDown}/>
        </Fragment>
    )
}

const CustomCountDown = ({days,hours, minutes, seconds}) => {
    return(
        <Fragment>
            <div className="flex items-center gap-1 md:gap-6">
                <span className="py-4 px-3 md:px-7 bg-white-color font-medium text-2xl md:text-4xl text-gray-800 rounded-md">{days} 
                    <span className="block text-lg text-gray-text font-normal leading-none">Days</span> 
                </span>
                <span className="font-semibold text-6xl leading-none">:</span>
                <span className="py-4 px-3 md:px-7 bg-white-color font-medium text-2xl md:text-4xl text-gray-800 rounded-md">{hours} 
                    <span className="block text-lg text-gray-text font-normal leading-none">Hrs</span> 
                </span>
                <span className="font-semibold text-6xl leading-none">:</span>
                <span className="py-4 px-3 md:px-7 bg-white-color font-medium text-2xl md:text-4xl text-gray-800 rounded-md">{minutes} 
                    <span className="block text-lg text-gray-text font-normal leading-none">Mins</span> 
                </span>
                <span className="font-semibold text-6xl leading-none">:</span>
                <span className="py-4 px-3 md:px-7 bg-white-color font-medium text-2xl md:text-4xl text-gray-800 rounded-md">{seconds} 
                    <span className="block text-lg text-gray-text font-normal leading-none">Secs</span> 
                </span>
            </div>
        </Fragment>
    )
}

export default CountDown;
