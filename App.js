import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import{
  BrowserRouter as Router,
  Switch,
  Link,
  Route,Routes
} from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NavComponent from './components/NavComponent';
import DealsandPromotions from './components/DealsandPromotions'
import Age from './components/Age'
import Category from './components/Category'
import Characters from './components/Characters'
import Brand from './components/Brand'
import AgeGroup1 from './container/AgeGroup1'
import AgeGroup2 from './container/AgeGroup2'
import AgeGroup3 from './container/AgeGroup3'
import AgeGroup4 from './container/AgeGroup4'
import AgeGroup5 from './container/AgeGroup5'
import Deals1 from './container/Deals1'
import Deals2 from './container/Deals2'
import Deals3 from './container/Deals3'
import Deals4 from './container/Deals4'
import Deals5 from './container/Deals5'
import Category1 from './container/Category1'
import Category2 from './container/Category2'
import Category3 from './container/Category3'
import Category4 from './container/Category4'
import Brand1 from  './container/Brand1'
import Brand2 from  './container/Brand2'
import Brand3 from  './container/Brand3'
import Brand4 from  './container/Brand4'
import Character1 from './container/Character1'
import Character2 from './container/Character2'
import Character3 from './container/Character3'
import Character4 from './container/Character4'
import Character5 from './container/Character5'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignUp></SignUp>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/navcomponent' element={<NavComponent></NavComponent>}></Route>
          <Route path='/dealsandpromotions' element={<DealsandPromotions></DealsandPromotions>}></Route>
          <Route path='/age' element={<Age></Age>}></Route>
          <Route path='/category' element={<Category></Category>}></Route>
          <Route path='/brand' element={<Brand></Brand>}></Route>
          <Route path='/characters' element={<Characters></Characters>}></Route>
          <Route path='/agegroup1' element={<AgeGroup1></AgeGroup1>}></Route>
          <Route path='/agegroup2' element={<AgeGroup2></AgeGroup2>}></Route>
          <Route path='/agegroup3' element={<AgeGroup3></AgeGroup3>}></Route>
          <Route path='/agegroup4' element={<AgeGroup4></AgeGroup4>}></Route>
          <Route path='/agegroup5' element={<AgeGroup5></AgeGroup5>}></Route>
          <Route path='/deals1' element={<Deals1></Deals1>}></Route>
          <Route path='/deals2' element={<Deals2></Deals2>}></Route>
          <Route path='/deals3' element={<Deals3></Deals3>}></Route>
          <Route path='/deals4' element={<Deals4></Deals4>}></Route>
          <Route path='/deals5' element={<Deals5></Deals5>}></Route>
          <Route path='/category1' element={<Category1></Category1>}></Route>
          <Route path='/category2' element={<Category2></Category2>}></Route>
          <Route path='/category3' element={<Category3></Category3>}></Route>
          <Route path='/category4' element={<Category4></Category4>}></Route>
          <Route path='/brand1' element={<Brand1></Brand1>}></Route>
          <Route path='/brand2' element={<Brand2></Brand2>}></Route>
          <Route path='/brand3' element={<Brand3></Brand3>}></Route>
          <Route path='/brand4' element={<Brand4></Brand4>}></Route>
          <Route path='/character1' element={<Character1></Character1>}></Route>
          <Route path='/character2' element={<Character2></Character2>}></Route>
          <Route path='/character3' element={<Character3></Character3>}></Route>
          <Route path='/character4' element={<Character4></Character4>}></Route>
          <Route path='/character5' element={<Character5></Character5>}></Route>
      </Routes>
      </Router></div>          
  );
}

export default App;

