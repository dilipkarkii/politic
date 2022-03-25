import React, { useEffect, useState } from "react";
import Navbartop from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { listSuggestion } from "../../actions/CommentAction";

const Suggestion = () => {
	const dispatch = useDispatch();
	const suggestionList = useSelector((state) => state.suggestionList);
	const { success: successsuggestion, suggestions } = suggestionList;

	let [showComment, setShowComment] = useState(false);
	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;

	useEffect(() => {
		dispatch(listSuggestion());
	}, [dispatch]);

	const handleShowComment = (id) => {
		setShowComment(!showComment);
		dispatch(listSuggestion(id));
	};
	console.log("first", suggestions);
	return (
		<>
			<div className="bg-slate-300">
				<Navbartop />
				<div className="h-full max-w-6xl p-3 px-4 py-20 mx-auto">
					<h1 className="text-4xl italic font-bold text-center text-gray-800">
						SUGGESTIONS
					</h1>

					<div>
						<div className="flex items-start justify-center mt-6">
							<div className="border w-[600px] bg-white rounded">
								<div className="px-4 py-2">
									<h1 className="text-xl font-medium">Suggestion</h1>
									{suggestions &&
										suggestions.map((value, i) => (
											<>
												<div className="bg-[#e4e3e3] my-8 px-3 py-2 rounded flex justify-between items-center">
													<h1>
														{i + 1}.{value.title}
													</h1>
													<div
														className="cursor-pointer"
														onClick={() => handleShowComment(value.id)}
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
													{showComment && (
														<>
															{value &&
																value.map((data) => (
																	<>
																		<div className="grid mt-2 grid-col-8">
																			<div className="justify-start col-span-2 ">
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					class="h-4 w-5 "
																					fill="none"
																					viewBox="0 0 24 24"
																					stroke="currentColor"
																					strokeWidth="2"
																				>
																					<path
																						strokeLinecap="round"
																						strokeLinejoin="round"
																						d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
																					/>
																				</svg>

																				<h1 className="  bg-[#f1f1f1] px-4 py-3 col-span-6  ">
																					{data.message}
																				</h1>
																			</div>
																		</div>
																	</>
																))}
														</>
													)}
												</div>
											</>
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Suggestion;
