import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const USER_CONSENT_COOKIE_KEY = "cookie_consent_is_true";
const USER_CONSENT_COOKIE_EXPIRE_DATE = 365;

const CookieConsent = () => {
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true);

  useEffect(() => {
    const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === "true";
    setCookieConsentIsTrue(consentIsTrue);
  }, []);

  const onClick = (e) => {
    e.preventDefault();

    if (!cookieConsentIsTrue) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, "true", {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      });
      setCookieConsentIsTrue(true);
    }
  };

  if (cookieConsentIsTrue) {
    return null;
  }

  return (
    <div>
      <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
        <div className="fixed bottom-0 left-0 right-0 md:flex items-center md:justify-between px-10  md:px-20 py-8 bg-gray-100 transition ease-in duration-200 hover:animate-pulse ">
          <div className="flex-col md:mr-20">
            <span className="text-dark text-sm text-justify">
              This website stores cookies on your computer. We use cookies to
              improve your browsing experience by remembering your preferences
              and for analytics and metrics about our visitors both on this
              website and other media. By clicking “Accept”, you consent to the
              use of ALL the cookies. To find out more about the cookies we use,
              see our{" "}
              <a class="" href="/cookie-policy">
                Cookie Policy.
              </a>{" "}
              You acknowledge that you have read and understand our{" "}
              <a href="/service-terms">Terms of Use </a>{" "}
            </span>
          </div>
          <div className="flex-col mt-4 md:mt-0 md:mr-5">
            <button
              className="bg-blue-600 hover:bg-blue-500 text-base font-semibold py-2 px-4 rounded text-white"
              onClick={onClick}
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
