import React from 'react';
import {useState} from 'react';
function Category4()
{
    const [fashion1,setFashion1]=useState(0)
    const [fashion2,setFashion2]=useState(0)
    const [fashion3,setFashion3]=useState(0)
    const [fashion4,setFashion4]=useState(0)
    const [fashion5,setFashion5]=useState(0)
    const [fashion6,setFashion6]=useState(0)
    const [fashion7,setFashion7]=useState(0)
    const [fashion8,setFashion8]=useState(0)
    const [fashion9,setFashion9]=useState(0)
    const [fashion10,setFashion10]=useState(0)
   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/fashion1.webp')}></img>
                <h3>Girls half sleeve dress</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion1(fashion1+1)}>Add to Cart</button></div>
                <div className="additem">{fashion1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion2.webp')}></img>
                <h3>Short sleeve cotton dress</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion2(fashion2+1)}>Add to Cart</button></div>
                <div className="additem">{fashion2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion3.webp')}></img>
                <h3>Boys short sleeve T-shirt</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion3(fashion3+1)}>Add to Cart</button></div>
                <div className="additem">{fashion3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion4.webp')}></img>
                <h3>Girls hats pack</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion4(fashion4+1)}>Add to Cart</button></div>
                <div className="additem">{fashion4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion5.webp')}></img>
                <h3>Pint cat ear hairband</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion5(fashion5+1)}>Add to Cart</button></div>
                <div className="additem">{fashion5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion6.webp')}></img>
                <h3>Boys full sleeve sweatshirt </h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion6(fashion6+1)}>Add to Cart</button></div>
                <div className="additem">{fashion6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion7.webp')}></img>
                <h3>Minnie mouse hair clip</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion7(fashion7+1)}>Add to Cart</button></div>
                <div className="additem">{fashion7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion8.webp')}></img>
                <h3>Minnie mouse headband</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion8(fashion8+1)}>Add to Cart</button></div>
                <div className="additem">{fashion8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion9.webp')}></img>
                <h3>Minnie mouse hair accessories</h3>
                <span>Rs.249</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion9(fashion9+1)}>Add to Cart</button></div>
                <div className="additem">{fashion9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion10.webp')}></img>
                <h3>Teeny watch space aqua</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion10(fashion10+1)}>Add to Cart</button></div>
                <div className="additem">{fashion10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Category4;