import Text from "../ui/Text";
import FameStudioLogo from "../../assets/fameLogo.png"

const caseStudies = [
  {
    company: "Fame Studio",
    industry: "Interior Design",
    description:
      "Increase brand visibility, social media engagement, and lead generation",
    metrics: {
      social_media_growth: "40% Increase in Social Media Followers",
      online_engagement: "50% Growth in Online Engagement",
      client_inquiries: "30% Increase in Client Inquiries",
    },
  },
  // {
  //   company: "Urban Fitness Co",
  //   industry: "Health & Fitness",
  //   description:
  //     "Created personalized workout content using AI, leading to improved member engagement and retention.",
  //   metrics: {
  //     members_growth: "3.2x Members",
  //     customer_lifetime_value: "82% Higher Customer Lifetime Value",
  //   },
  // },
  // {
  //   company: "GreenLea Cosmetics",
  //   industry: "Beauty & Wellness",
  //   description:
  //     "Developed AI-driven customer segmentation and predictive analytics for targeted product recommendations.",
  //   metrics: {
  //     members_growth: "3.2x Members",
  //     customer_lifetime_value: "82% Higher Customer Lifetime Value",
  //   },
  // },
  // {
  //   company: "GRdat",
  //   industry: "SaaS Industry",
  //   description:
  //     "Implemented AI-powered lead scoring and personalized email campaigns, revolutionizing their B2B marketing approach.",
  //   metrics: {
  //     roi: "+247% ROI",
  //     customer_lifetime_value: "82% Higher Customer Lifetime Value",
  //   },
  // },
];

const CaseStudies = () => {
  return (
    <div id="case-studies" className="container mx-auto py-24 px-4 md:px-8 bg-[#f5f5f5]">
      <Text
        text="Success Stories"
        className="text-[#000] font-bold text-4xl md:text-6xl text-left mb-8"
        textGradient={
          "font-semibold"
        }
      >
        Success Stories
      </Text>
      <h2 className="text-2xl md:text-3xl text-gray-900 mb-12 w-full md:w-[75vw]">
        Every big success starts with a single breakthrough. We’ve already
        helped businesses transform their digital presence, and this is just the
        beginning. Our latest success story showcases how the right
        strategy—whether through SEO, website design, or high-impact Meta
        Ads—can drive real results. As we continue to grow, so will the stories
        of brands we help elevate. Stay tuned for more Fame Studio
      </h2>
      <hr className="border-black mb-10" />
      <div className="space-y-12">
        {caseStudies.map((study, index) => (
          <>
            <div key={index}>
              <div className="md:flex md:justify-between md:items-center">
                <div className="md:flex-[0.7] flex flex-col items-center md:items-start bg-gray-100 rounded-2xl p-6 shadow-lg">
                  {/* Left Side */}
                  <div className="flex flex-col gap-8 md:gap-32 w-full">
                    <div className="flex items-center gap-4 md:gap-7 justify-start md:justify-start">
                      {/* <svg
                        preserveAspectRatio="none"
                        data-bbox="20 20 160 160"
                        viewBox="20 20 160 160"
                        height="40"
                        width="40"
                        xmlns="http://www.w3.org/2000/svg"
                        data-type="shape"
                        role="presentation"
                        aria-hidden="true"
                        aria-label=""
                      >
                        <g>
                          <path d="M102.666 54.667v32h-5.333v-32h5.333z"></path>
                          <path d="M86.667 97.333v5.333h-32v-5.333h32z"></path>
                          <path d="M102.666 113.333v32h-5.333v-32h5.333z"></path>
                          <path d="M145.333 97.333v5.333h-32v-5.333h32z"></path>
                          <path d="M25.333 150.667v-2.533H20v2.533c0 .971.047 1.93.139 2.876l5.308-.516a24.522 24.522 0 0 1-.114-2.36z"></path>
                          <path d="M25.333 138v5.067H20V138h5.333z"></path>
                          <path d="M25.333 97.467v5.067H20v-5.067h5.333z"></path>
                          <path d="M25.333 127.867v5.067H20v-5.067h5.333z"></path>
                          <path d="M25.333 117.733v5.067H20v-5.067h5.333z"></path>
                          <path d="M25.333 107.6v5.067H20V107.6h5.333z"></path>
                          <path d="m35.503 23.458 2.518 4.701a23.804 23.804 0 0 1 4.34-1.8l-1.546-5.104a29.279 29.279 0 0 0-5.312 2.203z"></path>
                          <path d="m46.974 174.553-.516 5.308c.946.092 1.906.139 2.876.139h2.533v-5.333h-2.533c-.798 0-1.585-.039-2.36-.114z"></path>
                          <path d="M35.503 176.542c1.68.9 3.457 1.64 5.312 2.203l1.546-5.104a23.775 23.775 0 0 1-4.34-1.8l-2.518 4.701z"></path>
                          <path d="m26.658 30.724 4.121 3.386a24.176 24.176 0 0 1 3.332-3.332l-3.386-4.121a29.494 29.494 0 0 0-4.067 4.067z"></path>
                          <path d="m26.36 157.638-5.104 1.546a29.137 29.137 0 0 0 2.203 5.312l4.701-2.518a23.775 23.775 0 0 1-1.8-4.34z"></path>
                          <path d="m30.778 165.89-4.121 3.386a29.55 29.55 0 0 0 4.067 4.067l3.386-4.121a24.231 24.231 0 0 1-3.332-3.332z"></path>
                          <path d="M25.333 56.933V62H20v-5.067h5.333z"></path>
                          <path d="M132.934 20v5.333h-5.067V20h5.067z"></path>
                          <path d="M122.8 20v5.333h-5.067V20h5.067z"></path>
                          <path d="M102.534 20v5.333h-5.067V20h5.067z"></path>
                          <path d="M25.333 87.333V92.4H20v-5.067h5.333z"></path>
                          <path d="M143.067 20v5.333H138V20h5.067z"></path>
                          <path d="m173.64 42.362 5.104-1.547a29.137 29.137 0 0 0-2.203-5.312l-4.701 2.518a23.813 23.813 0 0 1 1.8 4.341z"></path>
                          <path d="m169.222 34.11 4.121-3.386a29.439 29.439 0 0 0-4.067-4.067l-3.386 4.121c1.216 1 2.333 2.116 3.332 3.332z"></path>
                          <path d="M82.267 20v5.333H77.2V20h5.067z"></path>
                          <path d="m46.457 20.139.516 5.308a24.174 24.174 0 0 1 2.36-.114h2.533V20h-2.533c-.97 0-1.93.047-2.876.139z"></path>
                          <path d="M25.333 67.067v5.067H20v-5.067h5.333z"></path>
                          <path d="M25.333 77.2v5.067H20V77.2h5.333z"></path>
                          <path d="m28.16 38.021-4.701-2.518c-.9 1.68-1.64 3.457-2.203 5.312l5.104 1.547a23.813 23.813 0 0 1 1.8-4.341z"></path>
                          <path d="M62 20v5.333h-5.067V20H62z"></path>
                          <path d="M72.134 20v5.333h-5.067V20h5.067z"></path>
                          <path d="M25.333 49.333c0-.798.039-1.585.114-2.36l-5.308-.517A29.752 29.752 0 0 0 20 49.333v2.533h5.333v-2.533z"></path>
                          <path d="M180 77.2v5.067h-5.333V77.2H180z"></path>
                          <path d="M174.667 150.667c0 .798-.039 1.585-.114 2.36l5.308.516c.092-.946.139-1.906.139-2.876v-2.533h-5.333v2.533z"></path>
                          <path d="M180 138v5.067h-5.333V138H180z"></path>
                          <path d="M180 117.733v5.067h-5.333v-5.067H180z"></path>
                          <path d="M180 127.867v5.067h-5.333v-5.067H180z"></path>
                          <path d="M157.638 26.36a23.775 23.775 0 0 1 4.34 1.8l2.518-4.701c-1.68-.9-3.457-1.64-5.312-2.203l-1.546 5.104z"></path>
                          <path d="m165.89 169.222 3.386 4.121a29.439 29.439 0 0 0 4.067-4.067l-4.121-3.386a24.176 24.176 0 0 1-3.332 3.332z"></path>
                          <path d="m171.84 161.979 4.701 2.518c.9-1.68 1.64-3.457 2.203-5.312l-5.104-1.546a23.833 23.833 0 0 1-1.8 4.34z"></path>
                          <path d="M180 56.933V62h-5.333v-5.067H180z"></path>
                          <path d="M180 67.067v5.067h-5.333v-5.067H180z"></path>
                          <path d="m179.861 46.457-5.308.516c.076.775.114 1.562.114 2.36v2.533H180v-2.533c0-.97-.047-1.93-.139-2.876z"></path>
                          <path d="M180 97.467v5.067h-5.333v-5.067H180z"></path>
                          <path d="M62 174.667V180h-5.067v-5.333H62z"></path>
                          <path d="M180 107.6v5.067h-5.333V107.6H180z"></path>
                          <path d="M180 87.333V92.4h-5.333v-5.067H180z"></path>
                          <path d="m157.638 173.64 1.546 5.104a29.108 29.108 0 0 0 5.312-2.203l-2.518-4.701a23.775 23.775 0 0 1-4.34 1.8z"></path>
                          <path d="M92.4 174.667V180h-5.067v-5.333H92.4z"></path>
                          <path d="M102.534 174.667V180h-5.067v-5.333h5.067z"></path>
                          <path d="M72.134 174.667V180h-5.067v-5.333h5.067z"></path>
                          <path d="M82.267 174.667V180H77.2v-5.333h5.067z"></path>
                          <path d="M112.667 174.667V180H107.6v-5.333h5.067z"></path>
                          <path d="M92.4 20v5.333h-5.067V20H92.4z"></path>
                          <path d="M143.067 174.667V180H138v-5.333h5.067z"></path>
                          <path d="M150.667 174.667h-2.533V180h2.533a29.7 29.7 0 0 0 2.876-.139l-.516-5.308c-.776.075-1.563.114-2.36.114z"></path>
                          <path d="M148.133 20v5.333h2.533c.798 0 1.585.039 2.36.114l.516-5.308a29.716 29.716 0 0 0-2.876-.139h-2.533z"></path>
                          <path d="M132.934 174.667V180h-5.067v-5.333h5.067z"></path>
                          <path d="M112.667 20v5.333H107.6V20h5.067z"></path>
                          <path d="M122.8 174.667V180h-5.067v-5.333h5.067z"></path>
                        </g>
                      </svg> */}
                      <img src={FameStudioLogo} alt="Fame Studio Logo" className="w-12 h-12 object-cover" />
                      <h3 className="text-2xl md:text-4xl font-semibold text-gray-900">
                        {study.company}
                      </h3>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-7">
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Industry:</strong>
                        <br /> {study.industry}
                      </p>
                      <p className="text-[#1D1D1D] w-full md:w-[40vw]">
                        {study.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="mt-6 md:mt-0 md:ml-6 flex flex-col space-y-4 w-full md:w-[30vw]">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <p
                      key={key}
                      className="text-xl md:text-2xl font-medium text-gray-800 flex flex-col items-start gap-2"
                    >
                      <span className="text-3xl md:text-4xl mr-2">+</span>{" "}
                      {value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <hr className="border-black mt=10" />
          </>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
