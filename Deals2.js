import React from 'react';
import './Deals1.css'
import {useState} from 'react';
function Deals2()
{
    const [deals1,setDeals1]=useState(0)
    const [deals2,setDeals2]=useState(0)
    const [deals3,setDeals3]=useState(0)
    const [deals4,setDeals4]=useState(0)
    const [deals5,setDeals5]=useState(0)
    const [deals6,setDeals6]=useState(0)
    const [deals7,setDeals7]=useState(0)
    const [deals8,setDeals8]=useState(0)
    const [deals9,setDeals9]=useState(0)
    const [deals10,setDeals10]=useState(0)
   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/deals11.webp')}></img>
                <h3>Jungle set bath toy</h3>
                <span>Rs.240</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals1(deals1+1)}>Add to Cart</button></div>
                <div className="additem">{deals1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals12.webp')}></img>
                <h3>ABC learning pad</h3>
                <span>Rs.1599</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals2(deals2+1)}>Add to Cart</button></div>
                <div className="additem">{deals2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals13.webp')}></img>
                <h3>Paw patrol rescue racers</h3>
                <span>Rs.1099</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals3(deals3+1)}>Add to Cart</button></div>
                <div className="additem">{deals3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals14.webp')}></img>
                <h3>Picnnic basket</h3>
                <span>Rs.499</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals4(deals4+1)}>Add to Cart</button></div>
                <div className="additem">{deals4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals15.webp')}></img>
                <h3>Lettuce play</h3>
                <span>Rs.399</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals5(deals5+1)}>Add to Cart</button></div>
                <div className="additem">{deals5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals16.webp')}></img>
                <h3>Stepping stones</h3>
                <span>Rs.299</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals6(deals6+1)}>Add to Cart</button></div>
                <div className="additem">{deals6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals17.webp')}></img>
                <h3>Ultimate LED sky rider</h3>
                <span>Rs.749</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals7(deals7+1)}>Add to Cart</button></div>
                <div className="additem">{deals7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals18.webp')}></img>
                <h3>Flexiball early learner</h3>
                <span>Rs.509</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals8(deals8+1)}>Add to Cart</button></div>
                <div className="additem">{deals8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals19.webp')}></img>
                <h3>Caterpillar clutter</h3>
                <span>Rs.849</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals9(deals9+1)}>Add to Cart</button></div>
                <div className="additem">{deals9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals20.webp')}></img>
                <h3>Sandwich mix up</h3>
                <span>Rs.277</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals10(deals10+1)}>Add to Cart</button></div>
                <div className="additem">{deals10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Deals2;