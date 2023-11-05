import { useEffect, useState } from "react";

function Form() {
  const [photo, setPhoto] = useState();
  useEffect(() => {
    const newPhoto = localStorage.getItem("image");
    setPhoto(newPhoto);
  }, []);
  return (
    <div>
      <img src={photo} alt="" />
    </div>
  );
}

export default Form;
