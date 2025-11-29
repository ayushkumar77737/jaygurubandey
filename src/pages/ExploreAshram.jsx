import React, { useState } from "react";
import "./ExploreAshram.css";

const ZONES = [
  {
    id: "main-temple",
    name: "Main Temple",
    type: "Prayer Hall",
    short: "Central place for daily aarti, chanting, and meditation.",
    details:
      "The Main Temple is where devotees gather for morning and evening aarti, chanting, and blessings. It is the most peaceful and spiritual place in the ashram.",
    tip: "Enter silently and keep your phone in silent mode."
  },
  {
    id: "meditation-hall",
    name: "Meditation Hall",
    type: "Silence Zone",
    short: "A calm area for deep meditation and spiritual practice.",
    details:
      "This hall is designed for group meditation, guided sessions, and silent reflection. It stays quiet throughout the day.",
    tip: "Avoid unnecessary movement during meditation."
  },
  {
    id: "library",
    name: "Spiritual Library",
    type: "Reading Area",
    short: "A collection of spiritual books, teachings, and guides.",
    details:
      "The library contains spiritual literature, Guruji’s teachings, and books on meditation, devotion, and philosophy.",
    tip: "Maintain silence and handle books carefully."
  },
  {
    id: "dining",
    name: "Dining / Prasadam Hall",
    type: "Seva Area",
    short: "Hall where prasadam and meals are served.",
    details:
      "Devotees gather here for prasadam. Volunteers help in serving, cleaning, and organizing the hall.",
    tip: "Take only as much food as needed."
  },
  {
    id: "garden",
    name: "Ashram Garden",
    type: "Nature Zone",
    short: "Peaceful area with flowers, greenery, and sitting spaces.",
    details:
      "A natural space for morning walks, light stretching, and peaceful reflection in nature.",
    tip: "Do not pluck flowers without permission."
  },
  {
    id: "rooms",
    name: "Devotee Rooms",
    type: "Stay Area",
    short: "Accommodation for visitors and devotees.",
    details:
      "Rooms are provided for visiting devotees. Cleanliness and discipline must be maintained at all times.",
    tip: "Switch off lights and fans when leaving the room."
  }
];

const ExploreAshram = () => {
  // ❌ old: useState(ZONES[0].id)
  // ✅ new: start with no selection
  const [activeZoneId, setActiveZoneId] = useState(null);
  const activeZone = ZONES.find((z) => z.id === activeZoneId) || null;

  return (
    <div className="explore-page">
      {/* Header */}
      <section className="explore-intro">
        <h1>📍Interactive Ashram Guide 📍</h1>
        <p>
          This interactive page helps you explore different areas of the ashram.
          Click on any point on the map or select a zone to see detailed
          information.
        </p>
      </section>

      <section className="explore-layout">
        {/* Visual Map */}
        <div className="explore-map-card">
          <h2>Ashram Layout</h2>
          <p className="map-sub">Click any zone to view details.</p>

          <div className="simple-map">
            {ZONES.map((zone, index) => (
              <button
                key={zone.id}
                className={`map-box ${
                  activeZoneId === zone.id ? "map-box-active" : ""
                }`}
                onClick={() => setActiveZoneId(zone.id)}
                style={{ gridArea: `z${index + 1}` }}
              >
                {zone.name}
              </button>
            ))}
          </div>
        </div>

        {/* Information */}
        <div className="explore-info-card">
          <h2>Zone Details</h2>

          <div className="zone-tabs">
            {ZONES.map((zone) => (
              <button
                key={zone.id}
                className={`zone-tab ${
                  activeZoneId === zone.id ? "zone-tab-active" : ""
                }`}
                onClick={() => setActiveZoneId(zone.id)}
              >
                {zone.name}
              </button>
            ))}
          </div>

          {/* Show message when nothing selected */}
          {!activeZone && (
            <div className="zone-placeholder">
              <p>👆 Please select a zone from the map or tabs to view details.</p>
            </div>
          )}

          {/* Show details only after selection */}
          {activeZone && (
            <div className="zone-details">
              <h3>{activeZone.name}</h3>
              <p className="zone-type-chip">{activeZone.type}</p>

              <p className="zone-short">{activeZone.short}</p>

              <div className="zone-card">
                <h4>About</h4>
                <p>{activeZone.details}</p>
              </div>

              <div className="zone-card zone-tip">
                <h4>Tip</h4>
                <p>{activeZone.tip}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ExploreAshram;
