import React from "react";
import Navbartop from "./navbar";

const Blog = () => {
	return (
		<>
			<Navbartop />
			<div className="h-full max-w-6xl p-3 px-4 py-20 mx-auto">
				<h1 className="text-3xl text-center text-bold">Title </h1>
				<div>
					<img
						className="w-9/12 h-52"
						src="https://picsum.photos/200/300"
						alt="description"
					/>
				</div>
			</div>
		</>
	);
};

export default Blog;
