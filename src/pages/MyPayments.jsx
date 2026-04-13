import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import "./MyPayments.css";

const MyPayments = () => {
  const { t } = useTranslation();
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
        setErr(e.message || t("myPayments.error", { message: "Failed to load payments" }));
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, []);

  return (
    <div className="mypayments-page">
      <div className="mypayments-container">
        <h2 className="mypayments-title">{t("myPayments.title")}</h2>

        {loading ? (
          <p className="mypayments-loading">{t("myPayments.loading")}</p>
        ) : err ? (
          <p className="mypayments-empty">{t("myPayments.error", { message: err })}</p>
        ) : payments.length === 0 ? (
          <p className="mypayments-empty">{t("myPayments.empty")}</p>
        ) : (
          <div className="mypayments-list">
            {payments.map((p) => (
              <div className="mypayments-card" key={p.id}>
                <div className="mypayments-row">
                  <span>{t("myPayments.label_txn")}</span>
                  <b>{p.transactionId}</b>
                </div>
                <div className="mypayments-row">
                  <span>{t("myPayments.label_amount")}</span>
                  <b>₹{p.amount}</b>
                </div>
                <div className="mypayments-row">
                  <span>{t("myPayments.label_date")}</span>
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