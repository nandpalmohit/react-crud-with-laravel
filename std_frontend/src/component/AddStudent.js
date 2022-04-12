import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/use-input";
import axios from "axios";

const AddStudent = () => {
  // set input is valid

  // hooks to store values
  const {
    value: enteredName,
    inputChangeHandler: stdNameChangeHandler,
    reset: stdNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    inputChangeHandler: stdEmailChangeHandler,
    reset: stdEmailReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredBranch,
    inputChangeHandler: stdBranchChangeHandler,
    reset: stdBranchReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredSem,
    inputChangeHandler: stdSemChangeHandler,
    reset: stdSemReset,
  } = useInput((value) => value.trim() !== "");

  const [DataIsSent, setDataIsSent] = useState(false);

  // form handler
  const formAddHandler = async (event) => {
    event.preventDefault();

    const setFormData = {
      name: enteredName,
      email: enteredEmail,
      branch: enteredBranch,
      sem: enteredSem,
    };

    const res = await axios
      .post("http://localhost:8000/api/addstudent", setFormData)
      .then((res) => {
        if (res.data.status === 200) {
          console.log("Data erasing..");
          setDataIsSent(true);
          stdNameReset("");
          stdEmailReset("");
          stdBranchReset("");
          stdSemReset("");
          console.log(res.data);
        }
      });
  };

  const btnHandler = () => {};

  // fetch("http://127.0.0.1:8000/api/login", {
  //   method: "post",
  //   body: JSON.stringify(setFormData),
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // }).then(function (response) {
  //   response.json().then(function (resp) {
  //     console.log(resp);
  //     console.log(setFormData);
  //   });
  // });

  // axios.post(url, formData).then((response) => {
  //   if (response.data.status === 200) {
  //     console.log("Data Sendt !!");
  //     stdBranchReset();
  //     stdNameReset();
  //     stdEmailReset();
  //     stdSemReset();
  //   } else {
  //     console.log("Data Not Sent !");
  //   }
  // });

  return (
    <div className="divcontainer mt4 text-center">
      <div className="row ">
        <div className="col-3 mt5">
          <img
            src="https://www.stantec.com/content/dam/stantec/images/projects/0048/roosevelt-university-vertical-campus-6.jpg"
            alt=""
            className="rounded-20"
            width="100%"
          />
        </div>
        <div className="col-6 pl5">
          <h1 className="bold-800 active-danger">Add New Student Details</h1>
          <small className="mb2 bold-600 text-danger">
            All the fields are required*
          </small>
          <hr className="type-1" />
          {DataIsSent && (
            <div class="alertbox lt-alert-success bold-700 large">
              Account Created Successfully
            </div>
          )}

          <form className="mt3" onSubmit={formAddHandler}>
            <div className="wrap-group danger mb2">
              <input
                type="text"
                id="stdName"
                className="wrap-input"
                name="name"
                value={enteredName}
                onChange={stdNameChangeHandler}
              />
              <label htmlFor="stdName" className="wrap-label">
                Student Name
              </label>
            </div>
            <div className="wrap-group danger mb2">
              <input
                type="email"
                id="stdEmail"
                className="wrap-input"
                name="email"
                value={enteredEmail}
                onChange={stdEmailChangeHandler}
              />
              <label htmlFor="stdEmail" className="wrap-label">
                Student Email
              </label>
            </div>
            <div className="wrap-group danger mb2">
              <input
                type="text"
                id="stdBranch"
                className="wrap-input"
                name="branch"
                value={enteredBranch}
                onChange={stdBranchChangeHandler}
              />
              <label htmlFor="stdBranch" className="wrap-label">
                Student Branch
              </label>
            </div>
            <div className="wrap-group danger mb2">
              <input
                type="tel"
                id="stdSem"
                className="wrap-input"
                name="sem"
                value={enteredSem}
                onChange={stdSemChangeHandler}
              />
              <label htmlFor="stdSem" className="wrap-label">
                Student Semester
              </label>
            </div>
            <div className="text-right mr2">
              <button className="btn cl-btn-danger mb2 Sans">
                Create an Account
              </button>
            </div>
            <hr className="type-1" />
            <div className="text-center Sans">
              <small className="text-secondary">
                Already have an account?{" "}
              </small>
              <Link to="/login">Login Now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
