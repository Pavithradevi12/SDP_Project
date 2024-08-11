import React, { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';
import axios from 'axios';
import './UserManagement.css'; 

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/login')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8080/login/${id}`)
      .then(response => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the user!', error);
      });
  };

  return (
    <div>
      <AdminNavbar />
      <h1>User Management</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => deleteUser(user.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
