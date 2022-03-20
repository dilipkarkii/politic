import {
  ADMINLOGIN_ADD_REQUEST,
  ADMINLOGIN_ADD_SUCCESS,
  ADMINLOGIN_ADD_FAIL,
  ADMINLOGIN_LIST_REQUEST,
  ADMINLOGIN_LIST_SUCCESS,
  ADMINLOGIN_LIST_FAIL,
  ADMINLOGIN_DELETE_REQUEST,
  ADMINLOGIN_DELETE_SUCCESS,
  ADMINLOGIN_DELETE_FAIL,
  ADMINLOGIN_UPDATE_REQUEST,
  ADMINLOGIN_UPDATE_SUCCESS,
  ADMINLOGIN_UPDATE_FAIL,
} from "../constants/AdminloginConstants";
import axios from "axios";
import { baseUrl } from "../constant";
import { toast } from "react-toastify";

toast.configure();

export const addAdminlogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMINLOGIN_ADD_REQUEST });
    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${baseUrl}login/admin`,
      {
        email,
        password,
      },
      config
    );
    localStorage.setItem("userId", JSON.stringify({ isAdmin: true }));
    toast.info("Admin Login Successfully", {
      autoClose: 1000,
    });
    dispatch({
      type: ADMINLOGIN_ADD_SUCCESS,
      payload: data,
    });
  } catch (err) {
    toast.error("Invalid Crenditial", {
      autoClose: 1000,
    });
    dispatch({
      type: ADMINLOGIN_ADD_FAIL,
      paylod:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const listAdminLogin = (id) => async (dispatch) => {
  try {
    dispatch({ type: ADMINLOGIN_LIST_REQUEST });
    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${baseUrl}politician/${id}/`, config);
    console.log("data", data);
    dispatch({
      type: ADMINLOGIN_LIST_SUCCESS,
      payload: data.adminlogin_set.reverse(),
    });
  } catch (err) {
    dispatch({
      type: ADMINLOGIN_LIST_FAIL,
      paylod:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export const deleteAdminlogin = (id) => async (dispatch) => {
  try {
    dispatch({ type: ADMINLOGIN_DELETE_REQUEST });
    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.delete(
      `${baseUrl}politician/reset-password/${id}/`,
      config
    );
    console.log("data", data);
    dispatch({
      type: ADMINLOGIN_DELETE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ADMINLOGIN_DELETE_FAIL,
      paylod:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const updateAdminlogin =
  (id, email, old_password, new_password) => async (dispatch) => {
    try {
      dispatch({ type: ADMINLOGIN_UPDATE_REQUEST });
      let change = {
        email: email,
        old_password: old_password,
        new_password: new_password,
      };
      const config = {
        Headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        `${baseUrl}admin/reset-password`,
        change,
        config
      );
      toast.info("Changed Password Successfully", {
        autoClose: 1000,
      });
      dispatch({
        type: ADMINLOGIN_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (err) {
      toast.error("Invalid Crenditial", {
        autoClose: 1000,
      });
      dispatch({
        type: ADMINLOGIN_UPDATE_FAIL,
        paylod:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
