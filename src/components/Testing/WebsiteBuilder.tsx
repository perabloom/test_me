// import React, { useState, useRef } from 'react';
// import { FaPhone, FaMapMarker } from 'react-icons/fa';
// import {
//   ChakraProvider,
//   Box,
//   VStack,
//   HStack,
//   Input,
//   Textarea,
//   Button,
//   Heading,
//   Text,
//   Flex,
//   Select,
//   FormControl,
//   FormLabel,
//   Icon,
//   useColorMode,
//   useToast,
//   Image,
//   Wrap,
//   WrapItem,
//   Container,
//   SimpleGrid,
//   Link,
//   extendTheme,
// } from '@chakra-ui/react';
// import {
//   FaCode,
//   FaPalette,
//   FaRocket,
//   FaImage,
//   FaEdit,
//   FaBriefcase,
//   FaUser,
//   FaEnvelope
// } from 'react-icons/fa';

// const theme = extendTheme({
//   styles: {
//     global: {
//       body: {
//         bg: "gray.50",
//       }
//     }
//   },
//   components: {
//     Button: {
//       baseStyle: {
//         fontWeight: "bold",
//       },
//       variants: {
//         solid: {
//           bg: "blue.500",
//           color: "white",
//           _hover: {
//             bg: "blue.600",
//           },
//         },
//       },
//     },
//   },
// });

// const WebsiteBuilder = () => {
//   const [project, setProject] = useState({
//     businessName: 'TechNova Solutions',
//     tagline: 'Transforming Digital Landscapes',
//     services: [
//       { name: 'Web Development', icon: FaCode },
//       { name: 'UI/UX Design', icon: FaPalette },
//       { name: 'Digital Strategy', icon: FaRocket }
//     ],
//     heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
//     primaryColor: '#3182CE',
//     industry: 'Technology',
//     description: 'We craft innovative digital solutions that drive business growth and technological advancement.',
//     portfolio: [
//       { title: 'Project 1', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
//       { title: 'Project 2', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
//       { title: 'Project 3', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
//     ],
//     about: 'TechNova Solutions is a cutting-edge technology company dedicated to pushing the boundaries of digital innovation.',
//     contact: {
//       email: 'info@technova.com',
//       phone: '+1 (555) 123-4567',
//       address: '123 Tech Street, Silicon Valley, CA 94000'
//     }
//   });

//   const { colorMode, toggleColorMode } = useColorMode();
//   const toast = useToast();

//   const servicesRef = useRef(null);
//   const portfolioRef = useRef(null);
//   const aboutRef = useRef(null);
//   const contactRef = useRef(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProject(prev => ({ ...prev, [name]: value }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProject(prev => ({ ...prev, heroImage: reader.result }));
//         toast({
//           title: "Image Uploaded",
//           description: "Your hero image has been successfully uploaded.",
//           status: "success",
//           duration: 2000,
//           isClosable: true
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleServiceChange = (index, value) => {
//     const newServices = [...project.services];
//     newServices[index].name = value;
//     setProject(prev => ({ ...prev, services: newServices }));
//   };

//   const scrollToSection = (ref) => {
//     ref.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <ChakraProvider theme={theme}>
//       <Flex h="100vh" overflow="hidden">
//         {/* Configuration Panel */}
//         {/* Configuration Panel */}
// <Box
//   w="400px"
//   bg="white"
//   p={6}
//   overflowY="auto"
//   borderRight="1px solid"
//   borderColor="gray.200"
//   boxShadow="lg"
// >
//   <VStack spacing={6} align="stretch">
//     <Heading size="lg" mb={4}>Website Configuration</Heading>

//     <FormControl>
//       <FormLabel>Business Name</FormLabel>
//       <Input
//         name="businessName"
//         value={project.businessName}
//         onChange={handleInputChange}
//         placeholder="Enter Business Name"
//       />
//     </FormControl>

//     <FormControl>
//       <FormLabel>Tagline</FormLabel>
//       <Input
//         name="tagline"
//         value={project.tagline}
//         onChange={handleInputChange}
//         placeholder="Your Compelling Tagline"
//       />
//     </FormControl>

//     <FormControl>
//       <FormLabel>Description</FormLabel>
//       <Textarea
//         name="description"
//         value={project.description}
//         onChange={handleInputChange}
//         placeholder="Brief description of your business"
//         rows={4}
//       />
//     </FormControl>

//     <FormControl>
//       <FormLabel>Industry</FormLabel>
//       <Select
//         name="industry"
//         value={project.industry}
//         onChange={handleInputChange}
//       >
//         <option value="Technology">Technology</option>
//         <option value="Finance">Finance</option>
//         <option value="Healthcare">Healthcare</option>
//         <option value="Education">Education</option>
//       </Select>
//     </FormControl>

//     <FormControl>
//       <FormLabel>Services</FormLabel>
//       {project.services.map((service, index) => (
//         <Input
//           key={index}
//           value={service.name}
//           onChange={(e) => handleServiceChange(index, e.target.value)}
//           placeholder={`Service ${index + 1}`}
//           mb={2}
//         />
//       ))}
//       <Button size="sm" onClick={addService} mt={2}>Add Service</Button>
//     </FormControl>

//     <FormControl>
//       <FormLabel>Portfolio Projects</FormLabel>
//       {project.portfolio.map((item, index) => (
//         <VStack key={index} align="stretch" mb={4}>
//           <Input
//             value={item.title}
//             onChange={(e) => handlePortfolioChange(index, 'title', e.target.value)}
//             placeholder="Project Title"
//           />
//           <Input
//             value={item.image}
//             onChange={(e) => handlePortfolioChange(index, 'image', e.target.value)}
//             placeholder="Image URL"
//           />
//         </VStack>
//       ))}
//       <Button size="sm" onClick={addPortfolioItem} mt={2}>Add Portfolio Item</Button>
//     </FormControl>

//     <FormControl>
//       <FormLabel>About Us</FormLabel>
//       <Textarea
//         name="about"
//         value={project.about}
//         onChange={handleInputChange}
//         placeholder="Tell us about your company"
//         rows={4}
//       />
//     </FormControl>

//     <FormControl>
//       <FormLabel>Contact Information</FormLabel>
//       <Input
//         name="contact.email"
//         value={project.contact.email}
//         onChange={handleContactChange}
//         placeholder="Email"
//         mb={2}
//       />
//       <Input
//         name="contact.phone"
//         value={project.contact.phone}
//         onChange={handleContactChange}
//         placeholder="Phone"
//         mb={2}
//       />
//       <Input
//         name="contact.address"
//         value={project.contact.address}
//         onChange={handleContactChange}
//         placeholder="Address"
//       />
//     </FormControl>

//     <FormControl>
//       <FormLabel>Hero Image</FormLabel>
//       <Input
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//         p={1}
//       />
//     </FormControl>

//     <Button
//       leftIcon={<FaEdit />}
//       colorScheme="blue"
//       onClick={generateWebsite}
//     >
//       Generate Website
//     </Button>
//   </VStack>
// </Box>

//         <Box
//           w="400px"
//           bg="white"
//           p={6}
//           overflowY="auto"
//           borderRight="1px solid"
//           borderColor="gray.200"
//           boxShadow="lg"
//         >
//           {/* Configuration inputs (same as before) */}
//         </Box>

//         {/* Preview Panel */}
//         <Box
//           flex={1}
//           bg="gray.50"
//           overflowY="auto"
//         >
//           {/* Navigation */}
//           <Box
//             position="sticky"
//             top={0}
//             bg="white"
//             boxShadow="sm"
//             zIndex={1}
//           >
//             <Container maxW="container.xl">
//               <Flex justify="space-between" align="center" py={4}>
//                 <Heading size="lg">{project.businessName}</Heading>
//                 <HStack spacing={6}>
//                   <Link onClick={() => scrollToSection(servicesRef)}>Services</Link>
//                   <Link onClick={() => scrollToSection(portfolioRef)}>Portfolio</Link>
//                   <Link onClick={() => scrollToSection(aboutRef)}>About</Link>
//                   <Link onClick={() => scrollToSection(contactRef)}>Contact</Link>
//                 </HStack>
//               </Flex>
//             </Container>
//           </Box>

//           {/* Hero Section */}
//           <Box
//             h="70vh"
//             bgImage={`url(${project.heroImage})`}
//             bgSize="cover"
//             bgPosition="center"
//             position="relative"
//           >
//             <Box
//               position="absolute"
//               top={0}
//               left={0}
//               right={0}
//               bottom={0}
//               bg="rgba(0,0,0,0.5)"
//             />
//             <Flex
//               direction="column"
//               justify="center"
//               align="center"
//               h="100%"
//               position="relative"
//               color="white"
//             >
//               <Heading size="3xl" mb={4} textAlign="center">
//                 {project.businessName}
//               </Heading>
//               <Text fontSize="2xl" textAlign="center">
//                 {project.tagline}
//               </Text>
//             </Flex>
//           </Box>

//           {/* Services Section */}
//           <Box py={20} bg="white" ref={servicesRef}>
//             <Container maxW="container.xl">
//               <Heading textAlign="center" mb={10}>Our Services</Heading>
//               <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
//                 {project.services.map((service, index) => (
//                   <Box
//                     key={index}
//                     p={6}
//                     boxShadow="xl"
//                     borderRadius="lg"
//                     bg="blue.50"
//                     textAlign="center"
//                   >
//                     <Icon as={service.icon} w={12} h={12} color="blue.500" mb={4} />
//                     <Heading size="md" mb={2}>{service.name}</Heading>
//                     <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
//                   </Box>
//                 ))}
//               </SimpleGrid>
//             </Container>
//           </Box>

//           {/* Portfolio Section */}
//           <Box py={20} bg="gray.100" ref={portfolioRef}>
//             <Container maxW="container.xl">
//               <Heading textAlign="center" mb={10}>Our Portfolio</Heading>
//               <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
//                 {project.portfolio.map((item, index) => (
//                   <Box
//                     key={index}
//                     boxShadow="xl"
//                     borderRadius="lg"
//                     overflow="hidden"
//                   >
//                     <Image src={item.image} alt={item.title} w="100%" h="200px" objectFit="cover" />
//                     <Box p={4} bg="white">
//                       <Heading size="md">{item.title}</Heading>
//                     </Box>
//                   </Box>
//                 ))}
//               </SimpleGrid>
//             </Container>
//           </Box>

//           {/* About Section */}
//           <Box py={20} bg="blue.500" color="white" ref={aboutRef}>
//             <Container maxW="container.xl">
//               <Heading textAlign="center" mb={10}>About Us</Heading>
//               <Text fontSize="xl" textAlign="center">
//                 {project.about}
//               </Text>
//             </Container>
//           </Box>

//           {/* Contact Section */}
//           <Box py={20} bg="white" ref={contactRef}>
//             <Container maxW="container.xl">
//               <Heading textAlign="center" mb={10}>Contact Us</Heading>
//               <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
//                 <VStack align="center">
//                   <Icon as={FaEnvelope} w={8} h={8} color="blue.500" mb={2} />
//                   <Text fontWeight="bold">Email</Text>
//                   <Text>{project.contact.email}</Text>
//                 </VStack>
//                 <VStack align="center">
//                   <Icon as={FaPhone} w={8} h={8} color="blue.500" mb={2} />
//                   <Text fontWeight="bold">Phone</Text>
//                   <Text>{project.contact.phone}</Text>
//                 </VStack>
//                 <VStack align="center">
//                   <Icon as={FaMapMarker} w={8} h={8} color="blue.500" mb={2} />
//                   <Text fontWeight="bold">Address</Text>
//                   <Text>{project.contact.address}</Text>
//                 </VStack>
//               </SimpleGrid>
//             </Container>
//           </Box>
//         </Box>
//       </Flex>
//     </ChakraProvider>
//   );
// };
// const addService = () => {
//   setProject(prev => ({
//     ...prev,
//     services: [...prev.services, { name: '', icon: FaRocket }]
//   }));
// };

// const addPortfolioItem = () => {
//   setProject(prev => ({
//     ...prev,
//     portfolio: [...prev.portfolio, { title: '', image: '' }]
//   }));
// };

// const handlePortfolioChange = (index, field, value) => {
//   const newPortfolio = [...project.portfolio];
//   newPortfolio[index][field] = value;
//   setProject(prev => ({ ...prev, portfolio: newPortfolio }));
// };

// const handleContactChange = (e) => {
//   const { name, value } = e.target;
//   const [field, subfield] = name.split('.');
//   setProject(prev => ({
//     ...prev,
//     [field]: { ...prev[field], [subfield]: value }
//   }));
// };

// const generateWebsite = () => {
//   // Here you would typically save the project data or trigger a build process
//   toast({
//     title: "Website Generated",
//     description: "Your website has been successfully generated.",
//     status: "success",
//     duration: 3000,
//     isClosable: true
//   });
// };

// export default WebsiteBuilder;


const WebsiteBuilder = () => {
  return <div>Estimate Generator Component</div>;
};

export default WebsiteBuilder;
