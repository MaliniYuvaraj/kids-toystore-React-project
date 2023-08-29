import React from 'react';
import {useState} from 'react';
function Character2()
{
   const [pawpatrol1,setPawpatrol1]=useState(0)
   const [pawpatrol2,setPawpatrol2]=useState(0)
   const [pawpatrol3,setPawpatrol3]=useState(0)
   const [pawpatrol4,setPawpatrol4]=useState(0)
   const [pawpatrol5,setPawpatrol5]=useState(0)
   const [pawpatrol6,setPawpatrol6]=useState(0)
   const [pawpatrol7,setPawpatrol7]=useState(0)
   const [pawpatrol8,setPawpatrol8]=useState(0)
   const [pawpatrol9,setPawpatrol9]=useState(0)
   const [pawpatrol10,setPawpatrol10]=useState(0)
   
   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol1.webp')}></img>
                <h3>Mighty lookout tower</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol1(pawpatrol1+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol2.webp')}></img>
                <h3>Basic vehicle marshall chase</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol2(pawpatrol2+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol3.webp')}></img>
                <h3>Sea patroller ryder</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol3(pawpatrol3+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol4.webp')}></img>
                <h3>Basic vehicle chase ryder</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol4(pawpatrol4+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol5.webp')}></img>
                <h3>Deluxe cruser roleplay set</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol5(pawpatrol5+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol6.webp')}></img>
                <h3>Basicc vehicle rubble chase</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol6(pawpatrol6+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol7.webp')}></img>
                <h3>Basic vehicle tracker ryder</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol7(pawpatrol7+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol8.webp')}></img>
                <h3>Air patroller ryder playset</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol8(pawpatrol8+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol9.webp')}></img>
                <h3>Skye night light</h3>
                <span>Rs.649</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol9(pawpatrol9+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol10.webp')}></img>
                <h3>Pawpatrol rescue racers</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol10(pawpatrol10+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Character2;