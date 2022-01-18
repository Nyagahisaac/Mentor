import React from 'react'

const active_loans = [
    {
        'id':'1',
        'loan_type':'Imara Loan',
    },
    {
        'id':'1',
        'loan_type':'FOSA Pride',
    },
]

function ActiveLoans() {
    return (
        <div className="row py-3 justify-content-center" style={{backgroundColor:"#F2F2F2"}}>
            <div className="col-12">
                <ul style={{listStyle: 'none'}}>
                    {active_loans.map(loan=>(
                        <li className="pb-2" key={loan.id}>{loan.loan_type}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ActiveLoans
