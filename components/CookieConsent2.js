import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = (e) => {
    e.preventDefault();
    setShowConsent(!showConsent);
    setCookie("localConsent", "true", {});
  };

  // if (showConsent) {
  //   return null;
  // }

  return (
    <div style={{ display: showConsent ? "block" : "none" }}>
      <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
        <div className="fixed bottom-0 left-0 right-0 md:flex items-center md:justify-between px-10  md:px-20 py-8 bg-gray-100 transition ease-in duration-200 hover:animate-pulse ">
          <div className="flex-col">
            <span className="text-dark text-base md:mr-16 text-justify">
              We use cookies on our website to give you the most relevant
              experience by remembering your preferences and repeat visits. By
              clicking “Accept”, you consent to the use of ALL the cookies.
            </span>
          </div>
          <div className="flex-col mt-4 md:mt-0">
            <button
              className="bg-blue-600 hover:bg-blue-500 text-base font-semibold py-2 px-4 rounded text-white"
              onClick={acceptCookie}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
