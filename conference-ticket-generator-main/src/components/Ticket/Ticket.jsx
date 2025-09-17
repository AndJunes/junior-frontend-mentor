import React from "react";
import "./Ticket.css";
import logoSvg from "../../assets/images/logo-full.svg";
import githubIcon from "../../assets/images/icon-github.svg";

const Ticket = ({ fullName, avatar, github }) => {
  // Generar un número de ticket aleatorio de 5 dígitos
  const generateRandomTicketNumber = () => {
    return Math.floor(Math.random() * 90000) + 10000;
  };

  const ticketNumber = generateRandomTicketNumber();
  

  return (
    <div className="ticket-container">
      <div className="logo">
        <img src={logoSvg} alt="Coding Conf Logo" />
      </div>
      <p className="date">Jan 31, 2025 / Austin, TX</p>

      <div className="ticket-user">
        <img 
          id="display-image" 
          src={avatar && avatar[0] ? URL.createObjectURL(avatar[0]) : ""} 
          alt="User avatar" 
        />
        <div className="user-info">
          <span id="display-name">{fullName || "Attendee Name"}</span>
          <div className="github-username">
            <img src={githubIcon} alt="GitHub icon" />
            <span id="display-github">{github ? `${github}` : "@username"}</span>
          </div>
        </div>
      </div>

      <p className="ticket-number">#{ticketNumber}</p>
    </div>
  );
};

export default Ticket;