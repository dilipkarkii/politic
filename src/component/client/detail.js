import React from "react";
import { useParams } from "react-router-dom";
import Navbartop from "./navbar";

const Detail = () => {
	let { id } = useParams();
	console.log(id);
	return (
		<>
			<Navbartop />
			<div class="py-20  h-full  p-3 max-w-6xl mx-auto px-4 bg-slate-300 ">
				<div class="grid grid-cols-4 gap-4">
					<div class="col-span-3 ...">
						<h1 className="text-3xl text-center text-gray-900">
							kuro k bhane ni solti ho
						</h1>
						<p className="mr-5 italic text-gray-500">posted on:</p>

						<img
							className="w-9/12 mt-5 h-52"
							src="https://picsum.photos/200/300"
							alt="pic"
						/>
						<p className="mt-5 text-justify text-black">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
						<p className="text-justify text-black">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
					</div>
					<div class="gap-5">
						<div class="w-full max-w-xs h-full">
							<div class="bg-white shadow-md rounded px-8 pt-6  mt-72">
								<div className="italic"> Other posts</div>
								<hr className="border-black" />
								<div class="mt-4">
									{/* <Link to={`/blog/${data.id}`}> */}
									<p className="text-xl underline text-cyan-500 hover:text-blue-900 ">
										Hami yestai ta ho ni
									</p>
									<hr className="mt-3 border-black" />

									{/* </Link> */}
								</div>
								<div class="mt-4">
									{/* <Link to={`/blog/${data.id}`}> */}
									<p className="text-xl underline text-cyan-500 hover:text-blue-900 ">
										Hami yestai ta ho ni
									</p>
									<hr className="mt-3 border-black" />

									{/* </Link> */}
								</div>
								<div class="mt-4">
									{/* <Link to={`/blog/${data.id}`}> */}
									<p className="text-xl underline text-cyan-500 hover:text-blue-900 ">
										Hami yestai ta ho ni
									</p>
									<hr className="mt-3 border-black" />

									{/* </Link> */}
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
