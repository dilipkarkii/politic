import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbartop from "./navbar";
import Slider from "react-slick";
import { listPostcomment } from "../../actions/CommentAction";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
	let { id } = useParams();
	console.log(id);
	const [detail, setDetail] = useState();
	const [titles, settitle] = useState();
	let [postData, setPostData] = useState();
	// let [postimg, setPostimg] = useState();
	const [comment, setComment] = useState();
	// let [imgData, setImgData] = useState();
	console.log("details", detail);
	const getuserId = localStorage.getItem("userId");
	const userId = JSON.parse(getuserId).id;
	const dispatch = useDispatch();

	const postcommentList = useSelector((state) => state.postcommentList);
	const { success: successpostComment, postcomments } = postcommentList;

	console.log("comments", postcomments);

	useEffect(() => {
		dispatch(listPostcomment(id));
	}, [dispatch, id]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				`http://44.199.61.81:8080/postlisting/${id}/`
			);
			console.log("data", data);
			setDetail(data);
		};
		fetchData();
	}, [id]);
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				`http://44.199.61.81:8080/politician/${userId}/`
			);
			console.log("data", data);
			settitle(data.post_set);
			console.log("image", data.post_set);
		};
		fetchData();
	}, []);

	console.log(postData);

	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<>
			<div className="bg-slate-100">
				<Navbartop />

				<div className="h-full max-w-6xl px-4 pt-20 mx-auto p-7 bg-slate-100">
					<div className="grid grid-cols-4 gap-4">
						<div className="col-span-3 ...">
							<h1 className="text-3xl text-center text-gray-900 ">
								{detail && detail.title}
							</h1>
							{/* <p className="mr-5 italic text-gray-500">posted on:</p> */}
							{/* <img
								className="w-9/12 mt-5 h-52"
								src={`http://44.199.61.81:8080/${
									detail && detail.postimage_set[0].image.split("8000/")[1]
								}`}
								alt="pic"
							/> */}

							<div style={{ width: "100%" }}>
								<Slider {...settings}>
									{detail &&
										detail.postimage_set.map((data) => (
											<img
												className="w-32 mt-5 h-[450px]"
												src={`http://44.199.61.81:8080/${
													data && data.image.split("8000/")[1]
												}`}
												alt="pic"
												// style={{ height: "50%", width: "50%" }}
											/>
										))}
								</Slider>
							</div>
							<div className="mt-8 text-justify text-black ">
								{detail &&
									detail.description
										.split("\n\n")
										.map((paragraph) => (
											<p>
												{paragraph
													.split("\n")
													.reduce((total, line) => [total, <br />, line])}
											</p>
										))}
								<h1 className="mt-6 text-blue-500 ">
									LINK:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									{detail && detail.link}
								</h1>
								{/* {detail && detail.description} */}
								{/* <div dangerouslySetInnerHTML={detailparagraph()}></div> */}
							</div>
						</div>

						<div className="gap-5">
							<div className="w-full h-full max-w-xs">
								<div className="px-8 pt-6 mt-10 bg-white rounded shadow-md">
									<div className="italic"> Other posts</div>
									{titles &&
										titles.map((data) => (
											<>
												<hr className="border-black" />
												<div className="mt-4">
													<Link to={`/detail/${data.id}`}>
														<p className="text-xl underline text-cyan-500 hover:text-blue-900 ">
															{data.title.length > 40
																? data.title.substring(0, 40) + "..."
																: data.title}
														</p>

														<hr className="mt-3 border-black" />
													</Link>
												</div>
											</>
										))}
								</div>
							</div>
						</div>
					</div>
					<hr className="mt-5 bg-gray-300" />

					<div className="mt-5">
						<h1 className="text-2xl font-bold">Discussion</h1>
						{postcomments &&
							postcomments.map((data) => (
								<>
									<div className="grid grid-cols-12 mt-3">
										{/* <div className="flex justify-between"> */}
										<div className="flex justify-start col-span-2 mt-3 ml-4">
											<img
												src={
													data.user_profile === null
														? " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrT_BjEyf_LEpcvb225JX2qFCJcLz5-0RXLg&usqp=CAU"
														: `http://44.199.61.81:8080/${
																data.user_profile &&
																data.user_profile.split("8000/")[1]
														  }`
												}
												alt="user profile"
												className="w-12 h-12 align-middle border-none rounded-full shadow"
											/>
											<h1 className="mt-3 ml-3 italic text-blue-500">
												{data.user_firstname === null
													? `aynonomous`
													: data.user_firstname}
												: {">"}
											</h1>
										</div>
										<h1 className=" col-span-9 bg-[#f1f1f1] px-4 py-3 border-2 mt-3 ">
											{data.comments}
										</h1>
										<button className="col-span-1 mt-3 ml-5">
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
									<>
										{data.replyoncomments_set &&
											data.replyoncomments_set.map((value) => (
												<div className="mt-1">
													<div
														className="grid grid-cols-12 "
														style={{ marginLeft: "40px" }}
													>
														{/* <div className="flex justify-between"> */}
														<div className="flex justify-start col-span-2 mt-3 ml-4 ">
															<img
																src={`http://44.199.61.81:8080/${
																	value.user_profile &&
																	value.user_profile.split("8000/")[1]
																}`}
																alt="user profile"
																className="w-12 h-12 align-middle border-none rounded-full shadow"
															/>
															<h1 className="mt-3 ml-5 italic text-blue-500">
																{value.user_firstname === null
																	? `aynonomous`
																	: value.user_firstname}
																:--- {">"}
															</h1>
														</div>
														<h1 className=" col-span-9 bg-[#f1f1f1] px-4 py-3 border-2 mt-3 ">
															{value.reply_text}
														</h1>
														<button className="col-span-1 mt-3 ml-5">
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
												</div>
											))}

										{/* </div> */}
									</>
									{/* </div> */}
								</>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Detail;
