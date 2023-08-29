import React from 'react';
import {useState} from 'react';
function Character3()
{
   const [shark1,setShark1]=useState(0)
   const [shark2,setShark2]=useState(0)
   const [shark3,setShark3]=useState(0)
   const [shark4,setShark4]=useState(0)
   const [shark5,setShark5]=useState(0)
   const [shark6,setShark6]=useState(0)
   const [shark7,setShark7]=useState(0)
   const [shark8,setShark8]=useState(0)
   const [shark9,setShark9]=useState(0)
   const [shark10,setShark10]=useState(0)


   return(
    <div>
       <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol1.webp')}></img>
                <h3>Mighty lookout tower</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark1(shark1+1)}>Add to Cart</button></div>
                <div className="additem">{shark1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol2.webp')}></img>
                <h3>Basic vehicle marshall chase</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark2(shark2+1)}>Add to Cart</button></div>
                <div className="additem">{shark2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol3.webp')}></img>
                <h3>Sea patroller ryder</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark3(shark3+1)}>Add to Cart</button></div>
                <div className="additem">{shark3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol4.webp')}></img>
                <h3>Basic vehicle chase ryder</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark4(shark4+1)}>Add to Cart</button></div>
                <div className="additem">{shark4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol5.webp')}></img>
                <h3>Deluxe cruser roleplay set</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark5(shark5+1)}>Add to Cart</button></div>
                <div className="additem">{shark5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol6.webp')}></img>
                <h3>Basicc vehicle rubble chase</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark6(shark6+1)}>Add to Cart</button></div>
                <div className="additem">{shark6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol7.webp')}></img>
                <h3>Basic vehicle tracker ryder</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark7(shark7+1)}>Add to Cart</button></div>
                <div className="additem">{shark7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol8.webp')}></img>
                <h3>Air patroller ryder playset</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark8(shark8+1)}>Add to Cart</button></div>
                <div className="additem">{shark8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol9.webp')}></img>
                <h3>Skye night light</h3>
                <span>Rs.649</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark9(shark9+1)}>Add to Cart</button></div>
                <div className="additem">{shark9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol10.webp')}></img>
                <h3>Pawpatrol rescue racers</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark10(shark10+1)}>Add to Cart</button></div>
                <div className="additem">{shark10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Character3;