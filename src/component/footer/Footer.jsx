import React from 'react';

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-800 text-white border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full md:w-1/2 lg:w-5/12 px-6 mb-6 md:mb-0">
            <div className="flex flex-col justify-between h-full">
              <p className="text-sm text-gray-400">
                &copy; 2023. All Rights Reserved by DevUI.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 px-6 mb-6 md:mb-0">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">Company</h3>
            <ul>
              <li className="mb-3">
                <div className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Features</div>
              </li>
              <li className="mb-3">
                <div className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Pricing</div>
              </li>
              <li className="mb-3">
                <div className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Affiliate Program</div>
              </li>
              <li>
                <div className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Press Kit</div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 px-6 mb-6 md:mb-0">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">Support</h3>
            <ul>
              <li className="mb-3">
                <div className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Account</div>
              </li>
              <li className="mb-3">
                <div className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Help</div>
              </li>
              <li className="mb-3">
                <div className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Contact Us</div>
              </li>
              <li>
                <div className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Customer Support</div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/12 px-6">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">Legals</h3>
            <ul>
              <li className="mb-3">
                <div className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Terms & Conditions</div>
              </li>
              <li className="mb-3">
                <div className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Privacy Policy</div>
              </li>
              <li>
                <div className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Licensing</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
