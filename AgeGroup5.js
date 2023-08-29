import React from 'react';
import './AgeGroup1.css'
import {useState} from 'react';
function AgeGroup5()
{
    const [dataone,setDataone]=useState(0)
    const [datatwo,setDatatwo]=useState(0)
    const [datathree,setDatathree]=useState(0)
    const [datafour,setDatafour]=useState(0)
    const [datafive,setDatafive]=useState(0)
    const [datasix,setDatasix]=useState(0)
    const [dataseven,setDataseven]=useState(0)
    const [dataeight,setDataeight]=useState(0)
    const [datanine,setDatanine]=useState(0)
    const [dataten,setDataten]=useState(0)
   return(
    <div>
        <div className="agecategory">
            <div className="agegroup-item">
                <img src={require('../Images/7-9yrs1.webp')}></img>
                <h3>Disney princess enchanted journey</h3>
                <span>Rs.1999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDataone(dataone+1)}>Add to Cart</button></div>
                <div className="additem">{dataone}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/7-9yrs2.webp')}></img>
                <h3>Creator adorable dog building toy</h3>
                <span>Rs.1599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatatwo(datatwo+1)}>Add to Cart</button></div>
                <div className="additem">{datatwo}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/7-9yrs3.webp')}></img>
                <h3>Remote controlfury off roader</h3>
                <span>Rs.2999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatathree(datathree+1)}>Add to Cart</button></div>
                <div className="additem">{datathree}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/7-9yrs4.webp')}></img>
                <h3>Picture board game</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatafour(datafour+1)}>Add to Cart</button></div>
                <div className="additem">{datafour}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/7-9yrs5.webp')}></img>
                <h3>Skate board for kids</h3>
                <span>Rs.1999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatafive(datafive+1)}>Add to Cart</button></div>
                <div className="additem">{datafive}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/7-9yrs6.webp')}></img>
                <h3>Hospital building blocks</h3>
                <span>Rs.1799</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatasix(datasix+1)}>Add to Cart</button></div>
                <div className="additem">{datasix}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/7-9yrs7.webp')}></img>
                <h3>Ice hockey with adapter</h3>
                <span>Rs.1749</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDataseven(dataseven+1)}>Add to Cart</button></div>
                <div className="additem">{dataseven}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/7-9yrs8.webp')}></img>
                <h3>Smartivity globe trotters</h3>
                <span>Rs.1509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDataeight(dataeight+1)}>Add to Cart</button></div>
                <div className="additem">{dataeight}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/7-9yrs9.webp')}></img>
                <h3>Aliya's room building set</h3>
                <span>Rs.849</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatanine(datanine+1)}>Add to Cart</button></div>
                <div className="additem">{datanine}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/7-9yrs10.webp')}></img>
                <h3>City emergency building set</h3>
                <span>Rs.1077</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDataten(dataten+1)}>Add to Cart</button></div>
                <div className="additem">{dataten}</div>
            </div></div>

        </div>
    </div>
   )
}
export default AgeGroup5;