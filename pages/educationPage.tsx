import type {NextPage} from "next";
import { StaticImageData } from "next/image";
import Image from "next/image";


const educationPage: NextPage = () => {
    const createBook = (img: StaticImageData, altText: string): JSX.Element => {
        return(
            <div>
                <Image src={img.src} height={img.height} width={img.width} alt={altText}/>
            </div>
        )
    }
    return(
        <div>
            {createBook({src:"/../assets/Images/investing.png", height:200, width:200}, "Image")}
        </div>
    )
}

export default educationPage;