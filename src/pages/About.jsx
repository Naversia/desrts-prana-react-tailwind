import React from "react";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import desertImage from "../assets/desertPranaZola.jpg";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <Hero2
        image={desertImage}
        title="About Desert's Prana"
        subtitle="Oasis in the middle of the desert"
      />
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-12 pb-24">
            <div className="max-w-3xl mx-auto text-center pb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Desert's Prana
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Discover the ultimate destination for health and wellness in the
                heart of the desert.
              </p>
            </div>
            <div className="max-w-3xl mx-auto flex flex-wrap justify-center items-start">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-gray-900">Yoga</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Our yoga classes are suitable for all levels, from
                      beginners to experienced practitioners. We offer a variety
                      of styles, including Hatha, Vinyasa, and Restorative yoga.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-gray-900">
                      Acupuncture
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Acupuncture is a traditional Chinese medicine technique
                      that involves the insertion of fine needles into specific
                      points on the body. It is used to promote healing, relieve
                      pain, and reduce stress and anxiety.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-gray-900">
                      Shiatsu
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Shiatsu is a Japanese massage technique that involves
                      applying pressure to specific points on the body to
                      stimulate energy flow and promote healing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-gray-900">
                      Cupping
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Cupping is a traditional Chinese medicine technique that
                      involves placing suction cups on the skin to promote
                      circulation and relieve pain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
