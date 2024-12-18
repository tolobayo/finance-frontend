import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { GiStarSattelites } from "react-icons/gi";
import "./Overview.css";
import { getBudgets } from "./services";

function Overview() {
  const [selectedDate, setSelectedDate] = useState("September 2024");

  const handleDateChange = (e: any) => {
    setSelectedDate(e.target.value);
  };

  const [data, setData] = useState<any>();
  const [catagoryColorMap, setCatagoryColorMap] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBudgets();
        console.log(result);
        setData(result[0]);
        if (result && result[0]?.catagoryLimits) {
          const colorMap = Object.entries(result[0]?.catagoryLimits).reduce(
            (acc: { [key: string]: any }, [key, value]) => {
              acc[key] =
                "#" + Math.floor(Math.random() * 16777215).toString(16);
              return acc;
            },
            {}
          );
          console.log(colorMap);
          setCatagoryColorMap(colorMap);
        }
      } catch (err: any) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return;
  if (error)
    return (
      <div>
        <h1>An error has occured, please try again later.</h1>
      </div>
    );
  return (
    <>
      <div className="oveview-header">
        <div className="header-top">
          <IoIosArrowBack className="icon" />
          <h2 className="title">Overview</h2>
          <Link to="add-budget">
            <AiOutlinePlus className="icon" />
          </Link>
        </div>
        <div className="date-dropdown">
          <select value={selectedDate} onChange={handleDateChange}>
            <option value="January 2024">January 2024</option>
            <option value="February 2024">February 2024</option>
            <option value="March 2024">March 2024</option>
            <option value="April 2024">April 2024</option>
            <option value="May 2024">May 2024</option>
            <option value="June 2024">June 2024</option>
            <option value="July 2024">July 2024</option>
            <option value="August 2024">August 2024</option>
            <option value="September 2024">September 2024</option>
            <option value="October 2024">October 2024</option>
            <option value="November 2024">November 2024</option>
            <option value="December 2024">December 2024</option>
          </select>
        </div>
        <div className="amount">
          ${`${data?.total.toLocaleString("en-US", { style: "decimal" })}`}
        </div>
      </div>
      <div className="budget-container">
        {/* First Box */}
        <div className="budget-summary">
          <div className="budget-header">
            <div className="left-to-spend">
              <p>Left to spend</p>
              <h2>$738</h2>
            </div>
            <div className="monthly-budget">
              <p>Monthly budget</p>
              <h2>
                $
                {`${data?.total.toLocaleString("en-US", { style: "decimal" })}`}
              </h2>
            </div>
          </div>
          <div className="progress-bar">
            {Object.entries(data.catagoryLimits).map(([key, value]) => (
              <div
                key={key}
                className="progress"
                style={{
                  width: `${(value / data.total) * 100}%`,
                  backgroundColor: catagoryColorMap[key],
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Second Box */}
        {Object.entries(data.catagoryLimits).map(([key, value]) => (
          <div className="category-summary" key={key}>
            <div className="category-header">
              <div className="icon-box">
                <GiStarSattelites
                  className="category-icon"
                  style={{ color: catagoryColorMap[key] }}
                />
              </div>
              <h3>{key}</h3>
              <span className="category-total">
                ${`${value.toLocaleString("en-US", { style: "decimal" })}`}
              </span>
            </div>
            <div className="sub-category">
              <div className="sub-category-info">
                <h4>$350</h4>
                <small>Left $186</small>
              </div>
              <div className="sub-progress-bar">
                <div
                  className="sub-progress"
                  style={{
                    width: `${(value / data.total) * 100}%`,
                    backgroundColor: catagoryColorMap[key],
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Overview;
