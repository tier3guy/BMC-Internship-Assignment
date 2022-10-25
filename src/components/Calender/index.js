import { useState } from "react";

// external packages
import Calendar from 'react-calendar';

// essentials
import "./index.css";

const Calender = () => {

    const [date, setDate] = useState(new Date());

    return (
        <div>
            <Calendar onChange={setDate} value={date} />
        </div>
    )
}

export default Calender;