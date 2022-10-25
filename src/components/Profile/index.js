import "./index.css";

import man from "../../assets/man.jpg";

const Profile = ({ name, age, bloodGroup, height, weight }) => {
    return (
        <div className="profile-card">
            <img src={man} className={"photo"} />
            <h4>{name}</h4>
            <div className="info-container">
                <div className="info br bb">
                    <h4>{age}</h4>
                    <p>Years</p>
                </div>
                <div className="info bl bb">
                    <h4>{bloodGroup}</h4>
                    <p>Blood</p>
                </div>
            </div>
            <div className="info-container">
                <div className="info br bt">
                    <h4>{height}</h4>
                    <p>Height</p>
                </div>
                <div className="info bl bt">
                    <h4>{weight}</h4>
                    <p>Weight</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;