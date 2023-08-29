import React from 'react';
import {useState} from 'react';
function Category2()
{
    const [rideon1,setRideon1]=useState(0)
    const [rideon2,setRideon2]=useState(0)
    const [rideon3,setRideon3]=useState(0)
    const [rideon4,setRideon4]=useState(0)
    const [rideon5,setRideon5]=useState(0)
    const [rideon6,setRideon6]=useState(0)
    const [rideon7,setRideon7]=useState(0)
    const [rideon8,setRideon8]=useState(0)
    const [rideon9,setRideon9]=useState(0)
    const [rideon10,setRideon10]=useState(0)
   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/rideon1.webp')}></img>
                <h3>Robot rideon for kids</h3>
                <span>Rs.1599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon1(rideon1+1)}>Add to Cart</button></div>
                <div className="additem">{rideon1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon2.webp')}></img>
                <h3>Wagon push car for toddlers</h3>
                <span>Rs.1499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon2(rideon2+1)}>Add to Cart</button></div>
                <div className="additem">{rideon2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon3.webp')}></img>
                <h3>Paw patrol bicycle</h3>
                <span>Rs.3299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon3(rideon3+1)}>Add to Cart</button></div>
                <div className="additem">{rideon3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon4.webp')}></img>
                <h3>Foldable electric kick scooter</h3>
                <span>Rs.4499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon4(rideon4+1)}>Add to Cart</button></div>
                <div className="additem">{rideon4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon5.webp')}></img>
                <h3>Outdoor swing car</h3>
                <span>Rs.2800</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon5(rideon5+1)}>Add to Cart</button></div>
                <div className="additem">{rideon5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon6.webp')}></img>
                <h3>Hoverboard explorer</h3>
                <span>Rs.2299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon6(rideon6+1)}>Add to Cart</button></div>
                <div className="additem">{rideon6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon7.webp')}></img>
                <h3>Classic novelty rideon</h3>
                <span>Rs.2449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon7(rideon7+1)}>Add to Cart</button></div>
                <div className="additem">{rideon7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon8.webp')}></img>
                <h3>Avengers 2 wheel  scooter</h3>
                <span>Rs.2799</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon8(rideon8+1)}>Add to Cart</button></div>
                <div className="additem">{rideon8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon9.webp')}></img>
                <h3>Outdoor infinity hoverboard</h3>
                <span>Rs.1949</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon9(rideon9+1)}>Add to Cart</button></div>
                <div className="additem">{rideon9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon10.webp')}></img>
                <h3>U-board electric scooter</h3>
                <span>Rs.1977</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon10(rideon10+1)}>Add to Cart</button></div>
                <div className="additem">{rideon10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Category2;