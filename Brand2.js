import React from 'react';
import {useState} from 'react';
function Brand2()
{
 const [barbie1,setBarbie1]=useState(0)
 const [barbie2,setBarbie2]=useState(0)
 const [barbie3,setBarbie3]=useState(0)
 const [barbie4,setBarbie4]=useState(0)
 const [barbie5,setBarbie5]=useState(0)
 const [barbie6,setBarbie6]=useState(0)
 const [barbie7,setBarbie7]=useState(0)
 const [barbie8,setBarbie8]=useState(0)
 const [barbie9,setBarbie9]=useState(0)
 const [barbie10,setBarbie10]=useState(0)

   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/barbie1.webp')}></img>
                <h3>Barbie party fashion doll</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setBarbie1(barbie1+1)}>Add to Cart</button></div>
                <div className="additem">{barbie1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/barbie2.webp')}></img>
                <h3>Barbie assortment dolls</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setBarbie2(barbie2+1)}>Add to Cart</button></div>
                <div className="additem">{barbie2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/barbie3.webp')}></img>
                <h3>Barbie babysitter doll</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setBarbie3(barbie3+1)}>Add to Cart</button></div>
                <div className="additem">{barbie3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/barbie4.webp')}></img>
                <h3>Barbie water bottle</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setBarbie4(barbie4+1)}>Add to Cart</button></div>
                <div className="additem">{barbie4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/barbie5.webp')}></img>
                <h3>Combo lunch box,water bottle</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setBarbie5(barbie5+1)}>Add to Cart</button></div>
                <div className="additem">{barbie5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/barbie6.webp')}></img>
                <h3>Barbie move and do yoga</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setBarbie6(barbie6+1)}>Add to Cart</button></div>
                <div className="additem">{barbie6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/barbie7.webp')}></img>
                <h3>Babie house playset</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setBarbie7(barbie7+1)}>Add to Cart</button></div>
                <div className="additem">{barbie7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/barbie8.webp')}></img>
                <h3>Barbie stationery kit</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setBarbie8(barbie8+1)}>Add to Cart</button></div>
                <div className="additem">{barbie8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/barbie9.webp')}></img>
                <h3>Barbie board game</h3>
                <span>Rs.649</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setBarbie9(barbie9+1)}>Add to Cart</button></div>
                <div className="additem">{barbie9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/barbie10.webp')}></img>
                <h3>Barbie school bag</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setBarbie10(barbie10+1)}>Add to Cart</button></div>
                <div className="additem">{barbie10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Brand2;