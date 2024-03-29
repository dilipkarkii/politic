import React, { useState } from "react";
import Sidebar from "../../sidebar";
import Navbar from "../Dashboard/navbar1";

const Change = () => {
	const [newpwd, setNewpwd] = useState("");
	const [conpass, setConPass] = useState("");
	const [oldpass, setOldPass] = useState("");

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
					{/* <h1 className="text-3xl font-bold text-center"> Change password! </h1> */}

					<form onSubmit={handleFormSubmit} className="px-5 py-5">
						<div className="flex flex-col w-full border-0 rounded-lg shadow-lg outline-none bg-green-50 focus:outline-none">
							{/*header*/}
							<div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
								<h3 className="text-3xl font-semibold text-gray-500">
									Change Password
								</h3>
							</div>
							{/*body*/}
							<div className="relative flex-auto p-6">
								<div>
									<label>Old password:</label>
									<br />
									<input
										type="password"
										className={`w-150 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
										id="oldpwd"
										placeholder="eg:na@121"
										onChange={(e) => setOldPass(e.target.value)}
										value={oldpass}
									/>
								</div>
								<div>
									<label>New password:</label>
									<br />

									<input
										type="password"
										className={`w-150 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
										id="newpwd"
										placeholder="password new"
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
										id="conformpwd"
										placeholder="confirm password"
										onChange={(e) => setConPass(e.target.value)}
										value={conpass}
									/>
								</div>
								<div className="flex items-center mt-6 ">
									<button
										className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark hover:bg-green-500`}
									>
										Login
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Change;
