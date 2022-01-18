import React from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom'
import Header from './Header';
import Logo from '../images/logo.svg'
import Footer from './Footer';
import UserProfile from '../Profile/UserProfile';
import WhiteHeader from './WhiteHeader'
import statusCards from '../assests/JsonData/status-card-data.json'
import StatusCard from './StatusCard';
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import Table from './Table';
import Badge from './Badge';

const chartOptions = {
    series: [{
        name: 'Active days',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60, 80, 50, 90]
    }, {
        name: 'Inactive days',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10, 20, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}
const topCustomers = {
    head: [
        'user',
        'shares',
        'status'
    ],
    body: [
        {
            "username": "john doe",
            "price": "$15,870",
            "status": "active"
        },
        {
            "username": "frank iva",
            "price": "$12,251",
            "status": "inActive"

        },
        {
            "username": "anthony baker",
            "price": "$10,840",
            "status": "active"

        },
        {
            "username": "frank iva",
            "price": "$9,251",
            "status": "approved"

        },
        {
            "username": "anthony baker",
            "price": "$8,840",
            "status": "inActive"

        }
    ]
}

const latestOrders = {
    header: [
        "loan id",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            date: "17 Jun 2021",
            price: "$900",
            status: "partialy paid"
        },
        {
            id: "#OD1712",
            date: "1 Jun 2021",
            price: "$400",
            status: "fully paid"
        },
        {
            id: "#OD1713",
            date: "27 Jun 2021",
            price: "$200",
            status: "not paid"
        },
        {
            id: "#OD1712",
            date: "3 Dec 2021",
            price: "$400",
            status: "fully paid"
        },
        {
            id: "#OD1713",
            date: "30 march 2021",
            price: "$200",
            status: "partialy paid"
        }
    ]
}

const memberStatus = {
    "approved": "primary",
    "active": "success",
    "inActive": "danger"
}
const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.price}</td>
        <td>
            <Badge type={memberStatus[item.status]} content={item.status} />
        </td>
    </tr>
)

const renderLoansHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderLoansBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={loanStatus[item.status]} content={item.status} />
        </td>
    </tr>
)

const loanStatus = {
    "partialy paid": "warning",
    "fully paid": "success",
    "not paid": "danger"
}

export const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer)

    return (
        <div className='dashboard'>
            {/* <div className='dashboardWrapper'>
                <div className='topleft'>
                    <span className='header' >


                    </span>
                </div>
                <div className=' text-center '>

                </div>
                <div className='topright pr-5'>
                       
                </div>
            </div> */}

            <div className="sidebar">
                <div className='others ' >
                    <WhiteHeader />

                    < div className='container'>
                        <h2 className="page-header text-center mt-3">Dashboard</h2>
                        {/* <div className='  topnav_search '>
                            <input type="text" placeholder='Search here ....' />
                            <i class='bx bx-search '></i> 
                             <box-icon name='search' ></box-icon>
                        </div> */}

                        <div className='row   '>
                            <div className='col-6 one ' >
                                <div className='row p-2'>
                                    {
                                        statusCards.map((item, index) => (
                                            <div className="col-6" key={index}>
                                                <StatusCard
                                                    icon={item.icon}
                                                    count={item.count}
                                                    title={item.title}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="col-6 p-3 ">
                                    <div className="card full-height">
                                        <div className="card full-height ">
                                            <Chart
                                                options={themeReducer === 'theme-mode-dark' ? {
                                                    ...chartOptions.options,
                                                    theme: { mode: 'dark' }
                                                } : {
                                                    ...chartOptions.options,
                                                    theme: { mode: 'light' }
                                                }}
                                                series={chartOptions.series}
                                                type='line'
                                                height='200%'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8   status">
                                <div className="card loan">
                                    <div className="card__header">
                                        <h3 className='text-center'> Loans</h3>
                                    </div>
                                    <div className="card__body">
                                        <Table
                                            headData={latestOrders.header}
                                            renderHead={(item, index) => renderLoansHead(item, index)}
                                            bodyData={latestOrders.body}
                                            renderBody={(item, index) => renderLoansBody(item, index)}
                                        />
                                    </div>
                                    <div className="card__footer text-center">
                                        <Link to='/'>view all</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 shares' >
                                <div className="card  p-1">
                                    <div className="card__header  text-center">
                                        <h3>Top Dividends</h3>
                                    </div>
                                    <div className="card__body">
                                        <Table
                                            headData={topCustomers.head}
                                            renderHead={(item, index) => renderCusomerHead(item, index)}
                                            bodyData={topCustomers.body}
                                            renderBody={(item, index) => renderCusomerBody(item, index)}
                                        />
                                    </div>
                                    <div className="card__footer text-center view">
                                        <Link to='/'>view all</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}
