// import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbartop from "./navbar";
import Feedbackadd from "../model/Feedbackadd";
import { useDispatch, useSelector } from "react-redux";
import { listComment, listReply } from "../../actions/CommentAction";
// import { data } from "autoprefixer";

const Feedback = () => {
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.commentList);
  const { success: successComment, comments } = commentList;
  const commentAdd = useSelector((state) => state.commentAdd);
  const { success: successCommentAdd } = commentAdd;
  let [isOpen, setIsOpen] = useState(false);
  let [showComment, setShowComment] = useState(false);
  let [reply, setReply] = useState(false);
  const [comment, setComment] = useState();
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
    // const fetchData = async () => {
    // 	const { data } = await axios.get("http://44.199.61.81:8080/comments/");
    // 	setComment(data);
    // 	// console.log(res);
    // };
    // fetchData();
  }, [dispatch, successCommentAdd]);

  const handleShowComment = (id) => {
    setShowComment(!showComment);
    dispatch(listReply(id));
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
            <div className="border w-[600px] bg-white rounded">
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
                        {console.log("datas", value.commentsontweetslike_set)}
                      </div>
                      {showComment && (
                        <>
                          {value.commentsontweetslike_set &&
                            value.commentsontweetslike_set.map((data) => (
                              <>
                                <div className="flex items-center justify-start mt-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-5 mt-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <h1 className="  bg-[#f1f1f1] px-4 py-3">
                                    {data.comments}
                                  </h1>
                                </div>

                                {data.replyontweetslike_set &&
                                  data.replyontweetslike_set.map((comment) => (
                                    <div className="bg-[#f1f1f1] my-3 px-5 py-2 ml-10 rounded flex justify-start items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                      </svg>
                                      <h1 className="ml-5">
                                        {comment.reply_text}
                                      </h1>
                                      <div
                                        className="cursor-pointer"
                                        onClick={() => setReply(!reply)}
                                      >
                                        {/* <svg
																			xmlns="http://www.w3.org/2000/svg"
																			className="w-4 h-4"
																			fill="none"
																			viewBox="0 0 24 24"
																			stroke="currentColor"
																			strokeWidth="2"
																		>
																			<path
																				strokeLinecap="round"
																				strokeLinejoin="round"
																				d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
																			/>
																		</svg> */}
                                      </div>
                                    </div>
                                  ))}
                              </>
                            ))}
                        </>
                      )}
                      {reply && (
                        <form action="" className="flex px-5 py-2 mx-5 my-3">
                          <input
                            type="text"
                            placeholder="reply"
                            className="border"
                          />
                          <input type="submit" value="send" />
                        </form>
                      )}
                      {/* <div className="grid grid-cols-12 mt-4 ">

												<div className="col-span-9 px-4 py-2 ml-8 border-2 border-grey-700">
													{i + 1}. {value.title}
												</div>

												<div className="col-span-1 ml-10 text-black cursor-pointer hover:text-blue-300">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="w-6 h-6"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth="2"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
														/>
													</svg>
													Reply
												</div>
											</div> */}
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
          {/* <div className="accordion">
						<div className="accordion-item">
							<div className="accordion-title">
								<div>{title}</div>
								<div>+</div>
							</div>
							<div className="accordion-content">{content}</div>
						</div>
					</div> */}
        </div>
      </div>
    </>
  );
};

export default Feedback;
