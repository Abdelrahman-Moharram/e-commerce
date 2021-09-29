import axios from 'axios';
var categoriesLink = "http://127.0.0.1:8000"


export const Categories = (handleCats) => axios.get(categoriesLink+"/categories/").then(res=>handleCats(res.data))

export const Shops      = (handleShops) => axios.get(categoriesLink+"/shops/").then(res=>handleShops(res.data))

export const Products = (handleProducts) => axios.get(categoriesLink).then(res=>handleProducts(res.data))

export const Product = (handleProduct) => axios.get(categoriesLink).then(res=>handleProduct(res.data))


// function decodeUrl (url){
//     for (var i = url.length - 1; i >= 0; i--){
//         if (url[i] === '_'){
//             return url.slice(i+1  ,url.length)
//         }
//     }
// }

function filterData(featuresRes, sub_featuresRes){
    var allFeatures = []
    featuresRes.data.map(item=>
        {
            var subs = []
            sub_featuresRes.data.filter(el=>{
                // console.log(item.feature + "  " + el.desc+" = "+( item.id === el.prod_feature))
                if (item.id === el.prod_feature)
                    subs.push(el)
            })
            allFeatures.push(subs)
        }

    
    )
    // console.log(allFeatures)
    return allFeatures
}

export const getProd_subProd = (id, handleProduct, handleProdFeatures, handleProdShop, handleProd_SubFeatures) =>{
    
    
    
    if (id !== null)
    {

        try{
            axios.get(categoriesLink+"/"+id+"/").then(res=>{
                handleProduct(res.data)
                axios.get(categoriesLink+"/"+res.data.id+"/prod-features/").then(featuresRes=>{
                    handleProdFeatures(featuresRes.data.filter(el=>el.prod===res.data.id))
                axios.get(categoriesLink+"/"+res.data.id+"/prod-features/"+res.data.id+"/sub-features/").then(sub_featuresRes=>
                    {
                        handleProd_SubFeatures(()=>filterData(featuresRes, sub_featuresRes));
                    }
                    )})
                    axios.get(categoriesLink+"/shops/" + res.data.shop+"/").then(response=>handleProdShop(response.data))
            })
        }
        catch(error){
            
            console.log(error)    
        }
    }    
}