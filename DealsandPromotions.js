import React from 'react';
import {useState} from 'react';
import Deals1 from '../Images/deals1.webp'
import Deals2 from '../Images/deals2.webp'
import Deals3 from '../Images/deals3.webp'
import Deals4 from '../Images/deals4.webp'
import Deals5 from '../Images/deals5.webp'
import './DealsandPromotions.css';
import {useNavigate} from 'react-router-dom'
function DealsandPromotions()
{
  const Navigate=useNavigate()
  const navigatefirstdealsPage=()=>
  {
    Navigate('/deals1')
  }
  const navigateseconddealsPage=()=>
  {
    Navigate('/deals2')
  }
  const navigatethirddealsPage=()=>
  {
    Navigate('/deals3')
  }
  const navigateforthdealsPage=()=>
  {
    Navigate('/deals4')
  }
  const navigatefifthdealsPage=()=>
  {
    Navigate('/deals5')
  }

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


    const [deals1,setDeals1]=useState(0)
    const [deals2,setDeals2]=useState(0)
    const [deals3,setDeals3]=useState(0)
    const [deals4,setDeals4]=useState(0)
    const [deals5,setDeals5]=useState(0)
    const [deals6,setDeals6]=useState(0)
    const [deals7,setDeals7]=useState(0)
    const [deals8,setDeals8]=useState(0)
    const [deals9,setDeals9]=useState(0)
    const [deals10,setDeals10]=useState(0)

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

    const [lowprice1,setLowprice1]=useState(0)
    const [lowprice2,setLowprice2]=useState(0)
    const [lowprice3,setLowprice3]=useState(0)
    const [lowprice4,setLowprice4]=useState(0)
    const [lowprice5,setLowprice5]=useState(0)
    const [lowprice6,setLowprice6]=useState(0)
    const [lowprice7,setLowprice7]=useState(0)
    const [lowprice8,setLowprice8]=useState(0)
    const [lowprice9,setLowprice9]=useState(0)
    const [lowprice10,setLowprice10]=useState(0)

    const [price1,setPrice1]=useState(0)
    const [price2,setPrice2]=useState(0)
    const [price3,setPrice3]=useState(0)
    const [price4,setPrice4]=useState(0)
    const [price5,setPrice5]=useState(0)
    const [price6,setPrice6]=useState(0)
    const [price7,setPrice7]=useState(0)
    const [price8,setPrice8]=useState(0)
    const [price9,setPrice9]=useState(0)
    const [price10,setPrice10]=useState(0)

    return(
        <div>
            <h2>Deals & Promotions</h2>
      <div className="dealsandpromotions">
        <div className="deals">
          <img src={Deals1} onClick={()=>navigatefirstdealsPage()}></img>
        </div>
        <div className="deals">
          <img src={Deals2} onClick={()=>navigateseconddealsPage()}></img>
        </div>
        <div className="deals">
          <img src={Deals3} onClick={()=>navigatethirddealsPage()}></img>
        </div>
        <div className="deals">
          <img src={Deals4} onClick={()=>navigateforthdealsPage()}></img>
        </div>
        <div className="deals">
          <img src={Deals5} onClick={()=>navigatefifthdealsPage()}></img>
        </div>
      </div>
      <br></br>
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
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/deals11.webp')}></img>
                <h3>Jungle set bath toy</h3>
                <span>Rs.240</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals1(deals1+1)}>Add to Cart</button></div>
                <div className="additem">{deals1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals12.webp')}></img>
                <h3>ABC learning pad</h3>
                <span>Rs.1599</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals2(deals2+1)}>Add to Cart</button></div>
                <div className="additem">{deals2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals13.webp')}></img>
                <h3>Paw patrol rescue racers</h3>
                <span>Rs.1099</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals3(deals3+1)}>Add to Cart</button></div>
                <div className="additem">{deals3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals14.webp')}></img>
                <h3>Picnnic basket</h3>
                <span>Rs.499</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals4(deals4+1)}>Add to Cart</button></div>
                <div className="additem">{deals4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals15.webp')}></img>
                <h3>Lettuce play</h3>
                <span>Rs.399</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals5(deals5+1)}>Add to Cart</button></div>
                <div className="additem">{deals5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals16.webp')}></img>
                <h3>Stepping stones</h3>
                <span>Rs.299</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals6(deals6+1)}>Add to Cart</button></div>
                <div className="additem">{deals6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals17.webp')}></img>
                <h3>Ultimate LED sky rider</h3>
                <span>Rs.749</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals7(deals7+1)}>Add to Cart</button></div>
                <div className="additem">{deals7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals18.webp')}></img>
                <h3>Flexiball early learner</h3>
                <span>Rs.509</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals8(deals8+1)}>Add to Cart</button></div>
                <div className="additem">{deals8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals19.webp')}></img>
                <h3>Caterpillar clutter</h3>
                <span>Rs.849</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals9(deals9+1)}>Add to Cart</button></div>
                <div className="additem">{deals9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/deals20.webp')}></img>
                <h3>Sandwich mix up</h3>
                <span>Rs.277</span>
                <span>Save 50%</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDeals10(deals10+1)}>Add to Cart</button></div>
                <div className="additem">{deals10}</div>
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
                <img src={require('../Images/lowprice1.webp')}></img>
                <h3>Rolling tales</h3>
                <span>Rs.275</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice1(lowprice1+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice2.webp')}></img>
                <h3>Squeaky babies</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice2(lowprice2+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice3.webp')}></img>
                <h3>Pj mask mini vehicle</h3>
                <span>Rs.500</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice3(lowprice3+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice4.webp')}></img>
                <h3>Jigsaw puzzle</h3>
                <span>Rs.300</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice4(lowprice4+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice5.webp')}></img>
                <h3>Beige standing bear</h3>
                <span>Rs.300</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice5(lowprice5+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice6.webp')}></img>
                <h3>Paw patrol rescue roader</h3>
                <span>Rs.299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice6(lowprice6+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice7.webp')}></img>
                <h3>Colour stackup tower</h3>
                <span>Rs.150</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice7(lowprice7+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice8.webp')}></img>
                <h3>Hand jack glider plane</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice8(lowprice8+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice9.webp')}></img>
                <h3>Bathtime set</h3>
                <span>Rs.149</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice9(lowprice9+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice10.webp')}></img>
                <h3>Floating octopus</h3>
                <span>Rs.275</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setLowprice10(lowprice10+1)}>Add to Cart</button></div>
                <div className="additem">{lowprice10}</div>
            </div></div>

        </div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice11.webp')}></img>
                <h3>Icecream and candy set</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice1(price1+1)}>Add to Cart</button></div>
                <div className="additem">{price1}</div>
            </div></div>

            <div className="periodoffer-item">
                <img src={require('../Images/lowprice12.webp')}></img>
                <h3>Elsa muticolour soft toy</h3>
                <span>Rs.1200</span>
            <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice2(price2+1)}>Add to Cart</button></div>
                <div className="additem">{price2}</div>
            </div></div>

            <div className="periodoffer-item">
                <img src={require('../Images/lowprice13.webp')}></img>
                <h3>Youreka explore space</h3>
                <span>Rs.1099</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice3(price3+1)}>Add to Cart</button></div>
                <div className="additem">{price3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice14.webp')}></img>
                <h3>Youreka fun with learn</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice4(price4+1)}>Add to Cart</button></div>
                <div className="additem">{price4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice15.webp')}></img>
                <h3>Beach set with wagon</h3>
                <span>Rs.999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice5(price5+1)}>Add to Cart</button></div>
                <div className="additem">{price5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice16.webp')}></img>
                <h3>Genius box learning transport</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice6(price6+1)}>Add to Cart</button></div>
                <div className="additem">{price6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice17.webp')}></img>
                <h3>Spinning tower</h3>
                <span>Rs.1099</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice7(price7+1)}>Add to Cart</button></div>
                <div className="additem">{price7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice18.webp')}></img>
                <h3>Learning magical planet earth</h3>
                <span>Rs.1400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice8(price8+1)}>Add to Cart</button></div>
                <div className="additem">{price8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice19.webp')}></img>
                <h3>Lucid globe for kids</h3>
                <span>Rs.1149</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice9(price9+1)}>Add to Cart</button></div>
                <div className="additem">{price9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/lowprice20.webp')}></img>
                <h3>youreka knowledge jackpot</h3>
                <span>Rs.275</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPrice10(price10+1)}>Add to Cart</button></div>
                <div className="additem">{price10}</div>
            </div></div>

        </div>
    </div>
    
    )
}

export default DealsandPromotions;