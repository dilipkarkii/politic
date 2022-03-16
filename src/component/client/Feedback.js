import React from "react";
import Navbartop from "./navbar";

const Feedback = () => {

  const accordionData = {
		title: "Section 1",
		content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
	};

	const { title, content } = accordionData;

	return (
		<>
			<div className="bg-slate-300">
				<Navbartop />

				<div className="max-w-6xl p-3 px-4 pt-20 mx-auto ">
					<h1 className="text-2xl italic text-center">
						Discussion and Feedback Form
					</h1>
					<div className="accordion">
						<div className="accordion-item">
							<div className="accordion-title">
								<div>{title}</div>
								<div>+</div>
							</div>
							<div className="accordion-content">{content}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Feedback;
