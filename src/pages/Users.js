import { useGlobalState } from "../contexts/globalState";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoSearchOutline, IoInformationCircleOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import ProfilePicture from "../components/ProfilePicture";
import Footer from "../components/Footer";
import "../styles/users.css";
import "../styles/table.css";
import TableHeader from "../components/TableHeader";
import { useEffect } from "react";

const Users = (props) => {
  const { users } = useGlobalState();

  useEffect(() => {
    console.log(users);
  }, []);

  return (
    <div className="users">
      <TableHeader title="Users" />
      <div className="search-bar">
        <IoSearchOutline className="icon" />
        <input placeholder="Search user by name or email..." />
      </div>

      <div className="table">
        <table style={{ height: "auto" }}>
          <tr
            style={{
              backgroundColor: "transparent",
              borderBottom: "0.5px solid rgba(124, 124, 124, 0.27)",
            }}
          >
            <th>Profile Name</th>
            <th>Email</th>
            <th>Date Joined</th>
          </tr>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <div
                    className="name"
                    style={{ justifyContent: "flex-start" }}
                  >
                    <ProfilePicture
                      imgStyle={{
                        width: "40px",
                        height: "40px",
                        marginRight: "23px",
                      }}
                    />
                    {user.data.name}
                  </div>
                </td>
                <td>{user.data.email}</td>
                <td>{user.data.dateJoined ? user.data.dateJoined : "None"}</td>
                <td>
                  <div className="dropdown details">
                    <HiDotsHorizontal />
                    <div className="dropdown-content">
                      <div>
                        <FaTrash className="icon" /> Delete
                      </div>
                      <div>
                        <IoInformationCircleOutline className="icon" />
                        Edit
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <Footer contentStyle={{ marginRight: "20px" }} />
    </div>
  );
};

export default Users;
