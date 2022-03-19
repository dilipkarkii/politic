import React, { useState } from "react";
import axios from "axios";
import Modelwrapper from "../model/modelwrapper";
import { useSelector, useDispatch } from "react-redux";
import { addContribution } from "../../actions/ContributionAction";

const Contribution = ({ title, closeModal, isOpen }) => {
	const userId = localStorage.getItem("userId");
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
	// 	`http://44.199.61.81:8080/contribution/`,
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
							className="w-full h-40 px-3 py-1 mt-3 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setCont(e.target.value)}
							id="location"
							value={cont}
							placeholder="contribution"
						/>
					</div>

					<br />
					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
						onClose={closeModal}
					>
						submit
					</button>
				</form>
			</Modelwrapper>
		</>
	);
};

export default Contribution;
