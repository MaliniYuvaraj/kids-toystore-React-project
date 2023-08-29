import React from 'react';
import {useState} from 'react';
import './AgeGroup1.css'
function AgeGroup3()
{
    const [data1,setData1]=useState(0)
    const [data2,setData2]=useState(0)
    const [data3,setData3]=useState(0)
    const [data4,setData4]=useState(0)
    const [data5,setData5]=useState(0)
    const [data6,setData6]=useState(0)
    const [data7,setData7]=useState(0)
    const [data8,setData8]=useState(0)
    const [data9,setData9]=useState(0)
    const [data10,setData10]=useState(0)
   return(
    <div>
        <div className="agecategory">
            <div className="agegroup-item">
                <img src={require('../Images/2-5yrs1.webp')}></img>
                <h3>Wooden rainbow arch</h3>
                <span>Rs.1495</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setData1(data1+1)}>Add to Cart</button></div>
                <div className="additem">{data1}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/2-5yrs2.webp')}></img>
                <h3>Mighty look out tower</h3>
                <span>Rs.1700</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setData2(data2+1)}>Add to Cart</button></div>
                <div className="additem">{data2}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/2-5yrs3.webp')}></img>
                <h3>Masha & bear house</h3>
                <span>Rs.2999</span>
                <div className="addtocart">
                <div><button className="btn" onClick={()=>setData3(data3+1)}>Add to Cart</button></div>
                <div className="additem">{data3}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/2-5yrs4.webp')}></img>
                <h3>3 in 1 remote roader</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
                <div><button className="btn" onClick={()=>setData4(data4+1)}>Add to Cart</button></div>
                <div className="additem">{data4}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/2-5yrs5.webp')}></img>
                <h3>Globe augment light toy</h3>
                <span>Rs.1999</span>
                <div className="addtocart">
                <div><button className="btn" onClick={()=>setData5(data5+1)}>Add to Cart</button></div>
                <div className="additem">{data5}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/2-5yrs6.webp')}></img>
                <h3>Bubble blaster</h3>
                <span>Rs.799</span>
                <div className="addtocart">
                <div><button className="btn" onClick={()=>setData6(data6+1)}>Add to Cart</button></div>
                <div className="additem">{data6}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/2-5yrs7.webp')}></img>
                <h3>Fishing Game</h3>
                <span>Rs.749</span>
                <div className="addtocart">
                <div><button className="btn" onClick={()=>setData7(data7+1)}>Add to Cart</button></div>
                <div className="additem">{data7}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/2-5yrs8.webp')}></img>
                <h3>Magnetic dart board</h3>
                <span>Rs.509</span>
                <div className="addtocart">
                <div><button className="btn" onClick={()=>setData8(data8+1)}>Add to Cart</button></div>
                <div className="additem">{data8}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/2-5yrs9.webp')}></img>
                <h3>Sea patroller</h3>
                <span>Rs.849</span>
                <div className="addtocart">
                <div><button className="btn" onClick={()=>setData9(data9+1)}>Add to Cart</button></div>
                <div className="additem">{data9}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/2-5yrs10.webp')}></img>
                <h3>2 in 1 magic jam playmat</h3>
                <span>Rs.500</span>
                <div className="addtocart">
                <div><button className="btn" onClick={()=>setData10(data10+1)}>Add to Cart</button></div>
                <div className="additem">{data10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default AgeGroup3;