import { AiOutlineSearch } from "react-icons/ai";
import cloudyNight from '../../Assets/cloudyNight.png'
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";

function UpperHalf(){

  const currentData = useSelector((state: ReduxState)=> state.forecast.data.currentData)
    return(
       <div className="h-[50%] w-full p-4 flex flex-col basis-[65%] justify-center items-center">
          <div className="flex flex-start w-full mt-16">
            {/* search bar div */}
            <input 
            placeholder="Search...."
            className="px-2 py-2 rounded-tl-md bg-white text-black rounded-bl-md block basis-[90%]"
            type="text"
            />

            <button className=" block text-white text-lg bg-sky-500 p-2 basis-auto rounded-tr-md rounded-br-md"> 
                <AiOutlineSearch />

            </button>
          </div>
          <div className="w-full h-[60%] flex justify-center mt-8"> 
            {/* image container */}
            <img src={cloudyNight}
            className="w-[60%] h-full"
            />
          </div>
          <div>
            {/* temperature data */}
            <div className=" text-7xl flex items-start text-black">
                <div>{currentData.temp_c}</div>
                <div className="text-5xl mt-1">°C</div>
            </div>
            <div className="text-black text-center text-md">
                Friday, 09:15
            </div>
          </div>
       </div>
    )
    }
    export default UpperHalf;