function TopRow() {
    return (
        <div className="flex justify-between items-center w-full py-6 px-10">
            <div className="flex items-center justify-center text-xl font-semibold">
                {/* Today or week */}
                <div className="mr-4">
                    Today
                </div>
                <div className="ml-4 text-primary">
                    Week
                </div>
            </div>
            <div className="flex items-center justify-center">
                {/* °C OR F */}
                <div className="mr-8 border rounded-[100%] bg-white text-black px-[14px] py-2">
                °C
                </div>
                <div className="mr-8 border rounded-[100%] bg-black text-white px-[14px] py-2">
                °F
                </div>
            </div>

        </div>
    )
}
export default TopRow;