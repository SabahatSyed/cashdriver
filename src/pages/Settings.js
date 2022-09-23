import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useGlobalState } from "../contexts/globalState";

import "../styles/settings.css";

const Settings = (props) => {
  const { adminCredentials, updateAdminPassword, updateAdminWalletKey } =
    useGlobalState();
  const [password, setPassword] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const navigate = useNavigate();

  const updatePassword = async () => {
    if (password !== "") {
      const adminRef = doc(db, "admin", adminCredentials.id);
      try {
        await updateDoc(adminRef, {
          password: password,
        });
        updateAdminPassword(password);
        navigate("/dashboard", { replace: true });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const updateKey = async () => {
    if (adminKey !== "") {
      const adminRef = doc(db, "admin", adminCredentials.id);
      try {
        await updateDoc(adminRef, {
          walletKey: adminKey,
        });
        updateAdminWalletKey(adminKey);
        navigate("/dashboard", { replace: true });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="settings">
      <h2 className="settings-title">Settings</h2>
      <div>
        <h3>Security</h3>
        <div className="settings-fields-container">
          <div className="field">
            <input
              placeholder="Update Password"
              name="adminPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="update-btn" onClick={updatePassword}>
              Update
            </button>
          </div>
          <div className="field" style={{ borderBottom: "none" }}>
            <input
              placeholder="Update Admin Wallet Key"
              name="adminKey"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
            />
            <button className="update-btn" onClick={updateKey}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
