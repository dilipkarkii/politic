import React, { useState } from "react";
import Planmodel from "../model/plan";
import Navbartop from "./navbar";

const Plans = () => {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
			<Navbartop />
			<div class="py-20  h-full  p-3 max-w-6xl mx-auto px-4">
				<div className="inset-0 flex items-center justify-end ">
					<button
						type="button"
						onClick={openModal}
						className="px-4 py-2 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
					>
						{"Add plans"}
					</button>
				</div>
				<Planmodel title="Add Plans" closeModal={closeModal} isOpen={isOpen} />
				<div className="mx-3 my-4 overflow-hidden bg-white shadow sm:rounded-lg ">
					<div className="px-4 py-5 sm:px-6">
						<h3 className="text-lg font-medium leading-6 text-gray-500">
							Plans for future
						</h3>
						{/* <p className="max-w-2xl mt-1 text-sm text-gray-500">
							Personal details and application.
						</p> */}
					</div>
					<div className="border-t border-gray-200">
						<dl>
							<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Plan 1</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									Margot Foster ncididunt cillum culpa consequat. Excepteur qui
									ipsum aliquip consequat sint. Sit id mollit nulla mollit
									nostrud in ea officia proident. Irure nostrud pariatur mollit
									ad adipisicing reprehenderit deserunt qui eu.
								</dd>
							</div>
							<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Plan 2</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
									incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
									consequat sint. Sit id mollit nulla mollit nostrud in ea
									officia proident. Irure nostrud pariatur mollit ad adipisicing
									reprehenderit deserunt qui eu.
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</>
	);
};

export default Plans;
