import React from "react";
import toast from "react-hot-toast";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent!");
    e.target.reset();
  };

  return (
    <div className="min-h-screen  py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-primary text-4xl md:text-5xl font-bold text-neutral mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about winter care for your pets? Our team is here to
            help you keep your furry friends warm and healthy.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-primary text-primary font-bold mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="label">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input w-full input-bordered bg-white focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="label">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input w-full input-bordered bg-white focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="label">Subject</label>
                  <input
                    type="text"
                    placeholder="What is this regarding?"
                    className="input w-full input-bordered bg-white focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="label">Your Message</label>
                  <textarea
                    className="textarea w-full textarea-bordered bg-white focus:border-primary h-40"
                    placeholder="Tell us how we can help..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary text-white font-primary hover:bg-orange-600 w-full py-3 text-lg flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-primary font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone Number</h3>
                    <p className="text-amber-100">+1 (555) 123-4567</p>
                    <p className="text-sm text-amber-200 mt-1">
                      Mon-Fri, 9am-6pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Address</h3>
                    <p className="text-amber-100">support@warmpaws.com</p>
                    <p className="text-sm text-amber-200 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-amber-100">123 Pet Care Avenue</p>
                    <p className="text-amber-100">New York, NY 10001</p>
                    <p className="text-sm text-amber-200 mt-1">
                      Visit our winter care center
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Operating Hours</h3>
                    <p className="text-amber-100">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-amber-100">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-amber-100">
                      Sunday: Emergency calls only
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white/10 rounded-xl p-4">
                <p className="text-center font-semibold">
                  🚨 For pet emergencies, call (555) 911-PETS
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-primary font-bold text-neutral mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-primary">
                What services do you offer?
              </h3>
              <p className="text-gray-600">
                We provide winter-specific pet care including coat fittings,
                grooming, nutrition planning, and emergency consultations.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-primary">
                Do you offer home visits?
              </h3>
              <p className="text-gray-600">
                Yes, we provide home visits for pets who are more comfortable in
                their own environment during cold weather.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-primary">
                How do I book an appointment?
              </h3>
              <p className="text-gray-600">
                You can book through our website, call us directly, or use our
                mobile app for instant booking.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-primary">
                What if my pet needs emergency care?
              </h3>
              <p className="text-gray-600">
                Call our emergency hotline (555) 911-PETS for immediate
                assistance, available 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
