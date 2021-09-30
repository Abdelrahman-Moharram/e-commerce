import React , { useState , useEffect } from 'react'
import SubMenu from '../components/SubMenus/SubMenu'
import { Categories, Shops, Products, Images } from '../components/api/gets'
import img from '../images/apple-606761_960_720.webp'
import ProductsList from '../components/Lists/ProductsList'
import FilterProds from '../components/SubMenus/FilterProds'

const Home = () =>{
    const [toggleSubMenuCats, setToggleSubMenu] = useState(true)
    const [toggleSubMenuShops, setToggleSubMenuShops] = useState(true)
    const [cats, setCats] = useState([])
    const [shops, setshops] = useState([])
    const [products, setProducts] = useState([])
    const [images, setImages] = useState([])

    useEffect(()=>{Categories(handleCats)},[])
    useEffect(()=>{Shops(handleShops)},[])
    useEffect(()=>{Products(handleProducts)},[])
    useEffect(()=>{Images(handleImages)},[])
    
    const handleImages = (prods) =>{
        setImages(prods);
    }
    const handleProducts = (prods) =>{
        setProducts(prods);
    }

    const handleShops = (shops_data) =>{
        setshops(shops_data)
    }

    const handleCats = (cat) =>{
        setCats(cat)
    }

    const handleSubMenusShops = () =>{
        setToggleSubMenuShops(!toggleSubMenuShops)
    }
    
    const handleSubMenusCats = () =>{
        setToggleSubMenu(!toggleSubMenuCats)
    }
    
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 col-md-3 p-2 left-collections-bar d-lg-block d-md-block d-sm-none">
                    <div className="">
                        <SubMenu toLink={"/category/"} subTitle={"Category"} handleSubMenus={handleSubMenusCats}        toggleSubMenu={toggleSubMenuCats}  elements={cats} /> 
                        <SubMenu toLink={"/shops/"}      subTitle={"shops"} handleSubMenus={handleSubMenusShops}   toggleSubMenu={toggleSubMenuShops}  elements={shops} /> 
                    </div>
                </div>
                
                <div className="h-50 col-lg-8 col-md-9 col-sm-12 p-0 ">
                   <div className="col-12">
                       <div className="main-img-cont">
                            <img src={img} alt="not-here" className="main-img" />
                       </div>
                   </div>


                  <ProductsList products={products} images={images} toLink={"/products/"}  />
                </div>

                <div className="col-lg-2 p-2 left-collections-bar d-lg-block d-md-none d-sm-none">
                    <div className="">
                        <FilterProds /> 
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Home