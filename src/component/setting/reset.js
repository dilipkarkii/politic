import React, { useState } from "react";
import Sidebar from "../../sidebar";
import Navbar from "../Dashboard/navbar";

const Reset = () => {
	const [newpwd, setNewpwd] = useState("");
	const [conpass, setConPass] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();
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
					<h1 className="text-3xl font-bold text-center"> Reset password! </h1>

					<form onSubmit={handleFormSubmit} className="px-5">
						<div>
							<label>New password:</label>
							<br />

							<input
								type="password"
								className={`w-150 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
								id="username"
								placeholder="Your username"
								onChange={(e) => setNewpwd(e.target.value)}
								value={newpwd}
							/>
						</div>
						<div>
							<label>Confirm Password:</label>
							<br />
							<input
								type="password"
								className={`w-150 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
								id="password"
								placeholder="Your Password"
								onChange={(e) => setConPass(e.target.value)}
								value={conpass}
							/>
						</div>
						<div className="flex items-center mt-6 j">
							<button
								className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
							>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Reset;
