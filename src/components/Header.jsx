import { Slider } from "./Slider";
import { Nav } from "./Nav";

const images = [
    {
        src : "https://i.ibb.co/BGSQCfV/campus.jpg",
        caption: "campus"
    },
    {
        src : "https://i.ibb.co/k3bcJp2/building.jpg",
        caption: "building"
    },
    {
        src : "https://i.ibb.co/TTL0K2p/backside.jpg",
        caption: "backside"
    
    }
]

export const Header = ()=>{
    return <>
        <Nav></Nav>
        <div className="mt-28">
            <Slider images={images}></Slider>
        </div>
    </>
}

