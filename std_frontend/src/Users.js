import React, { useState, useEffect } from "react";

const Users = (props) => {
  const [data, setData] = useState({ error: null, isLoaded: false, users: [] });

  const dataFetchHandler = () => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setData({
            isLoaded: true,
            users: result,
          });
        },
        (error) => {
          setData({
            isLoaded: true,
            error,
          });
        }
      );
  };

  useEffect(() => {
    dataFetchHandler();
  }, []);

  console.log(data);

  const { error, isLoaded, users } = data;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container bg-danger text-center shadow-lg p-5 rounded border border-dark">
        <table className="table table-striped table-hover text-white">
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>user Email</th>
          </tr>
          {users.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <td>
                <mark className="text-white">{item.name}</mark>
              </td>
              <td>
                <i>{item.email}</i>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
};

export default Users;
