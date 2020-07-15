import React from 'react'
import Product from './Product'
import './Home.css'


function Home() {
    return (
        <div className="home">
           <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" 
                alt=""
           />

            {/* Product id, title, price, rating  */}
            <div className="home__row">
                <Product 
                    id= "1"
                    title="HUSB C Hub Multiport Adapter - 7 in 1 Portable Space Aluminum Dongle with 4K HDMI Output, 3 USB 3.0 Ports, SD/Micro SD Card Reader Compatible for MacBook Pro, XPS More Type C Devices"
                    image="https://images-na.ssl-images-amazon.com/images/I/71m8FtAfpjL._AC_SL1500_.jpg"
                    price= {24.99}
                    rating={5}
                />

                <Product 
                    id= "2"
                    title="WD 2TB Elements Portable External Hard Drive - USB 3.0 - WDBU6Y0020BBK"
                    image="https://images-na.ssl-images-amazon.com/images/I/61IBBVJvSDL._AC_SL1500_.jpg"
                    price= {59.99}
                    rating={4}
                />

            </div>

            <div className="home__row">
                <Product 
                    id= "3"
                    title="Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H NVIDIA GeForce GTX 1650 15.6''"
                    image="https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg"
                    price= {688.00}
                    rating={5}
                />

                <Product 
                    id= "4"
                    title="TP-Link AC750 WiFi Extender | WiFi Booster to Extend Range of WiFi Internet Connection (RE220) "
                    image="https://images-na.ssl-images-amazon.com/images/I/61xNxQEJfkL._AC_SY450_.jpg"
                    price= {29.99}
                    rating={4}
                />

                <Product 
                    id= "5"
                    title="PICTEK Gaming Mouse Wired [7200 DPI] Ergonomic Game USB Computer Mice RGB Gamer Desktop Laptop PC Gaming Mouse"
                    image="https://images-na.ssl-images-amazon.com/images/I/61gxUsLtlyL._AC_SL1280_.jpg"
                    price= {22.99}
                    rating={5}
                />

            </div>


            <div className="home__row">
                <Product 
                    id= "12134"
                    title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
                    image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
                    price= {109.99}
                    rating={5}
                />
             </div>



        </div>
    )
}

export default Home


