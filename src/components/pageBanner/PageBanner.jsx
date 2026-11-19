import React from 'react';
import Breadcrumbs from "../breadcrumbs/Breadcrumbs.jsx";
const PageBanner = ({title, lastLabel}) => {
    return (
        <section className="page-banner">
            <div className="page-banner_inner container">
                <h1 className="page-banner_title">{title}</h1>
                <Breadcrumbs lastLabel={lastLabel} />
            </div>

        </section>
    );
};

export default PageBanner;