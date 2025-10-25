import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { Link } from "react-router";

const ResetPassword = () => {
  const { email, setEmail, resetPasswordFunc } = useContext(AuthContext);

  const handleResetPassword = (e) => {
    e.preventDefault();
    resetPasswordFunc(email)
      .then(() => {
        toast.success("Password reset email sent!");
        window.open("https://mail.google.com", "_blank");
        setEmail("");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4 md:p-0">
      <div className="max-w-xl rounded-2xl mx-auto  shadow-lg space-y-5 py-7">
        <div className="text-center w-3/5 mx-auto">
          <h1 className="font-primary text-3xl font-bold text-primary mb-2">
            Reset Password
          </h1>
          <p className="text-gray-600">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>
        <div className="mt-4">
          <form onSubmit={handleResetPassword} className="w-3/5 mx-auto">
            {/* email */}
            <div>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input focus:outline-none focus:ring-0 rounded-xl w-full bg-white border-orange-200"
                autoComplete="email"
                required
              />
            </div>
            <button
              type="submit"
              className="btn rounded-xl  text-white btn-block font-primary bg-gradient-to-br from-amber-400 to-orange-500 hover:opacity-90 transition text-lg py-3 mt-4"
            >
              Send Reset Link
            </button>
          </form>
        </div>
        <div className="text-center mt-3">
          <Link
            to="/login"
            className="text-primary font-semibold hover:text-orange-500"
          >
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
