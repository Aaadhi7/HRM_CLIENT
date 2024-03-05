import React, { useEffect, useState } from "react";
import './admin.css';
import { Link } from "react-router-dom";

function AdminPage() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:2005/getData', {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setUserData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <div className="bg_img2">
        <div className="container1">
          <Link to={'/'}> <div className="card">
            <h3 className="title">Home</h3>
            <img className="admin_img" src="../../../public/landing/bg1.jpg" alt="" />
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
          </div></Link>
          <Link to={'/Adminlogin'}><div className="card">
            <h3 className="title">AdminLogin</h3>
            <img className="admin_img" src="../../../public/landing/AdminLogin.png" alt="" />
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
          </div></Link>
          <Link to={'/Adduser'}><div className="card">
            <h3 className="title">Add User</h3>
            <img className="admin_img" src="../../../public/landing/Adduser.png" alt="" />
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
          </div></Link>
        </div>

        <div className="table1">

          <h2>User List</h2>

          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="content" >
              {userData.map(user => (
                <tr key={user._id} >
                  <td><img className="avatar1" src="../../../public/landing/avatar1.png" alt="" /></td>
                  <td>{user._id}</td>
                  <td><input type="text" name="firstname" value={user.firstname} disabled /></td>
                  <td><input type="text" name="lastname" value={user.lastname} disabled /></td>
                  <td><input type="email" name="email" value={user.email} disabled /></td>
                  <td><input type="password" name="password" value={user.password} disabled /></td>
                  <td><button onClick={() => handleEdit(user._id)} ><span class="material-symbols-outlined">edit_document</span></button> <button onClick={() => handleSave(user._id)} ><span class="material-symbols-outlined">save</span></button> </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
    </>
  );
}

export default AdminPage;
