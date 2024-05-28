import LowerHalf from "./LowerHalf";
import UpperHalf from "./UpperHalf";

function Sidebar() {
    return (
        <div className="basis-[20%] flex flex-col items-center text-black h-full justify-center rounded-bl-3xl rounded-tl-3xl" style={{background: 'rgba(255,255,255,0.81'}}>
        
        <UpperHalf />
        <LowerHalf />
        
        </div>
    )
}
export default Sidebar;