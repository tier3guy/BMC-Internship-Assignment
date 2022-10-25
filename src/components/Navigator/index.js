// Essentials
import './index.css';

// Components
import Logo from '../Logo';
import Links from '../Links';
import Download from '../Download';

const Navigator = () => {
    return (
        <div className="wrapper-navigator">
            <Logo />

            <div className='links-container'>

                <Links
                    name={'Overview'}
                    link={'/overview'}
                    icon={'fa-solid fa-chart-pie'}
                    notification={0}
                />

                <Links
                    name={'Departments'}
                    link={'/overview'}
                    icon={'fa-solid fa-hospital'}
                    notification={0}
                />

                <Links
                    name={'Doctors'}
                    link={'/overview'}
                    icon={'fa-solid fa-user-doctor'}
                    notification={0}
                />

                <Links
                    name={'Analyzes'}
                    link={'/overview'}
                    icon={'fa-solid fa-book'}
                    notification={0}
                />

                <Links
                    name={'History'}
                    link={'/overview'}
                    icon={'fa-solid fa-history'}
                    notification={0}
                />

                <Links
                    name={'Messages'}
                    link={'/overview'}
                    icon={'fa-solid fa-message'}
                    notification={14}
                />

            </div>
            <div className='border-bottom' />
            <Download />
        </div>
    )
}

export default Navigator;