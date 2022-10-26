import "./index.css";

// External Libraries
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";


const Graph = () => {

    return (
        <div className="graph-container">
            <div className="graph-header">
                <h3 className="tittle">Your health condition</h3>
                <div className="year-dropdown">

                    <select name="year" id="year">
                        <option value="none" id="label">Year <i class="fa-solid fa-chevron-down"></i></option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
            </div>
            <div className="graph">
                <Line
                    data={{
                        labels: ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [{
                            label: "",
                            data: [65, 59, 80, 81, 56, 55, 40, 32, 55, 59, 63, 95],
                            fill: false,
                            borderColor: '#A460ED',
                            tension: 0.1
                        }]
                    }}
                    options={{
                        maintainAspectRatio: false,
                        pointBorderWidth: 0,
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Graph;