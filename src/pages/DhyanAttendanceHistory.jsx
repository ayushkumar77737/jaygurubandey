import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import "./DhyanAttendanceHistory.css";

const DhyanAttendanceHistory = () => {
  const [idNumber, setIdNumber] = useState("");
  const [list, setList] = useState([]);
  const [status, setStatus] = useState("idle");
  // idle | loading | found | notfound | error
  const showTempStatus = (type, duration = 3000) => {
    setStatus(type);

    setTimeout(() => {
      setStatus("idle");
    }, duration);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const roll = idNumber.trim().toUpperCase(); // normalize
    if (!/^[A-Z0-9]+$/.test(roll)) {
      showTempStatus("error", 3000);
      return;
    }

    if (!roll) return;

    setStatus("loading");
    setList([]);

    try {
      const q = query(
        collection(db, "attendance"),
        where("rollNo", "==", roll),
        orderBy("dateKey", "desc")
      );

      const snap = await getDocs(q);

      if (snap.empty) {
        showTempStatus("notfound", 3000);
        return;
      }

      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setList(data);
      setStatus("found");
    } catch (err) {
      console.error("Attendance search error:", err);
      showTempStatus("error", 3000);
    }
  };

  return (
    <div className="dhyan-history-page">
      <h2>🧘 Dhyan Attendance History</h2>

      <form className="dhyan-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter your ID / Roll No"
          value={idNumber}
          onChange={(e) => {
            const value = e.target.value;

            // ❌ remove @, ~ and all special characters
            const cleaned = value.replace(/[^a-zA-Z0-9]/g, "");

            setIdNumber(cleaned);

            if (status !== "idle") {
              setStatus("idle");
              setList([]);
            }
          }}
        />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Checking..." : "Check"}
        </button>
      </form>

      {status === "notfound" && (
        <p className="dhyan-error">
          ❌ You are not a member of Dhyan program.
        </p>
      )}

      {status === "error" && (
        <p className="dhyan-error">❌ Something went wrong. Try again.</p>
      )}

      {status === "found" && (
        <div className="dhyan-results">
          <h3>Attendance Records</h3>
          <ul>
            {list.map((item) => (
              <li key={item.id}>
                <span className="date">📅 {item.dateKey}</span>
                <span className="date">👤 {item.name}</span>
                <span className="date">🆔 {item.rollNo}</span>
                <span
                  className={`status ${item.status === "present" ? "present" : "absent"
                    }`}
                >
                  {item.status === "present" ? "Present" : "Absent"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DhyanAttendanceHistory;