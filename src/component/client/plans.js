// import axios from "axios";
import React, { useEffect, useState } from "react";
import Planmodel from "../model/plan";
import PlanUpdate from "../update/PlanUpdate";
import Navbartop from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { listPlan, deletePlan } from "../../actions/PlanAction";
import {
  PLAN_DELETE_RESET,
  PLAN_UPDATE_RESET,
} from "../../constants/PlanConstants";

const Plans = () => {
  const dispatch = useDispatch();
  const planList = useSelector((state) => state.planList);
  const { loading, success, plans } = planList;
  const planAdd = useSelector((state) => state.planAdd);
  const { success: successAdd } = planAdd;
  const planDelete = useSelector((state) => state.planDelete);
  const { success: successDelete } = planDelete;
  const planUpdate = useSelector((state) => state.planUpdate);
  const { success: successUpdate } = planUpdate;

  let [isOpen, setIsOpen] = useState(false);
  let [openUpdate, setOpenUpdate] = useState(false);
  let [planDetail, setplanDetail] = useState();
  // const [planData, setplanData] = useState([]);
  const getuserId = localStorage.getItem("userId");
  const userId = JSON.parse(getuserId).id;

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const closeUpdateModal = () => {
    setOpenUpdate(false);
  };

  useEffect(() => {
    dispatch(listPlan(userId));
    if (successDelete) {
      dispatch({ type: PLAN_DELETE_RESET });
    }
    if (successAdd || successUpdate) {
      setIsOpen(false);
      setOpenUpdate(false);
    }
    if (successUpdate) {
      dispatch({ type: PLAN_UPDATE_RESET });
    }
  }, [dispatch, successDelete, successAdd, successUpdate]);

  const onDelete = async (id) => {
    dispatch(deletePlan(id));
  };
  return (
    <>
      <div className="bg-slate-300">
        <Navbartop />
        <div className="h-full max-w-6xl px-4 pt-20 mx-auto pb-72">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-bold text-2xl">Posts</h1>
            <button
              type="button"
              onClick={openModal}
              className="px-4 py-2 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              {"Add plans"}
            </button>
          </div>
          {openModal && (
            <Planmodel
              title="Add Plans"
              closeModal={closeModal}
              isOpen={isOpen}
            />
          )}

          <div className="overflow-hidden shadow bg-green-50 sm:rounded-lg ">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-500">
                Plans for future
              </h3>
            </div>

            {loading ? (
              <div class="w-[85px] m-auto">
                <div class=" animate-spin justify-center  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-refresh-cw"
                  >
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <polyline points="1 20 1 14 7 14"></polyline>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                  </svg>
                </div>
              </div>
            ) : (
              plans &&
              plans.map((plans) => (
                <div className="border-t border-gray-200 " key={plans.id}>
                  <div className="grid md:grid-cols-12 gap-3 px-4 py-5 bg-green-50 items-center">
                    <div className="md:col-span-2 font-medium text-lg">
                      {" "}
                      {plans.plan}{" "}
                    </div>
                    <div className="md:col-span-8 text-justify">
                      {plans.vision}
                    </div>
                    <div className="flex items-center md:justify-center md:col-span-2 align-center">
                      <button
                        onClick={() => onDelete(plans.id)}
                        className="items-center px-3 py-2 mr-2 text-white bg-red-500 rounded"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => (
                          // eslint-disable-next-line no-sequences
                          setOpenUpdate(true), setplanDetail(plans)
                        )}
                        className="items-center px-3 py-2 text-white bg-blue-500 rounded"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {openUpdate && (
        <PlanUpdate
          title="Update Events"
          closeModal={closeUpdateModal}
          isOpen={openUpdate}
          planDetail={planDetail}
        />
      )}
    </>
  );
};

export default Plans;
