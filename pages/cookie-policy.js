import Head from "next/head";
import Footer from "../components/Footer1";
import Header from "../components/Header";

function cookiepolicy() {
  return (
    <section>
      <Head>
        <title>Nobus | Cookie Policy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="px-10 md:px-20 py-5">
        <div class="my-10">
          <h1 class="text-3xl md:text-4xl lg:text-5xl">NCS Cookie Policy</h1>

          <div
            class="col pl-3 ml-1 border-l-2 border-l-blue-600 mt-4"
            id="doc-bd"
          >
            <h6 class="py-2">Last Updated: December 10, 2022</h6>
          </div>
        </div>

        <div class="">
          <p className="pb-4">
            {" "}
            This Cookie Policy describes how Nobus Cloud Services (NCS) collect
            and use your personal information in relation to NCS websites,
            applications, products, services, events, and promotions that
            reference this Cookie Policy (together, “NCS Services”).
          </p>

          <div class="pb-10">
            <div class="">
              <h5 class="font-semibold text-xl py-4 ">
                How does Nobus use cookies?
              </h5>
              <p class="">
                A cookie is a small piece of text that allows a website to
                recognize your device and maintain a consistent, cohesive
                experience throughout multiple sessions. If you use the Nobus
                Network, both Nobus and third parties will use cookies to track
                and monitor some of your activities on and off the Nobus
                Network, and store and access some data about you, your browsing
                history, and your usage of the Nobus Network.
              </p>
              <p class="">
                This policy describes how both Nobus and other third parties use
                cookies both within and without the Nobus Network and how you
                can exercise a greater degree of control over cookies. Please
                keep in mind that this may alter your experience with our
                platform, and may limit certain features (including being logged
                in as a user).
              </p>
              <p class="">
                <span class="font-semibold ">General Browsing:</span> We use
                cookies that are important for certain technical features of our
                website, like logging into user accounts and implementing fixes
                and improvements to our platform.
              </p>
              <p class="">These cookies:</p>
              <ul class="pl-5">
                <li class="">
                  - Enable behavior in our Products and/or Services that is
                  tailored to the activity or preferences of a person visiting
                  our properties
                </li>
                <li class="">
                  - Allow users to opt out of certain types of modeling,
                  tailoring, or personalization in our products
                </li>
                <li class="">
                  - Collect information on our users’ preferences in order to
                  create more useful products
                </li>
                <li class="">
                  - Maintain the regular business operations of our Advertising
                  and Marketing departments (such as one-time pop-ups or “hero”
                  displays when first visiting a site and to collect impressions
                  and click data)
                </li>
                <li class="">
                  - Help to diagnose and correct downtime, bugs, and errors in
                  our code to ensure that our products are operating efficiently
                </li>
              </ul>
              <p class="">
                <span class="font-semibold ">Public Q&amp;A Platform:</span> We
                use cookies that support and enhance our public Q&amp;A platform
                by enabling important functionality. Such activity includes
                tracking and attributing activities and badges.
              </p>
              <p class="">These cookies:</p>
              <ul class="pl-5">
                <li class="">
                  - Validate the authenticity of persons attempting to gain
                  access to a specific user account
                </li>
                <li class="">
                  - Enable the core platform of community-generated questions
                  and answers, including diagnosing and resolving issues within
                  our Q&amp;A platform
                </li>
              </ul>

              <p class="">
                <span class="font-semibold ">Analytics:</span> We use cookies to
                compile usage activity in order to better cater our Products and
                Services offerings to you, and to third parties. We DO NOT share
                identifiable “raw” data with our clients or any third parties,
                however we do make high-level decisions based on aggregated data
                about your usage of our Products and Services. These cookies
                monitor site traffic and behavior flows of users.
              </p>
            </div>

            <div class="">
              <h5 class="font-semibold text-xl py-4 ">
                What information is collected on me via cookies?
              </h5>
              <p class="">
                In general, we collect most data from you via form submission.
                However, there are cases when visiting our site and/or using our
                platforms in which we may receive certain information through
                the use of cookies. This data will generally not include
                personally identifying information about you.
              </p>
              <ul class="pl-5">
                <li class="">- Unique identification tokens</li>
                <li class="">
                  - User preferences such as favorite tags (for anonymous users
                  only)
                </li>
              </ul>
              <h6 class="">Third Party Cookies</h6>
              <p class="">
                The use of cookies, the names of cookies, and other cookies
                related cookies technology may change over time and Nobus will
                make all reasonable efforts to notify you by updating our
                cookies table where material changes occur and from
                time-to-time. Please also note that companies and other
                organization that sponsor pages on Nobus may use cookies or
                other technologies to learn more about your interest in their
                products and services and in some cases to tailor such products
                and services to you.
              </p>
            </div>

            <div class="">
              <h5 class="font-semibold text-xl py-4 ">
                How do I restrict cookies?
              </h5>

              <p class="">
                If you decide that you do not want cookies to be set on your
                device by our third-party Partners, you can adjust the settings
                on your internet browser and choose from the available Cookies
                setting to best meet your preferences. While setting options may
                vary from browser to browser, you can generally choose to reject
                some or all cookies, or instead to receive a notification when a
                cookie is being placed on your device. For more information,
                please refer to the user help information for your browser of
                choice. Please keep in mind that cookies may be required for
                certain functionalities, and by blocking these cookies, you may
                limit your access to certain parts or features of our sites and
                platforms.
              </p>
              <p class="">
                Finally, while cookies are set for varying durations on your
                device, you can manually delete them at any time. However,
                deleting cookies will not prevent the site from setting further
                cookies on your device unless you adjust the settings discussed
                above.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default cookiepolicy;
