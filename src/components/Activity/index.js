import "./index.css";
import Spinner from "../Spinner";

const Activity = () => {
    const percentage = 83;
    return (
        <div className="activity">
            <Spinner percentage={75} message={"Growth Health"} color={"rgba(255, 88, 88,"} />
            <Spinner percentage={83} message={"Water Balance"} color={"rgba(8, 58, 169,"} />
        </div>
    )
}

export default Activity;