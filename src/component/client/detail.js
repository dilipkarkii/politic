import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbartop from "./navbar";

const Detail = () => {
	let { id } = useParams();
	console.log(id);
	const [detail, setDetail] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(`http://politician.tk/posts/${id}`);
			setDetail(res.data);
		};
		fetchData();
	}, []);

	console.log(detail);
	return (
		<>
			<div className="bg-slate-100">
				<Navbartop />

				<div className="h-full max-w-6xl px-4 pt-20 mx-auto p-7 bg-slate-100">
					<div className="grid grid-cols-4 gap-4">
						<div className="col-span-3 ...">
							<h1 className="text-3xl text-center text-gray-900">
								{detail?.title}
							</h1>
							{/* <p className="mr-5 italic text-gray-500">posted on:</p> */}

							<img
								className="w-9/12 mt-5 h-52"
								src="https://picsum.photos/200/300"
								alt="pic"
							/>
							<p className="mt-5 text-justify text-black">
								{detail?.description}
							</p>
							<p className="text-justify text-black">{detail?.description}</p>
						</div>
						<div className="gap-5">
							<div className="w-full h-full max-w-xs">
								<div className="px-8 pt-6 mt-10 bg-white rounded shadow-md">
									<div className="italic"> Other posts</div>
									<hr className="border-black" />
									<div className="mt-4">
										{/* <Link to={`/blog/${data.id}`}> */}
										<p className="text-xl underline text-cyan-500 hover:text-blue-900 ">
											Lorem Ipsum is simply
										</p>
										<hr className="mt-3 border-black" />

										{/* </Link> */}
									</div>
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
