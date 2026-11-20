import React from 'react';
import {about} from "../../data.js";
import {Icon} from "@iconify/react";
import {Link} from "react-router-dom";
import "./AboutInfo.scss"
const AboutInfo = () => {
    return (
        <section className="about-info">
            <div className="about-info_inner container">
            <div className='about-info_media'>
                <div className="about-info_img-box">
                    <img src={about.videoImage} alt={about.heading} />
                </div>
                <button className="about-info_play" type="button" aria-label="Play video">
                    <Icon icon={about.playIcon} />
                </button>
            </div>
                <div className='about-info_content'>
                    <h2 className="about-info_title">{about.heading}</h2>
                    <p className="about-info_text">{about.text}</p>
            <Link className="about-info_btn" to="/shop">
                {about.button}
            </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutInfo;