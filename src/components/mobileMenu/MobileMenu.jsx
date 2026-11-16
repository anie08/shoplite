import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import "./MobileMenu.scss";
import { NAVIGATION ,HEADER_ICONS } from "../../constants";
import { FiX } from "react-icons/fi";
import {Icon} from "@iconify/react";
const getActiveClass = ({ isActive }) => (isActive ? "active-link" : "");
const MobileMenu = ({ closeMenu, isOpen }) => {
    return (
        <div className={classNames("mobile-menu", { "mobile-menu--open": isOpen })}>
            <button
                type="button"
                className="mobile-menu__close"
                aria-label="Close menu"
                onClick={closeMenu}
            >
        <span className="mobile-menu__close-icon">
          <FiX />
        </span>
            </button>
            <div className="mobile-menu_panel">
            <ul className="mobile-menu__list">
                {NAVIGATION.map((item) => (
                    <li className="mobile-menu_item" key={item.name}>
                        {item.children ? (
                            <span className="mobile-menu_link">{item.name}</span>
                        ) : (
                            <NavLink to={item.to} className={getActiveClass} onClick={closeMenu}>
                                {item.name}
                            </NavLink>
                        )}
                    </li>
                ))}
            </ul>

                <div className="mobile-menu__links">
                    <ul className="mobile-menu_icons">
                        {HEADER_ICONS.map((item) => (
                            <li className="mobile-menu_icon-item" key={item.name}>
                                {item.to ? (
                                    <Link className="mobile-menu__icon-btn" to={item.to} aria-label={item.label}>
                                        <Icon icon={item.icon} />
                                    </Link>
                                ) : (
                                    <button className="mobile-menu__icon-btn" type="button" aria-label={item.label}>
                                        <Icon icon={item.icon} />
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default MobileMenu;
