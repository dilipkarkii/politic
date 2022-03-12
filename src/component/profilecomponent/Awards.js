import React, { useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import { useSelector, useDispatch } from "react-redux";
import { addAward } from "../../actions/AwardAction";

const Award = ({ title, closeModal, isOpen }) => {
	const [award, setAward] = useState();
	const userId = localStorage.getItem("userId");

	const dispatch = useDispatch();
	const awardAdd = useSelector((state) => state.awardAdd);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addAward(award, userId));
	};

	return (
		<>
			<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
				<form onSubmit={handleSubmit}>
					<div className="mt-4">
						Awards
						<textarea
							className="w-full h-40 px-3 py-1 mt-3 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setAward(e.target.value)}
							id="name"
							value={award}
							placeholder="awards"
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

export default Award;
