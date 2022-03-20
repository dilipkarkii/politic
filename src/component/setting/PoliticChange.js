import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { LOGIN_UPDATE_REQUEST } from "../../constants/LoginConstants";
import { LOGIN_UPDATE_RESET } from "../../constants/LoginConstants";
import { useDispatch, useSelector } from "react-redux";
import { updateLogin } from "../../actions/LoginAction";

const PoliticChange = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [newpwd, setNewpwd] = useState("");
  const [oldpass, setOldPass] = useState("");
  const getuserId = localStorage.getItem("userId");
  const userId = JSON.parse(getuserId).id;

  const loginUpdate = useSelector((state) => state.loginUpdate);
  const { success: successUpdate } = loginUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: LOGIN_UPDATE_RESET });
      setMobile("");
      setNewpwd("");
      setOldPass("");
      navigate("/");
    }
  }, [successUpdate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateLogin(userId, mobile, oldpass, newpwd));
  };

  // const handleFormSubmit = async (e) => {
  // 	e.preventDefault();
  // 	//politician.tk/login/politician
  // 	let config = {
  // 		headers: {
  // 			"Content-Type": "application/json",
  // 		},
  // 	};
  // 	const { data } = await axios.put(
  // 		`http://44.199.61.81:8080/politician/reset-password`,
  // 		{ new_password: newpwd, old_password: oldpass, mobile },
  // 		config
  // 	);
  // 	// console.log(data.non_field_errors[0]);
  // 	console.log(data.ID);
  // 	if (data) {
  // 		navigate("/");
  // 	} else if (data.non_field_errors[0]) {
  // 		alert("invalid id or password");
  // 	}
  // 	localStorage.setItem("userId", data.ID);
  // };
  return (
    <div className="flex h-screen bg-slate-500">
      <div className="w-full max-w-md px-16 py-10 m-auto bg-white border rounded-lg border-primaryBorder shadow-default">
        <h1 className="mt-4 mb-12 text-2xl font-medium text-center text-primary">
          Change your password 🔐
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <div>
              <label htmlFor=" mobile">mobile</label>
              <input
                type="mobile"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="mobile"
                placeholder="confirm mobile no"
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
              />
            </div>
            <label htmlFor="oldpwd">Old Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="old pwd"
              placeholder="old password"
              onChange={(e) => setOldPass(e.target.value)}
              value={oldpass}
            />
          </div>
          <div>
            <label htmlFor="newpassword">New password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="newpassword"
              placeholder="new newpassword"
              onChange={(e) => setNewpwd(e.target.value)}
              value={newpwd}
            />
          </div>

          <div className="flex items-center justify-center mt-6">
            <button
              className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PoliticChange;
