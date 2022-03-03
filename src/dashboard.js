import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./component/Dashboard/navbar";
import Create from "./component/setting/create";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";

const Dashboard = () => {
	let [isOpen, setIsOpen] = useState(false);
	const [tabledata, setTabledata] = useState();
	const navigate = useNavigate();

	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}
	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get("http://politician.tk/politician/");
			// const data = res.json();
			// console.log("data", data.data);
			setTabledata(res.data);
			console.log(res);
		};
		fetchData();
	}, []);

	const handleFormSubmit = async (id) => {
		localStorage.setItem("userId", id);
		console.log(id);
			navigate("/home");

	};

	return (
		<>
			<Navbar />
			{/* <Sidebar/> */}
			<div className="grid grid-cols-12">
				<div className="fixed h-full bg-teal-500 w-60">
					<Sidebar />
				</div>

				<div className="col-span-11 mt-10 ml-60 px-5 py-2.5 flex justify-end  ">
					<div className="inset-0 flex items-center justify-end ">
						<button
							type="button"
							onClick={openModal}
							className="px-4 py-2 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
						>
							{"Create User"}
						</button>
					</div>
					<Create title="Create User" closeModal={closeModal} isOpen={isOpen} />
				</div>
				<div className="col-span-11 ml-60">
					<table className="w-full mx-10 text-center">
						<thead className="border-b border-black ">
							<tr>
								<th>S.N</th>
								<th>name</th>
								<th>email</th>
								<th>phone</th>
								<th>goto</th>
							</tr>
						</thead>
						<tbody className="border-b border-black">
							{tabledata &&
								tabledata.map((data) => (
									<tr className="my-10 border-b border-black" key={data.id}>
										<td className="mt-10">{data.id}</td>
										<td className="mt-10">{data.firstName}</td>
										<td className="mt-10">{data.email}</td>
										<td className="mt-10">{data.phone}</td>
										<td>
											<button
												onClick={()=>handleFormSubmit(data.id)}
												className="inline-flex justify-center px-4 py-2 mt-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
											>
												Edit
											</button>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
