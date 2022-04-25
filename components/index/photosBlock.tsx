import Image from "next/image";
import React from "react";

// Posts
import Logo from "../../assets/Images/logoCashby.png"
import Post1 from "../../assets/Images/InstaPhotos/post1.gif";
import Post2 from "../../assets/Images/InstaPhotos/post2.gif";
import Post3 from "../../assets/Images/InstaPhotos/post3.gif";


const PhotoBlock = () => {
    const CreatePost = (Link: string, Name: any) => {
        return(
            <div onClick={() => {window.open(Link, "_blank")}} className="photoContainer">
                <div className="nameContainer">
                    <Image src={Logo} width="45px" height="45px" className="logo" />
                    <a href="https://www.instagram.com/cashby.io/">cashby.io</a>
                </div>
                <Image src={Name} alt="Instagram Post" />
                <div className="iconsContainer">
                    <div className="left-logos">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 3v13h-6.961l-3.039 3.798-3.039-3.798h-6.961v-13h20zm2-2h-24v17h8l4 5 4-5h8v-17z"/></svg>
                    </div>
                    <div className="right-logos">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M5 0v24l7-6 7 6v-24h-14zm1 1h12v20.827l-6-5.144-6 5.144v-20.827z"/></svg>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <section className="PhotoBlock">
            <div className="photosContainer" >
                {CreatePost("www.google.com", Post1)}
                {CreatePost("www.google.com", Post2)}
                {CreatePost("www.google.com", Post3)}
            </div>
            <div className="right-side">
                <h1>{"Photos"}</h1>
                <p>{"Click to visit our Instagram page."}</p>
            </div>
        </section>
    )
}

export default PhotoBlock;