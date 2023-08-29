import React from 'react';
import {useState} from 'react';
function Category1()
{
    const [sports1,setSports1]=useState(0)
    const [sports2,setSports2]=useState(0)
    const [sports3,setSports3]=useState(0)
    const [sports4,setSports4]=useState(0)
    const [sports5,setSports5]=useState(0)
    const [sports6,setSports6]=useState(0)
    const [sports7,setSports7]=useState(0)
    const [sports8,setSports8]=useState(0)
    const [sports9,setSports9]=useState(0)
    const [sports10,setSports10]=useState(0)
   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/sports1.webp')}></img>
                <h3>Hover football black</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports1(sports1+1)}>Add to Cart</button></div>
                <div className="additem">{sports1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports2.webp')}></img>
                <h3>Electronic basket ball</h3>
                <span>Rs.1099</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports2(sports2+1)}>Add to Cart</button></div>
                <div className="additem">{sports2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports11.webp')}></img>
                <h3>Junior baby slide</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports3(sports3+1)}>Add to Cart</button></div>
                <div className="additem">{sports3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports4.webp')}></img>
                <h3>Outdoor street gliger</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports4(sports4+1)}>Add to Cart</button></div>
                <div className="additem">{sports4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports5.webp')}></img>
                <h3>Tot sports T-ball set</h3>
                <span>Rs.800</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports5(sports5+1)}>Add to Cart</button></div>
                <div className="additem">{sports5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports6.webp')}></img>
                <h3>Pindaloo ball  game</h3>
                <span>Rs.299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports6(sports6+1)}>Add to Cart</button></div>
                <div className="additem">{sports6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports7.webp')}></img>
                <h3>Football table game</h3>
                <span>Rs.1449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports7(sports7+1)}>Add to Cart</button></div>
                <div className="additem">{sports7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports8.webp')}></img>
                <h3>Skate board for kids</h3>
                <span>Rs.799</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports8(sports8+1)}>Add to Cart</button></div>
                <div className="additem">{sports8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports9.webp')}></img>
                <h3>Mount and play basket ball set</h3>
                <span>Rs.1149</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports9(sports9+1)}>Add to Cart</button></div>
                <div className="additem">{sports9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports10.webp')}></img>
                <h3>Junior bowling alley game</h3>
                <span>Rs.1277</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports10(sports10+1)}>Add to Cart</button></div>
                <div className="additem">{sports10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Category1;