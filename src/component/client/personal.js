import React from "react";
import Navbartop from "./navbar";

const Personal = () => {
	return (
		<>
			<Navbartop />
			<div>Personal</div>
			<div>
				<div className="z-50 flex items-center justify-center mt-10 inset-5">
					<div className="relative w-auto max-w-3xl mx-auto my-6">
						{/*content*/}
						<div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
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

export default Personal;
