import React from 'react';
import {useState} from 'react';
function Brand4()
{
  const [star1,setStar1]=useState(0)
  const [star2,setStar2]=useState(0)
  const [star3,setStar3]=useState(0)
  const [star4,setStar4]=useState(0)
  const [star5,setStar5]=useState(0)
  const [star6,setStar6]=useState(0)
  const [star7,setStar7]=useState(0)
  const [star8,setStar8]=useState(0)
  const [star9,setStar9]=useState(0)
  const [star10,setStar10]=useState(0) 

   return(
    <div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/star1.webp')}></img>
                <h3>2 in 1 magic jam playmat</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setStar1(star1+1)}>Add to Cart</button></div>
                <div className="additem">{star1}</div>
            </div></div>

            <div className="periodoffer-item">
                <img src={require('../Images/star2.webp')}></img>
                <h3>Beads abacus</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setStar2(star2+1)}>Add to Cart</button></div>
                <div className="additem">{star2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/star3.webp')}></img>
                <h3>Kids learning laptop</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setStar3(star3+1)}>Add to Cart</button></div>
                <div className="additem">{star3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/star4.webp')}></img>
                <h3>Magic gears</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setStar4(star4+1)}>Add to Cart</button></div>
                <div className="additem">{star4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/star5.webp')}></img>
                <h3>Wooden clock chunky puzzles</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setStar5(star5+1)}>Add to Cart</button></div>
                <div className="additem">{star5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/star6.webp')}></img>
                <h3>Push wheel for kids</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setStar6(star6+1)}>Add to Cart</button></div>
                <div className="additem">{star6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/star7.webp')}></img>
                <h3>Animals cube blocks</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setStar7(star7+1)}>Add to Cart</button></div>
                <div className="additem">{star7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/star8.webp')}></img>
                <h3>Chunky transport puzzle</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setStar8(star8+1)}>Add to Cart</button></div>
                <div className="additem">{star8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/star9.webp')}></img>
                <h3>Geometrical interlocking blocks</h3>
                <span>Rs.649</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setStar9(star9+1)}>Add to Cart</button></div>
                <div className="additem">{star9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/star10.webp')}></img>
                <h3>Sea soft book rattle</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setStar10(star10+1)}>Add to Cart</button></div>
                <div className="additem">{star10}</div>
            </div></div>

        </div>
    </div>
   )
}
export default Brand4;