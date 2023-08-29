import React from 'react';
import {useState} from 'react';
function Brand3()
{
    const [skill1,setSkill1]=useState(0)
    const [skill2,setSkill2]=useState(0)
    const [skill3,setSkill3]=useState(0)
    const [skill4,setSkill4]=useState(0)
    const [skill5,setSkill5]=useState(0)
    const [skill6,setSkill6]=useState(0)
    const [skill7,setSkill7]=useState(0)
    const [skill8,setSkill8]=useState(0)
    const [skill9,setSkill9]=useState(0)
    const [skill10,setSkill10]=useState(0)
    

   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/skill1.webp')}></img>
                <h3>I can write new activity game</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSkill1(skill1+1)}>Add to Cart</button></div>
                <div className="additem">{skill1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/skill2.webp')}></img>
                <h3>Connectors paper space travel</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSkill2(skill2+1)}>Add to Cart</button></div>
                <div className="additem">{skill2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/skill3.webp')}></img>
                <h3>Guess 10 landmarks</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSkill3(skill3+1)}>Add to Cart</button></div>
                <div className="additem">{skill3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/skill4.webp')}></img>
                <h3>Newton's tree fun family</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSkill4(skill4+1)}>Add to Cart</button></div>
                <div className="additem">{skill4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/skill5.webp')}></img>
                <h3>I can count new board game</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSkill5(skill5+1)}>Add to Cart</button></div>
                <div className="additem">{skill5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/skill6.webp')}></img>
                <h3>Rapid rumble board game</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSkill6(skill6+1)}>Add to Cart</button></div>
                <div className="additem">{skill6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/skill7.webp')}></img>
                <h3>Found it board game</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSkill7(skill7+1)}>Add to Cart</button></div>
                <div className="additem">{skill7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/skill8.webp')}></img>
                <h3>Fire fighters to rescue game</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSkill8(skill8+1)}>Add to Cart</button></div>
                <div className="additem">{skill8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/skill9.webp')}></img>
                <h3>Preschool champion activity</h3>
                <span>Rs.649</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSkill9(skill9+1)}>Add to Cart</button></div>
                <div className="additem">{skill9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/skill10.webp')}></img>
                <h3>My world inside house board game</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSkill10(skill10+1)}>Add to Cart</button></div>
                <div className="additem">{skill10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Brand3;