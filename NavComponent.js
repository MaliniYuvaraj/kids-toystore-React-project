import React from 'react';
import {Link} from 'react-router-dom';
import './NavComponent.css'
import Slider from "react-slick";
import Carousel1 from '../Images/carousel1.webp'
import Carousel2 from '../Images/carousel2.webp'
import Carousel3 from '../Images/carousel3.webp'
import Hamleylogo from '../Images/hamleylogo.webp'
import age from '../Images/age.webp'
import Age1 from '../Images/age1.webp'
import Age2 from '../Images/age2.webp'
import Age3 from '../Images/age3.webp'
import Age4 from '../Images/age4.webp'
import Category1 from '../Images/category1.webp'
import Category2 from '../Images/category2.webp'
import Category3 from '../Images/category3.webp'
import Category4 from '../Images/category4.webp'
import Brand1 from '../Images/brand1.webp'
import Brand2 from '../Images/brand2.webp'
import Brand3 from '../Images/brand3.webp'
import Brand4 from '../Images/brand4.webp'
import Character1 from '../Images/character1.webp'
import Character2 from '../Images/character2.webp'
import Character3 from '../Images/character3.webp'
import Character4 from '../Images/character4.webp'
import Character5 from '../Images/character5.webp'
import Background from '../Images/background1.jpg'
import {useNavigate} from 'react-router-dom';
import Deals1 from '../Images/deals1.webp'
import Deals2 from '../Images/deals2.webp'
import Deals3 from '../Images/deals3.webp'
import Deals4 from '../Images/deals4.webp'
import Deals5 from '../Images/deals5.webp'
import './DealsandPromotions.css';

function NavComponent()
{ var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
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


return(
    <div>
            <nav>
                        <ul>
                        <li><img src={Hamleylogo} width={120} height={60} className="nav"></img></li>
                        <li><Link to="/navcomponent" className="nav">Home</Link></li>
                        <li><Link to="/dealsandpromotions" className="nav">Deals and Promotions </Link></li>
                        <li><Link to="/category" className="nav">Category</Link></li>
                        <li><Link to="/age" className="nav">Age</Link></li>
                        <li><Link to="/brand" className="nav">Brand</Link></li>
                        <li><Link to="/characters" className="nav">Characters</Link></li>
                        </ul>
            </nav>
        <div className="carouselhead">
      <div className="Carousel">
        <Slider {...settings}>
          <div className="carouselimage">
            <img src={Carousel1} height={500}></img>
          </div>
          <div className="carouselimage">
            <img src={Carousel2}  height={500}></img>
          </div>
          <div className="carouselimage">
            <img src={Carousel3}  height={500}></img>
          </div>
        </Slider>
      </div>
      </div>
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
        <h2>Shop by Character</h2>
      <div className="charactergroup">
      <div className="character">
          <img src={Character1} onClick={()=>navigatefirstcharacterPage()}></img>
        </div>
        <div className="character">
          <img src={Character2}  onClick={()=>navigatesecondcharacterPage()}></img>
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
        <div className="Background">
          <div className="background">
            <img src={Background}></img>
          </div>
        </div>
            </div>
)
}
export default NavComponent;
