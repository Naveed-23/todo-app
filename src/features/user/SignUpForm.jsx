import { useState } from "react";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import FormButton from "../../ui/FormButton";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";
const apiUrl = import.meta.env.VITE_API;

export default function SignUpForm(){
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return <Form>
        <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="First Name">
        <Input
          type="text"
          id="firstName"
          // This makes this form better for password managers
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Last Name">
        <Input
          type="text"
          id="lastName"
          // This makes this form better for password managers
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <div className="flex justify-center items-center">
      <FormButton onClick={async function(e) {
            e.preventDefault();  
            try {
                const response = await axios.post(`${apiUrl}/api/signup`, {
                    email,
                    firstName,
                    lastName,
                    password
                });
                if (response.data && response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    toast.success("Successfully Signed up!")
                    navigate("/");
                } else {
                    toast.error("Token not found in response:", response.data);
                }
            } catch (error) {
                toast.error(error.response?.data?.message);
            }
        }}
 size="login">Sign up</FormButton>
      </div>
      <div className="text-center md:text-left mt-4">
          <span className="text-center block mb-2">or</span>
          <span className="text-center block">
              Already have an account?{' '}
              <Link className="underline text-blue-400" to='/login'>Login</Link>
          </span>
      </div>
    </Form>
}
