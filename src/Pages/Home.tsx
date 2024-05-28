import MainData from "../Components/MainData/MainData";
import Sidebar from "../Components/Sidebar/Sidebar";
import NightImage from '../Assets/night.jpg'

function Home() {
    return (
        <div className="h-[100vh] px-8 py-10  flex flex-row justify-center items-stretch " style={{backgroundSize:'cover', backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NightImage})`}}>

                <Sidebar />
                <MainData />
            </div>
       
    )

}

export default Home;