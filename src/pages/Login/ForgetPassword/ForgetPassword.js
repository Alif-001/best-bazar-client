import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import registerStyles from "../../../styles/Register.module.scss";
import Navigation from "../../Shared/Navigation/Navigation";

const ForgetPassword = () => {
  const { handlePasswordReset } = useAuth();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email } = data;
    handlePasswordReset(email, navigate);
  };

  return (
    <>
      {/* navigation  */}
      <Navigation />
      <Container className="py-5 mb-5">
        <h3 className={`${registerStyles.title} text-center mb-4`}>
          Please Login
        </h3>
        <div className={`${registerStyles.registration} shadow`}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Control
              type="text"
              placeholder="Email Address"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />

            <Button type="submit" variant="">
              Reset
            </Button>
          </form>
          <div>
            <p>
              New user? <Link to="/register">Register here</Link>{" "}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgetPassword;
