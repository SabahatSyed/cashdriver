import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/auth";
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
        style={{ width: "90%", marginTop: "50px" }}
        imgStyle={{ width: "90%" }}
      />
      <div className="options-container">
        <ul>
          {navigationOptions.map((option) => {
            return (
              <li className="" key={option.name}>
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
          style={{
            width: "19px",
            height: "24px",
            color: "var(--primaryColor)",
          }}
        ></img> */}
        <button className="sign-out" onClick={signOut}>
          Sign out
        </button>
      </div>
    </div>
  );
};

export default NavigationPanel;
