import Text from "../ui/Text";
import FameStudioLogo from "../../assets/fameLogo.png"

const testimonials = [
  {
    name: "Umar Memon",
    position: "CEO/Founder",
    company: "Fame Studio",
    testimonial:
      "RL Marketing Hub developed a data-driven digital marketing strategy tailored to our business’s needs",
  },
  // {
  //   name: "Evie Arch",
  //   position: "Marketing Director",
  //   company: "FKS",
  //   testimonial:
  //     "RL Marketing Hub’s AI insights transformed our digital strategy, delivering outstanding results.",
  // },
  // {
  //   name: "Sarah Lee",
  //   position: "Founder",
  //   company: "Green Solutions",
  //   testimonial: "RL’s expertise is unparalleled.",
  // },
  // {
  //   name: "John Davis",
  //   position: "CEO",
  //   company: "TechWave",
  //   testimonial:
  //     "With RL guidance, we saw a significant boost in online engagement and conversions. Highly recommend for impactful digital marketing.",
  // },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="bg-[#f5f5f5] w-full mx-auto px-12 md:px-12 py-20">
      <Text
        className="text-[#000] text-4xl md:text-6xl font-medium text-left mb-8"
        text="Testimonials"
        // textGradient="bg-gradient-to-r from-[#0D98D6] via-[#4F46E5] to-[#A855F7] bg-clip-text text-transparent font-medium drop-shadow-lg"
      />

      <div className="space-y-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row border-t border-gray-300 py-6 gap-4 md:gap-8"
          >
            {/* User Info */}
            <div className="md:w-1/3 flex items-center gap-4">
              {index === 0 && (
                // <svg
                //   preserveAspectRatio="none"
                //   data-bbox="19.999 19.999 160.002 160.002"
                //   viewBox="19.999 19.999 160.002 160.002"
                //   height="50"
                //   width="50"
                //   xmlns="http://www.w3.org/2000/svg"
                //   data-type="shape"
                //   role="presentation"
                //   aria-hidden="true"
                //   aria-label=""
                // >
                //   <g>
                //     <path
                //       d="m79.684 39.342 4.545-2.791a34.853 34.853 0 0 0-3.201-4.399l-4.054 3.466a29.393 29.393 0 0 1 2.71 3.724z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M77.181 28.305a34.754 34.754 0 0 0-4.399-3.201l-2.791 4.545a29.393 29.393 0 0 1 3.724 2.71l3.466-4.054z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m32.152 28.305 3.465 4.054a29.537 29.537 0 0 1 3.724-2.71l-2.791-4.545a34.915 34.915 0 0 0-4.398 3.201z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m77.181 81.028-3.466-4.054a29.393 29.393 0 0 1-3.724 2.71l2.791 4.545a34.754 34.754 0 0 0 4.399-3.201z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M84 54.667c0 .778-.03 1.549-.089 2.31l5.317.413a35.033 35.033 0 0 0 0-5.446l-5.317.413c.059.761.089 1.531.089 2.31z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m51.944 20.105.413 5.317a29.874 29.874 0 0 1 4.62 0l.413-5.317a35.071 35.071 0 0 0-5.446 0z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M54.667 84c-.778 0-1.549-.03-2.31-.089l-.413 5.317a35.033 35.033 0 0 0 5.446 0l-.413-5.317c-.762.059-1.532.089-2.31.089z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m61.522 83.196 1.241 5.187a34.36 34.36 0 0 0 5.174-1.68l-2.043-4.927a29.033 29.033 0 0 1-4.372 1.42z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m32.359 35.618-4.054-3.466a34.754 34.754 0 0 0-3.201 4.399l4.545 2.791a29.393 29.393 0 0 1 2.71-3.724z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M61.522 26.137c1.506.36 2.966.837 4.372 1.42l2.043-4.926a34.322 34.322 0 0 0-5.174-1.68l-1.241 5.186z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M32.152 81.028a34.754 34.754 0 0 0 4.399 3.201l2.791-4.545a29.393 29.393 0 0 1-3.724-2.71l-3.466 4.054z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M41.397 86.703a34.322 34.322 0 0 0 5.174 1.68l1.241-5.187a29.033 29.033 0 0 1-4.372-1.42l-2.043 4.927z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m41.397 22.631 2.043 4.926a29.11 29.11 0 0 1 4.372-1.42l-1.241-5.187a34.402 34.402 0 0 0-5.174 1.681z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m83.196 47.812 5.187-1.241a34.36 34.36 0 0 0-1.68-5.174l-4.927 2.043a28.996 28.996 0 0 1 1.42 4.372z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m76.974 73.715 4.054 3.465a34.754 34.754 0 0 0 3.201-4.399l-4.545-2.791a29.332 29.332 0 0 1-2.71 3.725z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M25.423 56.976a29.874 29.874 0 0 1 0-4.62l-5.317-.413a35.071 35.071 0 0 0-.001 5.447l5.318-.414z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m29.649 69.991-4.545 2.791a34.853 34.853 0 0 0 3.201 4.399l4.054-3.465a29.475 29.475 0 0 1-2.71-3.725z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M27.557 65.894a29.11 29.11 0 0 1-1.42-4.372l-5.187 1.241a34.36 34.36 0 0 0 1.68 5.174l4.927-2.043z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m27.557 43.44-4.926-2.043a34.322 34.322 0 0 0-1.68 5.174l5.187 1.241c.36-1.506.836-2.967 1.419-4.372z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m88.383 62.763-5.187-1.241a29.033 29.033 0 0 1-1.42 4.372l4.927 2.043a34.473 34.473 0 0 0 1.68-5.174z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M26.137 138.478c.36-1.506.837-2.966 1.42-4.372l-4.926-2.043a34.322 34.322 0 0 0-1.68 5.174l5.186 1.241z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M41.397 177.37a34.322 34.322 0 0 0 5.174 1.68l1.241-5.187a29.033 29.033 0 0 1-4.372-1.42l-2.043 4.927z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M32.152 171.695a34.754 34.754 0 0 0 4.399 3.201l2.791-4.545a29.393 29.393 0 0 1-3.724-2.71l-3.466 4.054z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m32.359 126.285-4.054-3.466a34.754 34.754 0 0 0-3.201 4.399l4.545 2.791a29.393 29.393 0 0 1 2.71-3.724z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M54.667 174.667c-.778 0-1.549-.03-2.31-.089l-.413 5.317a35.033 35.033 0 0 0 5.446 0l-.413-5.317c-.762.059-1.532.089-2.31.089z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m41.397 113.297 2.043 4.927a28.993 28.993 0 0 1 4.372-1.419l-1.241-5.187a34.17 34.17 0 0 0-5.174 1.679z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m32.152 118.972 3.465 4.054a29.537 29.537 0 0 1 3.724-2.71l-2.791-4.545a34.816 34.816 0 0 0-4.398 3.201z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m26.137 152.188-5.187 1.241a34.36 34.36 0 0 0 1.68 5.174l4.926-2.043a29.22 29.22 0 0 1-1.419-4.372z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M25.333 145.333c0-.778.03-1.548.089-2.31l-5.317-.413a35.033 35.033 0 0 0 0 5.446l5.317-.413a29.874 29.874 0 0 1-.089-2.31z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m29.649 160.658-4.545 2.791a34.853 34.853 0 0 0 3.201 4.399l4.054-3.465a29.475 29.475 0 0 1-2.71-3.725z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m51.944 110.772.413 5.317a29.874 29.874 0 0 1 4.62 0l.413-5.317a35.033 35.033 0 0 0-5.446 0z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M88.383 137.237a34.36 34.36 0 0 0-1.68-5.174l-4.927 2.043a29.11 29.11 0 0 1 1.42 4.372l5.187-1.241z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M77.181 118.972a34.754 34.754 0 0 0-4.399-3.201l-2.791 4.545a29.393 29.393 0 0 1 3.724 2.71l3.466-4.054z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M83.911 143.024a29.874 29.874 0 0 1 0 4.62l5.317.413a35.033 35.033 0 0 0 0-5.446l-5.317.413z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m79.684 130.009 4.545-2.791a34.853 34.853 0 0 0-3.201-4.399l-4.054 3.466a29.393 29.393 0 0 1 2.71 3.724z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m81.776 156.56 4.927 2.043a34.322 34.322 0 0 0 1.68-5.174l-5.187-1.241a28.996 28.996 0 0 1-1.42 4.372z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M61.522 116.804c1.506.36 2.966.837 4.372 1.42l2.043-4.927a34.322 34.322 0 0 0-5.174-1.68l-1.241 5.187z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m69.991 170.351 2.791 4.545a34.754 34.754 0 0 0 4.399-3.201l-3.466-4.054a29.393 29.393 0 0 1-3.724 2.71z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m61.522 173.863 1.241 5.187a34.36 34.36 0 0 0 5.174-1.68l-2.043-4.927a29.147 29.147 0 0 1-4.372 1.42z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m76.974 164.382 4.054 3.465a34.754 34.754 0 0 0 3.201-4.399l-4.545-2.791a29.332 29.332 0 0 1-2.71 3.725z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m170.351 39.342 4.545-2.791a34.853 34.853 0 0 0-3.201-4.399l-4.054 3.466a29.393 29.393 0 0 1 2.71 3.724z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M170.351 69.991a29.393 29.393 0 0 1-2.71 3.724l4.054 3.465a34.754 34.754 0 0 0 3.201-4.399l-4.545-2.79z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m173.863 47.812 5.187-1.241a34.36 34.36 0 0 0-1.68-5.174l-4.927 2.043a29.11 29.11 0 0 1 1.42 4.372z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m167.848 81.028-3.466-4.054a29.393 29.393 0 0 1-3.724 2.71l2.791 4.545a34.754 34.754 0 0 0 4.399-3.201z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M173.863 61.522a29.033 29.033 0 0 1-1.42 4.372l4.927 2.043a34.322 34.322 0 0 0 1.68-5.174l-5.187-1.241z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M174.667 54.667c0 .778-.03 1.549-.089 2.31l5.317.413a35.033 35.033 0 0 0 0-5.446l-5.317.413c.058.761.089 1.531.089 2.31z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M116.089 56.976a29.874 29.874 0 0 1 0-4.62l-5.317-.413a35.033 35.033 0 0 0 0 5.446l5.317-.413z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m123.026 35.618-4.054-3.466a34.754 34.754 0 0 0-3.201 4.399l4.545 2.791a29.295 29.295 0 0 1 2.71-3.724z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m118.224 43.44-4.927-2.043a34.322 34.322 0 0 0-1.68 5.174l5.187 1.241c.36-1.506.837-2.967 1.42-4.372z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m116.804 61.522-5.187 1.241a34.36 34.36 0 0 0 1.68 5.174l4.927-2.043a29.033 29.033 0 0 1-1.42-4.372z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m120.315 69.991-4.545 2.791a34.754 34.754 0 0 0 3.201 4.399l4.054-3.465a29.574 29.574 0 0 1-2.71-3.725z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M167.848 28.305a34.754 34.754 0 0 0-4.399-3.201l-2.791 4.545a29.393 29.393 0 0 1 3.724 2.71l3.466-4.054z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M145.333 84c-.778 0-1.549-.03-2.31-.089l-.413 5.317a35.033 35.033 0 0 0 5.446 0l-.413-5.317c-.761.059-1.531.089-2.31.089z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m122.819 28.305 3.466 4.054a29.464 29.464 0 0 1 3.724-2.71l-2.791-4.545a34.853 34.853 0 0 0-4.399 3.201z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M132.063 86.703a34.322 34.322 0 0 0 5.174 1.68l1.241-5.187a29.033 29.033 0 0 1-4.372-1.42l-2.043 4.927z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m132.063 22.631 2.043 4.926a29.11 29.11 0 0 1 4.372-1.42l-1.241-5.187c-1.782.427-3.51.991-5.174 1.681z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m142.611 20.105.413 5.317a29.874 29.874 0 0 1 4.62 0l.413-5.317a35.033 35.033 0 0 0-5.446 0z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M152.188 26.137c1.506.36 2.966.837 4.372 1.42l2.043-4.926a34.322 34.322 0 0 0-5.174-1.68l-1.241 5.186z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m152.188 83.196 1.241 5.187a34.36 34.36 0 0 0 5.174-1.68l-2.043-4.927a28.996 28.996 0 0 1-4.372 1.42z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M122.819 81.028a34.754 34.754 0 0 0 4.399 3.201l2.791-4.545a29.393 29.393 0 0 1-3.724-2.71l-3.466 4.054z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m167.641 164.382 4.054 3.465a34.754 34.754 0 0 0 3.201-4.399l-4.545-2.791a29.332 29.332 0 0 1-2.71 3.725z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m116.804 152.188-5.187 1.241a34.36 34.36 0 0 0 1.68 5.174l4.927-2.043a28.996 28.996 0 0 1-1.42-4.372z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m160.658 170.351 2.791 4.545a34.754 34.754 0 0 0 4.399-3.201l-3.466-4.054a29.393 29.393 0 0 1-3.724 2.71z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M116 145.333c0-.778.03-1.548.089-2.31l-5.317-.413a35.033 35.033 0 0 0 0 5.446l5.317-.413a29.874 29.874 0 0 1-.089-2.31z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M152.188 116.804c1.506.36 2.966.837 4.372 1.42l2.043-4.927a34.322 34.322 0 0 0-5.174-1.68l-1.241 5.187z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M174.577 143.024a29.874 29.874 0 0 1 0 4.62l5.317.413a35.033 35.033 0 0 0 0-5.446l-5.317.413z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m170.351 130.009 4.545-2.791a34.853 34.853 0 0 0-3.201-4.399l-4.054 3.466a29.393 29.393 0 0 1 2.71 3.724z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M167.848 118.972a34.754 34.754 0 0 0-4.399-3.201l-2.791 4.545a29.393 29.393 0 0 1 3.724 2.71l3.466-4.054z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M179.049 137.237a34.36 34.36 0 0 0-1.68-5.174l-4.927 2.043a29.11 29.11 0 0 1 1.42 4.372l5.187-1.241z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m172.443 156.56 4.927 2.043a34.322 34.322 0 0 0 1.68-5.174l-5.187-1.241a29.11 29.11 0 0 1-1.42 4.372z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M132.063 177.37a34.322 34.322 0 0 0 5.174 1.68l1.241-5.187a29.033 29.033 0 0 1-4.372-1.42l-2.043 4.927z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m123.026 126.285-4.054-3.466a34.754 34.754 0 0 0-3.201 4.399l4.545 2.791a29.295 29.295 0 0 1 2.71-3.724z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m118.224 134.106-4.927-2.043a34.322 34.322 0 0 0-1.68 5.174l5.187 1.241c.36-1.506.837-2.966 1.42-4.372z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m122.819 118.972 3.466 4.054a29.464 29.464 0 0 1 3.724-2.71l-2.791-4.545a34.754 34.754 0 0 0-4.399 3.201z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m132.063 113.297 2.043 4.927a28.993 28.993 0 0 1 4.372-1.419l-1.241-5.187c-1.782.425-3.51.989-5.174 1.679z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m152.188 173.863 1.241 5.187a34.36 34.36 0 0 0 5.174-1.68l-2.043-4.927a29.11 29.11 0 0 1-4.372 1.42z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M122.819 171.695a34.754 34.754 0 0 0 4.399 3.201l2.791-4.545a29.393 29.393 0 0 1-3.724-2.71l-3.466 4.054z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m120.315 160.658-4.545 2.791a34.754 34.754 0 0 0 3.201 4.399l4.054-3.465a29.574 29.574 0 0 1-2.71-3.725z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="M145.333 174.667c-.778 0-1.549-.03-2.31-.089l-.413 5.317a35.033 35.033 0 0 0 5.446 0l-.413-5.317c-.761.059-1.531.089-2.31.089z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       d="m142.611 110.772.413 5.317a29.874 29.874 0 0 1 4.62 0l.413-5.317a35.033 35.033 0 0 0-5.446 0z"
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //     ></path>
                //     <path
                //       clip-rule="evenodd"
                //       fill-rule="evenodd"
                //       d="m100 103.771 11.312 11.312 3.772-3.771L103.772 100l11.315-11.315-3.772-3.771L100 96.229 88.685 84.913l-3.771 3.772L96.229 100l-11.312 11.312 3.771 3.772L100 103.771z"
                //     ></path>
                //   </g>
                // </svg>
                <img src={FameStudioLogo} alt="Fame Studio Logo" className="w-12 h-12 object-cover" />
              )}
              {index === 1 && (
                <svg
                  preserveAspectRatio="none"
                  data-bbox="20.001 20.001 159.999 159.999"
                  viewBox="20.001 20.001 159.999 159.999"
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="shape"
                  role="presentation"
                  aria-hidden="true"
                  aria-label=""
                >
                  <g>
                    <path
                      d="m31.97 69.179-4.857-2.204a79.567 79.567 0 0 0-2.006 4.837l4.991 1.879a74.422 74.422 0 0 1 1.872-4.512z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m73.691 30.099-1.88-4.991a79.195 79.195 0 0 0-4.837 2.006l2.204 4.857a73.445 73.445 0 0 1 4.513-1.872z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m36.581 60.57-4.527-2.821a79.729 79.729 0 0 0-2.622 4.532l4.701 2.518a74.79 74.79 0 0 1 2.448-4.229z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m64.8 34.133-2.518-4.701a79.729 79.729 0 0 0-4.532 2.622l2.82 4.526a75.059 75.059 0 0 1 4.23-2.447z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m42.278 52.634-4.121-3.386a80.406 80.406 0 0 0-3.19 4.151l4.333 3.11a74.128 74.128 0 0 1 2.978-3.875z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m28.529 78.316-5.104-1.546a79.6 79.6 0 0 0-1.352 5.056l5.195 1.207c.37-1.593.791-3.166 1.261-4.717z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m30.099 126.309-4.991 1.879a79.195 79.195 0 0 0 2.006 4.837l4.857-2.204a73.158 73.158 0 0 1-1.872-4.512z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m26.32 87.825-5.263-.863a79.797 79.797 0 0 0-.677 5.193l5.308.517a74.87 74.87 0 0 1 .632-4.847z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m34.133 135.2-4.701 2.518a80.335 80.335 0 0 0 2.622 4.532l4.527-2.82a74.466 74.466 0 0 1-2.448-4.23z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m25.688 107.328-5.308.517c.17 1.748.396 3.479.677 5.193l5.263-.863a74.87 74.87 0 0 1-.632-4.847z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M25.333 100c0-.82.013-1.638.039-2.451l-5.331-.172a84.633 84.633 0 0 0 .001 5.246l5.331-.172a76.716 76.716 0 0 1-.04-2.451z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m27.268 116.967-5.195 1.207a78.935 78.935 0 0 0 1.352 5.056l5.104-1.546a73.974 73.974 0 0 1-1.261-4.717z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m160.701 56.509 4.333-3.11a80.406 80.406 0 0 0-3.19-4.151l-4.121 3.386a75.238 75.238 0 0 1 2.978 3.875z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m169.901 73.691 4.991-1.879a78.933 78.933 0 0 0-2.006-4.837l-4.856 2.204a73.774 73.774 0 0 1 1.871 4.512z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m174.312 92.672 5.308-.517a80.585 80.585 0 0 0-.677-5.193l-5.263.863a74.87 74.87 0 0 1 .632 4.847z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M158.389 45.313a80.276 80.276 0 0 0-3.702-3.702l-3.647 3.892a75.136 75.136 0 0 1 3.457 3.457l3.892-3.647z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m172.731 83.033 5.195-1.207a78.935 78.935 0 0 0-1.352-5.056l-5.104 1.546a73.315 73.315 0 0 1 1.261 4.717z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M133.025 27.113a79.567 79.567 0 0 0-4.837-2.006l-1.88 4.991c1.529.576 3.033 1.2 4.512 1.871l2.205-4.856z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m83.032 27.268-1.207-5.195a78.935 78.935 0 0 0-5.056 1.352l1.546 5.104a74.331 74.331 0 0 1 4.717-1.261z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M100 25.333c.82 0 1.638.013 2.451.039l.172-5.331a84.633 84.633 0 0 0-5.246.001l.172 5.331c.813-.026 1.63-.04 2.451-.04z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m92.672 25.688-.517-5.308c-1.748.17-3.479.396-5.193.677l.863 5.263a74.87 74.87 0 0 1 4.847-.632z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M113.037 21.057a79.797 79.797 0 0 0-5.193-.677l-.517 5.308a74.87 74.87 0 0 1 4.847.632l.863-5.263z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M123.231 23.425a79.6 79.6 0 0 0-5.056-1.352l-1.207 5.195c1.592.37 3.165.791 4.717 1.261l1.546-5.104z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m165.866 64.8 4.701-2.518a80.335 80.335 0 0 0-2.622-4.532l-4.526 2.821a73.487 73.487 0 0 1 2.447 4.229z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M143.491 39.299a74.678 74.678 0 0 1 3.875 2.978l3.386-4.121a80.406 80.406 0 0 0-4.151-3.19l-3.11 4.333z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m143.491 160.701 3.11 4.333a80.406 80.406 0 0 0 4.151-3.19l-3.386-4.121a75.238 75.238 0 0 1-3.875 2.978z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m151.041 154.498 3.647 3.892a80.276 80.276 0 0 0 3.702-3.702l-3.892-3.647a76.15 76.15 0 0 1-3.457 3.457z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m157.722 147.366 4.121 3.386a80.406 80.406 0 0 0 3.19-4.151l-4.333-3.11a74.128 74.128 0 0 1-2.978 3.875z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m135.2 165.866 2.518 4.702a80.335 80.335 0 0 0 4.532-2.622l-2.82-4.526a74.437 74.437 0 0 1-4.23 2.446z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M135.2 34.133a75.059 75.059 0 0 1 4.23 2.447l2.82-4.526a79.729 79.729 0 0 0-4.532-2.622l-2.518 4.701z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m168.03 130.821 4.856 2.204a78.933 78.933 0 0 0 2.006-4.837l-4.991-1.879a73.774 73.774 0 0 1-1.871 4.512z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m173.68 112.175 5.263.863c.281-1.713.507-3.445.677-5.193l-5.308-.517a74.87 74.87 0 0 1-.632 4.847z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m163.419 139.43 4.526 2.82a79.729 79.729 0 0 0 2.622-4.532l-4.701-2.518a73.854 73.854 0 0 1-2.447 4.23z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m179.958 97.377-5.331.172a76.764 76.764 0 0 1 0 4.902l5.331.172a81.616 81.616 0 0 0 0-5.246z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m126.309 169.901 1.88 4.991a79.195 79.195 0 0 0 4.837-2.006l-2.204-4.857a73.445 73.445 0 0 1-4.513 1.872z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m39.299 143.491-4.333 3.11a80.406 80.406 0 0 0 3.19 4.151l4.121-3.386a75.238 75.238 0 0 1-2.978-3.875z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m171.471 121.684 5.104 1.546a79.6 79.6 0 0 0 1.352-5.056l-5.195-1.207a74.645 74.645 0 0 1-1.261 4.717z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M66.975 172.887a79.567 79.567 0 0 0 4.837 2.006l1.88-4.991a74.411 74.411 0 0 1-4.512-1.871l-2.205 4.856z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M57.75 167.946a79.729 79.729 0 0 0 4.532 2.622l2.518-4.702a74.452 74.452 0 0 1-4.23-2.447l-2.82 4.527z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M49.248 161.843a80.406 80.406 0 0 0 4.151 3.19l3.11-4.333a74.678 74.678 0 0 1-3.875-2.978l-3.386 4.121z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m49.248 38.157 3.386 4.121a75.107 75.107 0 0 1 3.875-2.978l-3.11-4.333a80.406 80.406 0 0 0-4.151 3.19z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m41.611 45.313 3.892 3.646a76.15 76.15 0 0 1 3.457-3.457l-3.647-3.892a80.298 80.298 0 0 0-3.702 3.703z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M41.611 154.688a80.778 80.778 0 0 0 3.702 3.702l3.647-3.892a75.136 75.136 0 0 1-3.457-3.457l-3.892 3.647z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M76.769 176.575a79.6 79.6 0 0 0 5.056 1.352l1.207-5.195a74.331 74.331 0 0 1-4.717-1.261l-1.546 5.104z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m107.328 174.312.517 5.308a80.585 80.585 0 0 0 5.193-.677l-.863-5.263a74.87 74.87 0 0 1-4.847.632z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m116.967 172.731 1.207 5.195a78.935 78.935 0 0 0 5.056-1.352l-1.546-5.104a72.668 72.668 0 0 1-4.717 1.261z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M100 174.667c-.821 0-1.638-.013-2.451-.04l-.172 5.331a81.616 81.616 0 0 0 5.246 0l-.172-5.331c-.813.026-1.631.04-2.451.04z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M86.963 178.943c1.713.281 3.445.507 5.193.677l.517-5.308a74.87 74.87 0 0 1-4.847-.632l-.863 5.263z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M100 60c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 74.667c-19.146 0-34.667-15.521-34.667-34.667S80.854 65.333 100 65.333 134.667 80.854 134.667 100 119.146 134.667 100 134.667z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </g>
                </svg>
              )}
              {index === 2 && (
                <svg
                  preserveAspectRatio="none"
                  data-bbox="20 20 160 160"
                  viewBox="20 20 160 160"
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="shape"
                  role="presentation"
                  aria-hidden="true"
                  aria-label=""
                >
                  <g>
                    <path
                      d="M40 140c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 34.667c-8.1 0-14.667-6.566-14.667-14.667S31.9 145.333 40 145.333 54.667 151.899 54.667 160 48.1 174.667 40 174.667z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m55.868 87.824-4.229 3.25a14.68 14.68 0 0 1 1.917 3.313l4.927-2.043a20.01 20.01 0 0 0-2.615-4.52z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M54.542 98.078a14.81 14.81 0 0 1 0 3.844l5.289.69a20.283 20.283 0 0 0 0-5.224l-5.289.69z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M47.656 118.482a19.984 19.984 0 0 0 4.52-2.614l-3.25-4.229a14.642 14.642 0 0 1-3.313 1.917l2.043 4.926z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M55.868 112.176a19.946 19.946 0 0 0 2.614-4.52l-4.927-2.043a14.62 14.62 0 0 1-1.917 3.313l4.23 3.25z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M40 85.333a14.8 14.8 0 0 1 1.922.124l.69-5.288a20.283 20.283 0 0 0-5.224 0l.69 5.288A14.978 14.978 0 0 1 40 85.333z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M45.613 86.444a14.62 14.62 0 0 1 3.313 1.917l3.25-4.229a19.946 19.946 0 0 0-4.52-2.614l-2.043 4.926z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M40 120c.885 0 1.757-.058 2.612-.169l-.69-5.289a14.81 14.81 0 0 1-3.844 0l-.69 5.289c.855.111 1.727.169 2.612.169z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M34.387 113.556a14.642 14.642 0 0 1-3.313-1.917l-3.25 4.229a19.946 19.946 0 0 0 4.52 2.614l2.043-4.926z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M20 100c0 .885.058 1.757.169 2.612l5.289-.69a14.81 14.81 0 0 1 0-3.844l-5.289-.69A20.283 20.283 0 0 0 20 100z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M21.518 107.656a19.984 19.984 0 0 0 2.614 4.52l4.229-3.25a14.642 14.642 0 0 1-1.917-3.313l-4.926 2.043z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M32.344 81.518a19.984 19.984 0 0 0-4.52 2.614l3.25 4.229a14.642 14.642 0 0 1 3.313-1.917l-2.043-4.926z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m21.518 92.344 4.927 2.043a14.62 14.62 0 0 1 1.917-3.313l-4.229-3.25a19.972 19.972 0 0 0-2.615 4.52z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M40 20c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 34.667c-8.1 0-14.667-6.566-14.667-14.667S31.9 25.333 40 25.333 54.667 31.899 54.667 40 48.1 54.667 40 54.667z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M87.824 175.868a19.946 19.946 0 0 0 4.52 2.614l2.043-4.927a14.62 14.62 0 0 1-3.313-1.917l-3.25 4.23z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M105.613 146.444a14.62 14.62 0 0 1 3.313 1.917l3.25-4.229a19.946 19.946 0 0 0-4.52-2.614l-2.043 4.926z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m111.639 168.926 4.229 3.25a19.946 19.946 0 0 0 2.614-4.52l-4.927-2.043a14.601 14.601 0 0 1-1.916 3.313z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m105.613 173.556 2.043 4.927a19.984 19.984 0 0 0 4.52-2.614l-3.25-4.229a14.676 14.676 0 0 1-3.313 1.916z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M114.542 158.078a14.81 14.81 0 0 1 0 3.844l5.289.69a20.283 20.283 0 0 0 0-5.224l-5.289.69z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m97.388 140.169.69 5.288a14.81 14.81 0 0 1 3.844 0l.69-5.288a20.283 20.283 0 0 0-5.224 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M85.333 160c0-.654.042-1.295.124-1.922l-5.289-.69a20.464 20.464 0 0 0 .001 5.224l5.289-.69a14.81 14.81 0 0 1-.125-1.922z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M118.482 152.344a19.984 19.984 0 0 0-2.614-4.52l-4.229 3.25a14.68 14.68 0 0 1 1.917 3.313l4.926-2.043z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m86.444 165.613-4.927 2.043a19.984 19.984 0 0 0 2.614 4.52l4.229-3.25a14.676 14.676 0 0 1-1.916-3.313z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m88.361 151.074-4.229-3.25a19.946 19.946 0 0 0-2.614 4.52l4.927 2.043a14.601 14.601 0 0 1 1.916-3.313z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M100 174.667a14.81 14.81 0 0 1-1.922-.124l-.69 5.289a20.464 20.464 0 0 0 5.224-.001l-.69-5.289c-.626.082-1.268.125-1.922.125z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m87.824 144.132 3.25 4.229a14.62 14.62 0 0 1 3.313-1.917l-2.043-4.927a20.01 20.01 0 0 0-4.52 2.615z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M100 80c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 34.667c-8.1 0-14.667-6.566-14.667-14.667S91.9 85.333 100 85.333 114.667 91.9 114.667 100 108.1 114.667 100 114.667z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M100 25.333a14.8 14.8 0 0 1 1.922.124l.69-5.288A20.105 20.105 0 0 0 100 20c-.885 0-1.757.057-2.612.169l.69 5.288a14.99 14.99 0 0 1 1.922-.124z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m113.556 34.387 4.927-2.043a19.984 19.984 0 0 0-2.614-4.52l-4.229 3.25a14.676 14.676 0 0 1 1.916 3.313z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m112.176 55.868-3.25-4.229a14.642 14.642 0 0 1-3.313 1.917l2.043 4.927a20.01 20.01 0 0 0 4.52-2.615z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m102.612 59.831-.69-5.289a14.81 14.81 0 0 1-3.844 0l-.69 5.289a20.283 20.283 0 0 0 5.224 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M115.868 52.176a19.946 19.946 0 0 0 2.614-4.52l-4.927-2.043a14.62 14.62 0 0 1-1.917 3.313l4.23 3.25z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M112.176 24.132a19.946 19.946 0 0 0-4.52-2.614l-2.043 4.927a14.62 14.62 0 0 1 3.313 1.917l3.25-4.23z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m88.361 31.074-4.229-3.25a19.946 19.946 0 0 0-2.614 4.52l4.927 2.043a14.601 14.601 0 0 1 1.916-3.313z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M114.542 38.078a14.81 14.81 0 0 1 0 3.844l5.289.69a20.283 20.283 0 0 0 0-5.224l-5.289.69z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M85.458 41.922a14.81 14.81 0 0 1 0-3.844l-5.289-.69a20.283 20.283 0 0 0 0 5.224l5.289-.69z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M94.387 53.556a14.62 14.62 0 0 1-3.313-1.917l-3.25 4.229a19.946 19.946 0 0 0 4.52 2.614l2.043-4.926z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M81.518 47.656a19.984 19.984 0 0 0 2.614 4.52l4.229-3.25a14.642 14.642 0 0 1-1.917-3.313l-4.926 2.043z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m94.387 26.444-2.043-4.927a19.984 19.984 0 0 0-4.52 2.614l3.25 4.229a14.676 14.676 0 0 1 3.313-1.916z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M160 140c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 34.667c-8.1 0-14.667-6.566-14.667-14.667S151.9 145.333 160 145.333 174.667 151.9 174.667 160 168.1 174.667 160 174.667z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m178.482 107.656-4.927-2.043a14.62 14.62 0 0 1-1.917 3.313l4.229 3.25a19.934 19.934 0 0 0 2.615-4.52z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M172.176 84.132a19.946 19.946 0 0 0-4.52-2.614l-2.043 4.927a14.62 14.62 0 0 1 3.313 1.917l3.25-4.23z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m175.868 87.824-4.229 3.25a14.68 14.68 0 0 1 1.917 3.313l4.927-2.043a20.01 20.01 0 0 0-2.615-4.52z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M160 80c-.885 0-1.757.058-2.612.169l.69 5.288a14.826 14.826 0 0 1 3.845 0l.69-5.288A20.31 20.31 0 0 0 160 80z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M167.656 118.482a19.984 19.984 0 0 0 4.52-2.614l-3.25-4.229a14.642 14.642 0 0 1-3.313 1.917l2.043 4.926z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M174.542 98.078a14.81 14.81 0 0 1 0 3.844l5.289.69a20.283 20.283 0 0 0 0-5.224l-5.289.69z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M160 114.667a14.81 14.81 0 0 1-1.922-.124l-.69 5.289a20.283 20.283 0 0 0 5.224 0l-.69-5.289c-.626.081-1.268.124-1.922.124z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M154.387 113.556a14.62 14.62 0 0 1-3.313-1.917l-3.25 4.229a19.946 19.946 0 0 0 4.52 2.614l2.043-4.926z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M152.344 81.518a19.984 19.984 0 0 0-4.52 2.614l3.25 4.229a14.62 14.62 0 0 1 3.313-1.917l-2.043-4.926z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M145.458 101.922a14.81 14.81 0 0 1 0-3.844l-5.289-.69a20.283 20.283 0 0 0 0 5.224l5.289-.69z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m144.132 112.176 4.229-3.25a14.642 14.642 0 0 1-1.917-3.313l-4.927 2.043a20.01 20.01 0 0 0 2.615 4.52z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M144.132 87.824a19.946 19.946 0 0 0-2.614 4.52l4.927 2.043a14.62 14.62 0 0 1 1.917-3.313l-4.23-3.25z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M160 60c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20zm0-34.667c8.1 0 14.667 6.566 14.667 14.667S168.1 54.667 160 54.667 145.333 48.1 145.333 40 151.9 25.333 160 25.333z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </g>
                </svg>
              )}

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.position}, {item.company}
                </p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="md:w-2/3 text-xl md:text-3xl italic text-gray-700">
              “{item.testimonial}”
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
