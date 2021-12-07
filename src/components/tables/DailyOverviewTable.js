import { useState } from "react";
import { CARGROUPS } from "../../data/carGroups";

function TableRow () {
    let row = []
    CARGROUPS.map((item) => (row.push(<tr><td id={item[0]}>{item[0]}</td></tr>)))
    return (   
        <>
        {row}
        </>
    )
}


function countBookings (date, carGroup) {
    
}

export default function DailyOverviewTable (props) {


    

    const [date, setDate] = useState(new Date());

    return (
        <div>
            <p id="large">Current Date: { (new Date(date)).toLocaleDateString() }</p>
            <div style={{display:"flex", flexDirection:"row", marginBottom:"16px"}}>
                <form style={{marginRight:"32px"}}>
                    <input className = "inputField" type="date" onChange = {(e) => setDate(e.target.value)}></input>
                </form>
                <button onClick={(e) => setDate(new Date ())}>Jump to today</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Car Group</th>
                        <th>Bookings</th>
                        <th>Available</th>
                        <th>Released</th>
                        <th>Need</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow />
                </tbody>
            </table>
        </div>
    )
}