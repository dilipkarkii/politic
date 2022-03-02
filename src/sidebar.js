import React from "react";
import { Link } from "react-router-dom";
// import Table from './component/table'

const Sidebar = () => {
	return (
		<>
			{/* <div class="grid grid-rows-3 grid-flow-col gap-"> */}
			<div className=" bg-teal-500">
				<nav>
					<Link to="/dashboard">
						<h1 className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg   hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
							Dashboard
						</h1>
					</Link>
				</nav>
			</div>
		</>
	);
};

export default Sidebar;
