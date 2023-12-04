import { createUserWithEmailAndPassword  } from 'firebase/auth'
import { UserAuth } from '../../Firebase conf';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as yup from  "yup"

function SignUp() {
    const navigate = useNavigate();
    const DefaultValue ={
        name:"",
        email:"",
        contactnum:"",
        pass:"",
        confirmpass:"",
    };

    const ValidatingValue = yup.object().shape({
        name: yup.string().required("Please enter your name"),
        email: yup.string().required("Please fill the E-mail field").email("Please enter a valid email"),
        contactnum: yup.string().matches(/^[0-9]{11}$/,'Invalid phone number format').test('is-11-digits', 'Phone number must be exactly 11 digits', (value) => {
          return (value && value.replace(/\D/g, '').length === 11) || value === null;})
        .required("Please enter your contact number").transform((value) => (value ? value.replace(/\D/g, '') : null)),
        pass: yup.string().required("Please fill the password field").matches(/^(?=.*[A-Z])(?=.*\d)/, "Password should contain at least one uppercase letter and a number"),
        confirmpass: yup.string().oneOf([yup.ref('pass'), " "], "Password does not match").required("Confirm your passwrod")
    });

   
    const handleSubmit = async (values) => {
        try {
          const { name, email, contactnum, pass } = values;
          const userCredential = await createUserWithEmailAndPassword( UserAuth, email, pass );
          const user = userCredential.user;
          console.log("User registered:", user);
          navigate("/login")
        } catch (error) {
          if (error.code === "auth/invalid-email") {
            console.error(
              "Invalid email format. Please provide a valid email address."
            );
          } else {
            console.error("Registration error:", error);
          }
        }
      };
    

    return ( 
        <Fragment>
            <h1 className="text-2xl font-semibold mb-4">Sign Up Page</h1>
            <Formik initialValues={DefaultValue} validationSchema={ValidatingValue} onSubmit={handleSubmit}>
                
                <Form className="w-96 mx-auto border border-black p-4 rounded">
                <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 text-sm font-semibold">Name</label>
                        <Field type="text" name="name" placeholder="Enter your Name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                        <p className="text-red-500"><ErrorMessage name="name" /></p>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 text-sm font-semibold">E-mail</label>
                        <Field type="text" name="email" placeholder="Enter your E-mail" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                        <p className="text-red-500"><ErrorMessage name="email" /></p>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="contactnum" className="block text-gray-600 text-sm font-semibold">Contact Number</label>
                        <Field type="number" name="contactnum" placeholder="Enter your contact number" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                        <p className="text-red-500"><ErrorMessage name="contactnum" /></p>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="pass" className="block text-gray-600 text-sm font-semibold">Password</label>
                        <Field type="password" name="pass" placeholder="Enter your Password" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                        <p className="text-red-500"><ErrorMessage name="pass" /></p>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmpass" className="block text-gray-600 text-sm font-semibold">Confirm Password</label>
                        <Field type="password" name="confirmpass" placeholder="Confirm Password" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                        <p className="text-red-500"><ErrorMessage name="confirmpass" /></p>
                    </div>

                    <button type='submit' className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline">Sign Up</button>

                </Form>
            </Formik>
        </Fragment>
     );
}
export default SignUp;