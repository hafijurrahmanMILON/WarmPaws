import React from "react";
import userIMG from "../assets/vetImage1.jpg";

const MyProfile = () => {
  return (
    <div className="min-h-full items-center justify-center p-6 mt-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-primary text-4xl font-bold text-primary mb-2">
            My Profile
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your personal information and preferences
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gradient-to-br from-amber-400 to-orange-500 p-8 flex flex-col items-center justify-center text-white">
              <div className="w-48 h-48 rounded-full bg-white bg-opacity-20 p-2 mb-6">
                <img
                  src={userIMG}
                  alt=""
                  className="w-full h-full rounded-full  flex items-center justify-center"
                />
              </div>
              <h2 className="text-2xl font-primary font-bold text-center">
                John Doe
              </h2>
              <p className="text-amber-100 text-center mt-2">WarmPaws Member</p>
            </div>

            <div className="md:w-2/3 p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-primary font-bold text-neutral mb-4">
                    Personal Information
                  </h3>

                  <div className="space-y-4">
                    {/* Name */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-amber-50 rounded-lg">
                      <div className="sm:w-1/3">
                        <span className="font-semibold text-gray-700">
                          Name :
                        </span>
                      </div>
                      <div className="sm:w-2/3">
                        <p className="text-gray-800">Hablu Mia</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-amber-50 rounded-lg">
                      <div className="sm:w-1/3">
                        <span className="font-semibold text-gray-700">
                          Email :
                        </span>
                      </div>
                      <div className="sm:w-2/3">
                        <p className="text-gray-800">hablu@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <button className="btn btn-primary text-white font-primary hover:bg-orange-600 px-8 py-3 text-lg">
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
