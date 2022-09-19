import { useNavigate } from "react-router-dom";
import "../styles/tableHeader.css";

const TableHeader = (props) => {
  const navigate = useNavigate();

  return (
    <div className="table-header" style={props.style}>
      <h2>{props.title}</h2>

      <div className="container">
        <div
          className="center-container"
          style={{ width: "100%", justifyContent: "right" }}
        >
          <div className="center-container">
            <div
              onClick={() => {
                navigate("/add-user");
              }}
              className="add-user"
            >
              Add User
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
