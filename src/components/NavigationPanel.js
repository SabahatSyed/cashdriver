import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/auth";
// import { navigationOptions } from "../constants/navigationOptions";
// import signOutImage from "../assets/signOutImage.png";
import Logo from "../components/Logo";
import "../styles/navigationPanel.css";

const navigationOptions = [
  {
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    path: "/settings",
    name: "Settings",
  },
  {
    path: "/users",
    name: "Users",
  },
  {
    path: "/w",
    name: "whatever",
  },
];

const NavigationPanel = (props) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const signOut = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="navigation-panel">
      <Logo
        style={{ width: "90%", marginTop: "20px" }}
        imgStyle={{ width: "90%" }}
      />
      <div className="options-container">
        <ul>
          {navigationOptions.map((option) => {
            return (
              <li className="">
                <NavLink
                  to={option.path}
                  className={({ isActive }) =>
                    isActive
                      ? "link-active center-container"
                      : "link center-container"
                  }
                  children={({ isActive }) => {
                    if (isActive) {
                      return (
                        <>
                          <div className="active-mark active"></div>
                          <span>{option.name}</span>
                        </>
                      );
                    } else {
                      return (
                        <>
                          <div className="active-mark inactive"></div>
                          <span>{option.name}</span>
                        </>
                      );
                    }
                  }}
                ></NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sign-out-container">
        {/* <img
          src={signOutImage}
          alt=""
          style={{ width: "19px", height: "24px" }}
        ></img> */}
        <button className="sign-out" onClick={signOut}>
          Sign out
        </button>
      </div>
    </div>
  );
};

export default NavigationPanel;
