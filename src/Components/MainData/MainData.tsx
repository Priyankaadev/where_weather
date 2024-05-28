import HightlightRow from "./HighlightRow";
import TopRow from "./TopRow";
import WeekRow from "./WeekRow";

function MainData() {
    return (
        <div className="basis-[70%] flex flex-col justify-between py-5 items-center text-black rounded-br-3xl rounded-tr-3xl h-full bg-[#f6f6f8]" >
            <TopRow />
            <WeekRow />
            <div>
                Today's highlights
            </div>
            <HightlightRow />
        </div>
    )
}
export default MainData;