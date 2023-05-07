import headshot from "../assets/DSC_0067.png"
import "../pages/Home.css"

export default function Home() {
    return (
        <div>
            {/* <h1>Gallery</h1> */}
            <img src={headshot} className="picture" alt=""/>
        </div>
        
    )
}