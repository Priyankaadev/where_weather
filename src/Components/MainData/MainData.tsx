import HightlightRow from "./HighlightRow";
import TopRow from "./TopRow";
import WeekRow from "./WeekRow";

function MainData() {
    return (
        <div className="overflow-y-auto basis-[70%] flex flex-col justify-start py-5 items-center text-black rounded-br-3xl rounded-tr-3xl h-full bg-[#f6f6f8]" >
            <TopRow />
            <WeekRow />
            <div className="font-semibold text-2xl mt-8 text-left w-full py-5 px-10">
                Today's highlights
            </div>
            <HightlightRow />
        </div>
    )
}
export default MainData;