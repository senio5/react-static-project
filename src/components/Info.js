import React from "react";
import user from '../user-picture/heavenlee.jpg'
import Email from '../button-images/email-icon.png'
import LinkedIn from '../button-images/linkedin-image.png'

export default function Info(){
    return(
        <div className="info-box">
            <div>
                <img className="profile-pic" src={user} alt="" />
            </div>
            <p className="name">Heavenlee</p>
            <p className="job-title">FrontEnd Developer</p>
            <nav>
                <button><img className="email-image" src={Email} alt=""/>Email</button>
                <button><img className="linkedin-image" src={LinkedIn} alt=""/>LinkedIn</button>
            </nav>
        </div>
    )
}