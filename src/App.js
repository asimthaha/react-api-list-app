import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApiLogin from "./components/ApiLogin";
import ApiView from "./components/ApiView";
import ApiAdd from "./components/ApiAdd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ApiLogin />}></Route>
        <Route path="add" element={<ApiAdd />}></Route>
        {/* <Route path="search" element={<EmployeeSearch />}></Route>
        <Route path="delete" element={<EmployeeDelete />}></Route> */}
        <Route path="view" element={<ApiView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
