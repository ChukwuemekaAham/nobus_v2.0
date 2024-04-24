import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieAccept = () => {
  return (
    <CookieConsent
      enableDeclineButton
      flipButtons
      location="bottom"
      buttonText="Agree"
      declineButtonText="Decline"
      cookieName="YourCoockieName"
      style={{ background: '#2563eb' }}
      buttonStyle={{
        background: 'white',
        color: '#000',
        fontSize: '15px',
        fontWeight: 'medium',
        borderRadius: '15px',
      }}
      declineButtonStyle={{
        background: 'white',
        color: '#000',
        fontSize: '15px',
        margin: '10px 10px 10px 0',
        fontWeight: 'medium',
        borderRadius: '15px',
      }}
      expires={150}
    >
   
    <span className="text-dark text-sm text-justify">
      This website stores cookies on your computer. We use cookies to
      improve your browsing experience by remembering your preferences
      and for analytics and metrics about our visitors both on this
      website and other media. By clicking “Accept”, you consent to the
      use of ALL the cookies. To find out more about the cookies we use,
      see our{" "}
      <a className="underline hover:text-white text-white font-semibold" href="/cookie-policy">
        Cookie Policy.
      </a>{" "}
      You acknowledge that you have read and understand our{" "}
      <a className='underline hover:text-white text-white font-semibold' href="/service-terms">Terms of Use </a>{" "}
    </span>
  
 
    </CookieConsent>
  );
};
export default CookieAccept;
