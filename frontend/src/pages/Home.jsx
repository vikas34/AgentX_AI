import { signInWithPopup } from "firebase/auth";
import { googleProvider, auth } from "../../utils/firebase";
import api from "../../utils/axios";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/userSlice";

const Home = () => {
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  console.log(userData);
  const handleLogin = async (token) => {
    try {
      const { data } = await api.post("/api/auth/login", { token });
      // console.log(data);
      dispatch(setUserData(data))
    
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
      const token = await data.user.getIdToken();

      console.log(token);
      await handleLogin(token);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex bg-black text-white overflow-hidden">
      {!userData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="w-90 bg-[#11131a] border border-white/10 rounded-2xl p-7 shadow-2xl shadow-black/50">
            {/* Logo / Icon */}
            <div className="flex justify-center mb-5">
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <img src="/favicon.png" alt="AgentX AI" />
              </div>
            </div>

            {/* Heading */}
            <div className="text-center mb-7">
              <h2 className="text-xl font-semibold text-white tracking-tight">
                Welcome to AgentX - AI
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Sign in to continue to your AI workspace
              </p>
            </div>

            {/* Google Login */}
            <button
              onClick={googleLogin}
              className="
              group
              relative
              w-full
              h-12
              flex
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-white
              text-gray-800
              font-medium
              text-sm
              border
              border-gray-200
              shadow-lg
              shadow-black/20
              transition-all
              duration-200
              hover:bg-gray-50
              hover:shadow-xl
              hover:-translate-y-px
              active:translate-y-0
              cursor-pointer
            "
            >
              <FcGoogle
                size={20}
                className="transition-transform duration-200 group-hover:scale-110"
              />

              <span>Continue with Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="h-px flex-1 bg-white/10" />

              <span className="text-[11px] text-slate-500">SECURE LOGIN</span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Footer */}
            <p className="text-center text-[11px] leading-5 text-slate-500">
              By continuing, you agree to our{" "}
              <span className="text-slate-300 hover:text-white cursor-pointer">
                Terms
              </span>{" "}
              and{" "}
              <span className="text-slate-300 hover:text-white cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
