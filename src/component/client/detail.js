import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbartop from "./navbar";
import Slider from "react-slick";

const Detail = () => {
	let { id } = useParams();
	console.log(id);
	const [detail, setDetail] = useState();
	const [titles, settitle] = useState();
	let [postData, setPostData] = useState();
	let [imgData, setImgData] = useState();
	const userId = localStorage.getItem("userId");

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				`http://44.199.61.81/postlisting/${id}/`
			);
			console.log("data", data);
			setDetail(data);
		};
		fetchData();
	}, []);
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				`http://44.199.61.81/politician/${userId}/`
			);
			console.log("data", data);
			settitle(data.post_set);
		};
		fetchData();
	}, []);

	console.log(postData);

	// const settings = {
	// 	dots: true,
	// 	fade: true,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// };

	return (
		<>
			<div className="bg-slate-100">
				<Navbartop />

				<div className="h-full max-w-6xl px-4 pt-20 mx-auto p-7 bg-slate-100">
					<div className="grid grid-cols-4 gap-4">
						<div className="col-span-3 ...">
							<h1 className="text-3xl text-center text-gray-900">
								{detail && detail.title}
							</h1>
							{/* <p className="mr-5 italic text-gray-500">posted on:</p> */}

							<img
								className="w-9/12 mt-5 h-52"
								src={`http://44.199.61.81/${
									detail && detail.postimage_set[0].image.split("8000/")[1]
								}`}
								alt="pic"
							/>

							<p className="text-justify text-black mt-8 ">
								{detail && detail.description}
							</p>
						</div>

						{/* <div>
							<Slider {...settings}>
								<div>
									<img src="http://placekitten.com/g/400/200" alt="" />
								</div>
								<div>
									<img src="https://picsum.photos/200" alt="" />
								</div>
								<div>
									<img src="http://placekitten.com/g/400/200" alt="" />
								</div>
								<div>
									<img src="https://picsum.photos/200" alt="" />
								</div>
							</Slider>
						</div> */}
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
															{data.title}
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
				</div>
			</div>
		</>
	);
};

export default Detail;
