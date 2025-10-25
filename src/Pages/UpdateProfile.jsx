import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import userIMG from "../assets/user.png";

const UpdateProfile = () => {
  const { user, setUser, updateProfileFunc } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    updateProfileFunc(displayName, photoURL)
      .then(() => {
        setUser({ ...user, displayName, photoURL });
        toast.success("Profile updated successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        const errorCode = error.code;
        if (errorCode === "auth/invalid-profile-attribute") {
          toast.error("photo URL is too long");
        }
      });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
        <div className="text-center mb-8">
          <h1 className="font-primary text-4xl font-bold  mb-2 text-primary">
            Update Your Profile
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center mb-2">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-1 mb-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <img
                referrerPolicy="no-referrer"
                className="rounded-full w-full h-full object-cover"
                src={user?.photoURL || userIMG}
                alt=""
                onError={(e) => {
                  e.currentTarget.src = userIMG;
                }}
              />
            </div>
          </div>
          <p className="text-2xl font-bold text-primary">{user?.displayName}</p>
        </div>

        <form
          onSubmit={handleUpdateProfile}
          className="space-y-2 max-w-md mx-auto"
        >
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
          <button
            type="submit"
            className="btn btn-primary text-white font-primary hover:bg-linear-to-br from-amber-400 to-orange-500 w-full py-3 text-lg mt-2"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
