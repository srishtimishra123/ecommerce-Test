import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add, remove } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
import { isMobile } from 'react-device-detect';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    const[ProductCard,setProductCart]=useState([])
    const items = useSelector((state) => state.cart);
    const login=useSelector((state)=>state.loginTemp);
    const navigate = useNavigate();
    const mobcard={
        marging:'5px',
        marginTop:'-20px',
       
    }
    const deskcard={
     marginTop:'-20px',
        marginLeft:'120px'
    }
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);
    // useEffect(()=>{
    //     dispatch(fetchProducts());
    //     fetch('https://fakestoreapi.com/products')
    //     .then((response)=>response.json()
    //     .then((result)=>setProducts(result))
    //     .catch((error)=>console.log("error")))
    // })
    const handleRemove = (productId) => {
        dispatch(remove(productId));
       
        
    };
    useEffect(()=>{

    },[ProductCard])

    const handleAdd = (product) => {
        if(!login.login){
            navigate("/login")
        }
    //    let idvalue=[product.id]
    //     setProductCart([...ProductCard,...idvalue])
    //     console.log(ProductCard)
    console.log(items)
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <>
        {/* <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <center><img src={product.image} alt="" style={{width:'150px',height:'100px'}}/></center>
                    <h4>{product.title.slice(0,20)}...</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className='w-100' style={{border:'1px solid #47A992',borderRadius:'25px',color:'white',backgroundColor:'#47A992',fontWeight:'bold',padding:'5px'}} className='p-2'>
                        Add to cart
                    </button>
                </div>
            ))}
        </div> */}
        <div className='row p-5 '  style={isMobile?mobcard:deskcard}>
          
           
            {products.map((product)=>{
                return(
                    <div className='col-lg-3 m-1 card' key={product.id}>
                                            <center><img src={product.image} alt="" style={{width:'150px',height:'100px'}}/></center>

                        <h4>{product.title.slice(0,20)}...</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className='w-100 p-2' style={{border:'1px solid #47A992',borderRadius:'25px',color:'white',backgroundColor:'#47A992',fontWeight:'bold',padding:'5px'}} >
                        Add to cart
                    </button>
                    </div>
                    
                )
            })}

           
       </div>
        </>
    );
};

export default Products;




