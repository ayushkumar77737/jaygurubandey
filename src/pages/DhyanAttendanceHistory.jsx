import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import "./DhyanAttendanceHistory.css";

const DhyanAttendanceHistory = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttendance = async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        const q = query(
          collection(db, "attendance"),
          where("userId", "==", user.uid),
          orderBy("dateKey", "desc")
        );

        const snap = await getDocs(q);
        setList(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (e) {
        console.error("Attendance fetch error:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, []);

  return (
    <div className="dhyan-history-page">
      <h2>🧘 Dhyan Attendance History</h2>

      {loading && <p className="dhyan-muted">Loading...</p>}

      {!loading && list.length === 0 && (
        <p className="dhyan-muted">No attendance marked yet.</p>
      )}

      {!loading && list.length > 0 && (
        <ul className="dhyan-history-list">
          {list.map(item => (
            <li key={item.id}>📅 {item.dateKey}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DhyanAttendanceHistory;