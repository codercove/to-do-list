import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewItem from "./components/NewItem";
import Dashboard from "./Dashboard";
import ErrorPage from "./404";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />}></Route>
        <Route path="new" element={<NewItem />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
