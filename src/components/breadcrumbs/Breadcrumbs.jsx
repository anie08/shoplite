import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.scss";
const Breadcrumbs = ({lastLabel})=> {
    const {pathname} = useLocation();
    const paths = pathname
        .split("/")
        .filter(Boolean)
        .map((item, index, arr) => ({
            name: item,
            path: arr.slice(0, index + 1).join("/"),
        }));

    const pathsToPaint=[{name: "Home",path: ""}, ...paths]
    return (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
            {pathsToPaint.map((item, index) => {
                const isCurrent = index === pathsToPaint.length - 1;

                return (
                    <div className="breadcrumbs_item" key={item.path || "home"}>
                        {isCurrent ? (
                            <span
                                className="breadcrumbs_link breadcrumbs_link--current"
                                aria-current="page"
                            >
                {lastLabel || item.name}
              </span>
                        ) : (
                            <Link className="breadcrumbs_link" to={"/" + item.path}>
                                {item.name}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>

    )
}
export default Breadcrumbs;