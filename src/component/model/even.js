import React, { useEffect, useState } from "react";
import Modelwrapper from "./modelwrapper";
import { useSelector, useDispatch } from "react-redux";
import { addEvent } from "../../actions/EventAction";
import { EVENT_ADD_RESET } from "../../constants/EventConstants";

const Even = ({ title, closeModal, isOpen }) => {
  const dispatch = useDispatch();
  const eventAdd = useSelector((state) => state.eventAdd);
  const { success: successAdd } = eventAdd;
  const [name, setName] = useState("");
  const [des, setdes] = useState("");
  const [agenda, setAgenda] = useState();
  const [loc, setLoc] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [link, setLink] = useState();
  const [image, setImage] = useState("");
  const getuserId = localStorage.getItem("userId");
  const userId = JSON.parse(getuserId).id;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEvent(name, des, agenda, loc, date, time, link, image, userId));
  };
  console.log(loc);

  useEffect(() => {
    if (successAdd) {
      dispatch({ type: EVENT_ADD_RESET });
      setImage("");
      setName("");
      setdes("");
      setAgenda("");
      setLoc("");
      setDate("");
      setTime("");
      setLink("");
    }
  }, [successAdd]);
  return (
    <>
      <Modelwrapper title={title} closeModal={closeModal} isOpen={isOpen}>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Photo
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/png, image/jpg, image/jpeg"
              type="file"
              className="w-full border-gray-300 rounded-md border"
            />
          </div>
          <div className="mt-2 ">
            <label className="block text-sm font-medium text-gray-700">
              Campaign Name
            </label>
            <input
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setName(e.target.value)}
              id="name"
              value={name}
              placeholder="Enter Name"
              type="text"
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setdes(e.target.value)}
              id="name"
              value={des}
              placeholder="Enter Description"
            />
          </div>

          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">
              Agenda
            </label>
            <textarea
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setAgenda(e.target.value)}
              id="name"
              value={agenda}
              placeholder="Enter Agenda"
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setLoc(e.target.value)}
              id="location"
              value={loc}
              placeholder="Enter Location"
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setDate(e.target.value)}
              type="date"
              id="date"
              value={date}
              placeholder="Select Date"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setTime(e.target.value)}
              id="time"
              type="time"
              value={time}
              placeholder="Select Time"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Link
            </label>
            <input
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setLink(e.target.value)}
              id="link"
              value={link}
              placeholder="Enter Links"
              type="url"
            />
          </div>
          <br />
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClose={closeModal}
          >
            Submit
          </button>
        </form>
      </Modelwrapper>
    </>
  );
};

export default Even;
