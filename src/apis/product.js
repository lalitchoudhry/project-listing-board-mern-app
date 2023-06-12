
const serverUrl = process.env.REACT_APP_SERVER_URL;

// GET ALL PRODUCTS
export const getAllProducts = async (sort)=>{
    try {
        const response = await fetch(`${serverUrl}product?sort=${sort}`)
        .then( async response => await response.json())
        .catch(err => console.log("getAllProducts response: ", err));
    
        return response;
    } catch (error) {
        console.log("getAllProducts :: ", error);
    }
}

// GET SINGLE PRODUCTS
export const getSingleProduct = async (id)=>{
    try {
        const response = await fetch(`${serverUrl}product?_id=${id}`)
        .then( async response => await response.json())
        .catch(err => console.log("getAllProducts response: ", err));
    
        return response;
    } catch (error) {
        console.log("getAllProducts :: ", error);
    }
}

// GET FILTERED PRODUCT
export const getFilteredProducts = async(category, sort)=>{

    const url = `${serverUrl}product?category=${category}&sort=${sort}`;
    const response = await fetch(url)
    .then( async response => await response.json())
    .catch(err => console.log("getFilteredProduct response: ", err));

    return response;
}

// POST PRODUCT
export const postProduct = async ( productData, auth)=>{
    try {
        const url = `${serverUrl}product?token=${auth}`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: productData
        })
        .then(async (response)=>{
            if (response.status === 201) return await response.json();
            return response.status;})
        .catch((err)=>console.log("postProduct res: ", err));

        return response;
    } catch (error) {
        console.log("postProduct :: ", error);
    }
}

// UPDATE PRODUCT
export const updateProduct = async (id, productData)=>{
    try {
        const url = `${serverUrl}product/${id}`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(productData)
        })
        .then(async (response)=>{
            if (response.status === 201) return await response.json();
            return response.status;})
        .catch((err)=>console.log("updateProduct res: ", err));

        return response;
    } catch (error) {
        console.log("updateProduct :: ", error);
    }
}