import './index.css';

// images
import image from "../../assets/download-img.jpg"


const Download = () => {
    return (
        <div className="download-card">
            <img src={image} alt="img" className="image" />
            <a href="#" className='download-button'>
                <p>Desktop App</p>
                <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    );
}

export default Download;