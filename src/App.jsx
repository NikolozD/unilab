import { BrowserRouter, Route, Routes } from "react-router-dom";

import Form from "./pages/form/Form";
import Landing from "./pages/landing/Landing";
import Registration from "./pages/registration/Registration";
import Api from "./pages/api/Api";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/form" element={<Form />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
