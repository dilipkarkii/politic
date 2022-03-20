import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./component/Dashboard/navbar";
import Create from "./component/setting/create";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import { useDispatch, useSelector } from "react-redux";
import { PERSONAL_DELETE_RESET } from "./constants/PersonalConstants";
import { listDashboard } from "./actions/DashboardAction";
import { deletePersonal } from "./actions/PersonalAction";

const Dashboard = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	let [isOpen, setIsOpen] = useState(false);
	const [tabledata, setTabledata] = useState();
	const personalAdd = useSelector((state) => state.personalAdd);
	const { success: successAdd } = personalAdd;
	const personalDelete = useSelector((state) => state.personalDelete);
	const { success: successDelete } = personalDelete;

	const dashboardList = useSelector((state) => state.dashboardList);
	const { loading, success, dashboards } = dashboardList;
	// useEffect(() => {
	// 	dispatch(listGallary(userId));
	// 	if (successDelete) {
	// 		dispatch({ type: GALLARY_DELETE_RESET });
	// 	}
	// 	if (successAdd || successUpdate) {
	// 		setIsOpen(false);
	// 		setOpenUpdate(false);
	// 	}
	// 	if (successUpdate) {
	// 		dispatch({ type: GALLARY_UPDATE_RESET });
	// 	}
	// }, [dispatch, successDelete, successAdd, successUpdate]);
	useEffect(() => {
		dispatch(listDashboard());
		if (successAdd) {
			setIsOpen(false);
		}
		if (successDelete) {
			dispatch({ type: PERSONAL_DELETE_RESET });
		}
	}, [successAdd, successDelete]);

	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const res = await axios.get("http://44.199.61.81:8080/politician/");
	// 		// const data = res.json();
	// 		// console.log("data", data.data);
	// 		setTabledata(res.data);
	// 		console.log(res);
	// 	};
	// 	fetchData();
	// }, [successAdd,]);

	const handleFormSubmit = async (id) => {
		// localStorage.setItem("userId", id);
		localStorage.setItem("userId", JSON.stringify({ isAdmin: true, id: id }));
		console.log(id);
		navigate("/home");
	};

	const onDelete = async (id) => {
		dispatch(deletePersonal(id));
		// await axios.delete(`http://44.199.61.81:8080/politician/${id}/`);
	};

	return (
		<>
			<Navbar />
			{/* <Sidebar/> */}
			<div className="grid grid-cols-12">
				<div className="fixed h-full bg-teal-500 w-60">
					<Sidebar />
				</div>

				<div className="col-span-11 mt-5 ml-60 px-5 py-2.5 flex justify-end  ">
					<div className="inset-0 flex items-center justify-end ">
						<button
							type="button"
							onClick={openModal}
							className="px-4 py-1 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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
								<th>I.D</th>
								<th>email</th>
								<th>phone</th>
								<th>goto</th>
							</tr>
						</thead>
						<tbody className="border-b border-black">
							{loading ? (
								<div class="w-[85px] m-auto">
									<div class=" animate-spin justify-center  ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-refresh-cw"
										>
											<polyline points="23 4 23 10 17 10"></polyline>
											<polyline points="1 20 1 14 7 14"></polyline>
											<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
										</svg>
									</div>
								</div>
							) : (
								dashboards &&
								dashboards.map((data, i) => (
									<tr className="my-10 border-b border-black" key={data.id}>
										<td className="mt-10">{i + 1}</td>
										<td className="mt-10">{data.firstName}</td>
										<td className="mt-10">{data.id}</td>
										<td className="mt-10">{data.email}</td>
										<td className="mt-10">{data.phone}</td>
										<td className="mb-10">
											<button
												onClick={() => handleFormSubmit(data.id)}
												className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
											>
												Edit
											</button>
										</td>
										<td className="py-4 mt-30">
											<button
												onClick={() => onDelete(data.id)}
												className="hover:bg-red-900"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 "
													fill="none"
													viewBox="0 0 24 24"
													stroke="red"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
													/>
												</svg>
											</button>
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
