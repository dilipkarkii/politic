import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../../sidebar";
import Navbar from "../Dashboard/navbar";
import { ADMINLOGIN_UPDATE_RESET } from "../../constants/AdminloginConstants";
import { useDispatch, useSelector } from "react-redux";
import { updateAdminlogin } from "../../actions/AdminloginAction";

const Reset = () => {
	const [email, setEmail] = useState("");
	const [oldpass, setOldpass] = useState("");
	const [newpwd, setNewpwd] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;
	const adminloginUpdate = useSelector((state) => state.adminloginUpdate);
	const { success: successUpdate } = adminloginUpdate;

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: ADMINLOGIN_UPDATE_RESET });
			setEmail("");
			setOldpass("");
			setNewpwd("");
			navigate("/admin");
		}
	}, [successUpdate]);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		dispatch(updateAdminlogin(userId, email, oldpass, newpwd));
	};

	return (
		<>
			<Navbar />

			<div className="h-full max-w-4xl p-3 px-4 py-20 mx-auto ">
				<>
					<div className="relative w-auto max-w-3xl mx-auto ">
						<div className="relative flex flex-col w-full border-0 rounded-lg shadow-lg mt-5 outline-none bg-[#f2e8e8] focus:outline-none">
							<div className="flex items-center justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
								<h3 className="text-3xl font-semibold text-gray-500">
									Reset Password
								</h3>
							</div>

							<div className="relative flex-auto p-6">
								<div className="my-4 text-lg leading-relaxed text-blueGray-500">
									<form onSubmit={handleFormSubmit} className="px-5 ml-40">
										<div>
											<label>Email:</label>
											<br />

											<input
												type="email"
												className={`w-[300px] p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
												id="email"
												placeholder="Your email-ID"
												onChange={(e) => setEmail(e.target.value)}
												value={email}
											/>
										</div>
										<div>
											<label>Old Password:</label>
											<br />
											<input
												type="password"
												className={`w-[300px]  p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
												id="newpassword"
												placeholder="New Password"
												onChange={(e) => setOldpass(e.target.value)}
												value={oldpass}
											/>
										</div>
										<div>
											<label>New password:</label>
											<br />

											<input
												type="password"
												className={`w-[300px]  p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
												id="oldpassword"
												placeholder="old password"
												onChange={(e) => setNewpwd(e.target.value)}
												value={newpwd}
												required
											/>
										</div>

										<div className="flex items-center mt-6 ">
											<button
												className={`bg-green py-2 px-4 text-sm text-black rounded border border-black focus:outline-none focus:border-black hover:bg-red-100`}
											>
												Reset
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</>
			</div>

			{/* <Sidebar/> */}
			{/* <div className="grid grid-cols-12"> */}
			{/* <div className="fixed h-full bg-teal-500 w-60">
					<Sidebar />
				</div> */}

			{/* <div className="col-span-6 py-5 ml-60">
				<form onSubmit={handleFormSubmit} className="px-5">
					<div className="flex flex-col w-full border-0 rounded-lg shadow-lg outline-none bg-gray-50 focus:outline-none"> */}
			{/*header*/}
			{/* <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
							<h3 className="text-3xl font-semibold text-gray-500">
								Reset Password
							</h3>
						</div> */}
			{/*body*/}
			{/* <div className="relative flex-auto p-6">
							<div>
								<label>Email:</label>
								<br />

								<input
									type="email"
									className={`w-2/4 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
									id="email"
									placeholder="Your email-ID"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
							</div>
							<div>
								<label>Old password:</label>
								<br />

								<input
									type="password"
									className={`w-2/4 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
									id="oldpassword"
									placeholder="old password"
									onChange={(e) => setNewpwd(e.target.value)}
									value={newpwd}
								/>
							</div>
							<div>
								<label>NEW Password:</label>
								<br />
								<input
									type="password"
									className={`w-2/4 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
									id="newpassword"
									placeholder="NEW Password"
									onChange={(e) => setOldpass(e.target.value)}
									value={oldpass}
								/>
							</div>

							<div className="flex items-center mt-6 ">
								<button
									className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark hover:bg-green-500`}
								>
									Reset
								</button>
							</div>
						</div>
					</div>
				</form>
			</div> */}
			{/* </div> */}
		</>
	);
};

export default Reset;

// http://backend.publicaffairsnepal.com/admin/reset-password

// const handleFormSubmit = (e) => {
// 	e.preventDefault();

// 	var myHeaders = new Headers();
// 	myHeaders.append("Content-Type", "application/json");

// 	var raw = JSON.stringify({
// 		email,
// 		old_password: oldpass,
// 		new_password: newpwd,
// 	});

// 	var requestOptions = {
// 		method: "PUT",
// 		headers: myHeaders,
// 		body: raw,
// 		redirect: "follow",
// 	};

// 	fetch("http://backend.publicaffairsnepal.com/admin/reset-password", requestOptions)
// 		.then((response) => response.text())
// 		.then((result) => {
// 			console.log(result);
// 			if (result) {
// 				navigate("/");
// 			} else if (result.non_field_errors[0]) {
// 				alert("invalid id or password");
// 			}
// 		})
// 		.catch((error) => console.log("error", error));
// };
