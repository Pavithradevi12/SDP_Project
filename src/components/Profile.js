import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import icon from '../images/icon1.jpg';
import Navbar from './Navbar';

const Profile = ({ isAuthenticated, handleLogout }) => {
    const [userData, setUserData] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [userId, setUserId] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const loggedInEmail = localStorage.getItem('email');

    const fetchUserId = async () => {
        try {
            const response = await axios.get('http://localhost:8080/login');
            const currentUser = response.data.find(user => user.email === loggedInEmail);

            if (currentUser) {
                setUserId(currentUser.id);
            } else {
                console.error('User not found in API response');
            }
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    const fetchUserData = async () => {
        if (userId) {
            try {
                const response = await axios.get(`http://localhost:8080/login/${userId}`);
                setUserData(response.data);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
    };

    useEffect(() => {
        if (loggedInEmail) {
            fetchUserId();
        }
    }, [loggedInEmail]);

    useEffect(() => {
        fetchUserData();
    }, [userId]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSave = () => {
        axios.put(`http://localhost:8080/login/${userId}`, formData)
            .then(response => {
                setUserData(response.data);
                setIsEditing(false);
            })
            .catch(error => console.error('Error updating user data:', error));
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleUserLogout = () => {
        localStorage.removeItem('token'); // Adjust according to your auth scheme
        navigate('/membership');
    };

    return (
      <div>
           <Navbar isAuthenticated={isAuthenticated} userName={userData.name} onLogout={handleUserLogout} />
        <div className='boom'>
            <div className="edit-info-text">Edit your info here</div>
            <div className="p-profile-container">
                <div className="p-profile-card">
                    <div className="p-profile-left">
                        <img 
                            src={icon}
                            alt="Profile" 
                            className="p-profile-image" 
                        />
                    </div>
                    <div className="p-profile-right">
                        <div className="p-profile-header">
                            <h2>{userData.name}</h2>
                            <h3>@{userData.username} <span className="edit-icon" onClick={handleEdit}>✎</span></h3>
                        </div>
                        <div className="p-profile-details">
                            {['username', 'email', 'pno', 'dob'].map(field => (
                                <div className="detail-item" key={field}>
                                    <strong>{field.charAt(0).toUpperCase() + field.slice(1)}</strong>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name={field}
                                            value={formData[field] || ''}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        <span>{userData[field]} <span className="edit-icon" onClick={handleEdit}></span></span>
                                    )}
                                </div>
                            ))}
                            <div className="detail-item">
                                <strong>Password</strong>
                                {isEditing ? (
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={formData.password || ''}
                                            onChange={handleChange}
                                            style={{ flex: 1 }}
                                        />
                                        <span onClick={toggleShowPassword} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span>********</span>
                                        <span onClick={handleEdit} className="edit-icon"></span>
                                    </div>
                                )}
                            </div>
                        </div>
                        {isEditing && <button onClick={handleSave}>Save</button>}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Profile;
