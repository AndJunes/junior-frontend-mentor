import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
import iconUpload from '../../assets/images/icon-upload.svg';
import iconInfo from "../../assets/images/icon-info.svg";

const Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const avatar = watch("avatar");

  const removeImage = () => {
    setValue("avatar", null);
  };

  const changeImage = (e) => {
    document.getElementById("avatar-input").click();
  };

  // Función para manejar el drag and drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setValue("avatar", e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <main className="main">
      <div className="heading_container">
        <h2>Your Journey to Coding Conf <br/> 2025 Starts Here!</h2>
        <h3>Secure your spot at next year's biggest coding conference.</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Upload Avatar */}
        <div className="upload-wrapper">
          <label htmlFor="avatar-input">Upload Avatar</label>
          <div 
            id="drop-area" 
            className={`upload-card ${avatar && avatar.length > 0 ? "" : "dragover"}`}
            onClick={() => document.getElementById("avatar-input").click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="upload-img">
              {avatar && avatar.length > 0 ? (
                <img 
                  src={URL.createObjectURL(avatar[0])} 
                  alt="Preview" 
                  id="photo-preview" 
                />
              ) : (
                <img 
                  src={iconUpload}
                  alt="Upload button" 
                  id="upload-btn" 
                />
              )}
            </div>
            <div>
              <p className="upload-text">Drag and drop or click to upload</p>
              {avatar && avatar.length > 0 && (
                <div>
                  <button
                    type="button"
                    className="action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage();
                    }}
                  >
                    Remove image
                  </button>
                  <button
                    type="button"
                    className="action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      changeImage();
                    }}
                  >
                    Change image
                  </button>
                </div>
              )}
            </div>
            <input
              id="avatar-input"
              type="file"
              accept="image/jpeg, image/png"
              {...register("avatar", { required: "Avatar is required" })}
              style={{ display: "none" }}
            />
          </div>
          <div className="img-container">
            <img src={iconInfo} alt="Info Icon" />
            <p className="upload-note">Upload your photo (JPG or PNG, max size: 500KB)</p>
          </div>
          {errors.avatar && <p className="error info">{errors.avatar.message}</p>}
        </div>

        {/* Full Name */}
        <div className="input-container">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && <p className="error info">{errors.fullName.message}</p>}
        </div>

        {/* Email Address */}
        <div className="input-container">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="error info">{errors.email.message}</p>}
        </div>

        {/* GitHub Username */}
        <div className="input-container">
          <label htmlFor="github">GitHub Username</label>
          <input
            id="github"
            type="text"
            placeholder="@yourusername"
            {...register("github", { required: "GitHub username is required" })}
          />
          {errors.github && <p className="error info">{errors.github.message}</p>}
        </div>

        <div className="input-container">
          <button type="submit" className="submit-btn">
            Generate My Ticket
          </button>
        </div>
      </form>
    </main>
  );
};

export default Form;