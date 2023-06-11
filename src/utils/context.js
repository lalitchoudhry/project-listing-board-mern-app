import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// all apis import
import { registerUser, loginUser } from '../apis/user'

export const Context = createContext();

const AppContext = ({ children }) => {

    // all states and variable
    const navigate = useNavigate();
    const auth = localStorage.getItem("user");
    const [signupInput, setSignupInput] = useState({
        name: "",
        mobile: "",
        email: "",
        password: ""
    })
    const [loginInput, setLoginInput] = useState({
        email: "",
        password: ""
    })

    // functions
    const registerUserData = async () => {
        const userData = JSON.stringify(signupInput);
        const result = await registerUser(userData);
        if (!result) return;
        if (result === 409) {
          alert("User is already exist. Please login")
          navigate("/login");
          return;
        }
        if (result === 400) {
          alert("Fill All Inputs");
          return;
        }
        localStorage.setItem("user", JSON.stringify(result))
        navigate("/");
    }

    const loginUserData = async () => {
        const userData = JSON.stringify(loginInput);
        const result = await loginUser(userData);
        if (!result) return alert("Invalid");
        if (result === 400) {
          alert("Fill All Inputs");
          return;
        }
        localStorage.setItem("user", JSON.stringify(result))
        navigate("/");
    }

    // useEffects

    return <Context.Provider
        value={{
            auth,
            signupInput,
            setSignupInput,
            loginInput,
            setLoginInput,
            registerUserData,
            loginUserData
        }}

    >{children}</Context.Provider>
}

export default AppContext;