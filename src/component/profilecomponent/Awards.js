import React, { useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import { useSelector, useDispatch } from "react-redux";
import { addAward } from "../../actions/AwardAction";

const Award = ({ title, closeModal, isOpen }) => {
  const [award, setAward] = useState();
  const getuserId = localStorage.getItem("userId");
  const userId = JSON.parse(getuserId).id;

  const dispatch = useDispatch();
  const awardAdd = useSelector((state) => state.awardAdd);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAward(award, userId));
  };

  return (
    <>
      <Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            Awards
            <textarea
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm h-28 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
              onChange={(e) => setAward(e.target.value)}
              id="name"
              value={award}
              placeholder="Enter Awards"
            />
          </div>
          <button
            type="submit"
            // className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
            onClose={closeModal}
          >
            Submit
          </button>
        </form>
      </Modelwrapper>
    </>
  );
};

export default Award;
