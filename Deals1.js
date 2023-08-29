import React from 'react';
import {useState}  from 'react';
import './Deals1.css'
function Deals1()
{
    const [periodoffer1,setPeriodoffer1]=useState(0)
    const [periodoffer2,setPeriodoffer2]=useState(0)
    const [periodoffer3,setPeriodoffer3]=useState(0)
    const [periodoffer4,setPeriodoffer4]=useState(0)
    const [periodoffer5,setPeriodoffer5]=useState(0)
    const [periodoffer6,setPeriodoffer6]=useState(0)
    const [periodoffer7,setPeriodoffer7]=useState(0)
    const [periodoffer8,setPeriodoffer8]=useState(0)
    const [periodoffer9,setPeriodoffer9]=useState(0)
    const [periodoffer10,setPeriodoffer10]=useState(0)

   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/periodoffer1.webp')}></img>
                <h3>Air Hockey table with adapter</h3>
                <span>Rs.2999</span>
                <span>Save 23%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPeriodoffer1(periodoffer1+1)}>Add to Cart</button></div>
                <div className="additem">{periodoffer1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/periodoffer2.webp')}></img>
                <h3>3 in 1 crawling off roader</h3>
                <span>Rs.1599</span>
                <span>Save 10%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPeriodoffer2(periodoffer2+1)}>Add to Cart</button></div>
                <div className="additem">{periodoffer2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/periodoffer3.webp')}></img>
                <h3>Magnetic dart board</h3>
                <span>Rs.1099</span>
                <span>Save 18%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPeriodoffer3(periodoffer3+1)}>Add to Cart</button></div>
                <div className="additem">{periodoffer3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/periodoffer4.webp')}></img>
                <h3>Outdoor swing car</h3>
                <span>Rs.2799</span>
                <span>Save 20%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPeriodoffer4(periodoffer4+1)}>Add to Cart</button></div>
                <div className="additem">{periodoffer4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/periodoffer5.webp')}></img>
                <h3>Fun doll house</h3>
                <span>Rs.1999</span>
                <span>Save 12%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPeriodoffer5(periodoffer5+1)}>Add to Cart</button></div>
                <div className="additem">{periodoffer5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/periodoffer6.webp')}></img>
                <h3>Icecream and candy set</h3>
                <span>Rs.799</span>
                <span>Save 24%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPeriodoffer6(periodoffer6+1)}>Add to Cart</button></div>
                <div className="additem">{periodoffer6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/periodoffer7.webp')}></img>
                <h3>Tool set 2 in 1 trolley</h3>
                <span>Rs.749</span>
                <span>Save 12%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPeriodoffer7(periodoffer7+1)}>Add to Cart</button></div>
                <div className="additem">{periodoffer7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/periodoffer8.webp')}></img>
                <h3>Excavator and loader clay dough</h3>
                <span>Rs.509</span>
                <span>Save 15%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPeriodoffer8(periodoffer8+1)}>Add to Cart</button></div>
                <div className="additem">{periodoffer8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/periodoffer9.webp')}></img>
                <h3>Cement mixer building blocks</h3>
                <span>Rs.849</span>
                <span>Save 12%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPeriodoffer9(periodoffer9+1)}>Add to Cart</button></div>
                <div className="additem">{periodoffer9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/periodoffer10.webp')}></img>
                <h3>Chalk & chukle circus ruckus</h3>
                <span>Rs.1077</span>
                <span>Save 14%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPeriodoffer10(periodoffer10+1)}>Add to Cart</button></div>
                <div className="additem">{periodoffer10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Deals1;