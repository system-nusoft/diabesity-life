export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-10">
            {/* Information Gathered */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Information that is gathered from visitors
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In common with other websites, log files are stored on the web
                server saving details such as the visitor&apos;s IP address,
                browser type, referring page and time of visit. Cookies may be
                used to remember visitor preferences when interacting with the
                website. Where registration is required, the visitor&apos;s
                email, and a username will be stored on the server.
              </p>
            </div>

            {/* How Information is Used */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                How the Information is used
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The information is used to enhance the visitor&apos;s experience
                when using the website to display personalized content and
                possibly advertising. E-mail addresses will not be sold, rented
                or leased to 3rd parties. E-mail may be sent to inform you of
                news of our services or offers by us or our affiliates.
              </p>
            </div>

            {/* Visitor Options */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Visitor Options
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have subscribed to one of our services, you may
                unsubscribe by following the instructions which are included in
                the email that you receive. You may be able to block cookies via
                your browser settings but this may prevent you from access to
                certain features of the website.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small digital signature files that are stored by
                your web browser that allow your preferences to be recorded when
                visiting the website. Also, they may be used to track your
                return visits to the website. 3rd party advertising companies
                may also use cookies for tracking purposes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
