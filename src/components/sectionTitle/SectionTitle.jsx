import classNames from "classnames";
import "./SectionTitle.scss";

const SectionTitle = ({ title, isColumn = false }) => {
    return (
        <div className={classNames("section-title", { "section-title--column": isColumn })}>
            <h2 className="section-title_text">{title}</h2>
            <span className="section-title_line">{"/".repeat(150)}</span>
        </div>
    );
};

export default SectionTitle;