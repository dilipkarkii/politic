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
import "react-toastify/dist/ReactToastify.css";
import Feedback from "./component/client/Feedback";
import {
	AdminProtectedRoute,
	ProtectedRoute,
} from "./component/ProtectedRoute";
import EventHome from "./component/client/eventHome";
import Suggestion from "./component/client/Suggestion";
import Policy from "./component/client/policy";
import Sanjayapolicy from "./policy/Sanjayapolicy";
import Satkarphuyalpolicy from "./policy/Satkarphuyalpolicy";
import Raseeladhakaripolicy from "./policy/Raseeladhakaripolicy";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route
						path="/home"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/dashboard"
						element={
							<AdminProtectedRoute>
								<Dashboard />
							</AdminProtectedRoute>
						}
					/>
					<Route
						exact
						path="/sidebar"
						element={
							<ProtectedRoute>
								<Sidebar />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/change"
						element={
							<ProtectedRoute>
								<Change />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/reset"
						element={
							<ProtectedRoute>
								<Reset />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/createuser"
						element={
							<ProtectedRoute>
								<Createuser />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/gallary"
						element={
							<ProtectedRoute>
								<Gallary />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/event"
						element={
							<ProtectedRoute>
								<EventHome />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/eventdetail/:id"
						element={
							<ProtectedRoute>
								<Events />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/suggestion"
						element={
							<ProtectedRoute>
								<Suggestion />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/plans"
						element={
							<ProtectedRoute>
								<Plans />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/profile"
						element={
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/post"
						element={
							<ProtectedRoute>
								<Post />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/detail/:id"
						element={
							<ProtectedRoute>
								<Detail />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/home"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/dashpersonal"
						element={
							<ProtectedRoute>
								<Dashgall />
								<DashPersonal />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/dashgallary"
						element={<ProtectedRoute></ProtectedRoute>}
					/>
					<Route
						exact
						path="/dashprofile"
						element={
							<ProtectedRoute>
								<Dashprofile />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/policy"
						element={
							<ProtectedRoute>
								<Policy />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/policy1"
						element={
							<ProtectedRoute>
								<Sanjayapolicy />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/policyMandipChaudhary"
						element={
							<ProtectedRoute>
								<Sanjayapolicy />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/policySatkarphuyalpolicy"
						element={
							// <ProtectedRoute>
							<Satkarphuyalpolicy />
							// </ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/policyRaseeladhakaripolicy"
						element={
							// <ProtectedRoute>
							<Raseeladhakaripolicy />
							// </ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/dashevent"
						element={
							<ProtectedRoute>
								<DashEvent />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/dashplan"
						element={
							<ProtectedRoute>
								<Dashplan />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/personal"
						element={
							<ProtectedRoute>
								<Personal />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/dashpost"
						element={
							<ProtectedRoute>
								<DashPost />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/changepassword"
						element={
							<ProtectedRoute>
								<PoliticChange />
							</ProtectedRoute>
						}
					/>
					<Route exact path="/admin" element={<AdminLogin />} />
					<Route
						exact
						path="/feedback"
						element={
							<ProtectedRoute>
								<Feedback />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
