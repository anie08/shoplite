import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs.jsx";
import React from 'react';
import {about} from "../../data.js"
import PageBanner from "../../components/pageBanner/PageBanner.jsx";
const AboutUs = () => {
    return (
        <div>
            <PageBanner title={about.title} lastLabel={about.title} />
        </div>
    );
};

export default AboutUs;