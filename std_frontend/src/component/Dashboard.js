import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Dashboard = () => {
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

  var card_DATA = "";

  if (loading) {
    var DATA_SPINNER = (
      <div className="container text-center">
        <div className="alertbox form-alert-danger">
          <h3>
            <i className="fa-solid fa-hurricane mr2 spinner"></i>
            <span> Loading..</span>
          </h3>
        </div>
      </div>
    );
  }
  if (students.length < 0) {
    var DATA_EMPTY = (
      <div className="alertbox form-alert-secondary">
        <h4 className="bold-700">
          <i className="fa-solid fa-bomb mr2"></i>
          Data Not Found !
        </h4>
        <p>Sorry, Data is empty.</p>
      </div>
    );
  }
  if (students.length > 0) {
    card_DATA = students.map((item) => {
      return (
        <div className="card br-light mx1 shadow-normal" key={item.id}>
          <div className="card-header">
            <small className="badge_std">{item.id}</small>
            <h3 className="bold-800 my1">
              <i className="fa-solid fa-user-graduate mr1"></i>
              {item.name}
            </h3>
          </div>
          <div className="card-body py2 text-left">
            <div className="card-text size-14 text-primary bold-700 my1">
              <i className="fa-solid fa-envelope-circle-check mr1"></i>
              {item.email}
            </div>
            <div className="card-text active-success size-14">
              <i className="fa-solid fa-code-branch mr1"></i> {item.branch}
            </div>
            <div className="card-text size-14 my1">
              <i className="fa-solid fa-location-pin mr1"></i> {item.sem}
              <small className="text-muted bold-500">sem</small>
            </div>
          </div>
          <div className="card-footer">
            <Link
              to={`/editstudent/${item.id}`}
              className="btn btn-link text-primary bold-600 block"
            >
              Open Full Details
            </Link>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="divcontainer mt5">
      <div className="row text-center">
        <h1 className="text-danger bold-200 text-uppercase">
          Welcome to <b className="bold-900">TopCollege.com</b>
        </h1>
        <small className="text-secondary bold-400 text-uppercase mb1 line-15">
          Grow India Together
        </small>
        <hr className="type-1" />

        <div className="subcontainer py5 px2">
          {DATA_SPINNER} {DATA_EMPTY}
          <div className="card-container" card-col="4">
            {card_DATA}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
