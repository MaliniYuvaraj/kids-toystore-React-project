import React from 'react';
import {useState} from 'react';
import './Deals1.css'
function Deals4()
{
    const [lowprice1,setLowprice1]=useState(0)
    const [lowprice2,setLowprice2]=useState(0)
    const [lowprice3,setLowprice3]=useState(0)
    const [lowprice4,setLowprice4]=useState(0)
    const [lowprice5,setLowprice5]=useState(0)
    const [lowprice6,setLowprice6]=useState(0)
    const [lowprice7,setLowprice7]=useState(0)
    const [lowprice8,setLowprice8]=useState(0)
    const [lowprice9,setLowprice9]=useState(0)
    const [lowprice10,setLowprice10]=useState(0)
   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice1.webp')}></img>
                <h3>Rolling tales</h3>
                <span>Rs.275</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice1(lowprice1+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice2.webp')}></img>
                <h3>Squeaky babies</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice2(lowprice2+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice3.webp')}></img>
                <h3>Pj mask mini vehicle</h3>
                <span>Rs.500</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice3(lowprice3+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice4.webp')}></img>
                <h3>Jigsaw puzzle</h3>
                <span>Rs.300</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice4(lowprice4+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice5.webp')}></img>
                <h3>Beige standing bear</h3>
                <span>Rs.300</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice5(lowprice5+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice6.webp')}></img>
                <h3>Paw patrol rescue roader</h3>
                <span>Rs.299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice6(lowprice6+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice7.webp')}></img>
                <h3>Colour stackup tower</h3>
                <span>Rs.150</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice7(lowprice7+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice8.webp')}></img>
                <h3>Hand jack glider plane</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice8(lowprice8+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice9.webp')}></img>
                <h3>Bathtime set</h3>
                <span>Rs.149</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice9(lowprice9+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice10.webp')}></img>
                <h3>Floating octopus</h3>
                <span>Rs.275</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice10(lowprice10+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Deals4;