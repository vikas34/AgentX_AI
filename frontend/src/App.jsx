import { useEffect } from "react";
import Home from "./pages/Home";
import getCurrentUser from "./features/getCurrentUser.js";

const App = () => {
  useEffect(() => {
    const getUSer = async () => {
      await getCurrentUser();
    };
    getUSer();
  }, []);
  return (
    <>
      <Home />
    </>
  );
};

export default App;
