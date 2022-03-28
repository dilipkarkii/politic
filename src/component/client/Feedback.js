// import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbartop from "./navbar";
import Feedbackadd from "../model/Feedbackadd";
import { useDispatch, useSelector } from "react-redux";
import {
	listComment,
	listReply,
	replyFeedbackPost,
} from "../../actions/CommentAction";
// import { Link } from "react-router-dom";

const Feedback = () => {
	const dispatch = useDispatch();
	const commentList = useSelector((state) => state.commentList);
	const { success: successComment, comments } = commentList;
	const commentAdd = useSelector((state) => state.commentAdd);
	const { success: successCommentAdd } = commentAdd;
	const feedbackList = useSelector((state) => state.feedbackList);
	const { success: successfeedbackList } = feedbackList;

	let [isOpen, setIsOpen] = useState(false);
	let [showComment, setShowComment] = useState(false);
	let [comment, setComment] = useState(false);
	let [reply, setReply] = useState(false);
	const [replyText, setReplyText] = useState();

	const [index, setIndex] = useState();
	const [replyindex, setReplyindex] = useState();

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;

	useEffect(() => {
		dispatch(listComment(userId));
		if (successCommentAdd) {
			setIsOpen(false);
		}
		setComment(false);
	}, [dispatch, successCommentAdd, successfeedbackList]);

	const handleShowComment = (id, i) => {
		setShowComment(!showComment, i);
		dispatch(listReply(id));
		setIndex(i);
	};

	const handlereply = (id, j) => {
		setComment(!comment);
		dispatch(listReply(id));
		setReplyindex(j);
	};

	const handleReplySubmit = (e, politicianId, commentId) => {
		e.preventDefault();
		dispatch(replyFeedbackPost(replyText, userId, politicianId, commentId));
		console.log(politicianId);
	};

	return (
		<>
			<div className="bg-slate-300">
				<Navbartop />

				<div className="max-w-6xl p-3 px-4 pt-20 mx-auto ">
					<div className="flex justify-between">
						<h1 className="text-2xl italic text-center">
							Discussion and Feedback Form
						</h1>
						{/* <Link to="/suggestion">
							<button className="px-4 py-1 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
								Suggestion
							</button>
						</Link> */}
						<div className="inset-0 flex items-center justify-end ">
							<button
								type="button"
								onClick={openModal}
								className="px-4 py-1 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
							>
								{"Add Question"}
							</button>
						</div>
					</div>
					<div className="flex items-start justify-center mt-6">
						<div className="border w-[950px] bg-white rounded">
							<div className="px-4 py-2">
								<h1 className="text-xl font-medium">Discussion</h1>
								{comments &&
									comments.map((value, i) => (
										<>
											<div className="bg-[#e4e3e3] my-8 px-3 py-2 rounded flex justify-between items-center">
												<h1>
													{i + 1}. {value.title}
												</h1>
												<div
													className="cursor-pointer"
													onClick={() => handleShowComment(value.id, i)}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="h-3 w-3"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														stroke-width="2"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
														/>
													</svg>
												</div>
												{console.log("datas", value.commentsontweetslike_set)}
											</div>
											{index === i && showComment && (
												<>
													{value.commentsontweetslike_set &&
														value.commentsontweetslike_set.map((data, j) => (
															<>
																<div className="grid grid-cols-12 mt-2">
																	<div className="flex justify-start col-span-2 ">
																		<img
																			src={
																				data.user_profile === null
																					? " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrT_BjEyf_LEpcvb225JX2qFCJcLz5-0RXLg&usqp=CAU"
																					: `http://44.199.61.81:8080/${
																							data.user_profile &&
																							data.user_profile.split(
																								"8000/"
																							)[1]
																					  }`
																			}
																			alt="user profile"
																			className="h-10 mt-1 align-middle border-none rounded-full shadow w-11"
																		/>
																		<h1 className="mt-3 ml-1 italic text-blue-500">
																			{data.user_firstname === null
																				? `aynonomous`
																				: data.user_firstname}
																			:-
																		</h1>
																	</div>
																	<div className="col-span-9 ">
																		<h1 className="  bg-[#f1f1f1] px-4 py-3  ">
																			{data.comments}
																		</h1>
																	</div>
																	<button
																		className="mt-3 ml-5 "
																		onClick={() => handlereply(data.id, j)}
																	>
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			class="h-6 w-6"
																			fill="none"
																			viewBox="0 0 24 24"
																			stroke="currentColor"
																			stroke-width="2"
																		>
																			<path
																				stroke-linecap="round"
																				stroke-linejoin="round"
																				d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
																			/>
																		</svg>
																	</button>
																</div>
																{replyindex === j && comment && (
																	<form
																		onSubmit={(e) =>
																			handleReplySubmit(
																				e,
																				data.politician,
																				data.id
																			)
																		}
																		className="grid grid-cols-12 px-5 py-2 my-3 "
																	>
																		<div className="col-span-2"></div>
																		<div className="col-span-9 ">
																			<input
																				type="text"
																				placeholder=" write your reply......"
																				className="w-full px-4 py-3 border-2"
																				onChange={(e) =>
																					setReplyText(e.target.value)
																				}
																			/>
																		</div>
																		<input
																			type="submit"
																			value="Reply"
																			className="px-2 py-2 mt-2 ml-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
																		/>
																	</form>
																)}

																{data.replyontweetslike_set &&
																	data.replyontweetslike_set
																		.reverse()
																		.map((comment) => (
																			// <div className="bg-[#f1f1f1] my-3 px-5 py-2 ml-10 rounded flex justify-start items-center">
																			<div className="grid grid-cols-12 mt-2 ml-10">
																				<div className="flex justify-start col-span-2 ">
																					<img
																						src={
																							comment.user_profile === null
																								? " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrT_BjEyf_LEpcvb225JX2qFCJcLz5-0RXLg&usqp=CAU"
																								: `http://44.199.61.81:8080/${
																										comment.user_profile &&
																										comment.user_profile.split(
																											"8000/"
																										)[1]
																								  }`
																						}
																						alt="user profile"
																						className="h-10 mt-1 align-middle border-none rounded-full shadow w-11"
																					/>
																					<h1 className="mt-3 ml-1 italic text-blue-500">
																						{comment.user_firstname === null
																							? `aynonomous`
																							: comment.user_firstname}
																						:-
																					</h1>
																				</div>
																				<div className="col-span-10 ">
																					<h1 className="  bg-[#f1f1f1] px-4 py-3  ">
																						{comment.reply_text}
																					</h1>
																				</div>
																			</div>
																		))}
															</>
														))}
												</>
											)}
										</>
									))}
							</div>
						</div>
					</div>

					<div className="col-span-11 mt-3 ml-60 px-5 py-2.5 flex justify-end  ">
						<Feedbackadd
							title="Add Question"
							closeModal={closeModal}
							isOpen={isOpen}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Feedback;
