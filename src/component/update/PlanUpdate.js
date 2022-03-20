import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import { useSelector, useDispatch } from "react-redux";
import { updatePlan } from "../../actions/PlanAction";

const PlanUpdate = ({ title, closeModal, isOpen, planDetail }) => {
  const dispatch = useDispatch();

  const [pname, setPname] = useState();
  const [pdes, setPdes] = useState("");
  const getuserId = localStorage.getItem("userId");
  const userId = JSON.parse(getuserId).id;

  useEffect(() => {
    if (planDetail) {
      setPname(planDetail.plan);
      setPdes(planDetail.vision);
    }
  }, [planDetail]);

  // const handleSubmit = async (e) => {
  // 	e.preventDefault();

  // 	var myHeaders = new Headers();
  // 	myHeaders.append("Content-Type", "application/json");

  // 	var raw = JSON.stringify({
  // 		plan: pname,
  // 		vision: pdes,
  // 		politician: userId,
  // 	});

  // 	var requestOptions = {
  // 		method: "PUT",
  // 		headers: myHeaders,
  // 		body: raw,
  // 		redirect: "follow",
  // 	};

  // 	fetch(`http://44.199.61.81:8080/plan-vision/${planDetail.id}/`, requestOptions)
  // 		.then((response) => response.text())
  // 		.then((result) => {
  // 			if (result) {
  // 				window.location.reload(true);
  // 			}
  // 		})
  // 		.catch((error) => console.log("error", error));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updatePlan(planDetail.id, pname, pdes, userId));
  };

  console.log(pname, pdes);
  return (
    <Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Plan Title
          </label>
          <input
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => setPname(e.target.value)}
            id="title"
            value={pname}
            placeholder="Set title"
            type="text"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Plan Description
          </label>
          <textarea
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => setPdes(e.target.value)}
            id="name"
            value={pdes}
            placeholder="Set description"
            type="text"
          />

          <button
            type="submit"
            // className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
            onClose={closeModal}
          >
            Update
          </button>
        </div>
      </form>
    </Modelwrapper>
  );
};

export default PlanUpdate;
