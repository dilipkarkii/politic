import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Blog from "./component/client/blog";
import Detail from "./component/client/detail";
import Events from "./component/client/events";
import Gallary from "./component/client/gallary";
import Home from "./component/client/home";
// import Model from "./component/client/model";
// import Navbartop from "./component/client/navbar";
import Personal from "./component/client/personal";
import Plans from "./component/client/plans";
import Post from "./component/client/post";
import Profile from "./component/client/profile";
import Createuser from "./component/Dashboard/createuser";
import Change from "./component/setting/change";
import Reset from "./component/setting/reset";
import Dashboard from "./dashboard";
import Login from "./login";
import Sidebar from "./sidebar";

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
					{/* <Route exact path="/navbar" element={<Navbartop />} /> */}
					<Route exact path="/gallary" element={<Gallary />} />
					<Route exact path="/event" element={<Events />} />
					<Route exact path="/plans" element={<Plans />} />
					<Route exact path="/plans" element={<Plans />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route exact path="/post" element={<Post />} />
					<Route exact path="/blog/:id" element={<Detail />} />
					<Route exact path="/home" element={<Home />} />
					{/* <Route exact path="/blog" element={<Blog />} /> */}
					<Route exact path="/personal" element={<Personal />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
