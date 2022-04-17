import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addLogin } from "./actions/LoginAction";
import { LOGIN_ADD_RESET } from "./constants/LoginConstants";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [pass, setPass] = useState("");
	// const [userId, setUserId] = useState("");

	const loginAdd = useSelector((state) => state.loginAdd);
	const { success: successAdd } = loginAdd;

	useEffect(() => {
		if (successAdd) {
			dispatch({ type: LOGIN_ADD_RESET });
			setName("");
			setPass("");
			navigate("/home");
		}
	}, [successAdd]);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		dispatch(addLogin(name, pass));
	};
	return (
		<div className="flex h-screen bg-slate-500">
			<div className="w-full max-w-md px-16 py-10 m-auto bg-white border rounded-lg border-primaryBorder shadow-default">
				<h1 className="mt-4 mb-12 text-2xl font-medium text-center text-primary">
					Log in to your account 🔐
				</h1>

				<form onSubmit={handleFormSubmit}>
					<div>
						<label htmlFor="Username">Email</label>
						<input
							type="text"
							className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
							id="username"
							placeholder="Your Email"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="w-full p-2 mb-4 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
							id="password"
							placeholder="Your Password"
							onChange={(e) => setPass(e.target.value)}
							value={pass}
						/>
					</div>

					<div className="flex items-center justify-center mt-6">
						<button
							className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
