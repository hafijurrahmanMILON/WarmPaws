import React, { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { loginFunc, setUser, googleSignIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const location = useLocation();
  console.log(location);
  const from = location.state || "/";
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({ email, password });
    loginFunc(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("SignIn Successful");
        setUser(result.user);
        navigate(from);
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === "auth/invalid-email") {
          toast.error("Invalid email format. Please check and try again.");
        } else if (errorCode === "auth/user-disabled") {
          toast.error(
            "This account has been disabled. Contact support for help."
          );
        } else if (errorCode === "auth/user-not-found") {
          toast.error("No account found with this email.");
        } else if (errorCode === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (errorCode === "auth/too-many-requests") {
          toast.error("Too many attempts. Please wait and try again later.");
        } else if (errorCode === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else {
          toast.error("Sign-in failed. Please try again.");
        }
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Google SignIn Successful");
        setUser(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 hidden md:block bg-gradient-to-br from-amber-400 to-orange-500 p-12 text-white">
            <div className="h-full flex flex-col justify-center">
              <h1 className="font-primary text-4xl font-bold mb-6">
                Welcome Back to WarmPaws
              </h1>
              <p className="text-amber-100 text-lg leading-relaxed">
                Continue your journey in providing the best winter care for your
                furry friends. Access personalized services, expert
                consultations, and seasonal care tips.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Personalized pet care services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Expert winter care guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Seasonal wellness tracking</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12">
            <div className="max-w-md mx-auto">
              <h2 className="font-primary text-3xl font-bold  mb-2 text-primary">
                Login to Your Account
              </h2>

              <form onSubmit={handleLogIn} className="space-y-4 mt-5">
                {/* email */}
                <div>
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input w-full bg-white border-orange-200 focus:border-0"
                    autoComplete="email"
                    required
                  />
                </div>
                {/* password */}
                <div className="relative">
                  <label>Password</label>
                  <input
                    type={show ? `text` : `password`}
                    name="password"
                    placeholder="Enter your password"
                    className="input w-full bg-white border-orange-200 focus:border-0"
                    autocomplete="new-password"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute bottom-3 right-3.5 z-10 hover:cursor-pointer"
                  >
                    {show ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </span>
                </div>

                <div className="text-right">
                  <a className="text-sm text-primary hover:underline hover:cursor-pointer">
                    Forgot your password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary text-white btn-block font-primary hover:bg-orange-600 text-lg py-3"
                >
                  Login
                </button>
              </form>

              <div className="divider text-gray-500 text-sm">OR</div>

              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline w-full border-gray-300 hover:bg-gray-50 text-gray-700"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>

              <div className="text-center mt-6">
                <span className="text-gray-600">Don't have an account? </span>
                <Link
                  to="/signup"
                  className="text-primary font-semibold hover:underline hover:cursor-pointer"
                >
                  Sign up here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
