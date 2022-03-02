import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const admin = "haha";
	const user = "admin";
	const pwd = "hehe";
	const upwd = "admin";
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [pass, setPass] = useState("");
	const [userId, setUserId] = useState("");

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		//politician.tk/login/politician
		let config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`http://politician.tk/login/politician`,
			{ email: name, password: pass },
			config
		);
		// console.log(data.non_field_errors[0]);
		console.log(data.ID);
		if (data) {
			navigate("/home");
		} else if (data.non_field_errors[0]) {
			alert("invalid id or password");
		}
		localStorage.setItem("userId", data.ID);

		// http: if (name === admin && pass === pwd) {
		// 	navigate("/dashboard");
		// } else if (name === user && pass === upwd) {
		// 	navigate("/home");
		// } else {
		// 	alert("invalid id or password");
		// }
	};
	return (
		<div className="flex h-screen bg-slate-500">
			<div className="w-full max-w-md px-16 py-10 m-auto bg-white border rounded-lg border-primaryBorder shadow-default">
				<h1 className="mt-4 mb-12 text-2xl font-medium text-center text-primary">
					Log in to your account 🔐
				</h1>

				<form onSubmit={handleFormSubmit}>
					<div>
						<label htmlFor="Username">Username</label>
						<input
							type="text"
							className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
							id="username"
							placeholder="Your username"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
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
