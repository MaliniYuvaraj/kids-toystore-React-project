import React from 'react';
import {useState} from 'react';
function Brand1()
{
    const [hamley1,setHamley1]=useState(0)
    const [hamley2,setHamley2]=useState(0)
    const [hamley3,setHamley3]=useState(0)
    const [hamley4,setHamley4]=useState(0)
    const [hamley5,setHamley5]=useState(0)
    const [hamley6,setHamley6]=useState(0)
    const [hamley7,setHamley7]=useState(0)
    const [hamley8,setHamley8]=useState(0)
    const [hamley9,setHamley9]=useState(0)
    const [hamley10,setHamley10]=useState(0)

   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/hamley1.webp')}></img>
                <h3> 2.4G Roborapter dino</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley1(hamley1+1)}>Add to Cart</button></div>
                <div className="additem">{hamley1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley2.webp')}></img>
                <h3> Amazing action tracks</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley2(hamley2+1)}>Add to Cart</button></div>
                <div className="additem">{hamley2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley3.webp')}></img>
                <h3>Play buddy Walking dog</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley3(hamley3+1)}>Add to Cart</button></div>
                <div className="additem">{hamley3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley4.webp')}></img>
                <h3>Bubble blaster</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley4(hamley4+1)}>Add to Cart</button></div>
                <div className="additem">{hamley4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley5.webp')}></img>
                <h3>Hamley movers and shakers</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley5(hamley5+1)}>Add to Cart</button></div>
                <div className="additem">{hamley5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley6.webp')}></img>
                <h3>Hamley magnetic dart board</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley6(hamley6+1)}>Add to Cart</button></div>
                <div className="additem">{hamley6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley7.webp')}></img>
                <h3>Swimming frog bath toy</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley7(hamley7+1)}>Add to Cart</button></div>
                <div className="additem">{hamley7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley8.webp')}></img>
                <h3>Hamley sky high drone</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley8(hamley8+1)}>Add to Cart</button></div>
                <div className="additem">{hamley8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley9.webp')}></img>
                <h3>Hamley sonic led drawing board</h3>
                <span>Rs.649</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley9(hamley9+1)}>Add to Cart</button></div>
                <div className="additem">{hamley9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley10.webp')}></img>
                <h3>Clever cogs magnet</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley10(hamley10+1)}>Add to Cart</button></div>
                <div className="additem">{hamley10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Brand1;