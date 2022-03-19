import React, { useEffect, useState } from "react";
import Modelwrapper from "./modelwrapper";
import { useSelector, useDispatch } from "react-redux";
import { addPlan } from "../../actions/PlanAction";
import { PLAN_ADD_RESET } from "../../constants/PlanConstants";
import { addComment } from "../../actions/CommentAction";

const Feedbackadd = ({ title, closeModal, isOpen }) => {
	const dispatch = useDispatch();
	const commentAdd = useSelector((state) => state.commentAdd);
	const { success: successCommentAdd } = commentAdd;

	const [question, setQuestion] = useState();
	const userId = localStorage.getItem("userId");

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(addComment(question, userId));

		// const { data } = await axios.post(
		// 	url,
		// 	{ plan: Question, vision: Reply, politician: userId },
		// 	config
		// );
		// if (data) {
		// 	window.location.reload(true);
		// }
	};

	useEffect(() => {
		if (successCommentAdd) {
			setQuestion("");
		}
	}, [successCommentAdd]);
	return (
		<Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
			<form onSubmit={handleSubmit}>
				<div className="mt-4">
					<label className="block text-sm font-medium text-gray-700">
						Question
					</label>
					<textarea
						className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						onChange={(e) => setQuestion(e.target.value)}
						id="title"
						value={question}
						placeholder="Set title"
						type="text"
					/>
				</div>
				<button
					type="submit"
					// className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
					className="inline-flex justify-center px-4 py-2 mt-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
					onClose={closeModal}
				>
					submit
				</button>
			</form>
		</Modelwrapper>
	);
};

export default Feedbackadd;
