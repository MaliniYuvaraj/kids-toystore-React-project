import React from 'react';
import {useState} from 'react';
function Character5()
{
    const [avengers1,setAvengers1]=useState(0)
    const [avengers2,setAvengers2]=useState(0)
    const [avengers3,setAvengers3]=useState(0)
    const [avengers4,setAvengers4]=useState(0)
    const [avengers5,setAvengers5]=useState(0)
    
   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/avengers1.webp')}></img>
                <h3>Avengers 2-wheel scooter</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAvengers1(avengers1+1)}>Add to Cart</button></div>
                <div className="additem">{avengers1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/avengers2.webp')}></img>
                <h3>Avengers school bag</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAvengers2(avengers2+1)}>Add to Cart</button></div>
                <div className="additem">{avengers2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/avengers3.webp')}></img>
                <h3>Avengers jigsaw puzzle</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAvengers3(avengers3+1)}>Add to Cart</button></div>
                <div className="additem">{avengers3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/avengers4.webp')}></img>
                <h3>Avengers sling bag</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAvengers4(avengers4+1)}>Add to Cart</button></div>
                <div className="additem">{avengers4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/avengers5.webp')}></img>
                <h3>3 in 1 frank avengers puzzle</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAvengers5(avengers5+1)}>Add to Cart</button></div>
                <div className="additem">{avengers5}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Character5;