import React, { useEffect, useState, useRef } from "react";
import { Carousel, Image, Layout, Menu, theme } from "antd";
import firstSlide from "../../assets/1stSlide.jpg";
import secondSlide from "../../assets/2ndSlide.jpg";
import thirdSlide from "../../assets/3rdSlide.jpg";

import firstService from "../../assets/cnc-water-jet-cutting-machine.jpg";
import secondService from "../../assets/Oil_And_Gas_Water_Jet_Cutting_Machines.jpg";
import thirdService from "../../assets/cnc-water-jet-cutting-machine-2.jpg";
import fourthService from "../../assets/aerospace_indistry.jpg";
import fifthService from "../../assets/architectural_industry.jpg";
import sisthService from "../../assets/cnc_cutting.jpg";

import logo from "../../assets/ashrayLogo.png";

import {
  FaTools,
  FaIndustry,
  FaDraftingCompass,
  FaMinus,
  FaGasPump,
  FaCogs,
  FaArrowRight,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const { Header, Content, Footer } = Layout;
const items = [
  {
    key: 1,
    label: "Home",
  },
  {
    key: 2,
    label: "About Us",
  },
  {
    key: 3,
    label: "Waterjet Services",
  },
  {
    key: 4,
    label: "Waterjet FAQs",
  },
  {
    key: 5,
    label: "Projects",
  },
  {
    key: 6,
    label: "Contact Us",
  },
];

const Slide = ({ backgroundImage, title, subtitle, description, isActive }) => {
  const textContentRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const textContent = textContentRef.current;
      textContent.style.animation = "none"; // Reset the animation
      void textContent.offsetHeight; // Trigger reflow to restart the animation
      textContent.style.animation = ""; // Reapply the animation
    }
  }, [isActive]);

  return (
    <div className="relative w-full h-[1000px] overflow-hidden">
      <div
        className="slide-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div
        ref={textContentRef}
        className="relative flex flex-col items-center justify-center text-white gap-12 h-full text-content"
        style={{ animation: isActive ? "fadeInUp 1s ease-in-out" : "none" }}
      >
        <div className="inline-flex space-x-4 text-2xl">
          <u>
            <p>Industrial</p>
          </u>
          <span>.</span>
          <u>
            <p>Factory</p>
          </u>
          <span>.</span>
          <u>
            <p>Business</p>
          </u>
        </div>
        <div>
          {" "}
          <h1 className="text-9xl">{title}</h1>
          <h2 className="text-9xl">{subtitle}</h2>
        </div>

        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      backgroundImage: firstSlide,
      title: "WE'RE BUILDING",
      subtitle: "THE FUTURE",
      description:
        "We’ve One Mission to be the Best Waterjet Cutting in Pune Maharashtra.",
    },
    {
      backgroundImage: secondSlide,
      title: "HIGH PRESSURE",
      subtitle: "WATERJET CUTTING",
      description:
        "We’ve One Mission to be the Best Waterjet Cutting in Pune Maharashtra.",
    },
    {
      backgroundImage: thirdSlide,
      title: "INDUSTRIAL WATERJET",
      subtitle: "CUTTING SOLUTION",
      description:
        "We’ve One Mission to be the Best Waterjet Cutting in Pune Maharashtra.",
    },
  ];

  return (
    <Carousel
      arrows
      infinite
      autoplay
      autoplaySpeed={1800}
      afterChange={(current) => setCurrentSlide(current)}
    >
      {slides.map((slide, index) => (
        <Slide
          key={index}
          backgroundImage={slide.backgroundImage}
          title={slide.title}
          subtitle={slide.subtitle}
          description={slide.description}
          isActive={currentSlide === index}
        />
      ))}
    </Carousel>
  );
};

const IconSection = () => {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Accurate Waterjet Cutting */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <FaTools className="text-5xl text-orange-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">
                  Accurate Waterjet <br />
                  Cutting
                </h3>
              </div>
            </div>
          </div>

          {/* CNC Profile Cutting */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <FaIndustry className="text-5xl text-orange-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">
                  CNC Profile <br /> Cutting
                </h3>
              </div>
            </div>
          </div>

          {/* Custom & Professional Cutting */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <FaDraftingCompass className="text-5xl text-orange-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">
                  Custom &amp; Professional <br />
                  Cutting
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Waterjet Aerospace industry",
    description:
      "Aircraft, spacecraft and all their components are produced in the aerospace",
    imageSrc: fourthService,
    icon: <FaIndustry className="h-16 w-16" />,
    link: "/service/industry-constructions",
  },
  {
    title: "Architectural Waterjet Cutting",
    description:
      "Any material, any Designs cutting Our waterjets are capable of cutting",
    imageSrc: fifthService,
    icon: <FaGasPump className="h-16 w-16" />,
    link: "/service/industry-constructions-copy",
  },
  {
    title: "CNC Waterjet Cutting",
    description:
      "Our company is among the prominent service providers of CNC Water",
    imageSrc: sisthService,
    icon: <FaCogs className="h-16 w-16" />,
    link: "/service/mechanical-engineering",
  },
  {
    title: "Waterjet Cutting",
    description:
      "Artwork created using waterjet cutting is precise, allowing artists to create specific designs.",
    imageSrc: firstService,
    icon: <FaIndustry className="h-16 w-16" />,
    link: "/service/industry-constructions",
  },
  {
    title: "Art Work Waterjet Cutting",
    description:
      "Ashray Water Jet specializes in water jet cutting for the Oil & Gas Industry.",
    imageSrc: secondService,
    icon: <FaGasPump className="h-16 w-16" />,
    link: "/service/industry-constructions-copy",
  },
  {
    title: "Custom Waterjet Cutting",
    description:
      "Ashray Water Jet also has the ability to handle non-traditional materials. ",
    imageSrc: thirdService,
    icon: <FaCogs className="h-16 w-16" />,
    link: "/service/mechanical-engineering",
  },
];

const ServicesSection = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="text-lg text-orange-500">Services we’re offering</span>
        <h2 className="text-4xl font-bold">Industries We Serve</h2>
      </div>
      <div className="flex flex-wrap -mx-4">
        {services.map((service, index) => (
          <div key={index} className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden pt-4">
              <div className="relative">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  width={370}
                  height={316}
                  className="w-full"
                  preview={false}
                />

                <div className="absolute bottom-1 right-8 p-3 bg-orange-500 text-white text-2xl">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  <a href={service.link} className="hover:text-orange-500">
                    {service.title}
                  </a>
                </h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <div>
                  <a
                    href={service.link}
                    className="inline-flex items-center text-orange-500 hover:text-orange-700"
                  >
                    <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ImageBoxTwo = () => {
  return (
    <div className="flex justify-between container mx-auto py-8">
      {/* First Image Box */}
      <div className="flex w-1/2">
        <div className="flex items-center bg-orange-500 text-white p-4 w-1/2">
          <h3 className="text-lg font-semibold">
            <a href="http://layerdrops.com/kontinwp/contact/">
              Bringing exceptional service and quality
            </a>
          </h3>
        </div>
        <div className="w-1/2 pr-4">
          <img
            decoding="async"
            src="https://ashraywaterjet.in/wp-content/uploads/2022/07/SS-110-mm-thk-min-scaled-e1658053918607.jpg"
            alt="Exceptional Service"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Second Image Box */}
      <div className="flex w-1/2">
        <div className="w-1/2 pl-4">
          <img
            decoding="async"
            src="https://ashraywaterjet.in/wp-content/uploads/2022/09/2018-989-AaronMachineShop-WaterjetcuttinginCalgaryAlberta-e1662657447402.jpg"
            alt="Precise Cuts"
            className="w-full h-auto"
          />
        </div>
        <div className="flex items-center bg-orange-500 text-white p-4 w-1/2">
          <h3 className="text-lg font-semibold">
            <a href="http://layerdrops.com/kontinwp/contact/">
              PRECISE CUTS, UNBEATABLE TURNAROUND.
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto text-center mb-8">
        <div className="section-title mb-6">
          <span className="text-orange-500 font-semibold text-xl">
            Get to know about us
          </span>
          <h2 className="text-3xl font-bold mt-2">Abrasive Waterjets work</h2>
        </div>
      </div>

      <div className="container mx-auto flex justify-center">
        <div className="flex flex-wrap justify-between w-full">
          {/* First Image Block */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="h-[60%] w-[70%]">
              <img
                decoding="async"
                src="https://ashraywaterjet.in/wp-content/uploads/2022/07/IMG_20220518_175924-min-scaled-e1658055542651.jpg"
                alt=""
                className="w-full mb-4"
              />
            </div>
          </div>

          {/* Second Image Block */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="image-box-two__single">
              <img
                decoding="async"
                src="https://ashraywaterjet.in/wp-content/uploads/2022/09/2018-989-AaronMachineShop-WaterjetcuttinginCalgaryAlberta-e1662657447402.jpg"
                alt=""
                className="w-full h-auto mb-4"
              />
            </div>
            <div className="about-four__summery mb-6 text-3xl text-left text-white">
              Waterjet cutting makes it possible to cut practically any material
              up to 150 mm thick. The most widespread materials are various
              plastics, rubbers, titanium, copper, brass, granite, and glass.
              The material does not get hot in practical terms during this
              process, which is important if the processed material is
              heat-sensitive.
            </div>
            <div className="text-white text-3xl">
              <ul className="list-unstyled">
                <li className="flex items-center mb-2">
                  <FaMinus className="text-orange-500 mr-4" />
                  <div className="flex flex-col">
                    <p className="text-center">Waterjet Cutting</p>
                    <p className="text-center">Thickness</p>
                  </div>
                </li>
                <li className="flex items-center mb-2">
                  <FaMinus className="text-orange-500 mr-4" />
                  <div className="flex flex-col">
                    <p className="text-center">Waterjet Cutting</p>
                    <p className="text-center">Architectural</p>
                  </div>
                </li>
                <li className="flex items-center mb-2">
                  <FaMinus className="text-orange-500 mr-4" />
                  <div className="flex flex-col">
                    <p className="text-center">Waterjet Cutting</p>
                    <p className="text-center">Industrial</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NavBar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Layout>
      <Header className="sticky top-0 z-50 flex items-center justify-between px-4">
        <div className="demo-logo flex items-center">
          <Image
            src={logo}
            preview={false}
            alt="Logo"
            width={100}
            className="h-full"
          />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          className="flex-1"
        />
      </Header>
      <Content>
        <div>
          <CarouselComponent />
        </div>
      </Content>
      <IconSection />
      <ServicesSection />
      <ImageBoxTwo />
      <AboutSection />
      <div className="w-full h-[50em] mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d266961.8729507135!2d73.77586728628766!3d18.71050564355796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b70bb1a538ed%3A0x98205117f55916c3!2sAshray%20Waterjet%20Cutting%20Services!5e0!3m2!1sen!2sin!4v1725183835060!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer className="bg-black text-white p-4">
        <div className="flex flex-col items-center">
          {/* Left Aligned Logo and Text */}
          <div className="flex items-center w-full mb-4 justify-around">
            <div className="flex items-center flex-col text-2xl text-start">
              <Image
                src={logo}
                preview={false}
                alt="Logo"
                width={200}
                className="h-full mr-4"
              />
              <span className="max-w-xs ml-4">
                Ashray Waterjet offers the flexibility to cut various materials
                with high precision and saving raw material wastage
              </span>
              {/* Social Media Icons */}
              <div className="flex mt-4 mx-4 w-[70%] justify-between justify-around">
                <a href="/" rel="noopener noreferrer">
                  <FaTwitter
                    className="text-white hover:text-blue-400"
                    size={15}
                  />
                </a>
                <a
                  href="https://www.facebook.com/ashray.waterjet/"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF
                    className="text-white hover:text-blue-600"
                    size={15}
                  />
                </a>
                <a
                  href="https://in.linkedin.com/in/ashray-waterjet-71709837"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn
                    className="text-white hover:text-blue-700"
                    size={15}
                  />
                </a>
                <a
                  href="https://www.justdial.com/jdmart/Pune/Ashray-Waterjet-Cutting-Services-Talawade/020PXX20-XX20-120312132310-R4L1_BZDET/catalogue"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    className="text-white hover:text-pink-600"
                    size={15}
                  />
                </a>
              </div>
            </div>
            <div className="flex items-center flex-col text-2xl text-start">
            <ul className="gap-4">
  <li className="flex items-center gap-4">
    <div className="icon">
      <FaPhone className="text-orange-500" size={15} />
    </div>
    <div className="text">
      <p>
        <a href="tel:+91-9028923723">+91-9028923723</a>
      </p>
    </div>
  </li>
  <li className="flex items-center gap-4">
    <div className="icon">
      <FaEnvelope className="text-orange-500" size={15} />
    </div>
    <div className="text">
      <p>
        <a href="mailto:ashraywaterjet@gmail.com">
          ashraywaterjet@gmail.com
        </a>
      </p>
    </div>
  </li>
  <li className="flex items-start gap-4">
    <div className="icon mt-1">
      <FaMapMarkerAlt className="text-orange-500" size={15} />
    </div>
    <div className="text w-[20rem]">
      <p>
        Gat No 80, Plot No A/2, Jyotiba Nagar, Talawade, Pune,
        Maharashtra 411062
      </p>
    </div>
  </li>
</ul>





            </div>
          </div>

          {/* Footer Copyright Text at Bottom Center */}
          <p className="w-full text-center mt-auto">
            ©All Copyright 2022 by AshrayWaterjet
          </p>
        </div>
      </Footer>
    </Layout>
  );
};
export default NavBar;
