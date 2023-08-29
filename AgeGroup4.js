import React from 'react';
import './AgeGroup1.css'
import {useState} from 'react';
function AgeGroup4()
{
    const [datafirst,setDatafirst]=useState(0)
    const [datasecond,setDatasecond]=useState(0)
    const [datathird,setDatathird]=useState(0)
    const [dataforth,setDataforth]=useState(0)
    const [datafifth,setDatafifth]=useState(0)
    const [datasixth,setDatasixth]=useState(0)
    const [dataseventh,setDataseventh]=useState(0)
    const [dataeighth,setDataeighth]=useState(0)
    const [dataninth,setDataninth]=useState(0)
    const [datatenth,setDatatenth]=useState(0)
   return(
    <div>
        <div className="agecategory">
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs1.webp')}></img>
                <h3>Jurassic world pteranodon chase</h3>
                <span>Rs.1999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatafirst(datafirst+1)}>Add to Cart</button></div>
                <div className="additem">{datafirst}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs2.webp')}></img>
                <h3>Clever cogs</h3>
                <span>Rs.1599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatasecond(datasecond+1)}>Add to Cart</button></div>
                <div className="additem">{datasecond}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs3.webp')}></img>
                <h3>Creative party box</h3>
                <span>Rs.2999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatathird(datathird+1)}>Add to Cart</button></div>
                <div className="additem">{datathird}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs4.webp')}></img>
                <h3>Micky & friends building set</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDataforth(dataforth+1)}>Add to Cart</button></div>
                <div className="additem">{dataforth}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs5.webp')}></img>
                <h3>City dunk rampchallenge</h3>
                <span>Rs.1999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatafifth(datafifth+1)}>Add to Cart</button></div>
                <div className="additem">{datafifth}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs6.webp')}></img>
                <h3>2-wheel scooter for kids</h3>
                <span>Rs.1799</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatasixth(datasixth+1)}>Add to Cart</button></div>
                <div className="additem">{datasixth}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs7.webp')}></img>
                <h3>Companion robot</h3>
                <span>Rs.749</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDataseventh(dataseventh+1)}>Add to Cart</button></div>
                <div className="additem">{dataseventh}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs8.webp')}></img>
                <h3>3 in 1 stem kit</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDataeighth(dataeighth+1)}>Add to Cart</button></div>
                <div className="additem">{dataeighth}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs9.webp')}></img>
                <h3>Police prisoner transportblocks</h3>
                <span>Rs.849</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDataninth(dataninth+1)}>Add to Cart</button></div>
                <div className="additem">{dataninth}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs10.webp')}></img>
                <h3>Cyber drone block for kids</h3>
                <span>Rs.1077</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatatenth(datatenth+1)}>Add to Cart</button></div>
                <div className="additem">{datatenth}</div>
            </div></div>


        </div>
    </div>
   )
}
export default AgeGroup4;