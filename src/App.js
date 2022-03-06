import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./component/client/detail";
import Events from "./component/client/events";
import Gallary from "./component/client/gallary";
import Home from "./component/client/home";
import Personal from "./component/client/personal";
import Plans from "./component/client/plans";
import Post from "./component/client/post";
import Profile from "./component/client/profile";
import Createuser from "./component/Dashboard/createuser";
import DashEvent from "./component/Dashboard/DashEvent";
import Dashgall from "./component/Dashboard/DashGall";
import DashPersonal from "./component/Dashboard/Dashpersonal";
import Dashplan from "./component/Dashboard/Dashplan";
import DashPost from "./component/Dashboard/Dashpost";
import Dashprofile from "./component/Dashboard/DashProfile";
import AdminLogin from "./component/setting/adminlogin";
import Change from "./component/setting/change";
import PoliticChange from "./component/setting/PoliticChange";
import Reset from "./component/setting/reset";
import Dashboard from "./dashboard";
import Login from "./login";
import Sidebar from "./sidebar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Login />} />
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
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
