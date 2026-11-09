import "./Header.scss";
import { Link , NavLink } from "react-router-dom";
import { NAVIGATION ,HEADER_ICONS } from "../../constants";
import { topInfo } from "../../data";
import logo from "../../assets/logo/Logo.svg"
import classNames from "classnames";

import { Icon } from "@iconify/react";
const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="header-top_inner container">
                    {topInfo.map((item) => (
                        <span className="header-top_text" key={item.id}>
              {item.text}{" "}
                            {item.link?.to && (
                                <Link className="header-top_link " to={item.link.to}>
                                    {item.link.label}
                                </Link>
                            )}
                            {item.link?.href && (
                                <a className="header-top_link  header-top_link--removed-underline " href={item.link.href}>
                                    {item.link.label}
                                </a>
                            )}
            </span>
                    ))}
                </div>
                <div className="header-nav">
                    <div className="header-nav_inner container">
                        <Link className="header-nav_logo" to="/">
                            <img src={logo} alt="ShopLite" />
                        </Link>
                        <nav className="header-nav_menu">
                        <ul className="header-nav_list">
                            {NAVIGATION.map((item) => (
                                <li className="header-nav_item" key={item.name}>
                                    {item.children ? (
                                        <button className="header-nav_link" type="button">
                                            {item.name}
                                        </button>
                                    ) : (
                                        <NavLink
                                            to={item.to}
                                            end={item.to === "/"}
                                            className={({ isActive }) =>
                                                classNames("header-nav_link", {
                                                    "header-nav_link--active": isActive,
                                                })
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                        </nav>
                    <ul className="header-nav_icons">
                        {HEADER_ICONS.map((item) => (
                            <li className="header-nav_icon-item" key={item.name}>
                                {item.to ? (
                                    <Link className="header-nav_icon" to={item.to} aria-label={item.label}>
                                        <Icon icon={item.icon} />
                                    </Link>
                                ) : (
                                    <button className="header-nav_icon" type="button" aria-label={item.label}>
                                        <Icon icon={item.icon} />
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>



</div>
                </div>
            </div>

        </header>
    );
};

export default Header;