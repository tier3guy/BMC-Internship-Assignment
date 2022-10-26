import "./index.css";

// External Libraries
import { Chart as ChartJS, Scale } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Progress = () => {
    return (
        <div className="progress">
            <div className="graph-header">
                <h3 className="tittle">Your Activity</h3>
                <div className="week-dropdown">

                    <select name="year" id="year">
                        <option value="none" id="label">Week <i class="fa-solid fa-chevron-down"></i></option>
                        <option value="2020">Week 1</option>
                        <option value="2021">Week 2</option>
                        <option value="2022">Week 3</option>
                    </select>
                </div>
            </div>
            <div className="graph">
                <Bar
                    data={{
                        labels: ["Mo", "Tu", "We", "Thu", "Fr", "Sa", "Su"],
                        datasets: [{
                            label: "",
                            data: [65, 59, 80, 81, 56, 55, 40],
                            barThickness: 15,
                            backgroundColor: [
                                '#FF6D28',
                                '#FEDB39',
                                '#FF7F3F',
                                '#FF7F3F',
                                '#FEDB39',
                                '#FEDB39'
                            ],
                            fill: true,
                            borderColor: '#A460ED',
                            tension: 1,
                            borderRadius: 15,
                        }]
                    }}
                    options={{
                        maintainAspectRatio: false,
                        pointBorderWidth: 0,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                ticks: {
                                    // For a category axis, the val is the index so the lookup via getLabelForValue is needed
                                    callback: function (val, index) {
                                        // Hide every 2nd tick label
                                        return index % 2 === 0 ? this.getLabelForValue(val) : '';
                                    },
                                    color: 'grey',
                                }
                            }
                        },
                        responsive: true
                    }}
                />
            </div>
        </div>
    )
}

export default Progress;