import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../sidebar";
import Navbar from "./navbar";

const Createuser = () => {
	const admin = "haha";
	const pwd = "hehe";
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [pass, setPass] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (name === admin && pass === pwd) {
			navigate("/dashboard");
		}
	};
	return (
		<>
			<Navbar />
			{/* <Sidebar/> */}
			<div className="grid grid-cols-12">
				<div className="fixed h-full bg-teal-500 w-60">
					<Sidebar />
				</div>

				<div className="col-span-11 ml-60">
					<form onSubmit={handleFormSubmit} className="px-5 py-5">
						<div>
							<label htmlFor="Username">Username</label>
							<br />
							<input
								type="text"
								className={`w-150 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
								id="username"
								placeholder="Your username"
								onChange={(e) => setName(e.target.value)}
								value={name}
							/>
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<br />
							<input
								type="password"
								className={`w-150 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
								id="password"
								placeholder="Your Password"
								onChange={(e) => setPass(e.target.value)}
								value={pass}
							/>
						</div>

						<div className="flex items-center mt-6">
							<button
								className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
							>
								Create
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Createuser;
