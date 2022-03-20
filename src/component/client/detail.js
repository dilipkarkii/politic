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
															{data.title.slice(0, 50)}
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
									<div>
										<h1 className="  bg-[#f1f1f1] px-4 py-3 border-2 mt-3 ">
											{data.comments}
										</h1>
									</div>
								</>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Detail;
