import TempCard from "../TempCard";
import cloudyMorning from '../../Assets/cloudyMorning.png'
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";

function WeekRow(){
    const dayForecast = useSelector((state: ReduxState) => state.forecast.data.dayforecast)
    const weekdays =[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Satday'
        
    ]
    return(

    <div className="w-full justify-center px-2 flex flex-wrap gap-5">
        {dayForecast && dayForecast.map((forecast)=>{
            return <TempCard title={weekdays[(new Date(forecast.date)).getDay()]} temperature={forecast.avgtemp_c.toString()} image={cloudyMorning} />
        })}        
    </div>
)
}
export default WeekRow;