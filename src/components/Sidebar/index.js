import "./index.css";

// components
import Calender from "../Calender";

const Department = ({ color, icon, department, name, time }) => {
    return (
        <div className="doctor-card" style={{ backgroundColor: color }}>
            <i className={icon + " ico "}></i>
            <div className="name-dept">
                <h5>{department}</h5>
                <h6>{name}</h6>
            </div>
            <div className="timecard">
                <p>{time}</p>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    );
}

const Schedulers = () => {
    return (
        <>
            <Department color={"#6F38C5"} icon={"fa-solid fa-tooth"} department={"Dentists"} name={"Dr. Gaina Curtis"} time={"10 AM"} />
            <Department color={"#FFD372"} icon={"fa-solid fa-eye-dropper"} department={"Oculists"} name={"Dr. Terry Aminoff"} time={"4 PM"} />
        </>
    );
}

const Sidebar = () => {
    return (
        <div className="wrapper">
            <Calender />
            <div className="border-bottom" />
            <Schedulers />
        </div>
    );
}

export default Sidebar;