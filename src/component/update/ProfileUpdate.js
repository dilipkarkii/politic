import React, { useEffect, useState } from "react";
import Modelwrapper from "../model/modelwrapper";
import { useDispatch } from "react-redux";
import { updateAchivement } from "../../actions/AchivementAction";

const ProfileUpdate = ({ title, closeModal, isOpen, profileDetail }) => {
  const [achiv, setAchiv] = useState();

  // const [award, setAward] = useState();
  // const [cont, setCont] = useState();
  const [politician, setPolitician] = useState();
  const getuserId = localStorage.getItem("userId");
  const userId = JSON.parse(getuserId).id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (profileDetail) {
      setAchiv(profileDetail.achievements);
      // setAward(profileDetail.awards);
      // setCont(profileDetail.contribution);
      setPolitician(profileDetail.politician);
    }
  }, [profileDetail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateAchivement(profileDetail.id, achiv, userId));
  };
  return (
    <>
      <Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
        <form onSubmit={handleSubmit}>
          <div className="mt-2 ">
            Achivements
            <textarea
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm h-28 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setAchiv(e.target.value)}
              id="name"
              defaultValue={achiv}
              placeholder="Enter Achivements"
              type="text"
            />
          </div>
          <button
            type="submit"
            // className="mt-5 border-2 rounded-md border-slate-900 bg-slate-300"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
            onClose={closeModal}
          >
            Update
          </button>
        </form>
      </Modelwrapper>
    </>
  );
};

export default ProfileUpdate;
