import React, { useState, useEffect } from 'react'
import './pivot_table.module.css'
import '../index.css';
import { Link } from 'react-router-dom'
import RegistrationSteps from '../components/RegistrationSteps'

import Arrow from './orangeArrow.svg'

const dividends_shares = [
    {
        'id':'1',
        'type': 'shares',
        'shares': '30000',
        'rate':'15',
        'dividend':'4500',
        'withholding_tax_percentage':'5',
        'withholding_tax':'225',
        'net_div':'4275'
    },
]

const dividends_outstanding_shares = [
    {
        'id':'1',
        'type': 'o/shares',
        'shares': '1330000',
        'rate':'11.8',
        'dividend':'156940',
        'withholding_tax_percentage':'5',
        'withholding_tax':'7847',
        'net_div':'149093'
    },
]
const total_shares = [
    {
        'id':'1',
        'type': 'Total',
        'shares': '0',
        'rate':'-',
        'dividend':'0',
        'withholding_tax_percentage':'-',
        'withholding_tax':'0',
        'net_div':'0'
    },
]

function MyDividends() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    
    const [sum_shares, setShares] = useState(12)
    const [sum_dividend, setDividend] = useState(130)
    const [sum_withholding_tax, setWithholding_tax] = useState(145)
    const [sum_net_div, setNet_div] = useState(13)
    useEffect(() =>{
        let share_value = parseFloat(dividends_shares[0]['shares']) + parseFloat(dividends_outstanding_shares[0]['shares'])
        let dividend_value = parseFloat(dividends_shares[0]['dividend']) + parseFloat(dividends_outstanding_shares[0]['dividend'])
        let withholding_tax_value = parseFloat(dividends_shares[0]['withholding_tax']) + parseFloat(dividends_outstanding_shares[0]['withholding_tax'])
        let net_div_value = parseFloat(dividends_shares[0]['net_div']) + parseFloat(dividends_outstanding_shares[0]['net_div'])
        setShares(share_value)
        setDividend(dividend_value)
        setWithholding_tax(withholding_tax_value)
        setNet_div(net_div_value)
    }, [])


    return (
        <div className="row py-3 px-3" style={{backgroundColor:"#F2F2F2"}}>
            <p>Name: Humphrey Ngeruro Nganga</p>
            <p>PNO: 82</p>
            <div className="row">
                <div className="col-md-12 col-10 pc-screen-hidden">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">TYPE</th>
                                <th scope="col">SHARES</th>
                                <th scope="col">RATE (%)</th>
                                <th scope="col">DIV</th>
                                <th scope="col">W\TAX (%)</th>
                                <th scope="col">WTAX</th>
                                <th scope="col">NET DIV</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dividends_shares.map(entry=>(
                                <tr>
                                    <th scope="row">{entry.type}</th>
                                    <td>{entry.shares}</td>
                                    <td>{entry.rate}</td>
                                    <td>{entry.dividend}</td>
                                    <td>{entry.withholding_tax_percentage}</td>
                                    <td>{entry.withholding_tax}</td>
                                    <td>{entry.net_div}</td>
                                </tr>
                            ))}
                            {dividends_outstanding_shares.map(entry=>(
                                <tr>
                                    <th scope="row">{entry.type}</th>
                                    <td>{entry.shares}</td>
                                    <td>{entry.rate}</td>
                                    <td>{entry.dividend}</td>
                                    <td>{entry.withholding_tax_percentage}</td>
                                    <td>{entry.withholding_tax}</td>
                                    <td>{entry.net_div}</td>
                                </tr>
                            ))}

                            {total_shares.map(entry=>(
                                <tr>
                                    <th scope="row">{entry.type}</th>
                                    <td>{sum_shares}</td>
                                    <td>{entry.rate}</td>
                                    <td>{sum_dividend}</td>
                                    <td>{entry.withholding_tax_percentage}</td>
                                    <td>{sum_withholding_tax}</td>
                                    <td>{sum_net_div}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="col-12 col-md-8 mobile-screen-hidden">
                    <table role="table mobile-screen-hidden">
                        <thead role="rowgroup">
                        <h2 className="py-3">Issued Shares</h2>
                            {dividends_outstanding_shares.map(entry=>(
                                <tr role="row">
                                    <th role="columnheader">TYPE</th>
                                    <th role="columnheader">SHARES</th>
                                    <th role="columnheader">RATE (%)</th>
                                    <th role="columnheader">DIV</th>
                                    <th role="columnheader">W\TAX (%)</th>
                                    <th role="columnheader">WTAX</th>
                                    <th role="columnheader">NET DIV</th>
                                </tr>
                            ))}
                        </thead>
                        <tbody role="rowgroup">
                            {dividends_shares.map(entry=>(
                                <tr role="row">
                                    <td role="cell">{entry.type}</td>
                                    <td role="cell">{entry.shares}</td>
                                    <td role="cell">{entry.rate}</td>
                                    <td role="cell">{entry.dividend}</td>
                                    <td role="cell">{entry.withholding_tax_percentage}</td>
                                    <td role="cell">{entry.withholding_tax}</td>
                                    <td role="cell">{entry.net_div}</td>
                                </tr>
                            ))}
                            <h2>Outstanding Shares</h2>
                            {dividends_outstanding_shares.map(entry=>(
                                <tr role="row">
                                    <td role="cell">{entry.type}</td>
                                    <td role="cell">{entry.shares}</td>
                                    <td role="cell">{entry.rate}</td>
                                    <td role="cell">{entry.dividend}</td>
                                    <td role="cell">{entry.withholding_tax_percentage}</td>
                                    <td role="cell">{entry.withholding_tax}</td>
                                    <td role="cell">{entry.net_div}</td>
                                </tr>
                            ))}

                            <h2>Total Shares</h2>
                            {total_shares.map(entry=>(
                                <tr role="row">
                                    <td role="cell">{entry.type}</td>
                                    <td role="cell">{sum_shares}</td>
                                    <td role="cell">{entry.rate}</td>
                                    <td role="cell">{sum_dividend}</td>
                                    <td role="cell">{entry.withholding_tax_percentage}</td>
                                    <td role="cell">{sum_withholding_tax}</td>
                                    <td role="cell">{sum_net_div}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyDividends
