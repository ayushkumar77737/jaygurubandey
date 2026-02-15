import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import "./MyPayments.css";

const MyPayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      try {
        if (!user) {
          setPayments([]);
          setLoading(false);
          return;
        }

        const q = query(
          collection(db, "contributions"),
          where("userId", "==", user.uid),
          orderBy("createdAt", "desc")
        );

        const snap = await getDocs(q);
        const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setPayments(list);
      } catch (e) {
        console.error("❌ MyPayments fetch error:", e);
        setErr(e.message || "Failed to load payments");
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, []);

  return (
    <div className="mypayments-page">
      <div className="mypayments-container">
        <h2 className="mypayments-title">My Payments</h2>

        {loading ? (
          <p className="mypayments-loading">Loading...</p>
        ) : err ? (
          <p className="mypayments-empty">Error: {err}</p>
        ) : payments.length === 0 ? (
          <p className="mypayments-empty">No payments found</p>
        ) : (
          <div className="mypayments-list">
            {payments.map((p) => (
              <div className="mypayments-card" key={p.id}>
                <div className="mypayments-row">
                  <span>Transaction ID</span>
                  <b>{p.transactionId}</b>
                </div>
                <div className="mypayments-row">
                  <span>Amount</span>
                  <b>₹{p.amount}</b>
                </div>
                <div className="mypayments-row">
                  <span>Date</span>
                  <b>
                    {p.createdAt?.toDate
                      ? p.createdAt.toDate().toLocaleString()
                      : "-"}
                  </b>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPayments;
