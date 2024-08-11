import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/ExplorePage';
import Login from './components/Login';
import Register from './components/Register';
import Membership from './components/Membership';
import MyBooks from './components/MyBooks';
import BookViewer from './components/BookViewer';
import Admin from './components/Admin';
import AdminLayout from './components/AdminLayout';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import BookManagement from './components/BookManagement';
import Subscription from './components/Subscription';
import Settings from './components/Settings';
import AccountSettings from './components/AccountSettings';
import { WishlistProvider } from './components/WishlistContext';
import { NebulaReadsProvider } from './components/NebulaReadsContext';
import LandingPage from './components/LandingPage';
import ProfileDropdown from './components/ProfileDropdown';
import Profile from './components/Profile';
import { AuthProvider } from './components/AuthContext';

function App() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <AuthProvider>
    <WishlistProvider>
      <NebulaReadsProvider>
        <Router>
          <div className="App">
            <nav className="navbar">
              <div className="profile-section">
                {isDropdownVisible && (
                  <ProfileDropdown
                    onLogout={handleLogout}
                    onClose={() => setDropdownVisible(false)}
                  />
                )}
              </div>
            </nav>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/mybooks" element={<MyBooks />} />
              <Route path="/book/:id" element={<BookViewer />} />
              <Route path="/profile" element={<Profile  />}/>
              <Route path="/account-settings" element={<AccountSettings />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Admin />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="user-management" element={<UserManagement />} />
                <Route path="book-management" element={<BookManagement />} />
                <Route path="subscription" element={<Subscription />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </NebulaReadsProvider>
    </WishlistProvider>
    </AuthProvider>
  );
}

export default App;


// import React from 'react';
// import ChatBot from './components/chatbot';

// function App() {
//   return (
//     <div className="App">
      
//         <ChatBot />
//     </div>
//   );
// }

// export default App;
