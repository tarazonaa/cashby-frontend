import type {NextComponentType, NextPage} from "next";
import { StaticImageData } from "next/image";
import Image from "next/image";

//Images 
import ArtOfWar1 from "../assets/Images/Education/ArtofWar1.jpeg";
import Marketing1 from "../assets/Images/Education/Marketing1.jpeg";
import Prince2 from "../assets/Images/Education/Prince2.jpeg";
import ArtOfWar2 from "../assets/Images/Education/ArtofWar2.jpeg";


const educationPage: NextPage = () => {
    const createBook = (img: StaticImageData, altText: string, name: string): JSX.Element => {
        return(
            <div className="educationBook">
                <h2>{name}</h2>
                <Image src={img.src} height={400} width={300} alt={altText}/>
            </div>
        )
    }
    const createBanner = (img: StaticImageData, altText: string, name: string): JSX.Element => {
        return(
            <div className="educationBanner">
                <h2>{name}</h2>
                <Image src={img.src} height={350} width={675} alt={altText}/>
            </div>
        )
    }
    return(
        <div className="educationPage">
            {createBanner(Prince2, "Prince2", "Marketing - Google")}
            <div className="educationBooks">
                {createBook(ArtOfWar1, "ArtOfWar1", "The Art of War - Sun Tzu")}
                {createBook(Marketing1, "Marketing1", "Marketing - Google")}
            </div>
        </div>
    )
}

export default educationPage;
