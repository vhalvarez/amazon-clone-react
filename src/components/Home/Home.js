import React from 'react'
import './Home.css'
import Product from '../Product/Product'
function Home() {
    return (
        <div className="home">
            <img 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_1x._CB419795291_.jpg" 
                alt="" 
                className="home__image"
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product 
                    id={123123321}
                    title="GIGABYTE X570 AORUS Master (AMD Ryzen 3000/X570/ATX/PCIe4.0/DDR4/USB3.1/ESS 9118 Sabre HiFi DAC/Fins-Array Heatsink/RGB Fusion 2.0/3xM.2 Thermal Guard/Gaming Motherboard)"
                    price={218.06}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81f8nbIA-kL._AC_SL1500_.jpg"
                />

                <Product 
                    id={123123322}
                    title="AMD Ryzen 9 3900XT 12-core, 24-Threads Unlocked Desktop Processor Without Cooler"
                    price={476.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/7122uH4-hfL._AC_UY218_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id={123123321}
                    title="Corsair Vengeance RGB Pro 16GB (2x8GB) DDR4 3600 (PC4-28800) C18 AMD Optimized Memory – Black"
                    price={84.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71JB5da5-2L._AC_UY218_.jpg"
                />

                <Product 
                    id={123123321}
                    title="MSI GAMING GeForce RTX 2080 Ti GDRR6 352-bit HDMI/DP/USB Ray Tracing Turing Architecture Graphics Card (RTX 2080 TI GAMING X TRIO)"
                    price={1.849}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61aZgZmpHaL._AC_UY218_.jpg"
                />

                <Product 
                    id={123123321}
                    title="NZXT Kraken Z73 360mm - RL-KRZ73-01 - AIO RGB CPU Liquid Cooler - Customizable LCD Display - Improved Pump - Powered by CAM V4 - RGB Connector - Aer P 120mm Radiator Fans (3 Included)"
                    price={265.35}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71xtDBbXZyL._AC_UY218_.jpg"
                />
            </div>
            
            {/* Product */}
        </div>
        
    )
}

export default Home
