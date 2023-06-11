const serverUrl = process.env.REACT_APP_SERVER_URL;

// REGISTER
export const registerUser = async(userData)=>{
    try {
        const url = `${serverUrl}register`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: userData
        })
        .then(async (response)=>{
            if (response.status === 201) return await response.json();
            return response.status;})
        .catch((err)=>console.log("registerUser res: ", err));

        return response;
    } catch (error) {
        console.log("registerUser :: ", error);
    }
}

// LOGIN
export const loginUser = async(userData)=>{
    try {
        const url = `${serverUrl}login`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: userData
        })
        .then(async(response)=>{

            if (response.status === 200) return await response.json();
            if (!response.ok) return;
            return response.status;})
        .catch((err)=>console.log(err))

        return response;
    } catch (error) {
        console.log("loginUser :: ", error)
    }
}