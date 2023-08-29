import React from 'react';
import {useState} from 'react';
import Category1 from '../Images/category1.webp'
import Category2 from '../Images/category2.webp'
import Category3 from '../Images/category3.webp'
import Category4 from '../Images/category4.webp'
import Category5 from '../Images/category5.webp'
import {useNavigate} from 'react-router-dom'
function Category()
  {
    const Navigate=useNavigate()
    const navigatefirstcategoryPage=()=>
    {
      Navigate('/category1')
    }
    const navigatesecondcategoryPage=()=>
    {
      Navigate('/category2')
    }
    const navigatethirdcategoryPage=()=>
    {
      Navigate('/category3')
    }
    const navigateforthcategoryPage=()=>
    {
      Navigate('/category4')
    }

    const [sports1,setSports1]=useState(0)
    const [sports2,setSports2]=useState(0)
    const [sports3,setSports3]=useState(0)
    const [sports4,setSports4]=useState(0)
    const [sports5,setSports5]=useState(0)
    const [sports6,setSports6]=useState(0)
    const [sports7,setSports7]=useState(0)
    const [sports8,setSports8]=useState(0)
    const [sports9,setSports9]=useState(0)
    const [sports10,setSports10]=useState(0)

    const [rideon1,setRideon1]=useState(0)
    const [rideon2,setRideon2]=useState(0)
    const [rideon3,setRideon3]=useState(0)
    const [rideon4,setRideon4]=useState(0)
    const [rideon5,setRideon5]=useState(0)
    const [rideon6,setRideon6]=useState(0)
    const [rideon7,setRideon7]=useState(0)
    const [rideon8,setRideon8]=useState(0)
    const [rideon9,setRideon9]=useState(0)
    const [rideon10,setRideon10]=useState(0)

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

    const [fashion1,setFashion1]=useState(0)
    const [fashion2,setFashion2]=useState(0)
    const [fashion3,setFashion3]=useState(0)
    const [fashion4,setFashion4]=useState(0)
    const [fashion5,setFashion5]=useState(0)
    const [fashion6,setFashion6]=useState(0)
    const [fashion7,setFashion7]=useState(0)
    const [fashion8,setFashion8]=useState(0)
    const [fashion9,setFashion9]=useState(0)
    const [fashion10,setFashion10]=useState(0)
    return(
        <div>
            <h2>Shop by Category</h2>
      <div className="categorygroup">
      <div className="category">
          <img src={Category1} onClick={()=>navigatefirstcategoryPage()}></img>
        </div>
        <div className="category">
          <img src={Category2} onClick={()=>navigatesecondcategoryPage()}></img>
        </div>
        <div className="category">
          <img src={Category3} onClick={()=>navigatethirdcategoryPage()}></img>
        </div>
        <div className="category">
          <img src={Category4} onClick={()=>navigateforthcategoryPage()}></img>
        </div>
        </div>
        <br></br>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/sports1.webp')}></img>
                <h3>Hover football black</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports1(sports1+1)}>Add to Cart</button></div>
                <div className="additem">{sports1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports2.webp')}></img>
                <h3>Electronic basket ball</h3>
                <span>Rs.1099</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports2(sports2+1)}>Add to Cart</button></div>
                <div className="additem">{sports2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports11.webp')}></img>
                <h3>Junior baby slide</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports3(sports3+1)}>Add to Cart</button></div>
                <div className="additem">{sports3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports4.webp')}></img>
                <h3>Outdoor street gliger</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports4(sports4+1)}>Add to Cart</button></div>
                <div className="additem">{sports4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports5.webp')}></img>
                <h3>Tot sports T-ball set</h3>
                <span>Rs.800</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports5(sports5+1)}>Add to Cart</button></div>
                <div className="additem">{sports5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports6.webp')}></img>
                <h3>Pindaloo ball  game</h3>
                <span>Rs.299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports6(sports6+1)}>Add to Cart</button></div>
                <div className="additem">{sports6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports7.webp')}></img>
                <h3>Football table game</h3>
                <span>Rs.1449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports7(sports7+1)}>Add to Cart</button></div>
                <div className="additem">{sports7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports8.webp')}></img>
                <h3>Skate board for kids</h3>
                <span>Rs.799</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports8(sports8+1)}>Add to Cart</button></div>
                <div className="additem">{sports8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports9.webp')}></img>
                <h3>Mount and play basket ball set</h3>
                <span>Rs.1149</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports9(sports9+1)}>Add to Cart</button></div>
                <div className="additem">{sports9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/sports10.webp')}></img>
                <h3>Junior bowling alley game</h3>
                <span>Rs.1277</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSports10(sports10+1)}>Add to Cart</button></div>
                <div className="additem">{sports10}</div>
            </div></div>

        </div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/rideon1.webp')}></img>
                <h3>Robot rideon for kids</h3>
                <span>Rs.1599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon1(rideon1+1)}>Add to Cart</button></div>
                <div className="additem">{rideon1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon2.webp')}></img>
                <h3>Wagon push car for toddlers</h3>
                <span>Rs.1499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon2(rideon2+1)}>Add to Cart</button></div>
                <div className="additem">{rideon2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon3.webp')}></img>
                <h3>Paw patrol bicycle</h3>
                <span>Rs.3299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon3(rideon3+1)}>Add to Cart</button></div>
                <div className="additem">{rideon3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon4.webp')}></img>
                <h3>Foldable electric kick scooter</h3>
                <span>Rs.4499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon4(rideon4+1)}>Add to Cart</button></div>
                <div className="additem">{rideon4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon5.webp')}></img>
                <h3>Outdoor swing car</h3>
                <span>Rs.2800</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon5(rideon5+1)}>Add to Cart</button></div>
                <div className="additem">{rideon5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon6.webp')}></img>
                <h3>Hoverboard explorer</h3>
                <span>Rs.2299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon6(rideon6+1)}>Add to Cart</button></div>
                <div className="additem">{rideon6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon7.webp')}></img>
                <h3>Classic novelty rideon</h3>
                <span>Rs.2449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon7(rideon7+1)}>Add to Cart</button></div>
                <div className="additem">{rideon7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon8.webp')}></img>
                <h3>Avengers 2 wheel  scooter</h3>
                <span>Rs.2799</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon8(rideon8+1)}>Add to Cart</button></div>
                <div className="additem">{rideon8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon9.webp')}></img>
                <h3>Outdoor infinity hoverboard</h3>
                <span>Rs.1949</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon9(rideon9+1)}>Add to Cart</button></div>
                <div className="additem">{rideon9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/rideon10.webp')}></img>
                <h3>U-board electric scooter</h3>
                <span>Rs.1977</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setRideon10(rideon10+1)}>Add to Cart</button></div>
                <div className="additem">{rideon10}</div>
            </div></div>

        </div>
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
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/fashion1.webp')}></img>
                <h3>Girls half sleeve dress</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion1(fashion1+1)}>Add to Cart</button></div>
                <div className="additem">{fashion1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion2.webp')}></img>
                <h3>Short sleeve cotton dress</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion2(fashion2+1)}>Add to Cart</button></div>
                <div className="additem">{fashion2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion3.webp')}></img>
                <h3>Boys short sleeve T-shirt</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion3(fashion3+1)}>Add to Cart</button></div>
                <div className="additem">{fashion3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion4.webp')}></img>
                <h3>Girls hats pack</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion4(fashion4+1)}>Add to Cart</button></div>
                <div className="additem">{fashion4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion5.webp')}></img>
                <h3>Pint cat ear hairband</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion5(fashion5+1)}>Add to Cart</button></div>
                <div className="additem">{fashion5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion6.webp')}></img>
                <h3>Boys full sleeve sweatshirt </h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion6(fashion6+1)}>Add to Cart</button></div>
                <div className="additem">{fashion6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion7.webp')}></img>
                <h3>Minnie mouse hair clip</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion7(fashion7+1)}>Add to Cart</button></div>
                <div className="additem">{fashion7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion8.webp')}></img>
                <h3>Minnie mouse headband</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion8(fashion8+1)}>Add to Cart</button></div>
                <div className="additem">{fashion8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion9.webp')}></img>
                <h3>Minnie mouse hair accessories</h3>
                <span>Rs.249</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion9(fashion9+1)}>Add to Cart</button></div>
                <div className="additem">{fashion9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/fashion10.webp')}></img>
                <h3>Teeny watch space aqua</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFashion10(fashion10+1)}>Add to Cart</button></div>
                <div className="additem">{fashion10}</div>
            </div></div>

        </div>
        </div>
    )
}
export default Category;