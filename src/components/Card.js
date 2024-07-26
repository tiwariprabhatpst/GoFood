import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let options = props.options
    const priceRef = useRef();
    let priceOptions = Object.keys(options)
    let data = useCart()
    const [qty,setQty] = useState(1)
    const [size,setSize] = useState("")

    const imageStyles = {
        width: '100%', 
        height: '200px', 
        objectFit: 'cover', 
        overflow: 'hidden' /* Hides any overflow */
    };

    const handleAddToCart = async ()=>{
        await dispatch({type:"ADD",id:props.foodItem._id, name:props.foodItem.name, price:finalPrice, qty:qty, size:size})
        console.log(data);
    }
    let finalPrice = qty * parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])
    return (
        
        <div>
            <div class="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={props.foodItem.img} style={imageStyles} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.foodItem.name}</h5>
                    {/* <p class="card-text">{props.description}</p> */}
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded' onChange={(e)=> setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
                            {priceOptions.map((opts)=>{
                                return <option key={opts} value={opts}>{opts}</option>
                            })}
                        </select>
                        <div className='d-inline h-100 fs-5'>₹{finalPrice}/-</div>
                    </div>
                    <hr></hr>
                    <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
