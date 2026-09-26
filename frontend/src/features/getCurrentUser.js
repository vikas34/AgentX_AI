import api from "../../utils/axios.js";

const getCurrentUser = async () => {
  try {
    const { data } = await api.get("/api/user");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default getCurrentUser;
