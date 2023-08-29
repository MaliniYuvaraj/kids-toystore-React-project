import React from 'react';
import './AgeGroup1.css'
import Agegroup1 from '../Images/0-18months1.webp'
import Agegroup2 from '../Images/0-18months2.webp'
import Agegroup3 from '../Images/0-18months3.webp'
import Agegroup4 from '../Images/0-18months4.webp'
import Agegroup5 from '../Images/0-18months5.webp'
import Agegroup6 from '../Images/0-18months6.webp'
import Agegroup7 from '../Images/0-18months7.webp'
import Agegroup8 from '../Images/0-18months8.webp'
import Agegroup9 from '../Images/0-18months9.webp'
import Agegroup10 from '../Images/0-18months10.webp'
import {useState} from 'react';
function AgeGroup1()
{
    const [addfirstitem,setAddfirstitem]=useState(0)
    const [addseconditem,setAddseconditem]=useState(0)
    const [addthirditem,setAddthirditem]=useState(0)
    const [addforthitem,setAddforthitem]=useState(0)
    const [addfifthitem,setAddfifthitem]=useState(0)
    const [addsixthitem,setAddsixthitem]=useState(0)
    const [addseventhitem,setAddseventhitem]=useState(0)
    const [addeighthitem,setAddeighthitem]=useState(0)
    const [addninthitem,setAddninthitem]=useState(0)
    const [addtenthitem,setAddtenthitem]=useState(0)
   return(
    <div>
        <div className="agecategory">
            <div className="agegroup-item">
                <img src={Agegroup1}></img>
                <h3>Melodious Xylophone</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddfirstitem(addfirstitem+1)}>Add to Cart</button></div>
                <div className="additem">{addfirstitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup2}></img>
                <h3>Multicolour musical Toy</h3>
                <span>Rs.299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddseconditem(addseconditem+1)}>Add to Cart</button></div>
                <div className="additem">{addseconditem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup3}></img>
                <h3>Penguin wooden rattle</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddthirditem(addthirditem+1)}>Add to Cart</button></div>
                <div className="additem">{addthirditem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup4}></img>
                <h3>Baby ball zone</h3>
                <span>Rs.549</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddforthitem(addforthitem+1)}>Add to Cart</button></div>
                <div className="additem">{addforthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup5}></img>
                <h3>My 1st sand and water table</h3>
                <span>Rs.699</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddfifthitem(addfifthitem+1)}>Add to Cart</button></div>
                <div className="additem">{addfifthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup6}></img>
                <h3>Baby soothing vibration bouncer</h3>
                <span>Rs.899</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddsixthitem(addsixthitem+1)}>Add to Cart</button></div>
                <div className="additem">{addsixthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup7}></img>
                <h3>Baby potty seat</h3>
                <span>Rs.749</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddseventhitem(addseventhitem+1)}>Add to Cart</button></div>
                <div className="additem">{addseventhitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup8}></img>
                <h3>Peppa and friends musical truck</h3>
                <span>Rs.999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddeighthitem(addeighthitem+1)}>Add to Cart</button></div>
                <div className="additem">{addeighthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup9}></img>
                <h3>Push and spin duck spinning toy</h3>
                <span>Rs.450</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddninthitem(addninthitem+1)}>Add to Cart</button></div>
                <div className="additem">{addninthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup10}></img>
                <h3>Beach set wiyh trolley</h3>
                <span>Rs.299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddtenthitem(addtenthitem+1)}>Add to Cart</button></div>
                <div className="additem">{addtenthitem}</div>
            </div></div>

        </div>
    </div>
   )
}
export default AgeGroup1;