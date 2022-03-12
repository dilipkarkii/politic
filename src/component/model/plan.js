import React, { useEffect, useState } from "react";
import Modelwrapper from "./modelwrapper";
import { useSelector, useDispatch } from "react-redux";
import { addPlan } from "../../actions/PlanAction";
import { PLAN_ADD_RESET } from "../../constants/PlanConstants";

const Planmodel = ({ title, closeModal, isOpen }) => {
	const dispatch = useDispatch();
	const planAdd = useSelector((state) => state.planAdd);
	const { success: successAdd } = planAdd;

	const [pname, setPname] = useState();
	const [pdes, setPdes] = useState("");
	const userId = localStorage.getItem("userId");

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(addPlan(pname, pdes, userId));

		// const { data } = await axios.post(
		// 	url,
		// 	{ plan: pname, vision: pdes, politician: userId },      
		// 	config
		// );
		// if (data) {
		// 	window.location.reload(true);
		// }
	};

	useEffect(() => {
		if (successAdd) {
			dispatch({ type: PLAN_ADD_RESET });
			setPname("");
			setPdes("");
		}
	}, [successAdd]);
	return (
		<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
			<form onSubmit={handleSubmit}>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Plan Title
					</label>
					<textarea
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						onChange={(e) => setPname(e.target.value)}
						id="title"
						value={pname}
						placeholder="Set title"
						type="text"
					/>
					<br />
				</div>
				<div className="mt-3">
					<label className="block text-sm font-medium text-gray-700">
						Plan Description
					</label>
					<textarea
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						onChange={(e) => setPdes(e.target.value)}
						id="name"
						value={pdes}
						placeholder="Set description"
						type="text"
					/>

					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-4 py-2 mt-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
						onClose={closeModal}
					>
						submit
					</button>
				</div>
			</form>
		</Modelwrapper>
	);
};

export default Planmodel;
