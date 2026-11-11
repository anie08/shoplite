import { Icon } from "@iconify/react";
import "./Features.scss";
import {features, } from "../../data.js";

const Features = () => {
    return (
        <section className="features">
            <div className="features_inner container">

                {features.map((item) => (
                    <div className="features_item" key={item.id}>
                        <span className="features_icon">
                            <Icon icon={item.icon} />
                        </span>
                        <div className="features_context">
                            <h3 className="features_title">{item.title}</h3>
                            <p className="features_text">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
