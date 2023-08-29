import React from 'react';
import './AgeGroup1.css'
import {useState} from 'react';
function AgeGroup2()
{
    const [firstitem,setFirstitem]=useState(0)
    const [seconditem,setSeconditem]=useState(0)
    const [thirditem,setThirditem]=useState(0)
    const [forthitem,setForthitem]=useState(0)
    const [fifthitem,setFifthitem]=useState(0)
    const [sixthitem,setSixthitem]=useState(0)
    const [seventhitem,setSeventhitem]=useState(0)
    const [eighthitem,setEighthitem]=useState(0)
    const [ninthitem,setNinthitem]=useState(0)
    const [tenthitem,setTenthitem]=useState(0)
   return(
    <div>
        <div className="agecategory">
            <div className="agegroup-item">
                <img src={require('../Images/18-36months1.webp')}></img>
                <h3>Town family house on wheels</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFirstitem(firstitem+1)}>Add to Cart</button></div>
                <div className="additem">{firstitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months2.webp')}></img>
                <h3>My organic market</h3>
                <span>Rs.1700</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSeconditem(seconditem+1)}>Add to Cart</button></div>
                <div className="additem">{seconditem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months3.webp')}></img>
                <h3>Swing car for outdoor</h3>
                <span>Rs.2999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setThirditem(thirditem+1)}>Add to Cart</button></div>
                <div className="additem">{thirditem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months4.webp')}></img>
                <h3>Foldable house tent</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setForthitem(forthitem+1)}>Add to Cart</button></div>
                <div className="additem">{forthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months5.webp')}></img>
                <h3>Cooking kitchen set</h3>
                <span>Rs.999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFifthitem(fifthitem+1)}>Add to Cart</button></div>
                <div className="additem">{fifthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months6.webp')}></img>
                <h3>Doctor play set</h3>
                <span>Rs.799</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSixthitem(sixthitem+1)}>Add to Cart</button></div>
                <div className="additem">{sixthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months7.webp')}></img>
                <h3>Reality learning toys</h3>
                <span>Rs.749</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSeventhitem(seventhitem+1)}>Add to Cart</button></div>
                <div className="additem">{seventhitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months8.webp')}></img>
                <h3>My pet giraffe</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setEighthitem(eighthitem+1)}>Add to Cart</button></div>
                <div className="additem">{eighthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months9.webp')}></img>
                <h3>Rally racer for kids</h3>
                <span>Rs.849</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setNinthitem(ninthitem+1)}>Add to Cart</button></div>
                <div className="additem">{ninthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months10.webp')}></img>
                <h3>Chalk & chuckles stack cake</h3>
                <span>Rs.500</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setTenthitem(tenthitem+1)}>Add to Cart</button></div>
                <div className="additem">{tenthitem}</div>
            </div></div>
        </div>
    </div>
   )
}
export default AgeGroup2;