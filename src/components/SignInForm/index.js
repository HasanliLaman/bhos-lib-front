import React, { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import { signInSchema } from "../../schemas";
import Button from "../UI/Button";
import { login } from "../../server";
import StyleSignInForm from "./style";

library.add(faSpinner);

const SignInForm = () => {
  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const { data, isLoading, mutate } = useMutation({
    mutationFn: login,
    onError: () => toast.error("Email or password is wrong!"),
    onSuccess: ({ data }) => {
      logInUser(data.token);
      navigate("/");
    },
  });

  const submitHandler = async function (formData) {
    mutate(formData);

    if (data)
      reset({
        email: "",
        password: "",
      });
  };

  return (
    <StyleSignInForm onSubmit={handleSubmit(submitHandler)}>
      <h2>Sign In</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          id="email"
          placeholder="Enter email"
          name="email"
          type="email"
        />
        {errors.email?.message && <p>{errors.email?.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          {...register("password")}
          type="password"
          id="password"
          placeholder="Enter password"
          name="password"
        />
        {errors.password?.message && <p>{errors.password?.message}</p>}
      </div>
      <Button
        text={
          <>
            <p>Sign in</p>
            {isLoading && (
              <FontAwesomeIcon
                icon="fa-spinner"
                spin
                style={{
                  color: "#fafcff",
                  marginLeft: "1rem",
                  fontSize: "1.6rem",
                }}
              />
            )}
          </>
        }
        type="primary"
      />
    </StyleSignInForm>
  );
};

export default SignInForm;
