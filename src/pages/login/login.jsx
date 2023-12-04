import { Formik, Form, Field, ErrorMessage } from "formik"
import { Fragment } from "react";
import * as yup from  "yup";
import LoginContext from "../../context/logincontext";
import { useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { UserAuth } from "../../Firebase conf";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


function Login() {
    
    const DefaultValue ={
        email: "",
        pass: "",
    };
    const ValidatingValue = yup.object().shape({
        email: yup.string().required("Please fill the E-mail field").email("Please enter a valid email"),
        pass: yup.string().required("Please fill the password field"),
    });
   
    const navigate = useNavigate();
    const location = useLocation();
    let loc = location.state?.redirectedFrom.pathname;
  
    console.log(location);
    console.log(loc);
    const { IsLoggedIn, setIsLoggedIn } = useContext(LoginContext);

    const handleSubmit = async (values) => {
        try {
          const { email, pass } = values;
          const userCredential = await signInWithEmailAndPassword( UserAuth, email, pass);
          const user = userCredential.user;
          console.log("User logged in:", user);
          setIsLoggedIn(true);
    
          if (loc === "/cart") {
            navigate(loc);
          } else {
            navigate(-1);
          }
        } catch (error) {
          console.log("Login error:", error);
        }
      };

    return ( 
        <Fragment>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-80">
                    <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

            <Formik initialValues={DefaultValue} validationSchema={ValidatingValue} onSubmit={handleSubmit}>
                <Form>
                    <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 text-sm font-semibold">E-mail</label>
                    <Field type="text" name="email" placeholder="Enter your E-mail" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"/>
                    <p> <ErrorMessage name="email"/> </p>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="pass" placeholder="Enter your Password" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"/>
                    <p> <ErrorMessage name="pass"/> </p>
                    </div>
                    
                    <button type="Submit"className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline">Login</button>
                    <p>Don't have an account?  </p>
                    <p>
                      <Link to="/signup" className="text-blue-500 border-b border-blue-500 hover:border-blue-700">
                        Create an account
                      </Link>
                    </p>

                </Form>
            </Formik>
            </div>
            </div>
        </Fragment>
     );
}

export default Login;