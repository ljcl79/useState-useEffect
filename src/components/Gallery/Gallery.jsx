import React, { useState, useEffect } from 'react'
import Product from '../Product/Product';

const productos = [
    {
        "_id": "652803510a598cf5573918f3",
        "nombre": "The Complete Common Core: State Standards Kit, Grade 5",
        "sku": "D82015FFBF",
        "precio": 12.88,
        "descripcion": "...",
        "imagenes": [
        {
        "_id": "654f7cae84c15e3104b1b006",
        "url": "https://images-na.ssl-images-amazon.com/images/I/41gxkFaSFfL.jpg",
        "nombre": "https://images-na.ssl-images-amazon.com/images/I/41gxkFaSFfL.jpg"
        },
        ]
    },
    {
        "_id": "652803510a598cf5573918f4",
        "nombre": "Flash Furniture 25''W x 45''L Trapezoid Red HP Laminate Activity Table - Height Adjustable Short Legs",
        "sku": "39F1B8A212",
        "precio": 117.26,
        "descripcion": "...",
        "imagenes": [
        {
        "_id": "654f7cae84c15e3104b1b00b",
        "url": "https://images-na.ssl-images-amazon.com/images/I/31WxfYlS8XL.jpg",
        "nombre": "https://images-na.ssl-images-amazon.com/images/I/31WxfYlS8XL.jpg"
        },
        ]
    },
    {
        "_id": "652803510a598cf5573918f3",
        "nombre": "The Complete Common Core: State Standards Kit, Grade 5",
        "sku": "D82015FFBF",
        "precio": 12.88,
        "descripcion": "...",
        "imagenes": [
        {
        "_id": "654f7cae84c15e3104b1b006",
        "url": "https://images-na.ssl-images-amazon.com/images/I/41gxkFaSFfL.jpg",
        "nombre": "https://images-na.ssl-images-amazon.com/images/I/41gxkFaSFfL.jpg"
        },
        ]
    },
    {
        "_id": "652803510a598cf5573918f4",
        "nombre": "Flash Furniture 25''W x 45''L Trapezoid Red HP Laminate Activity Table - Height Adjustable Short Legs",
        "sku": "39F1B8A212",
        "precio": 117.26,
        "descripcion": "...",
        "imagenes": [
        {
        "_id": "654f7cae84c15e3104b1b00b",
        "url": "https://images-na.ssl-images-amazon.com/images/I/31WxfYlS8XL.jpg",
        "nombre": "https://images-na.ssl-images-amazon.com/images/I/31WxfYlS8XL.jpg"
        },
        ]
    },
    {
        "_id": "652803510a598cf5573918f3",
        "nombre": "The Complete Common Core: State Standards Kit, Grade 5",
        "sku": "D82015FFBF",
        "precio": 12.88,
        "descripcion": "...",
        "imagenes": [
        {
        "_id": "654f7cae84c15e3104b1b006",
        "url": "https://images-na.ssl-images-amazon.com/images/I/41gxkFaSFfL.jpg",
        "nombre": "https://images-na.ssl-images-amazon.com/images/I/41gxkFaSFfL.jpg"
        },
        ]
    },
    {
        "_id": "652803510a598cf5573918f4",
        "nombre": "Flash Furniture 25''W x 45''L Trapezoid Red HP Laminate Activity Table - Height Adjustable Short Legs",
        "sku": "39F1B8A212",
        "precio": 117.26,
        "descripcion": "...",
        "imagenes": [
        {
        "_id": "654f7cae84c15e3104b1b00b",
        "url": "https://images-na.ssl-images-amazon.com/images/I/31WxfYlS8XL.jpg",
        "nombre": "https://images-na.ssl-images-amazon.com/images/I/31WxfYlS8XL.jpg"
        },
        ]
    },
];


const Gallery = () => {
    //Definición del estado
    const [listaProductos, setListaProductos] = useState([]);

    const llenarProductos = () => {
        setListaProductos([...productos]);
    }

    useEffect(() => {
      const obtenerDatos = async () => {
        const res = await fetch('https://apiexpress-x7sl.onrender.com/productos');
        const data = await res.json();
        setListaProductos([...data]);
      }

      obtenerDatos();

    }, []);
    

    //Si no hay producto emitimos un mensaje
    if (listaProductos.length === 0) {
        return <>
        <h1>Cargando productos...</h1>
        </>
    }
    
    //Mostramos los productos
  return (
    /*
    <div style={{display:'flex', width:'100%', flexWrap:'wrap'}}>
    {
        listaProductos.map((p, i) => {
            return <Product key={i} product={p}></Product>
        })
    }
    </div>
    */
    <>
        <div className="grid place-items-center w-full bg-base-200">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl  text-center font-bold">Our Services</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                {
                    listaProductos.map((p, i) => {
                        return <Product key={i} product={p}></Product>
                    })
                }
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery