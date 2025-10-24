import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Signup = () => {
  const {
    setUser,
    createUserFunc,
    googleSignIn,
    updateProfileFunc,
    error,
    setError,
  } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({ name, photoURL, email, password });
    const regExPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regExPass.test(password)) {
      setError(true);
      return;
    }
    createUserFunc(email, password)
      .then((res) => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            const user = res.user;
            toast.success("Account created Successfully!");
            setUser({ ...user, displayName, photoURL });
            setError(false);
            navigate("/");
          })
          .catch((error) => {
            console.log(error.code);
            toast.error(error.code);
          });
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === "auth/email-already-in-use") {
          toast.error(
            "This email is already registered. Try signing in instead."
          );
        } else if (errorCode === "auth/invalid-email") {
          toast.error(
            "The email address is not valid. Please check and try again."
          );
        } else if (errorCode === "auth/weak-password") {
          toast.error(
            "Password is too weak. Use at least 6 characters with uppercase and lowercase letters."
          );
        } else if (errorCode === "auth/invalid-profile-attribute") {
          toast.error("photo URL is too long");
        } else if (errorCode === "auth/operation-not-allowed") {
          toast.error(
            "Email/password signup is currently disabled. Please contact support."
          );
        } else if (errorCode === "auth/network-request-failed") {
          toast.error(
            "Network error. Please check your internet connection and try again."
          );
        } else if (errorCode === "auth/internal-error") {
          toast.error(
            "Something went wrong on our end. Please try again later."
          );
        } else {
          toast.error("Signup failed. Please try again or contact support.");
        }
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Google SignIn Successful");
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="max-w-7xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 hidden md:block bg-gradient-to-br from-amber-400 to-orange-500 p-12 text-white">
            <div className="h-full flex flex-col justify-center">
              <h1 className="font-primary text-4xl font-bold mb-6">
                Join WarmPaws Family
              </h1>
              <p className="text-amber-100 text-lg leading-relaxed">
                Create your account and discover the best winter care services
                for your beloved pets. Get personalized recommendations and
                expert care tips.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Access exclusive winter care services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Book appointments with expert vets</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Track your pet's seasonal wellness</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full p-6 lg:p-12">
            <div className="max-w-md mx-auto">
              <h2 className="font-primary text-3xl font-bold text-primary mb-2">
                Create Account
              </h2>

              <form onSubmit={handleCreateUser} className="space-y-4">
                {/* Name */}
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input w-full bg-white border-orange-200 focus:border-0"
                    autoComplete="name"
                    // required
                  />
                </div>
                {/* photo */}
                <div>
                  <label>Photo URL</label>
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Enter your photoURL"
                    className="input w-full bg-white border-orange-200 focus:border-0"
                    autoComplete="photo"
                  />
                </div>
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
                    autoComplete="new-password"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute bottom-3 right-3.5 z-10 hover:cursor-pointer"
                  >
                    {show ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </span>
                </div>
                {error && (
                  <p className="text-sm text-red-600 font-light w-4/5">
                    Password must be at least 6 characters long and include both
                    uppercase and lowercase letters.
                  </p>
                )}
                <button
                  type="submit"
                  className="btn btn-primary text-white w-full font-primary hover:bg-gradient-to-br from-amber-400 to-orange-500 text-lg py-3 mt-3"
                >
                  Register
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
                <span className="text-gray-600">Already have an account? </span>
                <Link
                  to="/login"
                  className="text-primary font-semibold hover:underline hover:cursor-pointer"
                >
                  Login here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
