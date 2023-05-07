import headshot from "../assets/DSC_0067.png"
import "../pages/Gallery.css"

export default function Gallery() {
    return (
        <div>
            {/* <h1>Gallery</h1> */}
            <img src={headshot} className="picture" alt=""/>
        </div>
        
    )
}