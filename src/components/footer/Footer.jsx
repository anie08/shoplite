import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa6";
import Logo from "../../assets/logo/Logo.svg" ;

import "./Footer.scss";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_inner container">
                <div className="footer_about">
                    <div className="footer_about-top">
                        <Logo className="footer_logo" aria-label="Cyber" role="img" />
                        <p className="footer_text">
                            We are a residential interior design firm located in Portland. Our
                            boutique-studio offers more than
                        </p>
                    </div>

                    <div className="footer_socials">
                        <a className="footer_social-link" href="#" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a className="footer_social-link" href="#" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a className="footer_social-link" href="#" aria-label="TikTok">
                            <FaTiktok />
                        </a>
                        <a className="footer_social-link" href="#" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                <div className="footer_col footer_col-services">
                    <h4 className="footer_title">Services</h4>
                    <ul className="footer_list">
                        {shopLinks.map((item) => (
                            <li className="footer_item" key={item.name}>
                                <Link className="footer_link" to={item.to}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer_col footer_col-assistance">
                    <h4 className="footer_title">Assistance to the buyer</h4>
                    <ul className="footer_list">
                        {assistanceLinks.map((item) => (
                            <li className="footer_item" key={item.name}>
                                <Link className="footer_link" to={item.to}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
