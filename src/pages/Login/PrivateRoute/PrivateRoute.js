import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  // loading spinner
  if (isLoading) {
    return (
      <div sx={{ textAlign: "center", py: 2 }}>
        <Spinner color="primary" />
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
