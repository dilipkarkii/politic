import React, { useState } from "react";
import PersonalProfile from "../model/profilepersonal";
import Dashnav from "./Dashnav";

const DashPersonal = () => {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
			<Dashnav />
			<div className="bg-slate-200">
				<div className="py-20  h-full  p-3 max-w-6xl mx-auto px-4 ">
					<div className="inset-0 flex items-center justify-end ">
						<button
							type="button"
							onClick={openModal}
							className="px-4 py-2 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
						>
							{"Add profile"}
						</button>
					</div>
					<PersonalProfile
						title="Add profile"
						closeModal={closeModal}
						isOpen={isOpen}
					/>
					<div className="relative w-auto max-w-3xl mx-auto my-6">
						{/*content*/}
						<div className="relative flex flex-col w-full bg-green-200 border-0 rounded-lg shadow-lg outline-none focus:outline-none">
							{/*header*/}
							<div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
								<h3 className="text-3xl font-semibold text-gray-500">
									Personal Profile
								</h3>
							</div>
							{/*body*/}
							<div className="relative flex-auto p-6">
								<p className="my-4 text-lg leading-relaxed text-blueGray-500">
									<div className="grid grid-cols-3">
										<div className="col-span-1 pt-3">
											<img src="https://picsum.photos/200" alt="" />
										</div>
										<div className="col-span-2 mx-5">
											<p>Sher Bahadur deuba</p>
											<p>Age: 75</p>
											<p>Address: kathmamndu,Nepal</p>
											<p>Education: SLC</p>
											<p>Political Party: Nepali Congree</p>
											<p>Election Area: kathmamndu</p>
											<p>Member Since: 2015</p>
											<p>Position in Party: Party Persident</p>
										</div>
									</div>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashPersonal;
