import { Route, Routes } from "react-router-dom";
import { routesData } from "../common/constants/data";

const RoutesProvider = () => {
  return (
    <Routes>
      {routesData.map((route) => (
        <Route path={route?.path} element={<route.element />} />
      ))}
    </Routes>
  );
};

export default RoutesProvider;
