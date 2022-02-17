import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./component/Dashboard/navbar";
import Table from "./component/table";
import Sidebar from "./sidebar";
// import Example from './headless'

// import Sidebar from './sidebar'
const Dashboard = () => {
	return (
		<>
			<Navbar />
			{/* <Sidebar/> */}
			<div className="grid grid-cols-12">
				<div className="fixed h-full bg-teal-500 w-60">
					<Sidebar />
				</div>

        <div className="col-span-11 mt-10 ml-60 px-5 py-2.5 flex justify-end  ">
          <Link to="/createuser">
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Create User
          </button>
          </Link>
				</div>
				<div className="col-span-11 ml-60">
					<Table />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
