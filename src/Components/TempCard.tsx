function TempCard({ temperature, image, title }:{ temperature: string, image: string , title: string}){
return (
    <div className="flex flex-col justify-between items-center border bg-white rounded-lg p-2 h-[9rem] w-[7rem]">
        <div className="font-semibold text-lg">
            {title}
        </div>
        <div className="h-[40%]">
            <img
            className="h-full"
             src={image}  />
        </div>
        <div>
            {temperature}
        </div>
    </div>
)
}

export default TempCard;