import { useEffect, useState } from 'react';
import './App.css'
import { Box, Flex, IconButton, Stack, Link, useDisclosure, Image, Text, Button, Icon, Grid, GridItem, Divider } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "./assets/logo.png"
import image1 from "./assets/banner1.png"
import image2 from "./assets/banner2.png"
import image3 from "./assets/banner3.png"
import image4 from "./assets/banner4.png"
import { FaCircle, FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import service1 from "./assets/service1.png"
import service2 from "./assets/service2.png"
import service3 from "./assets/service3.png"
import service4 from "./assets/service4.png"
import service5 from "./assets/service5.png"
// import "swiper/css";
import rental1 from "./assets/rental1.png"
import rental2 from "./assets/rental2.png"
import rental3 from "./assets/rental3.png"
import rental4 from "./assets/rental4.png"
import rental5 from "./assets/rental5.png"
import rental6 from "./assets/rental6.png"
import { MdOutlineMail } from 'react-icons/md';
import whatsapp from "./assets/whatsapp.png"
import camera from "./assets/camera.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './swiperStyles.css';

function App() {
  const { isOpen, onToggle } = useDisclosure();

  // Function to scroll smoothly to sections
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    image1,
    image2,
    image3,
    image4
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const events = [
    [
      "Carnival",
      "Dinner Nights",
      "Grand Openings",
      "After Parties",
      "House Parties",
      "Concerts",
      "Seminars",
      "Company Events",
      "Wedding Receptions",
      "Outreaches",
      "Sales Banquets",
      "School Dances",
      "Beach Parties",
      "Anniversaries",
      "Movie Sets"
    ],
    [
      "Art Exhibits",
      "Workshops",
      "Street Festivals",
      "Fundraisers",
      "Holiday Parties",
      "Award Ceremonies",
      "Religious Events",
      "Community Fairs",
      "Political Rallies",
      "Job Fairs",
      "Education Fairs",
      "Music Jams",
      "Hackathons",
      "Photo Shoots",
      "Car Shows",
      "Wine Tastings"
    ]
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    dots: false, // Disables pagination dots
    arrows: false, // Removes navigation arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const handleSubmit = () => {
  //   const phoneNumber = "2348100881348"; // Replace with your WhatsApp number
  //   const text = `Hello, my name is ${fullName}. My email is ${email}. ${message}`;

  //   const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`;
  //   window.open(whatsappURL, "_blank");
  // };


  return (
    <Stack bg="#000000" color={"white"} id="HOME" >
      <Box
        position="fixed"
        top="0"
        left="0"
        w="full"
        zIndex="50"
        bg={isScrolled ? "#000000" : "transparent"}
        boxShadow={isScrolled ? "md" : "none"}
        transition="background 0.3s ease-in-out"
        borderBottom={isScrolled ? "1px solid white" : ""}
      >
        <Flex maxW="90%" mx="auto" px={4} h="16" alignItems="center" justifyContent="space-between">
          <Box fontSize="xl" fontWeight="bold" color="blue.500" cursor="pointer" onClick={() => scrollToSection("HOME")}>
            <Image src={logo} w={{base: "60px", md: "100px"}} />
          </Box>

          <IconButton
            display={{ base: "block", md: "none" }}
            // background={"rgb(156 163 175"}
            // background={"gray"}
            onClick={onToggle}
            icon={isOpen ?  <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            fontSize={"30px"}
            aria-label="Toggle Menu"
            _hover={{background: "none"}}
          />

          {/* Desktop Navigation */}
          <Stack direction="row" spacing={6} display={{ base: "none", md: "flex" }} align={"center"}>
            {["HOME", "SERVICES", "CONTACT"].map((section) => (
              <Link
                key={section}
                onClick={() => scrollToSection(section)}
                cursor="pointer"
                color="white"
                position="relative"
                fontWeight={"500"}
                _hover={{ color: "#EA8014", textDecoration: "none", _after: { transform: "scaleX(1)" } }}
                _after={{
                  content: '""',
                  position: "absolute",
                  left: "0",
                  bottom: "-2px",
                  width: "100%",
                  height: "2px",
                  bg: "#EA8014",
                  transform: "scaleX(0)",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
            <Text cursor={"pointer"} as={"a"} href="https://wa.me/2348100881348">
              <Image src={whatsapp} />
            </Text>
          </Stack>
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <Box pb={4} display={{ md: "none" }} bg="white" boxShadow="md">
            <Stack as="nav" spacing={3} px={4} py={2}>
              {["HOME", "SERVICES", "CONTACT"].map((section) => (
                <Link key={section} onClick={() => scrollToSection(section)} cursor="pointer" color="gray.700" _hover={{ color: "blue.500" }}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </Stack>
          </Box>
        )}
      </Box>

      {/* Hero Section */}
      <Box
        w="100%"
        h="100vh"
        bgImage={`url(${images[currentImage]})`}
        bgSize="cover"
        bgPosition="center"
        transition="background-image 1s ease-in-out"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
        position="relative"
      >
        <Box p={6} borderRadius="md">
          <Text fontSize={{ base: "32px", md: "48px", lg: "64px" }} fontWeight="600">
            BOOK US <br /> FOR YOUR NEXT <span style={{ color: "#EA8014" }}>EVENT!</span>
          </Text>
          <Text fontSize={{ base: "16px", md: "20px" }}>
            Enjoy a lifetime memory with our high-quality entertainment.
          </Text>

          {/* Bullet Points */}
          <Flex justify="center" align="center" gap={4} wrap="wrap" mb={4} mt={8} fontSize={{ base: "16px", md: "20px" }} fontWeight="bolder">
            {[
              { color: "red.500", text: "Chart-topping Disc Jockey (DJ) in the city!" },
              { color: "yellow.400", text: "Impeccable Video Coverage and Photography" },
              { color: "purple.500", text: "Master of Ceremony (optional)" },
            ].map((item, index) => (
              <Flex key={index} align="center">
                <Icon as={FaCircle} color={item.color} boxSize={3} mr={2} />
                <Text fontWeight="bold">{item.text}</Text>
              </Flex>
            ))}
          </Flex>

          {/* Book Now Button */}
          <Stack pb={10} w="fit-content" justify="center" mx="auto">
            <Button
              bgGradient="linear(to-r, #EAAA3D, #7A430D)"
              color="white"
              _hover={{ bgGradient: "linear(to-r, #D99A2B, #69350B)" }}
              px={6}
              py={6}
              mt={6}
              fontSize="lg"
              borderRadius="full"
              as={"a"} href="https://wa.me/2348100881348"
              fontWeight={"400"}
            >
              Book Now
            </Button>
          </Stack>
        </Box>
      </Box>




      <section id='SERVICES'>
        <Stack mt={{ base: 4, md: 32 }} maxW={{ base: "95%", lg: "90%" }} mx="auto">
          <Stack >
            <Text color={"#F7C355"} textAlign={"center"} fontSize={{ base: "32px", md: "48px" }} fontWeight={"500"}>Our Services</Text>
            <Text fontSize={{ base: "16px", md: "20px" }} textAlign={"center"}>Corporate Events | Live Concerts | Weddings | Audiovisual Production | Rentals</Text>
          </Stack>


          <Stack mt={{ base: 4, md: 16 }}>
            <Grid
              templateRows='repeat(2, 1fr)'
              templateColumns={{ base: 'repeat(1 1fr)', lg: 'repeat(3, 1fr)' }}
              gap={8}
              m={{ base: 8, md: 2 }}
            >
              <GridItem rowSpan={2} colSpan={1} boxShadow="0 0 20px #FF4D03B2, 0 0 20px #FF4D03B2"
                border="2px solid #FF4D03B2 " borderRadius={"30px"}>
                <Image src={service1} w={"full"} borderTopRadius={"30px"} h={"500px"} objectFit={"cover"} />
                <Stack m={4} my={8}>
                  <Text fontSize={{ base: "24px", md: "32px" }} fontWeight={"500"}>Event Coverage</Text>
                  <Text fontSize={{ base: "16px", md: "20px" }}>With our digital cameras, we cover (record) live events such as conferences (business, academic, or political), weddings, parties, concerts, rallies, publicity stunts, festivals, anniversaries, outreaches, carnivals, etc</Text>
                </Stack>

              </GridItem>
              <GridItem colSpan={1} boxShadow="0 0 20px #FF4D03B2, 0 0 20px #FF4D03B2"
                border="2px solid #FF4D03B2 " borderRadius={"30px"} >
                <Image src={service2} w={"full"} borderTopRadius={"30px"} objectFit={"cover"} />
                <Stack m={4} my={8}>
                  <Text fontSize={{ base: "24px", md: "32px" }} fontWeight={"500"}>Disc Jockey</Text>
                  <Text fontSize={{ base: "16px", md: "20px" }}>We have a chart-topping DJ service. We will set up and play recorded music for your audience, ensuring excellent music and sound production. Our DJs add creative flair to their art and we never run out of popular songs and danceable beats. </Text>
                </Stack>
              </GridItem>
              <GridItem colSpan={1} boxShadow="0 0 20px #FF4D03B2, 0 0 20px #FF4D03B2"
                border="2px solid #FF4D03B2 " borderRadius={"30px"} >
                <Image src={service3} w={"full"} borderTopRadius={"30px"} objectFit={"cover"} />
                <Stack m={4} my={8}>
                  <Text fontSize={{ base: "24px", md: "32px" }} fontWeight={"500"}>Equipment Rental</Text>
                  <Text fontSize={{ base: "16px", md: "20px" }}>When we can, we lease out our equipment to event managers and film makers. Thereby, we relieve you of the financial burden of owning high-grade equipment. We ensure you meet our equipment in a good and rentable condition.  </Text>
                </Stack>
              </GridItem>
              <GridItem colSpan={1} boxShadow="0 0 20px #FF4D03B2, 0 0 20px #FF4D03B2"
                border="2px solid #FF4D03B2 " borderRadius={"30px"} >
                <Image src={service4} w={"full"} borderTopRadius={"30px"} objectFit={"cover"} />
                <Stack m={4} my={8}>
                  <Text fontSize={{ base: "24px", md: "32px" }} fontWeight={"500"}>Audiovisual Production</Text>
                  <Text fontSize={{ base: "16px", md: "20px" }}>This entails the making of both auditory and visual contents. Among these are adverts/commercials, corporate videos, TV shows, films, music videos, etc.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem colSpan={1} boxShadow="0 0 20px #FF4D03B2, 0 0 20px #FF4D03B2"
                border="2px solid #FF4D03B2 " borderRadius={"30px"} >
                <Image src={service5} w={"full"} borderTopRadius={"30px"} objectFit={"cover"} />
                <Stack m={4} my={8}>
                  <Text fontSize={{ base: "24px", md: "32px" }} fontWeight={"500"}>Digital Media/AI</Text>
                  <Text fontSize={{ base: "16px", md: "20px" }}>The business landscape has been taken over by the digital media. Our enterprise cuts across social media, web, live-streaming, animation, AI, etc.

                  </Text>
                </Stack>
              </GridItem>
            </Grid>
          </Stack>
        </Stack>
      </section>
      <Stack mt={20}>

        <Box
          bgImage={`url(${camera}) `}// Update with your image path
          bgSize="cover"

          bgPosition="center"
          // bgRepeat="no-repeat"
          minH="100vh" // Full screen height

        >

          <Box py={6} maxW={{ base: "95%", lg: "90%" }} mx={"auto"} w={"100%"}>
            <Box position="relative" display="inline-block">
              <Text
                fontSize={{ base: "32px", md: "48px" }}
                fontWeight="400"
                color="yellow.400"
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  right: "0",
                  bottom: "-8px",
                  width: "160px", // Adjust as needed
                  height: "4px", // Adjust thickness
                  backgroundColor: "white",
                }}
              >
                Events We Cover
              </Text>
            </Box>
            <Box width="100%" height="100%" mt={{ base: 8, md: 32 }}>
              <Slider {...settings} >
                {events.map((group, index) => (
                  <div key={index}>
                    <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={{ base: 6, md: 10 }}>
                      {group.map((event, idx) => (
                        <Flex key={idx} align="center" px={4} py={2} bg="#FFFFFF" borderRadius="12px" color="black">
                          <Icon as={FaCircle} color="#D9D9D9" boxSize={3} mr={2} />
                          <Text fontSize={{ base: '16px', md: "22px" }} maxW="160px" isTruncated textAlign="start" fontWeight="400">{event}</Text>
                        </Flex>
                      ))}
                    </Grid>
                  </div>
                ))}
              </Slider>
            </Box>
          </Box>
        </Box>

      </Stack>





      <section id='SERVICES'>
        <Stack mt={{ base: 4, md: 32 }}>
          <Text color={"#F7C355"} textAlign={"center"} fontSize={{ base: "32px", md: '48px' }} fontWeight={"400"}>Visual Of Our Rentals</Text>
          <Text fontSize={{ base: '16px', md: "20px" }} textAlign={"center"}>Cameras | Speakers |  Disc Jockey</Text>
        </Stack>
        <Stack maxW="90%" mx="auto" mt={{ base: 4, md: 16 }}>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
            <GridItem w='100%' >
              <Image src={rental1} w={"100%"} />
            </GridItem>
            <GridItem w='100%' h={"100%"} >
              <Image src={rental2} w={"100%"} h={"100%"} />
            </GridItem>
            <GridItem w='100%' h={"100%"} >
              <Image src={rental3} w={"100%"} h={"100%"} />
            </GridItem>
            <GridItem w='100%' h={"100%"} >
              <Image src={rental4} w={"100%"} h={"100%"} />
            </GridItem>
            <GridItem w='100%' h={"100%"} >
              <Image src={rental5} w={"100%"} h={"100%"} />
            </GridItem>
            <GridItem w='100%' h={"100%"} >
              <Image src={rental6} w={"100%"} h={"100%"} />
            </GridItem>
          </Grid>
        </Stack>
      </section>

      <Stack id="CONTACT" mt={{ base: 4, md: 32 }} maxW="90%" mx="auto" w={"full"}>
        <Flex flexWrap={"wrap"} gap={10} flexDirection={{base: 'column', md: 'row'}}>
          <Stack flex={1} rowGap={19}>
            <Text fontSize={{ base: "32px", md: "48px" }} fontWeight="400">
              Contact us <span style={{ color: "#EA8014" }}>Today</span>
            </Text>
            <Text fontSize={{ base: "16px", md: "20px" }}>Your satisfaction is guaranteed with Toprofile! Our multimedia enterprise cuts across equipment rental, audiovisual production, videography, TV programming, photography, animation, AI, music, live-streaming, graphics, among others.</Text>
            <Flex fontSize={{ base: "16px", md: "20px" }} columnGap={4} align={"center"}>
              <Text><FaPhoneAlt /></Text>
              <Text>08100881348, 08106438010</Text>
            </Flex>
            <Flex fontSize={{ base: "16px", md: "20px" }} columnGap={4} align={"center"} as={"a"} href="mailto:info@toprofile.com" target="_blank" rel="noopener noreferrer">
              <Text><MdOutlineMail /></Text>
              <Text>toprofilemultimedia@gmail.com</Text>
            </Flex>
          </Stack>
          {/* <Stack flex={1} rowGap={7}>
            <Flex columnGap={5} flexWrap={"wrap"} rowGap={7}>
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input type='text' size={"lg"} bg={"white"} border={"1px solid white"} color={"black"} _focus={{ borderColor: 'white' }} value={fullName}
                  onChange={(e) => setFullName(e.target.value)} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input type='email' size={"lg"} bg={"white"} border={"1px solid white"} color={"black"} _focus={{ borderColor: 'white' }} value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
            </Flex>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea size={"lg"} bg={"white"} border={"1px solid white"} color={"black"} _focus={{ borderColor: 'white' }} value={message}
                onChange={(e) => setMessage(e.target.value)} />
            </FormControl>
            <Button
              bgGradient="linear(to-r, orange.500, purple.600)"
              color="white"
              fontSize="md"
              py={6}
              px={8}
              borderRadius="18.48px"
              fontWeight={"500"}
              _hover={{
                bgGradient: "linear(to-r, orange.600, purple.700)",
                // transform: "scale(1.05)",
                transition: "0.3s ease-in-out",
              }}
              // onClick={handleSubmit}
            >
              Send Message
            </Button>
          </Stack> */}
          <Stack flex={1}>
            <iframe
              src="https://whatsform.com/oBGmZE"
              width="100%"
              height="600"
              frameBorder="0"
            ></iframe>
          </Stack>

        </Flex>
      </Stack>


      <Stack mt={"10px"} maxW="90%" mx="auto" w={"full"}>
        <Flex justify={"space-between"} align={"center"} flexWrap={"wrap"}>
          <Image src={logo}  w={{base: "60px", md: "100px"}}/>
          <Flex columnGap={4} fontSize={"20px"} >
            <Text cursor={"pointer"} as={"a"} target='_blank' href='https://www.instagram.com/toprofilemultimedialtd?igsh=MTUxenNsNnl3bHFrcA=='><FaInstagram /></Text>
            <Text cursor={"pointer"}> <MdOutlineMail /></Text>
            <Text cursor={"pointer"}> <FaTwitter /></Text>
            <Text cursor={"pointer"}> <FaFacebook /></Text>
          </Flex>
        </Flex>
        <Divider bg={"#7A7A7A"} my={2} />
        <Flex justify={"space-between"} align={"center"} mb={10} flexWrap={"wrap"} rowGap={2}>
          <Text>Copyright © {new Date().getFullYear()} Toprofilemultimedia</Text>

          <Flex columnGap={8} fontSize={"16px"}  >
            <Text cursor={"pointer"} _hover={{ color: "#EA8014" }} onClick={() => scrollToSection("SERVICES")}>Services</Text>
            <Text cursor={"pointer"} _hover={{ color: "#EA8014" }} onClick={() => scrollToSection("CONTACT")}>Contact Us</Text>
            <Text cursor={"pointer"} onClick={() => scrollToSection("HOME")} _hover={{ color: "#EA8014" }}> Book Now</Text>
          </Flex>
        </Flex>
      </Stack>

    </Stack >
  )
}

export default App
