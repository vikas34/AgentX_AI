import { useEffect } from "react";
import Home from "./pages/Home";
import getCurrentUser from "./features/getCurrentUser.js";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUSer = async () => {
      const data = await getCurrentUser();
      dispatch(setUserData(data));
    };
    getUSer();
  }, [dispatch]);
  return (
    <>
      <Home />
    </>
  );
};

export default App;
