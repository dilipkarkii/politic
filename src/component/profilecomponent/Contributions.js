import React, { useState } from "react";
import axios from "axios";
import Modelwrapper from "../model/modelwrapper";
import { useSelector, useDispatch } from "react-redux";
import { addContribution } from "../../actions/ContributionAction";

const Contribution = ({ title, closeModal, isOpen }) => {
	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;
	const [cont, setCont] = useState();
	const dispatch = useDispatch();
	const contributionAdd = useSelector((state) => state.contributionAdd);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addContribution(cont, userId));
	};

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	console.log(achiv, award, cont);
	// const { data } = await axios.post(
	// 	`http://backend.publicaffairsnepal.com/contribution/`,
	// 	{
	// 		contributions: cont,
	// 		politician: userId,
	// 	}
	// 	// config
	// 	);
	// 		if (data) {
	// 			window.location.reload(true);
	// 		}
	// };
	return (
		<>
			<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
				<form onSubmit={handleSubmit}>
					<div className="mt-4">
						Contribution
						<textarea
							className="block w-full mt-1 border-gray-300 rounded-md shadow-sm h-28 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							onChange={(e) => setCont(e.target.value)}
							id="location"
							value={cont}
							placeholder="Enter Contribution"
						/>
					</div>
					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
						onClose={closeModal}
					>
						Submit
					</button>
				</form>
			</Modelwrapper>
		</>
	);
};

export default Contribution;
