import React from "react";
import './Register.css'
import { useForm } from "react-hook-form";
import { useRef } from "react";
const Login = () => {
    const {
        watch,
      register,
      formState: { errors },
      handleSubmit
    } = useForm({
      mode: "onChange"
    });
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = (data) => {
      console.log(JSON.stringify(data));
      console.log(data);
 
    };
    return (
        <div className="my-16">
          <form onSubmit={handleSubmit(onSubmit)}>
     

      <label htmlFor="email">Email</label>
      <input
        placeholder="Enter your email address"
        type="text"
        {...register("email", {
          required: "this is required",
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email address"
          }
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <label>Password</label>
      <input
        name="password"
        type="password"
        {...register("password",{
          required: "this is required",
            message: "Enter value password"
          
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      

      <input type="submit" value="Login"/>
      
    </form>
        </div>
    );
};

export default Login;