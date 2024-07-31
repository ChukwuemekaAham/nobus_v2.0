const Secure = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-8 mb-8">
      <div className="mx-auto max-w-2xl lg:mx-auto lg:flex lg:max-w-none lg:justify-center lg:px-28">
        <div className="lg:p-8 lg:flex-auto relative">
          <div className="relative h-96 sm:h-[500px] sm:w-full lg:h-96 rounded-2xl overflow-hidden">
            <img
              src="/secureplaform.png"
              alt="Background"
              className="w-full h-full object-cover rounded-2xl sm:object-contain sm:w-full"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:h-full">
              <h2 className="lg:text-3xl text-2xl font-bold text-green-500 mb-4 lg:-mt-32 sm:-mt-2">
                Secure platform, <span className="text-white">Protected data.</span>
              </h2>
              <p className="text-lg lg:mb-12 sm:text-xs sm:mb-3">
                We are constantly improving our compliance, audit, and security with you in mind.
              </p>
              <div className="flex space-x-4">
                <img src="/pci-logo.png" alt="PCI Logo" width={100} height={100} className="object-contain border-2 border-[#03A731] rounded-full bg-white p-1" />
                <img src="/iso-logo.png" alt="ISO Logo" width={70} height={70} className="object-contain" />
                <img src="/npdr-logo.png" alt="NPDR Logo" width={100} height={100} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secure;
