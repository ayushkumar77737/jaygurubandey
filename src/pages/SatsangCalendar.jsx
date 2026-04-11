import React, { useState } from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./SatsangCalendar.css";

// ✅ location keys instead of hardcoded strings
const satsangEvents = {
  "04-01": { loc: "loc_chhitauna", sub: "sub_varanasi",   highlight: true  },
  "04-02": { loc: "loc_chhitauna", sub: "sub_varanasi",   highlight: true  },
  "04-03": { loc: "loc_manikpur",  sub: "sub_mirzapur",   highlight: true  },
  "04-04": { loc: "loc_nagwa",     sub: "sub_ghazipur",   highlight: false },
  "04-05": { loc: "loc_silhata",   sub: "sub_ballia",     highlight: true  },
  "04-06": { loc: "loc_nagle",     sub: "sub_maharashtra",highlight: false },
  "04-07": { loc: "loc_nagle",     sub: "sub_maharashtra",highlight: true  },
  "04-08": { loc: "loc_nagle",     sub: "sub_maharashtra",highlight: false },
  "04-09": { loc: "loc_nagle",     sub: "sub_maharashtra",highlight: true  },
  "04-10": { loc: "loc_nagle",     sub: "sub_maharashtra",highlight: false },
  "04-15": { loc: "loc_chhitauna", sub: "sub_varanasi",   highlight: true  },
  "04-16": { loc: "loc_chhitauna", sub: "sub_varanasi",   highlight: false },
  "04-19": { loc: "loc_nagwa",     sub: "sub_ghazipur",   highlight: true  },
  "04-22": { loc: "loc_sidhegaur", sub: "sub_gorakhpur",  highlight: false },
  "04-23": { loc: "loc_sidhagar",  sub: "sub_ghazipur",   highlight: true  },
  "04-25": { loc: "loc_chhitauna", sub: "sub_varanasi",   highlight: true  },
  "04-26": { loc: "loc_chhitauna", sub: "sub_varanasi",   highlight: false },
  "04-27": { loc: "loc_shivrampur",sub: "sub_varanasi",   highlight: true  },
};

function getMonthDayKey(month, day) {
  return `${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export default function SatsangCalendar() {
  const { t } = useTranslation();   // ✅ NEW
  const MONTHS = t("satsangCalendar.months", { returnObjects: true });

  const today = new Date();
  const [currentYear, setCurrentYear]   = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [activeKey, setActiveKey]       = useState(null);

  const handlePrev = () => {
    setActiveKey(null);
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  };
  const handleNext = () => {
    setActiveKey(null);
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const isToday = (day) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  const activeEvent = activeKey ? satsangEvents[activeKey] : null;

  return (
    <div className="sc-wrapper">

      {/* Header */}
      <div className="sc-header">
        <div className="sc-lotus">✿</div>
        <div className="sc-header-text">
          <h1 className="sc-title">{t("satsangCalendar.title")}</h1>
          <p className="sc-subtitle">{t("satsangCalendar.subtitle")}</p>
        </div>
        <div className="sc-lotus">✿</div>
      </div>

      {/* Month + Year Navigation */}
      <div className="sc-month-nav">
        <button className="sc-nav-btn" onClick={handlePrev}>&#8592;</button>
        <div className="sc-month-year">
          <span className="sc-month-label">{MONTHS[currentMonth]}</span>
          <span className="sc-year-label">{currentYear}</span>
        </div>
        <button className="sc-nav-btn" onClick={handleNext}>&#8594;</button>
      </div>

      {/* Calendar Grid */}
      <div className="sc-grid">
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const mdKey = getMonthDayKey(currentMonth, day);
          const event = satsangEvents[mdKey];

          return (
            <div
              key={day}
              className={[
                "sc-cell",
                event?.highlight      ? "sc-cell--highlight"  : "",
                event               ? "sc-cell--has-event"  : "",
                isToday(day)        ? "sc-cell--today"      : "",
                activeKey === mdKey ? "sc-cell--active"     : "",
              ].join(" ").trim()}
              onClick={() => event && setActiveKey(activeKey === mdKey ? null : mdKey)}
            >
              <span className={`sc-day-num ${isToday(day) ? "sc-day-num--today" : ""}`}>
                {day}
              </span>
              {event && (
                <div className="sc-event">
                  <span className="sc-event-loc">{t(`satsangCalendar.${event.loc}`)}</span>
                  <span className="sc-event-sub">{t(`satsangCalendar.${event.sub}`)}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail Panel */}
      {activeKey && activeEvent && (
        <div className="sc-detail-panel">
          <div className="sc-detail-icon">☸</div>
          <div className="sc-detail-info">
            <h3 className="sc-detail-day">
              {MONTHS[currentMonth]} {activeKey.split("-")[1]}, {currentYear}
            </h3>
            <p className="sc-detail-place">{t(`satsangCalendar.${activeEvent.loc}`)}</p>
            <p className="sc-detail-sub">{t(`satsangCalendar.${activeEvent.sub}`)}</p>
          </div>
          <button className="sc-detail-close" onClick={() => setActiveKey(null)}>✕</button>
        </div>
      )}

      {/* Footer */}
      <div className="sc-footer">
        <span className="sc-footer-dot sc-footer-dot--highlight" />
        <span className="sc-footer-label">{t("satsangCalendar.highlighted")}</span>
        <span className="sc-footer-dot sc-footer-dot--regular" />
        <span className="sc-footer-label">{t("satsangCalendar.regular")}</span>
        <span className="sc-footer-dot sc-footer-dot--today" />
        <span className="sc-footer-label">{t("satsangCalendar.today")}</span>
        <span className="sc-footer-tagline">{t("satsangCalendar.tagline")}</span>
      </div>

    </div>
  );
}