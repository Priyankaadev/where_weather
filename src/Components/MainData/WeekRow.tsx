import TempCard from "../TempCard";
import cloudyMorning from '../../Assets/cloudyMorning.png'

function WeekRow(){
return(
    <div className="w-full justify-center flex flex-wrap gap-10">
        <TempCard title="Friday" temperature="24°C" image={cloudyMorning} />
        <TempCard title="Friday" temperature="24°C" image={cloudyMorning} />
        <TempCard title="Friday" temperature="24°C" image={cloudyMorning} />
        <TempCard title="Friday" temperature="24°C" image={cloudyMorning} />
        <TempCard title="Friday" temperature="24°C" image={cloudyMorning} />
        <TempCard title="Friday" temperature="24°C" image={cloudyMorning} />
    </div>
)
}
export default WeekRow;