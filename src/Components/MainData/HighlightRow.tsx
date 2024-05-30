import { useSelector } from "react-redux";
import HighlightCards from "../HighlightCards";
import ReduxState from "../../Interfaces/ReduxState";

function HightlightRow() {
    const currentData = useSelector((state: ReduxState) => state.forecast.data.currentData)

    function uvRange(): string {
        if (currentData.uv <= 5) return 'low';
        else if (currentData.uv > 5 && currentData.uv < 8) return 'moderate'
        else return 'high'
    }

    return (

        <div className="flex flex-wrap gap-6 justify-center">
            <HighlightCards title="UV Index" data={currentData.uv.toString()} footer={uvRange()} />
            {/* <HighlightCards title="Wind Status" data={currentData.wind_kmph.toString()} footer="km/h" /> */}
            <HighlightCards title="Humidity" data={currentData.humidity.toString() + '%'} footer="Low" />
            <HighlightCards title="Visibility" data={currentData.vis_km.toString()} footer="Low" />
            <HighlightCards title="Sunrise & Sunset" data={currentData.sunrise} footer={currentData.sunset} />
            <HighlightCards title="Air quality" data={currentData.aqi.toString()} footer="Low" />

        </div>
    )
}
export default HightlightRow;