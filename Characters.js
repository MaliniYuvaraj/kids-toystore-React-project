import React from 'react';
import {useState} from 'react';
import Character1 from '../Images/character1.webp'
import Character2 from '../Images/character2.webp'
import Character3 from '../Images/character3.webp'
import Character4 from '../Images/character4.webp'
import Character5 from '../Images/character5.webp'
import {useNavigate} from 'react-router-dom';
function Characters()
{
  const Navigate=useNavigate()
  const navigatefirstcharacterPage=()=>
  {
    Navigate('/character1')
  }
  const navigatesecondcharacterPage=()=>
  {
    Navigate('/character2')
  }
  const navigatethirdcharacterPage=()=>
  {
    Navigate('/character3')
  }
  const navigateforthcharacterPage=()=>
  {
    Navigate('/character4')
  }
  const navigatefifthcharacterPage=()=>
  {
    Navigate('/character5')
  }

  const [spiderman1,setSpiderman1]=useState(0) 
   const [spiderman2,setSpiderman2]=useState(0) 
   const [spiderman3,setSpiderman3]=useState(0) 
   const [spiderman4,setSpiderman4]=useState(0) 
   const [spiderman5,setSpiderman5]=useState(0) 
   const [spiderman6,setSpiderman6]=useState(0) 
   const [spiderman7,setSpiderman7]=useState(0) 
   const [spiderman8,setSpiderman8]=useState(0) 
   const [spiderman9,setSpiderman9]=useState(0) 
   const [spiderman10,setSpiderman10]=useState(0) 

   const [pawpatrol1,setPawpatrol1]=useState(0)
   const [pawpatrol2,setPawpatrol2]=useState(0)
   const [pawpatrol3,setPawpatrol3]=useState(0)
   const [pawpatrol4,setPawpatrol4]=useState(0)
   const [pawpatrol5,setPawpatrol5]=useState(0)
   const [pawpatrol6,setPawpatrol6]=useState(0)
   const [pawpatrol7,setPawpatrol7]=useState(0)
   const [pawpatrol8,setPawpatrol8]=useState(0)
   const [pawpatrol9,setPawpatrol9]=useState(0)
   const [pawpatrol10,setPawpatrol10]=useState(0)

   const [shark1,setShark1]=useState(0)
   const [shark2,setShark2]=useState(0)
   const [shark3,setShark3]=useState(0)
   const [shark4,setShark4]=useState(0)
   const [shark5,setShark5]=useState(0)
   const [shark6,setShark6]=useState(0)
   const [shark7,setShark7]=useState(0)
   const [shark8,setShark8]=useState(0)
   const [shark9,setShark9]=useState(0)
   const [shark10,setShark10]=useState(0)

   const [mickey1,setMickey1]=useState(0)
 const [mickey2,setMickey2]=useState(0)
 const [mickey3,setMickey3]=useState(0)
 const [mickey4,setMickey4]=useState(0)
 const [mickey5,setMickey5]=useState(0)
 const [mickey6,setMickey6]=useState(0)
 const [mickey7,setMickey7]=useState(0)
 const [mickey8,setMickey8]=useState(0)
 const [mickey9,setMickey9]=useState(0)
 const [mickey10,setMickey10]=useState(0)   

 const [avengers1,setAvengers1]=useState(0)
    const [avengers2,setAvengers2]=useState(0)
    const [avengers3,setAvengers3]=useState(0)
    const [avengers4,setAvengers4]=useState(0)
    const [avengers5,setAvengers5]=useState(0)
    
    return(
        <div>
            <h2>Shop by Character</h2>
      <div className="charactergroup">
      <div className="character">
          <img src={Character1} onClick={()=>navigatefirstcharacterPage()}></img>
        </div>
        <div className="character">
          <img src={Character2} onClick={()=>navigatesecondcharacterPage()}></img>
        </div>
        <div className="character">
          <img src={Character3} onClick={()=>navigatethirdcharacterPage()}></img>
        </div>
        <div className="character">
          <img src={Character4} onClick={()=>navigateforthcharacterPage()}></img>
        </div>
        <div className="character">
          <img src={Character5} onClick={()=>navigatefifthcharacterPage()}></img>
        </div>
        </div>
        <br></br>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman1.webp')}></img>
                <h3>Spiderman school bag</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman1(spiderman1+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman1}</div>
            </div></div>

            <div className="periodoffer-item">
                <img src={require('../Images/spiderman2.webp')}></img>
                <h3>Foldable tent house</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman2(spiderman2+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman3.webp')}></img>
                <h3>Spiderman vehicle toy</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman3(spiderman3+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman4.webp')}></img>
                <h3>Spiderman puzzle pack</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman4(spiderman4+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman5.webp')}></img>
                <h3>Spiderman bat and ball</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman5(spiderman5+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman6.webp')}></img>
                <h3>Spiderman doctor set</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman6(spiderman6+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman7.webp')}></img>
                <h3>Spiderman ringtoss game</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman7(spiderman7+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman8.webp')}></img>
                <h3>Spiderman stationery kit</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman8(spiderman8+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman9.webp')}></img>
                <h3>Spiderman 2-wheel scooter</h3>
                <span>Rs.649</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman9(spiderman9+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/spiderman10.webp')}></img>
                <h3>Spiderman hood school bag</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSpiderman10(spiderman10+1)}>Add to Cart</button></div>
                <div className="additem">{spiderman10}</div>
            </div></div>

        </div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol1.webp')}></img>
                <h3>Mighty lookout tower</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol1(pawpatrol1+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol2.webp')}></img>
                <h3>Basic vehicle marshall chase</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol2(pawpatrol2+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol3.webp')}></img>
                <h3>Sea patroller ryder</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol3(pawpatrol3+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol4.webp')}></img>
                <h3>Basic vehicle chase ryder</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol4(pawpatrol4+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol5.webp')}></img>
                <h3>Deluxe cruser roleplay set</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol5(pawpatrol5+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol6.webp')}></img>
                <h3>Basicc vehicle rubble chase</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol6(pawpatrol6+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol7.webp')}></img>
                <h3>Basic vehicle tracker ryder</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol7(pawpatrol7+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol8.webp')}></img>
                <h3>Air patroller ryder playset</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol8(pawpatrol8+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol9.webp')}></img>
                <h3>Skye night light</h3>
                <span>Rs.649</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol9(pawpatrol9+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol10.webp')}></img>
                <h3>Pawpatrol rescue racers</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setPawpatrol10(pawpatrol10+1)}>Add to Cart</button></div>
                <div className="additem">{pawpatrol10}</div>
            </div></div>

        </div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol1.webp')}></img>
                <h3>Mighty lookout tower</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark1(shark1+1)}>Add to Cart</button></div>
                <div className="additem">{shark1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol2.webp')}></img>
                <h3>Basic vehicle marshall chase</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark2(shark2+1)}>Add to Cart</button></div>
                <div className="additem">{shark2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol3.webp')}></img>
                <h3>Sea patroller ryder</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark3(shark3+1)}>Add to Cart</button></div>
                <div className="additem">{shark3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol4.webp')}></img>
                <h3>Basic vehicle chase ryder</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark4(shark4+1)}>Add to Cart</button></div>
                <div className="additem">{shark4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol5.webp')}></img>
                <h3>Deluxe cruser roleplay set</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark5(shark5+1)}>Add to Cart</button></div>
                <div className="additem">{shark5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol6.webp')}></img>
                <h3>Basicc vehicle rubble chase</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark6(shark6+1)}>Add to Cart</button></div>
                <div className="additem">{shark6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol7.webp')}></img>
                <h3>Basic vehicle tracker ryder</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark7(shark7+1)}>Add to Cart</button></div>
                <div className="additem">{shark7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol8.webp')}></img>
                <h3>Air patroller ryder playset</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark8(shark8+1)}>Add to Cart</button></div>
                <div className="additem">{shark8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol9.webp')}></img>
                <h3>Skye night light</h3>
                <span>Rs.649</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark9(shark9+1)}>Add to Cart</button></div>
                <div className="additem">{shark9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/pawpatrol10.webp')}></img>
                <h3>Pawpatrol rescue racers</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setShark10(shark10+1)}>Add to Cart</button></div>
                <div className="additem">{shark10}</div>
            </div></div>

        </div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/mickey1.webp')}></img>
                <h3>Mickey panorama puzzle</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey1(mickey1+1)}>Add to Cart</button></div>
                <div className="additem">{mickey1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey2.webp')}></img>
                <h3>Mickey clubhouse puzzle</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey2(mickey2+1)}>Add to Cart</button></div>
                <div className="additem">{mickey2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey3.webp')}></img>
                <h3>Mickey bowling alley set</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey3(mickey3+1)}>Add to Cart</button></div>
                <div className="additem">{mickey3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey4.webp')}></img>
                <h3>Mickey on ride puzzle</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey4(mickey4+1)}>Add to Cart</button></div>
                <div className="additem">{mickey4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey5.webp')}></img>
                <h3>Mickey mouse hairband</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey5(mickey5+1)}>Add to Cart</button></div>
                <div className="additem">{mickey5}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey6.webp')}></img>
                <h3>Mickey mouse soft pillow</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey6(mickey6+1)}>Add to Cart</button></div>
                <div className="additem">{mickey6}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey7.webp')}></img>
                <h3>Mickey mouse backpack</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey7(mickey7+1)}>Add to Cart</button></div>
                <div className="additem">{mickey7}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey8.webp')}></img>
                <h3>Mickey flush flipflop</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey8(mickey8+1)}>Add to Cart</button></div>
                <div className="additem">{mickey8}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey9.webp')}></img>
                <h3>Mickey mouse hand puffet</h3>
                <span>Rs.649</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey9(mickey9+1)}>Add to Cart</button></div>
                <div className="additem">{mickey9}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/mickey10.webp')}></img>
                <h3>Mickey mouse stainless steel bottle</h3>
                <span>Rs.449</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setMickey10(mickey10+1)}>Add to Cart</button></div>
                <div className="additem">{mickey10}</div>
            </div></div>

        </div>
        <div className="periodoffer">
            <div className="periodoffer-item">
                <img src={require('../Images/avengers1.webp')}></img>
                <h3>Avengers 2-wheel scooter</h3>
                <span>Rs.599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAvengers1(avengers1+1)}>Add to Cart</button></div>
                <div className="additem">{avengers1}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/avengers2.webp')}></img>
                <h3>Avengers school bag</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAvengers2(avengers2+1)}>Add to Cart</button></div>
                <div className="additem">{avengers2}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/avengers3.webp')}></img>
                <h3>Avengers jigsaw puzzle</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAvengers3(avengers3+1)}>Add to Cart</button></div>
                <div className="additem">{avengers3}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/avengers4.webp')}></img>
                <h3>Avengers sling bag</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAvengers4(avengers4+1)}>Add to Cart</button></div>
                <div className="additem">{avengers4}</div>
            </div></div>
            <div className="periodoffer-item">
                <img src={require('../Images/avengers5.webp')}></img>
                <h3>3 in 1 frank avengers puzzle</h3>
                <span>Rs.400</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAvengers5(avengers5+1)}>Add to Cart</button></div>
                <div className="additem">{avengers5}</div>
            </div></div>

        </div>
        </div>
    )
}
export default Characters;