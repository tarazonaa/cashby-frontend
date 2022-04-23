import Image from "next/image";
import React from "react";

// Posts
import Logo from "../../assets/Images/logoCashby.png"
import Post1 from "../../assets/Images/InstaPhotos/post1.jpg";

const PhotoBlock = () => {
    const CreatePost = (Link: string, Name: any) => {
        return(
            <div onClick={() => {window.open(Link, "_blank")}} className="photoContainer">
                <div className="nameContainer">
                    <Image src={Logo} width="35px" height="35px" className="logo" />
                    <a href="https://www.instagram.com/cashby.io/">cashby.io</a>
                </div>
                <Image src={Name} alt="Instagram tingz" />
                <div className="iconsContainer">
                    
                </div>
            </div>
        )
    }
    return(
        <section className="PhotoBlock">
            <div className="photosContainer" >
                {CreatePost("www.google.com", Post1)}
                {CreatePost("www.google.com", Post1)}
                {CreatePost("www.google.com", Post1)}
            </div>
            <div className="right-side">
                <h1>{"Photos"}</h1>
                <p>{"Click to visit our Instagram page."}</p>
            </div>
        </section>
    )
}

export default PhotoBlock;