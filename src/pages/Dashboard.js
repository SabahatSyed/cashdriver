import { useMemo } from "react";
import { Chart } from "react-charts";
import Card from "../components/Card";
import "../styles/dashboard.css";

const Dashboard = (props) => {
  const data = useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
    ],
    []
  );

  const axes = useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div className="dashboard">
      <div className="cash-overview">
        <Card style={{width: '500px'}} >
          <h3>Total</h3> <span>$21,360</span>
        </Card>
        {/* <Card>
          <h3>Available</h3> <span>$21,360</span>
        </Card>
        <Card>
          <h3>Withdrawn</h3> <span>$21,360</span>
        </Card>
        <Card>
          <h3>Clearance</h3> <span>$21,360</span>
        </Card> */}
      </div>
      <div className="transactions-details">
        <div className="graph-container">
          <div className="title">
            <h3>Today's trends</h3>
            <span>as of 1: 32: 4</span>
          </div>
          <div className="graph">
            <Chart data={data} axes={axes} />
          </div>
        </div>
        <div className="details">
          <Card style={style.detailsCardStyleBorder}>
            <h3 style={style.detailsHeadingStyle}>Total Payments</h3>{" "}
            <span>$21,360</span>
          </Card>
          <Card style={style.detailsCardStyleBorder}>
            <h3 style={style.detailsHeadingStyle}>Average Location Distance</h3>{" "}
            <span>25km</span>
          </Card>
          {/* <Card style={style.detailsCardStyleBorderLight}>
            <h3 style={style.detailsHeadingStyle}>
              Average First Response Time
            </h3>{" "}
            <span>33m</span>
          </Card> */}
          <Card style={style.detailsCardStyleBorder}>
            <h3 style={style.detailsHeadingStyle}>Weekly Points</h3>{" "}
            <span>33</span>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const style = {
  detailsCardStyleBorder: {
    boxShadow: "none",
    borderBottom: "2px solid lightgray",
    borderRadius: "0",
    width: "150px",
  },
  detailsCardStyleBorderLight: {
    boxShadow: "none",
    borderBottom: "1px solid #f5f4f4",
    borderRadius: "0",
    width: "150px",
  },
  detailsHeadingStyle: {
    fontSize: "10px",
  },
};
