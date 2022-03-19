import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard";
import { ProtectedRoute } from "./ProtectedRoute";

const AllRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</>
	);
};

export default AllRoutes;

// {
	/* <Route exact path="/" element={<Login />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
					<Route exact path="/sidebar" element={<Sidebar />} />
					<Route exact path="/change" element={<Change />} />
					<Route exact path="/reset" element={<Reset />} />
					<Route exact path="/createuser" element={<Createuser />} />
					<Route exact path="/gallary" element={<Gallary />} />
					<Route exact path="/event" element={<Events />} />
					<Route exact path="/plans" element={<Plans />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route exact path="/post" element={<Post />} />
					<Route exact path="/detail/:id" element={<Detail />} />
					<Route exact path="/home" element={<Home />} />
					<Route exact path="/dashpersonal" element={<DashPersonal />} />
					<Route exact path="/dashgallary" element={<Dashgall />} />
					<Route exact path="/dashprofile" element={<Dashprofile />} />
					<Route exact path="/dashevent" element={<DashEvent />} />
					<Route exact path="/dashplan" element={<Dashplan />} />
					<Route exact path="/personal" element={<Personal />} />
					<Route exact path="/dashpost" element={<DashPost />} />
					<Route exact path="/changepassword" element={<PoliticChange />} />
					<Route exact path="/admin" element={<AdminLogin />} />
					<Route exact path="/feedback" element={<Feedback />} /> */
// }
