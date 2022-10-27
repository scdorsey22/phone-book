import React, {useState} from "react";
import { Link } from "react-router-dom";
import { addToPhoneBook } from "../../services/phonebookServices";

const AddNumber = () => {
    const [name, setName] = useState();
    const [phone, setPhone] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && phone) {
            addToPhoneBook(name, phone)
        }
        console.log('You must enter a name and number')

        console.log(`submitted: ${name} - ${phone}`)
    };

return (
    <div>
        <Link to="/">View Contacts</Link>
        <h2>Add Number</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            onChange={({target}) => setName(target.value)}
            placeholder="Name"
            />
            <br/>
            <input
            type="text"
            onChange={({target}) => setPhone(target.value)}
            placeholder="Phone Number"
            />
            <br/>
            <button type="submit">Add Number</button>
        </form>
    </div>
)

}

export default AddNumber;