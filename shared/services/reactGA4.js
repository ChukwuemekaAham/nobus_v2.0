import ga4 from "react-ga4";

const TRACKING_ID = process.env.TRACKING_ID;

export const init = () => {
  ga4.initialize(TRACKING_ID);
};

export const sendEvent = (category, action) => {
  ga4.event({
    category: category,
    action: action,
  });
};

export const sendPageView = (path) => {
  ga4.send({
    hitType: "pageview",
    page: path,
  });
};
