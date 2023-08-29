import React from 'react';
import {useState} from 'react';
function Character1()
{
   const [spiderman1,setSpiderman1]=useState(0) 
   const [spiderman2,setSpiderman2]=useState(0) 
   const [spiderman3,setSpiderman3]=useState(0) 
   const [spiderman4,setSpiderman4]=useState(0) 
   const [spiderman5,setSpiderman5]=useState(0) 
   const [spiderman6,setSpiderman6]=useState(0) 
   const [spiderman7,setSpiderman7]=useState(0) 
   const [spiderman8,setSpiderman8]=useState(0) 
   const [spiderman9,setSpiderman9]=useState(0) 
   const [spiderman10,setSpiderman10]=useState(0) 

   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman1.webp')}></img>
                <h3>Spiderman school bag</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman1(spiderman1+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman1}</div>
            </div></div>

            <div className="periodoffer-item">
                <img src={require('../Images/spiderman2.webp')}></img>
                <h3>Foldable tent house</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman2(spiderman2+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman3.webp')}></img>
                <h3>Spiderman vehicle toy</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman3(spiderman3+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman4.webp')}></img>
                <h3>Spiderman puzzle pack</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman4(spiderman4+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman5.webp')}></img>
                <h3>Spiderman bat and ball</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman5(spiderman5+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman6.webp')}></img>
                <h3>Spiderman doctor set</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman6(spiderman6+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman7.webp')}></img>
                <h3>Spiderman ringtoss game</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman7(spiderman7+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman8.webp')}></img>
                <h3>Spiderman stationery kit</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman8(spiderman8+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman9.webp')}></img>
                <h3>Spiderman 2-wheel scooter</h3>
                <span>Rs.649</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman9(spiderman9+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman10.webp')}></img>
                <h3>Spiderman hood school bag</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman10(spiderman10+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Character1;