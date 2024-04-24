import { useRouter } from "next/router";
import * as analytics from "../shared/services/reactGA4";

function useAnalytics() {
  const location = useRouter();

  React.useEffect(() => {
    analytics.init();
  }, []);

  React.useEffect(() => {
    const path = location.pathname + location.search;
    analytics.sendPageView(path);
  }, [location]);
}

export default useAnalytics;
