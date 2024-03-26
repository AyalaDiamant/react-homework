import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/user.context";
import { User } from "../interfaces/user.interface";
import { Users } from "../data/users.json";

export const SignUp = () => {

    const userContext = useContext(UserContext);
    const navigate = useNavigate()

    const addUser = (event:any) => {
        event.preventDefault();
        const user: User = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            id: event.target.idNumber.value,
        }
        Users.push(user);
        userContext.setUser(user);
        navigate('/');
    }
    
    return  <div>
        <h2>Enter new user Details</h2>
        <form onSubmit={addUser}>
            <input type="text" placeholder="first name" name="firstName" /> <br /> <br />
            <input type="text" placeholder="last name" name="lastName" /> <br /> <br />
            <input type="text" placeholder="id number" name="idNumber" /> <br /> <br />
            <button type="submit">Save</button>
        </form>
    </div>
}