import React from 'react'

const Product = ({product}) => {
    return (<div className="card w-84 bg-base-100 shadow-xl p-0">
    <figure><img src={product.imagenes[0]['url'] ?? './sinimagen.jpg'} alt="Product" style={{width:'100%', height:'20vh', objectFit:'cover'}} /></figure>
    <div className="card-body">
        <h2 className="card-title line-clamp-2">{product.nombre}</h2>
        <p className="line-clamp-3">{product.descripcion}</p>
        <div className='flex justify-between'>
            <div>
                Precio: {product.precio}
            </div>
            <div>
                SKU: {product.sku}
            </div>
        </div>  
        <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
        </div>
    </div>
    </div>);
    /*
  return (
    <div style={{display:'flex', width:'30%', border: '1px solid white', justifyContent:'center', flexDirection:'column', margin: '1rem',}}>
        <img src={product.imagenes[0]['url'] ?? './sinimagen.jpg'} style={{width:'100%', height:'20vh', objectFit:'contain'}}></img>
        <hr></hr>
        <div style={{height: '30vh'}}>
            <div>
                <h3 style={{overflowX:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', maxHeight:'100%', }}>{product.nombre}</h3>
            </div>
            <div style={{height: '20vh'}}>
                <p style={{overflow:'hidden', maxHeight:'15vh', textOverflow:'ellipsis'}}>{product.descripcion}</p>
            </div>
        </div>
        <div style={{display:'flex'}}>
            <div>
                Precio: {product.precio}
            </div>
            <div>
                SKU: {product.sku}
            </div>
        </div>        
    </div>
  ) */
}

export default Product