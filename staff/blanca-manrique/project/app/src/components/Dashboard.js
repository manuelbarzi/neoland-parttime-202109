import BarChart from './BarChart'
import DoughnutChart from './DoughnutChart'
import './Dashboard.css'

function Dashboard() {
    return <div className='Dashboard'>
        <h1 className='Dashboard__title'>Dashboard</h1>
        <BarChart />
        <DoughnutChart />
    </div>
}
export default Dashboard