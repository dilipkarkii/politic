import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateContribution } from "../../actions/ContributionAction";

const ContriUpdate = ({ title, closeModal, isOpen, contriDetail }) => {
	const [cont, setCont] = useState();
	const [politician, setPolitician] = useState();
	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;
	const dispatch = useDispatch();

	useEffect(() => {
		if (contriDetail) {
			setCont(contriDetail.contributions);
			setPolitician(contriDetail.politician);
		}
	}, [contriDetail]);

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	console.log(cont);

	// 	const { data } = await axios.put(
	// 		`http://backend.publicaffairsnepal.com/contribution/${contriDetail.id}/`,
	// 		{
	// 			contributions: cont,
	// 			politician: userId,
	// 		}
	// 	);
	// 	if (data) {
	// 		window.location.reload(true);
	// 	}
	// };
	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(updateContribution(contriDetail.id, cont, userId));
	};

	return (
		<>
			<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
				<form onSubmit={handleSubmit}>
					<div className="mt-4">
						contribution
						<textarea
							className="block w-full mt-1 border-gray-300 rounded-md shadow-sm h-28 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							onChange={(e) => setCont(e.target.value)}
							id="contribution"
							defaultValue={cont}
							placeholder="Enter Contribution"
						/>
					</div>
					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						onClose={closeModal}
					>
						Update
					</button>
				</form>
			</Modelwrapper>
		</>
	);
};

export default ContriUpdate;
