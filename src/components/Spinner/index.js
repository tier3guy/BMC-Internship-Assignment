import "./index.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
//rgba(62, 152, 199,
const Spinner = ({ percentage, message, color }) => {
    return (
        <div className="wrap-up">
            <h4 className="message">{message}</h4>
            <div className="wrapper-progress-bar">

                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                        pathColor: `${color} ${percentage / 100})`,
                        textColor: 'white',
                        trailColor: '#d6d6f4',
                        backgroundColor: '#E0144C',
                    })}
                />
                <h3 className="">{percentage + "%"}</h3>
            </div>
        </div>
    );
}

export default Spinner;