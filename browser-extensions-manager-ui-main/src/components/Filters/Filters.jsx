import React from "react";
import "./Filters.css";

export default function Filters({ filter, setFilter }) {
  return (
    <div className="filters-container">
      <h2 className="filters-title">Extensions List</h2>
      <div className="filters-buttons">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === "active" ? "active" : ""}`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`filter-btn ${filter === "inactive" ? "active" : ""}`}
          onClick={() => setFilter("inactive")}
        >
          Inactive
        </button>
      </div>
    </div>
  );
}