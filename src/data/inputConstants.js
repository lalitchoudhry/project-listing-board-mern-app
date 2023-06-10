export const SIGNUP_INPUT_FIELD = [
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

export const LOGIN_INPUT_FIELD = [
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
        key: 3,
        label: <i className="bi bi-lock-fill"></i>,
        name: "password",
        type: "password",
        errormessage: "Invalid password",
        placeholder: "Password",
        required: true
    }
]

export const ADD_PRODUCT_INPUT = [
    {
        key: 0,
        name: "name",
        type: "text",
        errormessage: "Invalid name",
        placeholder: "Name of the company",
        required: true
    },
    {
        key: 1,
        name: "category",
        type: "text",
        errormessage: "Invalid category",
        placeholder: "Category",
        required: true
    },
    {
        key: 2,
        name: "imgUrl",
        type: "text",
        errormessage: "Invalid Url",
        placeholder: "Add logo url",
        required: true
    },
    {
        key: 3,
        name: "link",
        type: "text",
        errormessage: "Invalid link",
        placeholder: "Link of product",
        required: true
    },
    {
        key: 4,
        name: "description",
        type: "text",
        errormessage: "Invalid description",
        placeholder: "Add description",
        required: true
    }
]