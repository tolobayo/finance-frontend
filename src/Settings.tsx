import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // Importing the default avatar icon from React Icons
import "./Settings.css";

function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    email: "",
    password: "",
    profilePicture: "",
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setSettings({
        ...settings,
        profilePicture: URL.createObjectURL(file), // Preview image
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Settings Saved:", settings);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onChange={handleFileChange}
          />
          {/* Display either the uploaded profile picture or the default avatar */}
          <div className="avatar-container">
            {settings.profilePicture ? (
              <img
                src={settings.profilePicture}
                alt="Profile Preview"
                className="profile-preview"
              />
            ) : (
              <FaUserCircle className="default-avatar" />
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Change Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={settings.password}
            onChange={handleChange}
            placeholder="Enter new password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="notifications">Enable Notifications</label>
          <input
            type="checkbox"
            id="notifications"
            name="notifications"
            checked={settings.notifications}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Save Settings
        </button>
      </form>
    </div>
  );
}

export default Settings;
