import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import axios from "axios";

const ProfileUpdate = ({ title, closeModal, isOpen, profileDetail }) => {
	const [achiv, setAchiv] = useState();

	const [award, setAward] = useState();
	const [cont, setCont] = useState();
	const [politician, setPolitician] = useState();
	const userId = localStorage.getItem("userId");

	useEffect(() => {
		if (profileDetail) {
			setAchiv(profileDetail.achievements);
			setAward(profileDetail.awards);
			setCont(profileDetail.contribution);
			setPolitician(profileDetail.politician);
		}
	}, [profileDetail]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(achiv, award, cont);

		await axios.put(`http://politician.tk/profile/${profileDetail.id}/`, {
			achievements: achiv,
			awards: "empty",
			contribution: "empty",
			politician: userId,
		});
	};
	return (
		<>
			<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
				<form onSubmit={handleSubmit}>
					<div className="mt-2 ">
						Achivements
						<textarea
							className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setAchiv(e.target.value)}
							id="name"
							defaultValue={achiv}
							placeholder="Achivements"
							type="text"
						/>
					</div>

					{/* <div className="mt-4">
						Awards
						<textarea
							className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setAward(e.target.value)}
							id="name"
							defaultValue={award}
							placeholder="awards"
						/>
					</div> */}
					{/* <div className="mt-4">
						Contribution
						<textarea
							className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setCont(e.target.value)}
							id="location"
							defaultValue={cont}
							placeholder="contribution"
						/>
					</div> */}
					{/* <div className="mt-4">
						politician id
						<textarea
							className="w-full h-10 px-3 py-1 border-2 rounded-md border-slate-900 placeholder:text-black"
							onChange={(e) => setPolitician(e.target.value)}
							id="id"
							defaultValue={politician}
							placeholder="contribution"
						/>
					</div> */}

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
