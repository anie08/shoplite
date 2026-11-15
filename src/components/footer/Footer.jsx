import {footer} from "../../data.js";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "../../assets/logo/Logo.svg"

import './Footer.scss'

const Footer = () => {
    return (<footer className="footer">
        <div className="footer_inner container">
            <div className="footer_instagram"></div>
            <div className="footer_about">
                <div className="footer_about-top">
                    <div className="footer_logo"><img src={logo} alt={footer.logo}/></div>
                    <p className="footer_text">
                        {footer.about}
                    </p>
                </div>

                <div className="footer_socials">
                    {footer.socials.map((item) => (
                        <a className="footer_social-link" key={item.name} href={item.href} aria-label={item.name}><Icon icon={item.icon} /></a>))}
                </div>
            </div>

            <div className="footer_col footer_col-quick">
                <h4 className="footer_title">{footer.quickLinks.title}</h4>
                <ul className="footer_list">
                    {footer.quickLinks.links.map((item) => (<li className="footer_item" key={item.name}>
                        <Link className="footer_link" to={item.to}>
                            {item.name}
                        </Link>
                    </li>))}
                </ul>
            </div>

            <div className="footer_col footer_col-help">
                <h4 className="footer_title">{footer.helpInfo.title}</h4>
                <ul className="footer_list">
                    {footer.helpInfo.links.map((item) => (<li className="footer_item" key={item.name}>
                        <Link className="footer_link" to={item.to}>
                            {item.name}
                        </Link>
                    </li>))}
                </ul>
            </div>
            <div className="footer_col footer_col-contact">
                <h4 className="footer_title">{footer.contactUs.title}</h4><address className="footer_contact">
                <p className="footer_contact-text">
                    {footer.contactUs.emailText}
                </p>
                <a className="footer_contact-link" href={`mailto:${footer.contactUs.email}`}>
                    {footer.contactUs.email}
                </a>
                <p className="footer_contact-text">{footer.contactUs.phoneText}</p>

                <a className="footer_contact-link" href={`tel:${footer.contactUs.phone}`}>
                    {footer.contactUs.phone}
                </a>
            </address>
            </div>
        </div>
        <div className="footer_bottom">
            <div className="footer_bottom-inner container">
                <div className="footer_options">
                    <span className="footer_option-text">{footer.shipWith}</span>
                    {footer.shipIcons.map((icon) => <Icon className="footer_option-icon" icon={icon} key={icon} />)}
                    <span className="footer_option-text">{footer.paymentOptions}</span>
                    {footer.paymentIcons.map((icon) => <Icon className="footer_option-icon" icon={icon} key={icon} />)}
                </div>
                <p className="footer_copyright">{footer.copyright}</p>
            </div>
        </div>
    </footer>);
};

export default Footer;
