import React from "react";
import Alldata from "../../data/data.json";
import "./Card.css";

export default function Card({ filter }) {
  const [data, setData] = React.useState(Alldata);
  
  // Filtrar datos según el filtro seleccionado
  const filteredData = data.filter(item => {
    if (filter === "all") return true;
    if (filter === "active") return item.isActive;
    if (filter === "inactive") return !item.isActive;
    return true;
  });

  // Función para manejar la eliminación de una extensión
  const handleRemove = (index, e) => {
    e.stopPropagation();
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  // Función para alternar el estado activo/inactivo
  const toggleActive = (index, e) => {
    e.stopPropagation();
    const newData = [...data];
    newData[index].isActive = !newData[index].isActive;
    setData(newData);
  };

  // Función para manejar errores de carga de imágenes
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    // Mostrar el placeholder
    const placeholder = e.target.nextElementSibling;
    if (placeholder && placeholder.classList.contains('card-logo-placeholder')) {
      placeholder.style.display = 'flex';
    }
  };

  const dataElements = filteredData.map((item, index) => (
    <div key={index} className="card-item">
      <div className="card-header-section">
        <img 
          src={item.logo} 
          alt={item.name}
          className="card-logo-img"
          onError={handleImageError}
        />
        <div className="card-logo-placeholder">
          {item.name.charAt(0)}
        </div>
        <div className="card-content-wrapper">
          <h2 className="card-title-text">{item.name}</h2>
          <p className="card-description-text">{item.description}</p>
        </div>
      </div>
      
      <div className="card-footer-section">
        <button 
          className="card-remove-btn"
          onClick={(e) => handleRemove(index, e)}
          aria-label="Eliminar extensión"
        >
          Remove
        </button>
        
        <label className="card-switch">
          <input 
            type="checkbox" 
            checked={item.isActive}
            onChange={(e) => toggleActive(index, e)}
          />
          <span className="card-slider"></span>
        </label>
      </div>
    </div>
  ));

  return (
    <div className="card-container">
      <div className="card-grid-container">
        {dataElements.length > 0 ? dataElements : <p className="no-results">No extensions found with the selected filter.</p>}
      </div>
    </div>
  );
}