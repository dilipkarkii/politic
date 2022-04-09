import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./component/Dashboard/navbar";
import Create from "./component/setting/create";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import { useDispatch, useSelector } from "react-redux";
import { PERSONAL_DELETE_RESET } from "./constants/PersonalConstants";
import { listDashboard } from "./actions/DashboardAction";
import ReactPaginate from "react-paginate";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [isOpen, setIsOpen] = useState(false);
  let [user, setUser] = useState(false);
  // const [tabledata, setTabledata] = useState();
  const personalAdd = useSelector((state) => state.personalAdd);
  const { success: successAdd } = personalAdd;
  const personalDelete = useSelector((state) => state.personalDelete);
  const { success: successDelete } = personalDelete;

  const dashboardList = useSelector((state) => state.dashboardList);
  const { loading, success, dashboards } = dashboardList;
  console.log(dashboards && dashboards.count);
  // console.log(user);
  // useEffect(() => {
  // 	dispatch(listGallary(userId));
  // 	if (successDelete) {
  // 		dispatch({ type: GALLARY_DELETE_RESET });
  // 	}
  // 	if (successAdd || successUpdate) {
  // 		setIsOpen(false);
  // 		setOpenUpdate(false);
  // 	}
  // 	if (successUpdate) {
  // 		dispatch({ type: GALLARY_UPDATE_RESET });
  // 	}
  // }, [dispatch, successDelete, successAdd, successUpdate]);
  useEffect(() => {
    dispatch(listDashboard());
    if (successAdd) {
      setIsOpen(false);
    }
    if (successDelete) {
      dispatch({ type: PERSONAL_DELETE_RESET });
    }
  }, [successAdd, successDelete]);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  // useEffect(() => {
  // 	const fetchData = async () => {
  // 		const res = await axios.get("http://backend.publicaffairsnepal.com/politician/");
  // 		// const data = res.json();
  // 		// console.log("data", data.data);
  // 		setTabledata(res.data);
  // 		console.log(res);
  // 	};
  // 	fetchData();
  // }, [successAdd,]);

  const handleFormSubmit = async (id) => {
    // localStorage.setItem("userId", id);
    localStorage.setItem("userId", JSON.stringify({ isAdmin: true, id: id }));
    // console.log(id);
    navigate("/home");
  };

  // useEffect(() => {
  // 	const fetchData = async () => {
  // 		const { data } = await axios.get(
  // 			`http://backend.publicaffairsnepal.com/user/?politician=${id}`
  // 		);
  // 		setUser(data);
  // 	};
  // 	fetchData();
  // }, []);

  const [index, setIndex] = useState();

  const handleUser = async (id, i) => {
    const { data } = await axios.get(
      `http://backend.publicaffairsnepal.com/user/?politician=${id}`
    );
    console.log("id", data);
    setUser(data.results.length);
    setIndex(i);
  };

  // const onDelete = async (id) => {
  // 	dispatch(deletePersonal(id));
  // 	// await axios.delete(`http://backend.publicaffairsnepal.com/politician/${id}/`);
  // };

  const handlePageClick = (data) => {
    let selectedPage = data.selected + 1;
    console.log(selectedPage);
    dispatch(listDashboard(selectedPage));
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 mt-5 mb-5">
          <h1 className="col-span-3 text-lg font-bold">Politician List</h1>
          <div className="col-span-6"></div>
          <div className="col-span-3">
            <button
              type="button"
              onClick={openModal}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center float-right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              Create User
            </button>
            {/* <button
              type="button"
              onClick={openModal}
              className="px-4 py-1 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              {"Create User"}
            </button> */}
          </div>
        </div>
        <div className="grid grid-cols-12 mb-5">
          {/* <div className="col-span-11 mt-5 ml-60 px-5 py-2.5 flex justify-end  ">
          <div className="inset-0 flex items-center justify-end ">
            <button
              type="button"
              onClick={openModal}
              className="px-4 py-1 text-sm font-medium text-black rounded-md bg-emerald-400 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              {"Create User"}
            </button>
          </div>
          <Create title="Create User" closeModal={closeModal} isOpen={isOpen} />
        </div> */}
          {/* <div className="col-span-11"></div> */}
          {/* <div className="col-span-12">
            <table className="w-full mx-10 text-center">
              <thead className="border-b border-black ">
                <tr>
                  <th>S.N</th>
                  <th>Name</th>
                  <th>I.D</th>
                  <th>User</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>GoTo</th>
                </tr>
              </thead>
              <tbody className="border-b border-black">
                {loading ? (
                  <div className="w-[85px] m-auto">
                    <div className="justify-center animate-spin">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-refresh-cw"
                      >
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <polyline points="1 20 1 14 7 14"></polyline>
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                      </svg>
                    </div>
                  </div>
                ) : (
                  dashboards.results &&
                  dashboards.results.map((data, i) => (
                    <tr className="my-10 border-b border-black" key={data.id}>
                      <td className="mt-10">{i + 1}</td>
                      <td className="mt-10">{data.firstName}</td>
                      <td className="mt-10">{data.id}</td>
                      <td className="flex items-center mt-5 ml-7">
                        <button onClick={() => handleUser(data.id, i)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 ml-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                        {index === i && user}
                      </td>
                      <td className="mt-10">{data.email}</td>
                      <td className="mt-10">{data.phone}</td>
                      <td className="md-10">
                        <button
                          onClick={() => handleFormSubmit(data.id)}
                          className="inline-flex justify-center px-4 py-2 my-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {dashboards && dashboards.count > 5 && (
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                breakClassName="break-me"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={dashboards && dashboards.count / 5}
                previousLabel="<"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            )}
          </div> */}
          <div className="col-span-12">
            <div class="relative overflow-x-auto shadow-md">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-base">
                      S.N
                    </th>
                    <th scope="col" class="px-6 py-3 text-base">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-base">
                      ID
                    </th>
                    <th scope="col" class="px-6 py-3 text-base">
                      User
                    </th>
                    <th scope="col" class="px-6 py-3 text-base">
                      Email
                    </th>
                    <th scope="col" class="px-6 py-3 text-base">
                      Phone
                    </th>
                    <th scope="col" class="px-6 py-3 text-base">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    // <div className="w-[85px] m-auto">
                    <div className="justify-center animate-spin">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-refresh-cw"
                      >
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <polyline points="1 20 1 14 7 14"></polyline>
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                      </svg>
                      {/* </div> */}
                    </div>
                  ) : (
                    dashboards.results &&
                    dashboards.results.map((data, i) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                        >
                          {i + 1}
                        </th>
                        <td class="px-6 py-4">{data.firstName}</td>
                        <td class="px-6 py-4">{data.id}</td>
                        <td class="px-6 py-4 flex items-center">
                          <button
                            onClick={() => handleUser(data.id, i)}
                            className="mr-2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24 mr-2"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>
                          {index === i && (
                            <span className="font-bold">{user}</span>
                          )}
                        </td>
                        <td class="px-6 py-4">{data.email}</td>
                        <td class="px-6 py-4">{data.phone}</td>
                        <td class="px-6 py-4 text-right">
                          <button
                            onClick={() => handleFormSubmit(data.id)}
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                      // <tr className="my-10 border-b border-black" key={data.id}>
                      //   <td className="mt-10"></td>
                      //   <td className="mt-10"></td>
                      //   <td className="mt-10"></td>
                      //   <td className="flex items-center mt-5 ml-7">

                      //   </td>
                      //   <td className="mt-10"></td>
                      //   <td className="mt-10"></td>
                      //   <td className="md-10">
                      //     <button

                      //       className="inline-flex justify-center px-4 py-2 my-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none first-letter:focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      //     >
                      //       Edit
                      //     </button>
                      //   </td>
                      // </tr>
                    ))
                  )}
                </tbody>
              </table>
              {dashboards && dashboards.count > 10 && (
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  breakClassName="break-me"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={dashboards && dashboards.count / 5}
                  previousLabel="<"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Create title="Create User" closeModal={closeModal} isOpen={isOpen} />
    </>
  );
};

export default Dashboard;
