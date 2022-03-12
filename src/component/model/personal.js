import React, { useEffect, useState } from "react";
import Modelwrapper from "./modelwrapper";
import { useSelector, useDispatch } from "react-redux";
import { addAchivement } from "../../actions/AchivementAction";
import { ACHIVEMENT_ADD_RESET } from "../../constants/AchivementConstants";

const Personal = ({ title, closeModal, isOpen }) => {
	const dispatch = useDispatch();
	const achivementAdd = useSelector((state) => state.AchivementAdd);
	const { success: successAdd } = achivementAdd;

	const [achiv, setAchiv] = useState("");
	const userId = localStorage.getItem("userId");

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addAchivement(achiv, userId));
	};
	useEffect(() => {
		if (successAdd) {
			dispatch({ type: ACHIVEMENT_ADD_RESET });
			setAchiv("");
		}
	}, [successAdd]);

	return (
		<>
			<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
				<form onSubmit={handleSubmit}>
					<div className="mt-2 ">
						Achivements
						<textarea
							className="w-full h-40 px-3 py-1 mt-3 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setAchiv(e.target.value)}
							id="name"
							value={achiv}
							placeholder="Achivements"
							type="text"
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

export default Personal;
