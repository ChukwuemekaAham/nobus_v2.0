import Head from "next/head";
import Footer from "../components/Footer1";
import Header from "../components/Header";

function sla() {
  return (
    <section>
      <Head>
        <title>Nobus | Service Level Agreements</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="px-10 md:px-20 py-5">
        <div className="my-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            Nobus Service Level Agreements
          </h1>

          <div
            className="col pl-3 ml-1 border-l-2 border-l-blue-600 mt-4"
            id="doc-bd"
          >
            <h6 className="py-2">Last Updated: October 17, 2020</h6>
          </div>
        </div>

        <div className="py-2">
          <p>
            The Nobus Compute Service Level Agreement (this “SLA”) is a policy
            governing the use of the Included Services (listed below) and
            applies separately to each account using the Included Services. In
            the event of a conflict between the terms of this SLA and the terms
            of the{" "}
            <a href="/agreement/" target="_blank">
              Nobus Customer Agreement
            </a>{" "}
            or other agreement with us governing your use of our Services (the
            “Agreement”), the terms and conditions of this SLA apply, but only
            to the extent of such conflict. Capitalized terms used herein but
            not defined herein shall have the meanings set forth in the
            Agreement. &nbsp;
          </p>

          <div>
            <div>
              <h1 id="Included_Services" className="font-semibold text-xl py-3">
                {" "}
                Included Services
              </h1>
              <div className="space-y-2">
                <p>• Nobus Flexible Compute Cloud (Nobus FCS)*</p>
                <p>• Nobus Flexible Block Storage (Nobus FBS)</p>
                <p>• Nobus Flexible Object Storage (Nobus FOS)</p>
                <p>• Nobus Internet Connectivity Services </p>

                <p className="text-sm">
                  *For purposes of this SLA, Nobus FCS includes any resources
                  attached to the Nobus instances including IP Address
                  resources.{" "}
                </p>
              </div>
              <div class="py-2">
                *For purposes of this SLA, Nobus FCS includes any Nobus Flexible
                Graphics, Nobus Flexible Inference, and Flexible IP Address
                resources purchased with the relevant Nobus FCS instance(s).
              </div>
            </div>

            <div>
              <h1
                id="General_Service_Commitment"
                class="font-semibold text-xl py-3"
              >
                General Service Commitment
              </h1>

              <p>
                Nobus will use commercially reasonable efforts to make the
                Included Services available with a Monthly Uptime Percentage of
                at least 99.98%, in each case during any monthly billing cycle
                (the “Service Commitment”). In the event any of the Included
                Services do not meet the Service Commitment, you will be
                eligible to receive a Service Credit as described below.{" "}
              </p>
            </div>

            <div>
              <h1 id="Service_Credits" class="font-semibold text-xl py-3">
                {" "}
                Service Credits
              </h1>

              <p>
                Service Credits are calculated as a percentage of the total
                charges paid by you (excluding one-time payments such as upfront
                payments paid for implementation or managed services) for the
                individual Included Service in the affected Nobus region for the
                monthly billing cycle in which the Unavailability occurred in
                accordance with the schedule below.
              </p>

              <div class="py-4">
                <table class="table-auto text-left">
                  <thead className="border-b">
                    <tr>
                      <th>
                        <p className="font-semibold">
                          Monthly Uptime Percentage
                        </p>
                      </th>
                      <th>
                        <p className="font-semibold">
                          Service Credit Percentage
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td>
                        <p className="py-2 pr-5">
                          Less than 99.98% but equal to or greater than 99.0%
                        </p>
                      </td>
                      <td>
                        {" "}
                        <p className="py-2">10% </p>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td>
                        <p className="py-2 pr-5">
                          Less than 99.0% but equal to or greater than 95.0%
                        </p>{" "}
                      </td>
                      <td>
                        <p className="py-2">30%</p>{" "}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td>
                        <p className="py-2 pr-5">Less than 95.0%</p>{" "}
                      </td>
                      <td>
                        <p className="py-2">100%</p>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  {" "}
                  We will apply any Service Credits only against future payments
                  for the applicable Included Service otherwise due from you. At
                  our discretion, we may issue the Service Credit to the credit
                  card you used to pay for the billing cycle in which the
                  Unavailability occurred. Service Credits will not entitle you
                  to any refund or other payment from NCS. Service Credits may
                  not be transferred or applied to any other account. &nbsp;
                </p>
              </div>
            </div>

            <div>
              <h4
                id="Credit_Request_and_Payment_Procedures_"
                class="font-semibold text-xl py-3"
              >
                {" "}
                Credit Request and Payment Procedures{" "}
              </h4>
              <div class="py-2">
                <p>
                  To receive a Service Credit, you must submit a claim by
                  opening a case in the NCS Support Center. To be eligible, the
                  credit request must be received by us by the end of the second
                  billing cycle after which the incident occurred and must
                  include:
                </p>
                <div className="pl-4">
                  <p>
                    1. the words “NCS SLA Credit Request” in the subject line;
                  </p>
                  <p>
                    2. the dates, times, and affected NCS region of each
                    Unavailability incident that you are claiming;{" "}
                  </p>
                  <p>
                    3. the resource IDs for the affected Included Service ; and
                  </p>
                  <p>
                    4. your request logs that document the errors and
                    corroborate your claimed outage (any confidential or
                    sensitive information in these logs should be removed or
                    replaced with asterisks).{" "}
                  </p>
                </div>

                <p>
                  If the Monthly Uptime Percentage of such request is confirmed
                  by us and is less than the Service Commitment, then we will
                  issue the Service Credit to you within one billing cycle
                  following the month in which your request is confirmed by us.
                  Your failure to provide the request and other information as
                  required above will disqualify you from receiving a Service
                  Credit. Unless otherwise provided in the Agreement, this SLA
                  sets forth your sole and exclusive remedies, and NCS’ sole and
                  exclusive obligations, for any unavailability,
                  non-performance, or other failure by us to provide the
                  Included Services.
                </p>
              </div>
            </div>

            <div>
              <h4
                id="Nobus_Compute_SLA_Exclusions"
                class="font-semibold text-xl py-3"
              >
                {" "}
                Nobus Compute SLA Exclusions
              </h4>

              <p>
                {" "}
                The Service Commitment and Hourly Commitment do not apply to any
                unavailability, suspension or termination an Included Service,
                or any other Included Service performance issues: (i) caused by
                factors outside of our reasonable control, including any force
                majeure event or Internet submarine cable failure or related
                problems beyond the demarcation point of the applicable Included
                Service; (ii) that result from any actions or inactions of you
                or any third party, including failure to acknowledge a recovery
                volume; (iii) that result from your equipment, software or other
                technology and/or third party equipment, software or other
                technology (other than third party equipment within our direct
                control); or (iv) arising from our suspension or termination of
                your right to use the applicable Included Service in accordance
                with the Agreement (collectively, the “Nobus Compute SLA
                Exclusions”). If availability is impacted by factors other than
                those used in our Monthly Uptime Percentage calculation, then we
                may issue a Service Credit considering such factors at our
                discretion.{" "}
              </p>
            </div>

            <div>
              <h4 id="Definitions" class="font-semibold text-xl py-3">
                {" "}
                Definitions
              </h4>
              <div class="py-2">
                <p>
                  • "Availability Zone" and "AZ" mean an isolated location
                  within a NCS region identified by a letter identifier
                  following the NCS region code (e.g., nobus-wa-az1).
                </p>

                <p>
                  • "Monthly Uptime Percentage" is calculated by subtracting
                  from 100% the percentage of minutes during the month in which
                  any of the Included Services, as applicable, was in the state
                  of Unavailability. Monthly Uptime Percentage measurements
                  exclude Unavailability resulting directly or indirectly from
                  any Nobus Compute SLA Exclusion.
                </p>

                <p>
                  • A "Service Credit" is a Naira or dollar credit, calculated
                  as set forth above, that we may credit back to an eligible
                  account or credit/debit card.
                </p>
                <p>• "Unavailable" and "Unavailability" mean:</p>
                <div class="pl-4">
                  • For Single FCS Instances, when your Single FCS Instance has
                  no external connectivity.
                </div>
                <div class="pl-4">
                  • For Nobus FCS (other than Single FCS Instances), Nobus FCS,
                  when all of your running instances or running tasks, as
                  applicable, deployed in two or more AZs in the same NCS region
                  (or, if there is only one AZ in the NCS region, that AZ and an
                  AZ in another NCS region) concurrently have no external
                  connectivity.
                </div>
                <div class="pl-4">
                  • For Nobus FBS, when all of your attached volumes deployed in
                  two or more AZs in the same NCS region (or, if there is only
                  one AZ in the NCS region, that AZ and an AZ in another NCS
                  region) perform zero read write IO, with pending IO in the
                  queue.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default sla;
