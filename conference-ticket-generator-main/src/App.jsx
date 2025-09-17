import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Ticket from "./components/Ticket/Ticket";

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="app-container">
      {formData ? (
        <div>
          <br/><br/>
          <div className="heading_container">
            <h2>Congrats, <span className="app-span">{formData.fullName}</span>! <br/> Your ticket is ready.</h2>
            <h3 className="app-h3">
              We've emailed your ticket to <br/>
              <span className="app-span-h3"> {formData.email} </span>
              and will send updates in <br/> the run up to the event.
            </h3>
          </div>
          <Ticket 
            fullName={formData.fullName}
            avatar={formData.avatar}
            github={formData.github}
          />
        </div>
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;