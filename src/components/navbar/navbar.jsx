import { NavLink } from "react-router-dom";
import { useContext } from "react";
import  LoginContext from "../../context/logincontext"
import { getAuth, signOut } from "firebase/auth"

function NavBar() {

  const { IsLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const auth = getAuth();
  const Logout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  const renderLoginButton = () => {
    if (IsLoggedIn) {
      return (
        <div className="flex items-center">
        <p className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 cursor-pointer" onClick={Logout}>
        
          Log Out
        </p>
      </div>
      );
    } else {
      return (
        <NavLink to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
          <div className="flex items-center">
            
            Login
          </div>
        </NavLink>
      );
    }
  };


    return ( 
        <>
        <nav className="navbar w-full flex items-center justify-between flex-wrap bg-orange-400 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
  </div>
  <div className="block lg:hidden">
    {/* Add a responsive menu button here */}
  </div>
  {/* Navbar Start */}


  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end">
  <div className="text-sm lg:flex-grow flex items-center">
  <div>
    {/* Your logo */}
    <img src="src/images/logo.jpg" alt="Logo" className="h-8 w-8 rounded-full mr-12" />
  </div>
    <NavLink to="/home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
      Home
      <span className="border-l mx-2 h-4 border-white ml-6 opacity-50"></span>
    </NavLink>
    <NavLink to="/products" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
      Products
      <span className="border-l mx-2 h-4 border-white ml-6 opacity-50"></span>
    </NavLink>
    <NavLink to="/profile" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
      Profile
      <span className="border-l mx-2 h-4 border-white ml-6 opacity-50"></span>
    </NavLink>
    <NavLink to="/categories" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
      Categories
      <span className="border-l mx-2 h-4 border-white ml-6 opacity-50"></span>
    </NavLink>
    <NavLink to="/cart" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-1">
          Cart 
    </NavLink>
    <NavLink to="/cart" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-1">
      <span class="material-symbols-outlined text-base font-normal tracking-wide ">
          shopping_cart
      </span>
    </NavLink>
    
  </div>
  <div>
    {/* Additional content on the right side, if needed */}
  </div>
</div>




  {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <NavLink to="/home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
        Home
      </NavLink>
      <NavLink to="/products" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
        Products
      </NavLink>
      <NavLink to="/profile" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
        Profile
      </NavLink>
      <NavLink to="/categories" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
        Categories
      </NavLink>
      <NavLink to="/cart" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
        Cart
      </NavLink>
      
    </div>
    <div>
    
    </div>
  </div> */}
  {/* //Navbar END */}

  <div className="login">{renderLoginButton()}</div>

</nav>

        </>
     );
}
export default NavBar;