import {
  LOGIN_ADD_REQUEST,
  LOGIN_ADD_SUCCESS,
  LOGIN_ADD_FAIL,
  LOGIN_LIST_REQUEST,
  LOGIN_LIST_SUCCESS,
  LOGIN_LIST_FAIL,
  LOGIN_DELETE_REQUEST,
  LOGIN_DELETE_SUCCESS,
  LOGIN_DELETE_FAIL,
  LOGIN_UPDATE_REQUEST,
  LOGIN_UPDATE_SUCCESS,
  LOGIN_UPDATE_FAIL,
} from "../constants/LoginConstants";
import axios from "axios";
import { baseUrl } from "../constant";
import { toast } from "react-toastify";

toast.configure();

export const addLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_ADD_REQUEST });
    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${baseUrl}login/politician`,
      {
        email,
        password,
      },
      config
    );
    localStorage.setItem(
      "userId",
      JSON.stringify({ isAdmin: false, id: data.ID })
    );
    toast.info("Login Successfully", {
      autoClose: 1000,
    });
    dispatch({
      type: LOGIN_ADD_SUCCESS,
      payload: data,
    });
  } catch (err) {
    toast.error("Invalid Crenditial", {
      autoClose: 1000,
    });
    dispatch({
      type: LOGIN_ADD_FAIL,
      paylod:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const listLogin = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_LIST_REQUEST });
    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${baseUrl}politician/${id}/`, config);
    console.log("data", data);
    dispatch({
      type: LOGIN_LIST_SUCCESS,
      payload: data.LOGIN_set.reverse(),
    });
  } catch (err) {
    dispatch({
      type: LOGIN_LIST_FAIL,
      paylod:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export const deleteLogin = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_DELETE_REQUEST });
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
      type: LOGIN_DELETE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_DELETE_FAIL,
      paylod:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const updateLogin =
  (id, mobile, old_password, new_password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_UPDATE_REQUEST });
      let reset = {
        mobile: mobile,
        old_password: old_password,
        new_password: new_password,
      };

      const config = {
        Headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        `${baseUrl}politician/reset-password`,
        reset,
        config
      );
      toast.info("Changed Password Successfully", {
        autoClose: 1000,
      });
      dispatch({
        type: LOGIN_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (err) {
      toast.error("Invalid Crenditial", {
        autoClose: 1000,
      });
      dispatch({
        type: LOGIN_UPDATE_FAIL,
        paylod:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
