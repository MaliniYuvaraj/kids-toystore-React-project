import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import age from '../Images/age.webp'
import Age1 from '../Images/age1.webp'
import Age2 from '../Images/age2.webp'
import Age3 from '../Images/age3.webp'
import Age4 from '../Images/age4.webp'
import Agegroup1 from '../Images/0-18months1.webp'
import Agegroup2 from '../Images/0-18months2.webp'
import Agegroup3 from '../Images/0-18months3.webp'
import Agegroup4 from '../Images/0-18months4.webp'
import Agegroup5 from '../Images/0-18months5.webp'
import Agegroup6 from '../Images/0-18months6.webp'
import Agegroup7 from '../Images/0-18months7.webp'
import Agegroup8 from '../Images/0-18months8.webp'
import Agegroup9 from '../Images/0-18months9.webp'
import Agegroup10 from '../Images/0-18months10.webp'
function Age()
{
  const Navigate=useNavigate()
  const navigatefirstPage=()=>
  {
    Navigate('/agegroup1')
  }
  const navigatesecondPage=()=>
  {
    Navigate('/agegroup2')
  }
  const navigatethirdPage=()=>
  {
    Navigate('/agegroup3')
  }
  const navigateforthPage=()=>
  {
    Navigate('/agegroup4')
  }
  const navigatefifthPage=()=>
  {
    Navigate('/agegroup5')
  }

  const [addfirstitem,setAddfirstitem]=useState(0)
    const [addseconditem,setAddseconditem]=useState(0)
    const [addthirditem,setAddthirditem]=useState(0)
    const [addforthitem,setAddforthitem]=useState(0)
    const [addfifthitem,setAddfifthitem]=useState(0)
    const [addsixthitem,setAddsixthitem]=useState(0)
    const [addseventhitem,setAddseventhitem]=useState(0)
    const [addeighthitem,setAddeighthitem]=useState(0)
    const [addninthitem,setAddninthitem]=useState(0)
    const [addtenthitem,setAddtenthitem]=useState(0)

    const [firstitem,setFirstitem]=useState(0)
    const [seconditem,setSeconditem]=useState(0)
    const [thirditem,setThirditem]=useState(0)
    const [forthitem,setForthitem]=useState(0)
    const [fifthitem,setFifthitem]=useState(0)
    const [sixthitem,setSixthitem]=useState(0)
    const [seventhitem,setSeventhitem]=useState(0)
    const [eighthitem,setEighthitem]=useState(0)
    const [ninthitem,setNinthitem]=useState(0)
    const [tenthitem,setTenthitem]=useState(0)

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

    const [datafirst,setDatafirst]=useState(0)
    const [datasecond,setDatasecond]=useState(0)
    const [datathird,setDatathird]=useState(0)
    const [dataforth,setDataforth]=useState(0)
    const [datafifth,setDatafifth]=useState(0)
    const [datasixth,setDatasixth]=useState(0)
    const [dataseventh,setDataseventh]=useState(0)
    const [dataeighth,setDataeighth]=useState(0)
    const [dataninth,setDataninth]=useState(0)
    const [datatenth,setDatatenth]=useState(0)

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
            <h2>Shop by Age</h2>
      <div className="agegroup">
        <div className="age">
          <img src={age} onClick={()=>navigatefirstPage()}></img>
        </div>
        <div className="age">
          <img src={Age1} onClick={()=>navigatesecondPage()}></img>
        </div>
        <div className="age">
          <img src={Age2} onClick={()=>navigatethirdPage()}></img>
        </div>
        <div className="age">
          <img src={Age3} onClick={()=>navigateforthPage()}></img>
        </div>
        <div className="age">
          <img src={Age4} onClick={()=>navigatefifthPage()}></img>
        </div>
      </div>
      <br></br>
      <div className="agecategory">
            <div className="agegroup-item">
                <img src={Agegroup1}></img>
                <h3>Melodious Xylophone</h3>
                <span>Rs.399</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddfirstitem(addfirstitem+1)}>Add to Cart</button></div>
                <div className="additem">{addfirstitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup2}></img>
                <h3>Multicolour musical Toy</h3>
                <span>Rs.299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddseconditem(addseconditem+1)}>Add to Cart</button></div>
                <div className="additem">{addseconditem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup3}></img>
                <h3>Penguin wooden rattle</h3>
                <span>Rs.499</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddthirditem(addthirditem+1)}>Add to Cart</button></div>
                <div className="additem">{addthirditem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup4}></img>
                <h3>Baby ball zone</h3>
                <span>Rs.549</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddforthitem(addforthitem+1)}>Add to Cart</button></div>
                <div className="additem">{addforthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup5}></img>
                <h3>My 1st sand and water table</h3>
                <span>Rs.699</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddfifthitem(addfifthitem+1)}>Add to Cart</button></div>
                <div className="additem">{addfifthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup6}></img>
                <h3>Baby soothing vibration bouncer</h3>
                <span>Rs.899</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddsixthitem(addsixthitem+1)}>Add to Cart</button></div>
                <div className="additem">{addsixthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup7}></img>
                <h3>Baby potty seat</h3>
                <span>Rs.749</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddseventhitem(addseventhitem+1)}>Add to Cart</button></div>
                <div className="additem">{addseventhitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup8}></img>
                <h3>Peppa and friends musical truck</h3>
                <span>Rs.999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddeighthitem(addeighthitem+1)}>Add to Cart</button></div>
                <div className="additem">{addeighthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup9}></img>
                <h3>Push and spin duck spinning toy</h3>
                <span>Rs.450</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddninthitem(addninthitem+1)}>Add to Cart</button></div>
                <div className="additem">{addninthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={Agegroup10}></img>
                <h3>Beach set wiyh trolley</h3>
                <span>Rs.299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setAddtenthitem(addtenthitem+1)}>Add to Cart</button></div>
                <div className="additem">{addtenthitem}</div>
            </div></div>

        </div>
        <div className="agecategory">
            <div className="agegroup-item">
                <img src={require('../Images/18-36months1.webp')}></img>
                <h3>Town family house on wheels</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFirstitem(firstitem+1)}>Add to Cart</button></div>
                <div className="additem">{firstitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months2.webp')}></img>
                <h3>My organic market</h3>
                <span>Rs.1700</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSeconditem(seconditem+1)}>Add to Cart</button></div>
                <div className="additem">{seconditem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months3.webp')}></img>
                <h3>Swing car for outdoor</h3>
                <span>Rs.2999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setThirditem(thirditem+1)}>Add to Cart</button></div>
                <div className="additem">{thirditem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months4.webp')}></img>
                <h3>Foldable house tent</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setForthitem(forthitem+1)}>Add to Cart</button></div>
                <div className="additem">{forthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months5.webp')}></img>
                <h3>Cooking kitchen set</h3>
                <span>Rs.999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setFifthitem(fifthitem+1)}>Add to Cart</button></div>
                <div className="additem">{fifthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months6.webp')}></img>
                <h3>Doctor play set</h3>
                <span>Rs.799</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSixthitem(sixthitem+1)}>Add to Cart</button></div>
                <div className="additem">{sixthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months7.webp')}></img>
                <h3>Reality learning toys</h3>
                <span>Rs.749</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setSeventhitem(seventhitem+1)}>Add to Cart</button></div>
                <div className="additem">{seventhitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months8.webp')}></img>
                <h3>My pet giraffe</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setEighthitem(eighthitem+1)}>Add to Cart</button></div>
                <div className="additem">{eighthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months9.webp')}></img>
                <h3>Rally racer for kids</h3>
                <span>Rs.849</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setNinthitem(ninthitem+1)}>Add to Cart</button></div>
                <div className="additem">{ninthitem}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/18-36months10.webp')}></img>
                <h3>Chalk & chuckles stack cake</h3>
                <span>Rs.500</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setTenthitem(tenthitem+1)}>Add to Cart</button></div>
                <div className="additem">{tenthitem}</div>
            </div></div>
        </div>
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
        <div className="agecategory">
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs1.webp')}></img>
                <h3>Jurassic world pteranodon chase</h3>
                <span>Rs.1999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatafirst(datafirst+1)}>Add to Cart</button></div>
                <div className="additem">{datafirst}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs2.webp')}></img>
                <h3>Clever cogs</h3>
                <span>Rs.1599</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatasecond(datasecond+1)}>Add to Cart</button></div>
                <div className="additem">{datasecond}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs3.webp')}></img>
                <h3>Creative party box</h3>
                <span>Rs.2999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatathird(datathird+1)}>Add to Cart</button></div>
                <div className="additem">{datathird}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs4.webp')}></img>
                <h3>Micky & friends building set</h3>
                <span>Rs.1299</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDataforth(dataforth+1)}>Add to Cart</button></div>
                <div className="additem">{dataforth}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs5.webp')}></img>
                <h3>City dunk rampchallenge</h3>
                <span>Rs.1999</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatafifth(datafifth+1)}>Add to Cart</button></div>
                <div className="additem">{datafifth}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs6.webp')}></img>
                <h3>2-wheel scooter for kids</h3>
                <span>Rs.1799</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatasixth(datasixth+1)}>Add to Cart</button></div>
                <div className="additem">{datasixth}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs7.webp')}></img>
                <h3>Companion robot</h3>
                <span>Rs.749</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDataseventh(dataseventh+1)}>Add to Cart</button></div>
                <div className="additem">{dataseventh}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs8.webp')}></img>
                <h3>3 in 1 stem kit</h3>
                <span>Rs.509</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDataeighth(dataeighth+1)}>Add to Cart</button></div>
                <div className="additem">{dataeighth}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs9.webp')}></img>
                <h3>Police prisoner transportblocks</h3>
                <span>Rs.849</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDataninth(dataninth+1)}>Add to Cart</button></div>
                <div className="additem">{dataninth}</div>
            </div></div>
            <div className="agegroup-item">
                <img src={require('../Images/5-7yrs10.webp')}></img>
                <h3>Cyber drone block for kids</h3>
                <span>Rs.1077</span>
                <div className="addtocart">
               <div><button className="btn" onClick={()=>setDatatenth(datatenth+1)}>Add to Cart</button></div>
                <div className="additem">{datatenth}</div>
            </div></div>


        </div>
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
export default Age;