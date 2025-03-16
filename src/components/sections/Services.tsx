import Text from "../ui/Text";

const servicesData = {
  services: [
    {
      title: "Logo Design – Make Your Brand Unforgettable..",
      description: [
        "Custom, handcrafted designs that tell your story.",
        "Strategic color psychology for instant recognition.",
        "Versatile, high-resolution formats for every platform.",
      ],
    },
    {
      title: "Website Design – Your Digital Storefront, Built to Impress.",
      description: [
        "Custom, responsive website designs for all devices.",
        "Speed-optimized for better UX & SEO rankings.",
        "E-Commerce & landing page designs that drive conversions.",
      ],
    },
    {
      title: "Performance Marketing – Results That Matter.",
      description: [
        "Google Ads & Social Media Ads tailored for conversions.",
        "Amazon Ads & Flipkart Ads to maximize e-commerce sales.",
        "Hyper-targeted campaigns to reach your ideal audience.",
        "Real-time tracking & optimization for maximum ROI.",
        "Pay for performance, not just promises.",
      ],
    },
    {
      title: "Email Marketing – Engage. Convert. Grow.",
      description: [
        "Personalized, high-converting email campaigns",
        "Smart automation to nurture and retain customers.",
        "A/B testing for optimized engagement & sales.",
        "100% compliance – No spam, just results.",
      ],
    },
    {
      title: "SEO – Get Found. Stay Ahead. Dominate.",
      description: [
        "Custom keyword research for targeted traffic",
        "On-page & off-page optimization for sustainable rankings",
        "Local SEO to attract high-intent customers",
        "Technical SEO & speed optimization for a seamless user experience.",
      ],
    },
  ],
};

const Services = () => {
  return (
    <div
      id="services"
      className="w-full bg-[radial-gradient(circle_at_92.93%_96.60%,#F3A78F_0%,20%,rgba(243,167,143,0)_40%),radial-gradient(circle_at_4.59%_100%,rgba(181,181,181,0.99)_0%,25%,rgba(181,181,181,0)_50%),radial-gradient(circle_at_6.19%_12.98%,#F0F0F0_0%,42%,rgba(240,240,240,0)_70%),radial-gradient(circle_at_91.55%_11.93%,rgba(128,21,232,0.35)_0%,42%,rgba(128,21,232,0)_70%),radial-gradient(circle_at_48.90%_49.52%,#FFFFFF_0%,100%,rgba(255,255,255,0)_100%)] bg-cover bg-center py-20 px-6 md:px-20"
    >
      <Text
        text={"Our Services"}
        className="text-[#0F0F0F] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mt-10"
      >
        About Us
      </Text>
      <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-light leading-relaxed mb-3 mt-2">
        Where Strategy Meets Success
      </p>
      <hr className="border-black mb-10" />
      <div className="sm:block md:flex justify-end">
        <div className="grid md:grid-cols-2 gap-12 md:w-[50vw] mr-8">
          {servicesData.services.map((service, index) => (
            <div key={index} className="text[#0F0F0F ]">
              <h3 className="text-2xl md:text-2xl font-semibold mb-2">
                {service.title}
              </h3>
              {/* <p className="text-gray-700 mb-4">[ 0{index + 1} ]</p> */}
              <ul className="text-sm text-gray-900 space-y-2">
                {service.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
