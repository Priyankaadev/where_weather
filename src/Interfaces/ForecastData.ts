import CurrentDayForecast from "./CurrentDayForecast";
import DayForecast from "./DayForecast";


export default interface ForecastData{
    location: {localtime: string, country: string, region: string, name: string },
    dayforecast: DayForecast[],
    currentData: CurrentDayForecast
}