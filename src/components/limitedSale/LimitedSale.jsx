import {useEffect ,useState,Fragment} from "react";
import "./LimitedSale.scss";
import { home } from "../../data.js";
import { Link } from "react-router-dom";
import limitedSale from '../../assets/images/limited-sale.png'
const END_DATE = Date.now() + ((21 * 24 + 22) * 60 * 60 + 19 * 60 + 30) * 1000;
const getTimeLeft=()=>{
    const diff=Math.max(0, END_DATE - Date.now() );
    return{
        days: Math.floor(diff/(1000*60*60*24)),
        hours: Math.floor(diff/(1000*60*60))%24,
        minutes:Math.floor(diff/(1000*60))%60,
        seconds:Math.floor(diff/1000)%60,
}
};
const LimitedSale=()=>{
    const [timeLeft,setTimeLeft]=useState(getTimeLeft)
    const units = [
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hrs" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Sec" },
    ];
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <section className="limited-sale">
            <div className="limited-sale_inner container">
                <div className="limited-sale_img-box">
                    <img className="limited-sale_img" alt='MacBook, iPhone and Apple Watch' src={limitedSale}/>
                </div>
                <div className="limited-sale_content">
                <h2 className="limited-sale_title">{home.limitedSale.title}</h2>
                    <div className="limited-sale_timer">
                {units.map((item,index) => (
                    <Fragment key={item.label}>
                        {index > 0 && <span className="limited-sale_colon">:</span>}
                        <div className="limited-sale_unit">
                        <span className="limited-sale_value">{String(item.value).padStart(2, "0")}</span>
                        <span className="limited-sale_label">{item.label}</span>
                        </div>
                    </Fragment>
            ))}
                    </div>
                <Link className="limited-sale_btn" to="/shop">{home.limitedSale.button}</Link>
                </div>
            </div>
        </section>
    );
};
export default LimitedSale;