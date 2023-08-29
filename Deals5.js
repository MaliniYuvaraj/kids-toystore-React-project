import React from 'react';
import {useState} from 'react';
import './Deals1.css'
function Deals5()
{
    const [price1,setPrice1]=useState(0)
    const [price2,setPrice2]=useState(0)
    const [price3,setPrice3]=useState(0)
    const [price4,setPrice4]=useState(0)
    const [price5,setPrice5]=useState(0)
    const [price6,setPrice6]=useState(0)
    const [price7,setPrice7]=useState(0)
    const [price8,setPrice8]=useState(0)
    const [price9,setPrice9]=useState(0)
    const [price10,setPrice10]=useState(0)
   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice11.webp')}></img>
                <h3>Icecream and candy set</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice1(price1+1)}>Add to Cart</button></div>
                <div className="additem">{price1}</div>
            </div></div>

            <div className="periodoffer-item">
                <img src={require('../Images/lowprice12.webp')}></img>
                <h3>Elsa muticolour soft toy</h3>
                <span>Rs.1200</span>
            <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice2(price2+1)}>Add to Cart</button></div>
                <div className="additem">{price2}</div>
            </div></div>

            <div className="periodoffer-item">
                <img src={require('../Images/lowprice13.webp')}></img>
                <h3>Youreka explore space</h3>
                <span>Rs.1099</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice3(price3+1)}>Add to Cart</button></div>
                <div className="additem">{price3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice14.webp')}></img>
                <h3>Youreka fun with learn</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice4(price4+1)}>Add to Cart</button></div>
                <div className="additem">{price4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice15.webp')}></img>
                <h3>Beach set with wagon</h3>
                <span>Rs.999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice5(price5+1)}>Add to Cart</button></div>
                <div className="additem">{price5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice16.webp')}></img>
                <h3>Genius box learning transport</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice6(price6+1)}>Add to Cart</button></div>
                <div className="additem">{price6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice17.webp')}></img>
                <h3>Spinning tower</h3>
                <span>Rs.1099</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice7(price7+1)}>Add to Cart</button></div>
                <div className="additem">{price7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice18.webp')}></img>
                <h3>Learning magical planet earth</h3>
                <span>Rs.1400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice8(price8+1)}>Add to Cart</button></div>
                <div className="additem">{price8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice19.webp')}></img>
                <h3>Lucid globe for kids</h3>
                <span>Rs.1149</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice9(price9+1)}>Add to Cart</button></div>
                <div className="additem">{price9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice20.webp')}></img>
                <h3>youreka knowledge jackpot</h3>
                <span>Rs.275</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice10(price10+1)}>Add to Cart</button></div>
                <div className="additem">{price10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Deals5;