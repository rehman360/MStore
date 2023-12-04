import Products from './pages/products/products'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import NavBar from './components/navbar/navbar'
import PageNotFound from './pages/products/pagenotfound'
import ProductDetails from './pages/product details/productdetails'
import Profile from './pages/profile/profile'
import Categories from './pages/categories/categories'
import Cart from './pages/cart/cart'
import Login from './pages/login/login'
import SignUp from './pages/signUp/signup'
import AuthProvider from './context/LoginContextProvider'
import PrivateRoutes from './components/privateroutes/useAuth'

function App() {

  return (
    <AuthProvider>
     <NavBar/>
       <Routes>
       <Route path='/' element={ <Home/> }></Route>
        <Route path='/home' element={ <Home/> }></Route>
        <Route path='/products/:categories?' element={ <Products/> }></Route>
        <Route path='/productdetails/:id' element={ <ProductDetails/> }></Route>
        <Route path='/*' element={ <PageNotFound/> }></Route>
        <Route path='/profile' element={ <Profile/> }></Route>
        <Route path='/categories' element={ <Categories/> }></Route>
        <Route path='/login' element={ <Login/> }></Route>
        <Route path='/signup' element={ <SignUp/> }></Route>
        <Route path='/cart' element={ <PrivateRoutes><Cart/></PrivateRoutes> }></Route>
       </Routes>
    </AuthProvider>
  )
}

export default App
