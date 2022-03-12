import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import { useDispatch } from "react-redux";
import { updateAchivement } from "../../actions/AchivementAction";

const ProfileUpdate = ({ title, closeModal, isOpen, profileDetail }) => {
	const [achiv, setAchiv] = useState();

	// const [award, setAward] = useState();
	// const [cont, setCont] = useState();
	const [politician, setPolitician] = useState();
	const userId = localStorage.getItem("userId");
	const dispatch = useDispatch();

	useEffect(() => {
		if (profileDetail) {
			setAchiv(profileDetail.achievements);
			// setAward(profileDetail.awards);
			// setCont(profileDetail.contribution);
			setPolitician(profileDetail.politician);
		}
	}, [profileDetail]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(updateAchivement(profileDetail.id, achiv, userId));
	};
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
							defaultValue={achiv}
							placeholder="Achivements"
							type="text"
						/>
					</div>

					<br />
					<button
						type="submit"
						// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
						className="inline-flex justify-center px-4 py-2 mt-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
						onClose={closeModal}
					>
						submit
					</button>
				</form>
			</Modelwrapper>
		</>
	);
};

export default ProfileUpdate;
