import { useState } from "react";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import FormButton from "../../ui/FormButton";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";
import { useAuth } from "../Authentication/AuthProvider";
const apiUrl = import.meta.env.VITE_API;

export default function LoginForm(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();

    return <Form>
        <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
                const response = await axios.post(`${apiUrl}/api/login`, {
                    email,
                    password
                });
                if (response.data && response.data.token) {
                    toast.success("Succesfully logged in");
                    login(response.data.token);
                    navigate("/");
                } else {
                    toast.error("Token not found in response:", response.data?.message);
                }
            } catch (error) {
              if (error.response) {
                // Server responded with a status code out of the range of 2xx
                toast.error(error.response.data.message || "An error occurred");
              } else if (error.request) {
                // The request was made but no response was received
                toast.error("No response received from server");
              } else {
                // Something happened in setting up the request that triggered an Error
                toast.error("Error in setting up request");
              }
            }
            
        }} size="login">Login</FormButton>
      </div>
      <div className="">
        <span className="flex justify-center p-3">or</span>
        <span className="flex justify-center gap-1">Dont have an account?<Link className="underline text-blue-400" to='/signup'>Register</Link></span>
        </div>
    </Form>
}