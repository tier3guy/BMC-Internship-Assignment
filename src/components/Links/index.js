import './index.css';

const Notification = ({ count }) => {
    return (
        <div className='notify-icon'>
            <p>{count}</p>
        </div>
    );
}

const Links = ({ name, link, icon, notification }) => {
    return (
        <div className='navbar-link'>

            <a href={link}>
                <i className={icon + " link-icon "} ></i>
                <p className='name'>{name}</p>
                {
                    (notification > 0) ? <Notification count={notification} /> : null
                }
            </a>
        </div>
    );
}

export default Links;