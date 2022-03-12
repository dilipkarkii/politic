import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateContribution } from "../../actions/ContributionAction";

const ContriUpdate = ({ title, closeModal, isOpen, contriDetail }) => {
	const [cont, setCont] = useState();
	const [politician, setPolitician] = useState();
	const userId = localStorage.getItem("userId");
	const dispatch = useDispatch();

	useEffect(() => {
		if (contriDetail) {
			setCont(contriDetail.contribution);
			setPolitician(contriDetail.politician);
		}
	}, [contriDetail]);

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	console.log(cont);

	// 	const { data } = await axios.put(
	// 		`http://44.199.61.81/contribution/${contriDetail.id}/`,
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
							className="w-full h-40 px-3 py-1 mt-3 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setCont(e.target.value)}
							id="contribution"
							defaultValue={cont}
							placeholder="contribution"
						/>
					</div>

					<br />
					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-4 py-2 mt-1 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
						onClose={closeModal}
					>
						submit
					</button>
				</form>
			</Modelwrapper>
		</>
	);
};

export default ContriUpdate;
