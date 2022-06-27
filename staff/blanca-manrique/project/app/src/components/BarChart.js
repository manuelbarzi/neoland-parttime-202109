import { useState, useEffect, useContext } from 'react'
import { monthlyExpenses } from '../logic'
import Context from './Context'
// import { Chart as ChartJS, BarElement } from 'chart.js'
import { Chart, registerables } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import './Dashboard.css'

Chart.register(
    ...registerables
)

const BarChart = () => {
    const { setFeedback } = useContext(Context)
    const [chart, setChart] = useState([])

    useEffect(() => {
        try {
            monthlyExpenses(sessionStorage.token, 2022)
                .then(chart => {
                    setChart(chart)
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }, []) 

    var data = {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] ,
        // labels: chart ,
        datasets: [{
            label: 'Monthly expenses from completed and in progress orders',
            data: chart,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    var options = {
        maintainAspectRadio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    }

    return (
        <div>
            <Bar className='bar'
                data={data}
                height={400}
                options={options}
            />
        </div>
    )

}
export default BarChart