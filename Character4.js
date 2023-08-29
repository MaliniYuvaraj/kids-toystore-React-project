import React from 'react';
import {useState} from 'react';
function Character4()
{
 const [mickey1,setMickey1]=useState(0)
 const [mickey2,setMickey2]=useState(0)
 const [mickey3,setMickey3]=useState(0)
 const [mickey4,setMickey4]=useState(0)
 const [mickey5,setMickey5]=useState(0)
 const [mickey6,setMickey6]=useState(0)
 const [mickey7,setMickey7]=useState(0)
 const [mickey8,setMickey8]=useState(0)
 const [mickey9,setMickey9]=useState(0)
 const [mickey10,setMickey10]=useState(0)   

   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/mickey1.webp')}></img>
                <h3>Mickey panorama puzzle</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey1(mickey1+1)}>Add to Cart</button></div>
                <div className="additem">{mickey1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey2.webp')}></img>
                <h3>Mickey clubhouse puzzle</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey2(mickey2+1)}>Add to Cart</button></div>
                <div className="additem">{mickey2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey3.webp')}></img>
                <h3>Mickey bowling alley set</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey3(mickey3+1)}>Add to Cart</button></div>
                <div className="additem">{mickey3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey4.webp')}></img>
                <h3>Mickey on ride puzzle</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey4(mickey4+1)}>Add to Cart</button></div>
                <div className="additem">{mickey4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey5.webp')}></img>
                <h3>Mickey mouse hairband</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey5(mickey5+1)}>Add to Cart</button></div>
                <div className="additem">{mickey5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey6.webp')}></img>
                <h3>Mickey mouse soft pillow</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey6(mickey6+1)}>Add to Cart</button></div>
                <div className="additem">{mickey6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey7.webp')}></img>
                <h3>Mickey mouse backpack</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey7(mickey7+1)}>Add to Cart</button></div>
                <div className="additem">{mickey7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey8.webp')}></img>
                <h3>Mickey flush flipflop</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey8(mickey8+1)}>Add to Cart</button></div>
                <div className="additem">{mickey8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey9.webp')}></img>
                <h3>Mickey mouse hand puffet</h3>
                <span>Rs.649</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey9(mickey9+1)}>Add to Cart</button></div>
                <div className="additem">{mickey9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey10.webp')}></img>
                <h3>Mickey mouse stainless steel bottle</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey10(mickey10+1)}>Add to Cart</button></div>
                <div className="additem">{mickey10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Character4;