import React from "react";
import './Register.css'
import { useForm } from "react-hook-form";
import { useRef } from "react";


const Register = () => {

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
      <label htmlFor="name">Name</label>
      <input
        placeholder="Enter your name"
        {...register("name", {
          required: "this is a required",
         
        })}
      />
      {errors.name && <p>{errors.name.message}</p>}

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
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <label>Repeat password</label>
      <input
        name="password_repeat"
        type="password"
        {...register("password_repeat",{
          validate: value =>
            value === password.current || "The passwords do not match"
        })}
      />
      {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

      <input type="submit" value="Register"/>
      
    </form>
        </div>
    );
};

export default Register;