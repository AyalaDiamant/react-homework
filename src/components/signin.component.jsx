import { useNavigate } from "react-router-dom";
import { UserService } from "../data/user";

export const SignIn = () => {

    const navigate = useNavigate();
    const submit = (event) => {
        event.preventDefault();
        const user = {
            name: event.target.userName.value,
        }
        UserService.setUser(user);
        navigate('/');
    }

    return <div>
        <h1>Here you can sign in</h1>
        <form name="user" onSubmit={submit}>
            <input type="text" name="userName" /> <br />
            <button type="submit">Login</button>
        </form>
    </div>
}