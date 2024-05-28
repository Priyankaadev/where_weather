import LowerHalf from "./LowerHalf";
import UpperHalf from "./UpperHalf";

function Sidebar() {
    return (
        <div className="overflow-y-auto basis-[20%] flex flex-col items-center text-black h-full justify-center rounded-bl-3xl rounded-tl-3xl" style={{background: 'rgba(255,255,255,0.81'}}>
        
        <UpperHalf />
       <div className="h-[1px] w-[90%] bg-[#e9ecef] mt-8 rounded-md">

       </div>
        <LowerHalf />
        
        </div>
    )
}
export default Sidebar;