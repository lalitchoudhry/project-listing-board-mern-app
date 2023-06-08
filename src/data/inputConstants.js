export const INPUT_FIELD = [
    {
        key: 0,
        label: <i className="bi bi-person-fill"></i>,
        name: "name",
        type: "text",
        errormessage: "Invalid name",
        placeholder: "Name",
        required: true
    },
    {
        key: 2,
        label: <i className="bi bi-envelope"></i>,
        name: "email",
        type: "email",
        errormessage: "Invalid email",
        placeholder: "Email",
        required: true
    },
    {
        key: 1,
        label: <i className="bi bi-phone"></i>,
        name: "mobile",
        type: "number",
        errormessage: "Invalid number",
        placeholder: "Mobile",
        required: true
    },
    {
        key: 3,
        label: <i className="bi bi-lock-fill"></i>,
        name: "password",
        type: "password",
        errormessage: "Invalid password",
        placeholder: "Password",
        required: true
    },
]