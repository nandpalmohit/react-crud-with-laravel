import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useInput from "../hooks/use-input";
import axios from "axios";

const EditStudent = (props) => {
  // get id from url

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [branch, setbranch] = useState("");
  const [sem, setsem] = useState("");

  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    branch: "",
    sem: "",
  });

  let { id } = useParams();

  useEffect(() => {
    const url = "http://localhost:8000/api/editstudent/" + `${id}`;
    const res = axios.get(url).then((res) => {
      if (res.data.status === 200) {
        console.log(res.data);
        setname(res.data.message.name);
        setemail(res.data.message.email);
        setbranch(res.data.message.branch);
        setsem(res.data.message.sem);
      }
    });
  }, []);

  const [DataIsUpdate, setDataIsUpdate] = useState(false);

  const stdNameChangeHandler = (event) => {
    setname(event.target.value);
  };
  const stdEmailChangeHandler = (event) => {
    setemail(event.target.value);
  };
  const stdBranchChangeHandler = (event) => {
    setbranch(event.target.value);
  };
  const stdSemChangeHandler = (event) => {
    setsem(event.target.value);
  };

  // form handler
  const formEditHandler = (event) => {
    event.preventDefault();
    const url = "http://localhost:8000/api/updatestudent/" + `${id}`;
    const updatedData = {
      name: name,
      email: email,
      branch: branch,
      sem: sem,
    };
    axios.put(url, updatedData).then((res) => {
      if (res.data.status === 200) {
        console.log(res.data.message);
        setDataIsUpdate(true);
      }
    });
  };
  const editBtnHandler = (event) => {};

  // console.log(studentData);

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
          <h1 className="bold-800 active-danger">Edit Student Details</h1>
          <small className="mb2 bold-600 text-danger">
            Please make sure that all fields are non-empty*
          </small>
          <hr className="type-1" />
          {DataIsUpdate && (
            <div className="alertbox lt-alert-success bold-700 large">
              Account Updated Successfully
            </div>
          )}
          <form className="mt3" onSubmit={formEditHandler}>
            <div className="wrap-group danger mb2">
              <input
                type="text"
                id="stdName"
                className="wrap-input"
                name="name"
                value={name}
                onChange={stdNameChangeHandler}
              />
              <label htmlFor="stdName" className="wrap-label">
                Edit Name
              </label>
            </div>
            <div className="wrap-group danger mb2">
              <input
                type="email"
                id="stdEmail"
                className="wrap-input"
                name="email"
                value={email}
                onChange={stdEmailChangeHandler}
              />
              <label htmlFor="stdEmail" className="wrap-label">
                Edit Email
              </label>
            </div>
            <div className="wrap-group danger mb2">
              <input
                type="text"
                id="stdBranch"
                className="wrap-input"
                name="branch"
                value={branch}
                onChange={stdBranchChangeHandler}
              />
              <label htmlFor="stdBranch" className="wrap-label">
                Edit Branch
              </label>
            </div>
            <div className="wrap-group danger mb2">
              <input
                type="tel"
                id="stdSem"
                className="wrap-input"
                name="sem"
                value={sem}
                onChange={stdSemChangeHandler}
              />
              <label
                htmlFor="stdSem"
                className="wrap-label"
                onClick={editBtnHandler}
              >
                Edit Semester
              </label>
            </div>
            <div className="text-right mr2">
              <button className="btn cl-btn-danger mb2 Sans">
                Update Student
              </button>
            </div>
            <hr className="type-1" />
            <div className="text-center Sans">
              <small className="text-secondary">Don't have an account? </small>
              <Link to="/addstudent" className="size-14 bold-600 text-primary">
                Signup Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
