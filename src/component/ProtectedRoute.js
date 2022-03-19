import React from "react";
import { useNavigate, Route } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
	const isAuthenticated = localStorage.getItem("userId");
	const navigate = useNavigate();
	return (
		<Route
			{...restOfProps}
			render={(props) =>
				isAuthenticated ? <Component {...props} /> : navigate("/")
			}
		/>
	);
};
