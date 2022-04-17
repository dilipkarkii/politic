// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAdminlogin } from "../../actions/AdminloginAction";
import { ADMINLOGIN_ADD_RESET } from "../../constants/AdminloginConstants";

const Adminlogin = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [pass, setPass] = useState("");
	// const [userId, setUserId] = useState("");

	const adminloginAdd = useSelector((state) => state.adminloginAdd);
	const { success: successAdd } = adminloginAdd;

	useEffect(() => {
		if (successAdd) {
			dispatch({ type: ADMINLOGIN_ADD_RESET });
			setName("");
			setPass("");
			navigate("/dashboard");
		}
	}, [successAdd]);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		dispatch(addAdminlogin(name, pass));
	};

	// const handleFormSubmit = async (e) => {
	// 	e.preventDefault();
	// 	let config = {
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	};
	// 	const { data } = await axios.post(
	// 		`http://backend.publicaffairsnepal.com/login/admin`,
	// 		{ email: name, password: pass },
	// 		config
	// 	);
	// 	console.log(data.ID);
	// 	if (data) {
	// 		navigate("/dashboard");
	// 	} else if (data.non_field_errors[0]) {
	// 		alert("invalid id or password");
	// 	}
	// 	localStorage.setItem("userId", data.ID);
	// };
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
							className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
							id="password"
							placeholder="Your Password"
							onChange={(e) => setPass(e.target.value)}
							value={pass}
						/>
					</div>

					<div className="flex items-center justify-center mt-4">
						<button
							className={`bg-green py-1 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
						>
							Login
						</button>
					</div>
					{/* <Link to="/reset">
						<div className="mt-2 italic text-center">
							Forget your password?
							<span className="underline"> Reset Here </span>
						</div>
					</Link> */}
				</form>
			</div>
		</div>
	);
};

export default Adminlogin;
