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
	manifestoAddReducer,
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

import {
	commentListReducer,
	commentAddReducer,
	commentDeleteReducer,
	commentUpdateReducer,
	replyListReducer,
	postcommentListReducer,
	suggestionListReducer,
	postReplyReducer,
	feedbackReplyReducer,
} from "./reducers/CommentReducer";

import {
	PostAddReducer,
	PostDeleteReducer,
	PostListReducer,
	PostUpdateReducer,
} from "./reducers/PostReducer";

import {
	dashboardAddReducer,
	dashboardDeleteReducer,
	dashboardListReducer,
	dashboardUpdateReducer,
} from "./reducers/DashboardReducer";

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
	manifestoAdd: manifestoAddReducer,

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

	//post
	postList: PostListReducer,
	postAdd: PostAddReducer,
	postDelete: PostDeleteReducer,
	postUpdate: PostUpdateReducer,

	//postImage
	postImageList: PostImageListReducer,
	postImageAdd: PostImageAddReducer,
	postImageDelete: PostImageDeleteReducer,
	postImageUpdate: PostImageUpdateReducer,

	//dashboard
	dashboardList: dashboardListReducer,
	dashboardAdd: dashboardAddReducer,
	dashboardDelete: dashboardDeleteReducer,
	dashboardUpdate: dashboardUpdateReducer,

	//login
	commentList: commentListReducer,
	commentAdd: commentAddReducer,
	commentDelete: commentDeleteReducer,
	commentUpdate: commentUpdateReducer,
	replyList: replyListReducer,
	postcommentList: postcommentListReducer,
	postReply: postReplyReducer,
	suggestionList: suggestionListReducer,
	feedbackList: feedbackReplyReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
