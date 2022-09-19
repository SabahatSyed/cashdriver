import { IoLockClosedOutline, IoPencil } from "react-icons/io5";
// import profileIcon from "../assets/profilePictureIcon.png";
import "../styles/settings.css";
// import switchImage from "../assets/switchImage.png";

const Settings = (props) => {
  return (
    <div className="settings">
      <h2 className="settings-title">Settings</h2>
      <div>
        <h3>Security</h3>
        <div className="settings-fields-container">
          <div className="field">
            <input placeholder="Update Password" />
            <button className="update-btn">Update</button>
          </div>
          <div className="field" style={{ borderBottom: "none" }}>
            <input placeholder="Update Admin Wallet Key" />
            <button className="update-btn">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
