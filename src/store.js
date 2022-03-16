import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
	eventListReducer,
	eventAddReducer,
	eventDeleteReducer,
	eventUpdateReducer,
} from "./reducers/EventReducer";

import {
	planListReducer,
	planAddReducer,
	planDeleteReducer,
	planUpdateReducer,
} from "./reducers/PlanReducer";

import {
	AchivementListReducer,
	AchivementAddReducer,
	AchivementDeleteReducer,
	AchivementUpdateReducer,
} from "./reducers/AchivementReducer";

import {
	awardListReducer,
	awardAddReducer,
	awardDeleteReducer,
	awardUpdateReducer,
} from "./reducers/AwardReducer";

import {
	contributionListReducer,
	contributionAddReducer,
	contributionDeleteReducer,
	contributionUpdateReducer,
} from "./reducers/ContributionReducer";

import {
	gallaryListReducer,
	gallaryAddReducer,
	gallaryDeleteReducer,
	gallaryUpdateReducer,
} from "./reducers/GallaryReducer";

import {
	personalListReducer,
	personalAddReducer,
	personalDeleteReducer,
	personalUpdateReducer,
} from "./reducers/PersonalReducer";

import {
	loginListReducer,
	loginAddReducer,
	loginDeleteReducer,
	loginUpdateReducer,
} from "./reducers/LoginReducer";

import {
	adminloginListReducer,
	adminloginAddReducer,
	adminloginDeleteReducer,
	adminloginUpdateReducer,
} from "./reducers/AdminloginReducer";

// import {
// 	postListReducer,
// 	postAddReducer,
// 	postDeleteReducer,
// 	postUpdateReducer,
// } from "./reducers/PostReducer";

import {
	PostAddReducer,
	PostDeleteReducer,
	PostListReducer,
	PostUpdateReducer,
} from "./reducers/PostReducer";

import {
	PostImageListReducer,
	PostImageAddReducer,
	PostImageDeleteReducer,
	PostImageUpdateReducer,
} from "./reducers/PostImageReducer";

const reducer = combineReducers({
	eventList: eventListReducer,
	eventAdd: eventAddReducer,
	eventDelete: eventDeleteReducer,
	eventUpdate: eventUpdateReducer,

	// plans
	planList: planListReducer,
	planAdd: planAddReducer,
	planDelete: planDeleteReducer,
	planUpdate: planUpdateReducer,

	// Achivement
	AchivementList: AchivementListReducer,
	AchivementAdd: AchivementAddReducer,
	AchivementDelete: AchivementDeleteReducer,
	AchivementUpdate: AchivementUpdateReducer,

	// Award
	awardList: awardListReducer,
	awardAdd: awardAddReducer,
	awardDelete: awardDeleteReducer,
	awardUpdate: awardUpdateReducer,

	// Award
	contributionList: contributionListReducer,
	contributionAdd: contributionAddReducer,
	contributionDelete: contributionDeleteReducer,
	contributionUpdate: contributionUpdateReducer,

	// gallary
	gallaryList: gallaryListReducer,
	gallaryAdd: gallaryAddReducer,
	gallaryDelete: gallaryDeleteReducer,
	gallaryUpdate: gallaryUpdateReducer,

	// personal
	personalList: personalListReducer,
	personalAdd: personalAddReducer,
	personalDelete: personalDeleteReducer,
	personalUpdate: personalUpdateReducer,

	//login
	loginList: loginListReducer,
	loginAdd: loginAddReducer,
	loginDelete: loginDeleteReducer,
	loginUpdate: loginUpdateReducer,

	//login
	adminloginList: adminloginListReducer,
	adminloginAdd: adminloginAddReducer,
	adminloginDelete: adminloginDeleteReducer,
	adminloginUpdate: adminloginUpdateReducer,

	//login
	postList: PostListReducer,
	postAdd: PostAddReducer,
	postDelete: PostDeleteReducer,
	postUpdate: PostUpdateReducer,

	//login
	postImageList: PostImageListReducer,
	postImageAdd: PostImageAddReducer,
	postImageDelete: PostImageDeleteReducer,
	postImageUpdate: PostImageUpdateReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
