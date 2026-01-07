import "./Maintenance.css";

export default function Maintenance() {
  return (
    <div className="maintenance-page">
      <h1>🚧 Site Under Maintenance</h1>
      <p>
        We are performing scheduled maintenance.<br />
        The website will resume shortly.
      </p>
      <p className="resume-text">
        Please visit again after <strong>05:00 AM</strong>
      </p>
    </div>
  );
}
