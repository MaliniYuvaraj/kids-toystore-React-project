import React from 'react';
import Brand1 from '../Images/brand1.webp'
import Brand2 from '../Images/brand2.webp'
import Brand3 from '../Images/brand3.webp'
import Brand4 from '../Images/brand4.webp'
import{useState} from 'react';
import {useNavigate} from 'react-router-dom'
function Brand()
{
  const Navigate=useNavigate()
  const navigatefirstbrandPage=()=>
  {
    Navigate('/brand1')
  }
  const navigatesecondbrandPage=()=>
  {
    Navigate('/brand2')
  }
  const navigatethirdbrandPage=()=>
  {
    Navigate('/brand3')
  }
  const navigateforthbrandPage=()=>
  {
    Navigate('/brand4')
  }

  const [hamley1,setHamley1]=useState(0)
    const [hamley2,setHamley2]=useState(0)
    const [hamley3,setHamley3]=useState(0)
    const [hamley4,setHamley4]=useState(0)
    const [hamley5,setHamley5]=useState(0)
    const [hamley6,setHamley6]=useState(0)
    const [hamley7,setHamley7]=useState(0)
    const [hamley8,setHamley8]=useState(0)
    const [hamley9,setHamley9]=useState(0)
    const [hamley10,setHamley10]=useState(0)


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
            <h2>Shop by Brand</h2>
      <div className="brandgroup">
      <div className="brand">
          <img src={Brand1} onClick={()=>navigatefirstbrandPage()}></img>
        </div>
        <div className="brand">
          <img src={Brand2} onClick={()=>navigatesecondbrandPage()}></img>
        </div>
        <div className="brand">
          <img src={Brand3} onClick={()=>navigatethirdbrandPage()}></img>
        </div>
        <div className="brand">
          <img src={Brand4} onClick={()=>navigateforthbrandPage()}></img>
        </div>
        </div>
        <br></br>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/hamley1.webp')}></img>
                <h3> 2.4G Roborapter dino</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley1(hamley1+1)}>Add to Cart</button></div>
                <div className="additem">{hamley1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley2.webp')}></img>
                <h3> Amazing action tracks</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley2(hamley2+1)}>Add to Cart</button></div>
                <div className="additem">{hamley2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley3.webp')}></img>
                <h3>Play buddy Walking dog</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley3(hamley3+1)}>Add to Cart</button></div>
                <div className="additem">{hamley3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley4.webp')}></img>
                <h3>Bubble blaster</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley4(hamley4+1)}>Add to Cart</button></div>
                <div className="additem">{hamley4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley5.webp')}></img>
                <h3>Hamley movers and shakers</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley5(hamley5+1)}>Add to Cart</button></div>
                <div className="additem">{hamley5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley6.webp')}></img>
                <h3>Hamley magnetic dart board</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley6(hamley6+1)}>Add to Cart</button></div>
                <div className="additem">{hamley6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley7.webp')}></img>
                <h3>Swimming frog bath toy</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley7(hamley7+1)}>Add to Cart</button></div>
                <div className="additem">{hamley7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley8.webp')}></img>
                <h3>Hamley sky high drone</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley8(hamley8+1)}>Add to Cart</button></div>
                <div className="additem">{hamley8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley9.webp')}></img>
                <h3>Hamley sonic led drawing board</h3>
                <span>Rs.649</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley9(hamley9+1)}>Add to Cart</button></div>
                <div className="additem">{hamley9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/hamley10.webp')}></img>
                <h3>Clever cogs magnet</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setHamley10(hamley10+1)}>Add to Cart</button></div>
                <div className="additem">{hamley10}</div>
            </div></div>

        </div>
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
export default Brand;