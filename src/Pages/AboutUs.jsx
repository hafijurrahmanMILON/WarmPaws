import React from "react";
import {
  FaHeart,
  FaUsers,
  FaStar,
  FaShieldAlt,
  FaHandsHelping,
} from "react-icons/fa";
import catWomen from "../assets/catWomen.png";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <div className=" text-primary py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-primary text-5xl md:text-6xl font-bold mb-6">
            About WarmPaws
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Keeping pets warm, safe, and happy during winter months since 2020
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-bold">
              <FaHeart className="text-amber-500" />
              <span>Our Mission</span>
            </div>
            <h2 className="font-primary text-3xl md:text-4xl font-bold text-neutral">
              Why We Started WarmPaws
            </h2>
            <p className="text-gray-600 text-lg">
              In the harsh winter of 2020, we noticed how many pets suffered
              from cold-related discomfort. That's when we decided to create
              WarmPaws - a specialized winter care service dedicated to keeping
              your furry friends warm, healthy, and happy during the coldest
              months.
            </p>
            <p className="text-gray-600 text-lg">
              Our team of certified veterinarians and pet care experts work
              tirelessly to develop seasonal care solutions that are safe,
              effective, and tailored to each pet's unique needs.
            </p>
          </div>

          <div className=" rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
            <div className="text-center text-amber-800">
              <img src={catWomen} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-primary text-3xl md:text-4xl font-bold text-neutral mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at WarmPaws
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-amber-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl text-amber-600" />
              </div>
              <h3 className="font-primary text-xl font-bold text-neutral mb-3">
                Compassionate Care
              </h3>
              <p className="text-gray-600">
                Every pet is treated with the same love and care we'd give our
                own
              </p>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl text-amber-600" />
              </div>
              <h3 className="font-primary text-xl font-bold text-neutral mb-3">
                Safety First
              </h3>
              <p className="text-gray-600">
                All our products and services meet the highest safety standards
              </p>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-2xl text-amber-600" />
              </div>
              <h3 className="font-primary text-xl font-bold text-neutral mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                We're committed to delivering exceptional service in every
                interaction
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-primary text-3xl md:text-4xl font-bold text-neutral mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Certified professionals dedicated to your pet's winter wellness
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-48 h-48 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="text-white text-center">
                <FaUsers className="text-4xl mx-auto mb-2" />
                <p className="text-sm">Dr. Sarah Johnson</p>
              </div>
            </div>
            <h4 className="font-bold text-lg text-neutral">
              Dr. Sarah Johnson
            </h4>
            <p className="text-gray-600 text-sm">Winter Care Specialist</p>
          </div>

          <div className="text-center">
            <div className="w-48 h-48 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="text-white text-center">
                <FaUsers className="text-4xl mx-auto mb-2" />
                <p className="text-sm">Dr. Michael Chen</p>
              </div>
            </div>
            <h4 className="font-bold text-lg text-neutral">Dr. Michael Chen</h4>
            <p className="text-gray-600 text-sm">
              Cold-Weather Nutrition Expert
            </p>
          </div>

          <div className="text-center">
            <div className="w-48 h-48 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="text-white text-center">
                <FaUsers className="text-4xl mx-auto mb-2" />
                <p className="text-sm">Dr. Emily Wilson</p>
              </div>
            </div>
            <h4 className="font-bold text-lg text-neutral">Dr. Emily Wilson</h4>
            <p className="text-gray-600 text-sm">Seasonal Pet Wellness</p>
          </div>

          <div className="text-center">
            <div className="w-48 h-48 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="text-white text-center">
                <FaUsers className="text-4xl mx-auto mb-2" />
                <p className="text-sm">Join Our Team</p>
              </div>
            </div>
            <h4 className="font-bold text-lg text-neutral">We're Hiring!</h4>
            <p className="text-gray-600 text-sm">Passionate about pet care?</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-amber-100">Pets Cared For</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-amber-100">Certified Experts</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-amber-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-amber-100">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-12 text-center text-white">
          <FaHandsHelping className="text-5xl mx-auto mb-6" />
          <h2 className="font-primary text-3xl md:text-4xl font-bold mb-4">
            Ready to Keep Your Pet Warm This Winter?
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of pet owners who trust WarmPaws for seasonal care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/service"
              className="px-8 py-3 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-amber-800 text-white font-bold rounded-lg hover:bg-amber-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
