import axios from 'axios';
var categoriesLink = "http://127.0.0.1:8000"


export const Categories = (handleCats) => axios.get(categoriesLink+"/categories/").then(res=>handleCats(res.data))

export const Shops      = (handleShops) => axios.get(categoriesLink+"/shops/").then(res=>handleShops(res.data))

export const Products = (handleProducts) => axios.get(categoriesLink).then(res=>handleProducts(res.data))

export const Product = (handleProduct) => axios.get(categoriesLink).then(res=>handleProduct(res.data))


export const decodeUrl = (url, handleProduct, handleProdFeatures, handleProdShop) =>{
    
    var id = ''
    for (var i = url.length - 1; i >= 0; i--){
        if (url[i] === '_'){
            id = url.slice(i+1  ,url.length)
            axios.get(categoriesLink+"/"+id+"/").then(res=>{
                handleProduct(res.data)
                axios.get(categoriesLink+"/"+res.data.id+"/features/").then(featuresRes=>handleProdFeatures(featuresRes.data))
                axios.get(categoriesLink+"/shops/" + res.data.shop+"/").then(response=>handleProdShop(response.data))
            })
        }
    }
}