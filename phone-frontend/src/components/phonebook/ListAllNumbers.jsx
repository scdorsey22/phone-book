import React from "react";
import { Link } from "react-router-dom";

const ListAllNumbers = () => {
    return (
        <div>
            <Link to='add-number'>Add Number</Link>
            <h2>Phone Numbers</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Foo Bar</td>
                        <td>(999) 888-7777</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListAllNumbers;