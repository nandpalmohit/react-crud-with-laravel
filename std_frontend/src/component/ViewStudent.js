import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ViewStudent = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/viewstudent`).then((res) => {
      if (res.data.status === 200) {
        console.log(res.data);
        setStudents(res.data.students);
        setLoading(false);
      }
    });
  }, []);

  const deleteBtnHandler = (event, id) => {
    const url = "http://localhost:8000/api/deletestudent/" + `${id}`;

    const ClickedElement = event.currentTarget;
    ClickedElement.innerText = "Deleting...";

    const res = axios.delete(url).then((res) => {
      if (res.data.status === 200) {
        console.log(res.data);
        ClickedElement.closest("tr").remove();
      }
    });
  };

  var students_DATATABLE = "";

  if (loading) {
    students_DATATABLE = (
      <tr className="text-black">
        <td colSpan="7" className="text-center">
          <div className="badge lt-badge-danger my3 active-dark large bold-600">
            Data is Loading...
          </div>
        </td>
      </tr>
    );
  } else if (students.length > 0) {
    students_DATATABLE = students.map((item) => {
      return (
        <tr key={item.id} className="size-14 bold-500">
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.branch}</td>
          <td>{item.sem}</td>

          <td>
            <Link
              to={`/editstudent/${item.id}`}
              className="btn cl-btn-success Sans bold-600"
            >
              Edit
            </Link>
            <button
              className="btn ot-btn-danger mx1 Sans bold-600"
              onClick={(event) => deleteBtnHandler(event, item.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  } else {
    students_DATATABLE = (
      <tr className="text-black">
        <td colSpan="7" className="text-center">
          <div className="alertbox form-alert-warning my3 size-24 bold-700">
            No data found !
          </div>
        </td>
      </tr>
    );
  }

  return (
    <div className="divcontainer mt5">
      <div className="row text-center">
        <h1 className="active-danger bold-900">Student Details</h1>
        <small className="text-secondary bold-400 mb3">
          List Student Data Records
        </small>
        <hr className="type-1" />
        <table className="hr-table">
          <thead>
            <tr className="lt-bg-danger">
              <th>Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Branch</th>
              <th>Sem</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{students_DATATABLE}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewStudent;
