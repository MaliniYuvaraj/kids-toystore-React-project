import React from 'react';
import {useState} from 'react';
import './Deals1.css'
function Deals3()
{
    const [school1,setSchool1]=useState(0)
    const [school2,setSchool2]=useState(0)
    const [school3,setSchool3]=useState(0)
    const [school4,setSchool4]=useState(0)
    const [school5,setSchool5]=useState(0)
    const [school6,setSchool6]=useState(0)
    const [school7,setSchool7]=useState(0)
    const [school8,setSchool8]=useState(0)
    const [school9,setSchool9]=useState(0)
    const [school10,setSchool10]=useState(0)
   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/school1.webp')}></img>
                <h3>Spiderman school bag</h3>
                <span>Rs.1399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSchool1(school1+1)}>Add to Cart</button></div>
                <div className="additem">{school1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/school2.webp')}></img>
                <h3>Barbie gliter school bag</h3>
                <span>Rs.1599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSchool2(school2+1)}>Add to Cart</button></div>
                <div className="additem">{school2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/school3.webp')}></img>
                <h3>Snack jar</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSchool3(school3+1)}>Add to Cart</button></div>
                <div className="additem">{school3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/school4.webp')}></img>
                <h3>Bendable bottle</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSchool4(school4+1)}>Add to Cart</button></div>
                <div className="additem">{school4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/school5.webp')}></img>
                <h3>Gel crayons</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSchool5(school5+1)}>Add to Cart</button></div>
                <div className="additem">{school5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/school6.webp')}></img>
                <h3>Erasable crayons</h3>
                <span>Rs.299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSchool6(school6+1)}>Add to Cart</button></div>
                <div className="additem">{school6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/school7.webp')}></img>
                <h3>Insulate lunch box</h3>
                <span>Rs.749</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSchool7(school7+1)}>Add to Cart</button></div>
                <div className="additem">{school7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/school8.webp')}></img>
                <h3>Mini backpack</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSchool8(school8+1)}>Add to Cart</button></div>
                <div className="additem">{school8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/school9.webp')}></img>
                <h3>Cat print pencil case</h3>
                <span>Rs.149</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSchool9(school9+1)}>Add to Cart</button></div>
                <div className="additem">{school9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/school10.webp')}></img>
                <h3>3D straw juice cup</h3>
                <span>Rs.277</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSchool10(school10+1)}>Add to Cart</button></div>
                <div className="additem">{school10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Deals3;