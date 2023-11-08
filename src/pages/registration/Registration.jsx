import { useEffect, useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [preview, setPreview] = useState("");
  const [photo, setPhoto] = useState();
  useEffect(() => {
    if (!photo) {
      setPreview("");
      return;
    }

    setPreview(photo);
  }, [photo]);

  const getBase64 = (file) => {
    if (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem("image", photo);
    localStorage.setItem("name", name);
    navigate("/form", { replace: true });
  };
  return (
    <div className="registration_background">
      <form className="registration_container" onSubmit={handleClick}>
        <h3>Get Started</h3>
        <label htmlFor="photo">add a photo</label>
        <div className="registration_imageIcon">
          <label htmlFor="photo">
            <img
              src={
                preview
                  ? preview
                  : "assets\\add_a_photo_FILL0_wght400_GRAD0_opsz48 1.png"
              }
              alt=""
              id={preview ? "preview" : null}
            />
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) =>
              getBase64(e.target.files[0]).then((base64) => setPhoto(base64))
            }
          />
        </div>
        <label htmlFor="name">fill in your name</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name && photo ? (
          <button type="submit">Sign in</button>
        ) : (
          <button disabled>Sign in</button>
        )}
      </form>
    </div>
  );
}

export default Registration;
