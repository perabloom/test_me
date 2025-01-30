import { useState } from 'react';
import { Container, Spinner, Heading, Text, Box, FormControl, FormLabel, Input, Textarea, Button, Grid, GridItem, Image, SimpleGrid, Stack, Flex } from '@chakra-ui/react';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/_layout/Website")({
    component: Website,
});
import axios from 'axios';

const generateWebpageCode = async (prompt: string) => {
    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/Qwen/Qwen2.5-Coder-32B-Instruct',
            { inputs: prompt },
            {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_HUGGINGFACE_KEY}`,
                },
            }
        );
        console.log('API Response:', response); // Log the entire response
        return response.data;
    } catch (error) {
        console.error('Error generating webpage code:', error);
        return null;
    }
};


// const htmlM = `<html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Modern Website with Chakra UI</title>
//     <link rel="stylesheet" href="https://unpkg.com/@chakra-ui/core@latest/dist/css/chakra-ui.min.css">
// </head>
// <body>
//     <div id="root"></div>
//     <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
//     <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
//     <script src="https://unpkg.com/@chakra-ui/core@latest/dist/chakra-ui-react.production.min.js"></script>
//     <script src="https://unpkg.com/framer-motion@4.1.11/dist/framer-motion.umd.min.js"></script>
// </body>
// </html>`;

// const resp = `You are a web developer tasked with creating a modern, responsive website using Chakra UI components. The website should include the following sections:
//                         - Navigation bar with links to Home, Services, Testimonials, and Contact.
//                         - Hero section with a welcome message and a call-to-action button.
//                         - Testimonials section with quotes from satisfied customers.
//                         - Business hours section with days and times of operation.

//                         Please provide the output in the following format:
//                         HTML: <html>...</html>
//                         CSS: <style>...</style>
//                         JS: <script>...</script>

//                         Ensure the HTML is structured with semantic tags, the CSS is styled for a clean and modern look, and the JavaScript includes any necessary interactivity. Don't comment the code for brevity. HTML: <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Modern Website with Chakra UI</title>
//     <link rel="stylesheet" href="https://unpkg.com/@chakra-ui/core@latest/dist/css/chakra-ui.min.css">
// </head>
// <body>
//     <div id="root"></div>
//     <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
//     <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
//     <script src="https://unpkg.com/@chakra-ui/core@latest/dist/chakra-ui-react.production.min.js"></script>
//     <script src="https://unpkg.com/framer-motion@4.1.11/dist/framer-motion.umd.min.js"></script>
// </body>
// </html>
// CSS: <style>
//     body {
//         background-color: #f7fafc;
//         font-family: Arial, sans-serif;
//     }
//     .hero {
//         background-image: url('https://source.unsplash.com/random/1920x1080');
//         background-size: cover;
//         background-position: center;
//         height: 100vh;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         color: white;
//         text-align: center;
//         padding: 2rem;
//     }
//     .testimonials {
//         background-color: #f9fafb;
//         padding: 4rem 2rem;
//         text-align: center;
//     }
//     .testimonial-quote {
//         padding: 2rem;
//         border-left: 4px solid #3182ce;
//     }
//     .business-hours {
//         background-color: #e2e8f0;
//         padding: 4rem 2rem;
//         text-align: center;
//     }
// </style>
// JS: <script>
//     const { Box, Button, Flex, Heading, Text, chakra } = window.chakraui;

//     const Testimonial = ({ quote, author }) => (
//         <Box className="testimonial-quote" my={4}>
//             <Text fontSize="xl" mb={2}>{quote}</Text>
//             <Text fontWeight="bold">- {author}</Text>
//         </Box>
//     );

//     const App = () => (
//         <chakra.div>
//             <Flex as="nav" backgroundColor="#3182ce" color="white" p={4} justify="space-between">
//                 <Heading as="h1" size="lg">Business Name</Heading>
//                 <Flex>
//                     <chakra.a href="#home" mx={2}>Home</chakra.a>
//                     <chakra.a href="#services" mx={2}>Services</chakra.a>
//                     <chakra.a href="#testimonials" mx={2}>Testimonials</chakra.a>
//                     <chakra.a href="#contact" mx={2}>Contact</chakra.a>
//                 </Flex>
//             </Flex>
//             <Box className="hero" id="home">
//                 <Heading>Welcome to Our Business</Heading>
//                 <Text fontSize="xl" mb={4}>We provide top-notch services to make your life easier.</Text>
//                 <Button colorScheme="blue" size="lg" mt={4}>Learn More</Button>
//             </Box>
//             <Box className="testimonials" id="testimonials">
//                 <Heading as="h2" size="xl" mb={4}>What Our Customers Say</Heading>
//                 <Testimonial quote="Exceptional service!" author="John Doe" />
//                 <Testimonial quote="Highly recommend!" author="Jane Smith" />
//             </Box>
//             <Box className="business-hours" id="business-hours">
//                 <Heading as="h2" size="xl" mb={4}>Business Hours</Heading>
//                 <Text>Monday to Friday: 9 AM - 6 PM</Text>
//                 <Text>Saturday: 10 AM - 4 PM</Text>
//                 <Text>Sunday: Closed</Text>
//             </Box>
//         </chakra.div>
//     );

//     ReactDOM.render(<App />, document.getElementById('root'));
// </script>`;

export default function Website() {
    const [businessName, setBusinessName] = useState('');
    const [businessDescription, setBusinessDescription] = useState('');
    const [logo, setLogo] = useState<File | null>(null);
    const [pictures, setPictures] = useState<File[]>([]);
    const [showWebsite, setShowWebsite] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setLogo(e.target.files[0]);
        }
    };

    const handlePicturesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setPictures(Array.from(e.target.files));
        }
    };

    const renderGeneratedWebsite = () => (
        <Box bg="gray.50" minH="100vh">
            <Box bg="blue.500" color="white" py={4}>
                <Container maxW="7xl" display="flex" justifyContent="space-between" alignItems="center">
                    <Heading size="lg">{businessName || "Your Business"}</Heading>
                    <Button colorScheme="whiteAlpha" variant="outline">Contact Us</Button>
                </Container>
            </Box>
            <Container maxW="7xl" py={12}>
                <Stack spacing={8}>
                    <Box textAlign="center">
                        <Heading as="h1" size="2xl" mb={4}>Welcome to {businessName || "Your Business"}</Heading>
                        <Text fontSize="lg" color="gray.600">{businessDescription || "Your business description goes here."}</Text>
                    </Box>
                    {logo && <Image src={URL.createObjectURL(logo)} alt="Logo" mx="auto" boxSize="150px" />}
                    <Box>
                        <Heading as="h2" size="lg" mb={4}>Our Gallery</Heading>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                            {pictures.map((picture, index) => (
                                <Image key={index} src={URL.createObjectURL(picture)} alt={`Picture ${index + 1}`} boxSize="200px" objectFit="cover" />
                            ))}
                        </SimpleGrid>
                    </Box>
                    <Box>
                        <Heading as="h2" size="lg" mb={4}>Testimonials</Heading>
                        <Text fontSize="md" color="gray.600">"This is the best business ever!" - Happy Customer</Text>
                        <Text fontSize="md" color="gray.600">"Amazing service and quality!" - Satisfied Client</Text>
                    </Box>
                    <Box>
                        <Heading as="h2" size="lg" mb={4}>Business Hours</Heading>
                        <Text fontSize="md" color="gray.600">Monday - Friday: 9:00 AM - 5:00 PM</Text>
                        <Text fontSize="md" color="gray.600">Saturday: 10:00 AM - 4:00 PM</Text>
                        <Text fontSize="md" color="gray.600">Sunday: Closed</Text>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
    const handleCreateWebsite = async () => {
        setIsLoading(true); // Start loading
        const prompt = `You are a web developer tasked with creating a modern, responsive website. The website should include the following sections:
                        - Navigation bar with links to Home, Services, Testimonials, and Contact.
                        - Hero section with a welcome message and a call-to-action button.
                        - Testimonials section with quotes from satisfied customers.
                        - Business hours section with days and times of operation.

                        The business name is: ${businessName}
                        The business description is: ${businessDescription}

                        Please provide the output in the following format:
                        HTML: <html>...</html>
                        CSS: <style>...</style>
                        JS: <script>...</script>

                        Ensure the HTML is structured with semantic tags, the CSS is styled for a clean and modern look, and the JavaScript includes any necessary interactivity. Don't comment the code`;


        console.log('Prompt:', prompt);
        const generatedCode = await generateWebpageCode(prompt);
        setIsLoading(false); // Stop loading

        if (generatedCode && Array.isArray(generatedCode) && generatedCode.length > 0) {
            const generatedText = generatedCode[0].generated_text;

            console.log('Generated Text:', generatedText);

            // Extract HTML, CSS, and JS from the generated text
            // Step 1: Remove the unwanted lines
            const cleanedResp = generatedText.replace(/HTML: <html>.*<\/html>/, '')
                .replace(/CSS: <style>.*<\/style>/, '')
                .replace(/JS: <script>.*<\/script>/, '');

            // Step 2: Apply the regex patterns
            const htmlRegex = /<html[\s\S]*?<\/html>/;
            const cssRegex = /<style>[\s\S]*?<\/style>/;
            const jsRegex = /<script>[\s\S]*?<\/script>/;

            const htmlMatch = cleanedResp.match(htmlRegex);
            const cssMatch = cleanedResp.match(cssRegex);
            const jsMatch = cleanedResp.match(jsRegex);

            console.log('HTML:', htmlMatch && htmlMatch[0]);
            console.log('CSS:', cssMatch && cssMatch[0]);
            console.log('JS:', jsMatch && jsMatch[0]);


            // Create a new DOM element to hold the generated website
            const websiteContainer = document.createElement('div');
            websiteContainer.innerHTML = htmlMatch && htmlMatch[0];
            console.log("websiteContainer",websiteContainer.innerHTML)

            // Add the CSS styles to the website container
            const styleElement = document.createElement('style');
            styleElement.textContent = cssMatch && cssMatch[0] || '';
            document.head.appendChild(styleElement);

            // Add the JavaScript code to the website container
            //const scriptElement = document.createElement('script');
            //scriptElement.textContent = jsMatch && jsMatch[0] || '';
            //websiteContainer.appendChild(scriptElement);

            // Append the website container to the page
            const websiteGridItem = document.getElementById('website-grid-item');
            if (websiteGridItem) {
                // Clear any existing content
                //websiteGridItem.innerHTML = '';

                websiteGridItem.appendChild(websiteContainer);

                console.log('Website generated successfully.');
            } else {
                console.error('Element with ID "website-grid-item" not found.');
            }
        } else {
            console.error('Error generating webpage code.');
        }
    };




    return (
        <Container maxW="7xl" py={12}>
            <Heading as="h1" mb={6} textAlign="center" color="blue.400">
                Create Your Dynamic Website
            </Heading>
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
                <GridItem>
                    <Box bg="gray.100" p={6} borderRadius="lg" boxShadow="md">
                        <FormControl mb={4}>
                            <FormLabel>Business Name</FormLabel>
                            <Input
                                placeholder="Enter your business name"
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Business Description</FormLabel>
                            <Textarea
                                placeholder="Describe your business"
                                value={businessDescription}
                                onChange={(e) => setBusinessDescription(e.target.value)}
                            />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Logo</FormLabel>
                            <Button onClick={() => document.getElementById('logoInput')?.click()} colorScheme="blue" variant="outline">
                                Upload Logo
                            </Button>
                            <Input
                                id="logoInput"
                                type="file"
                                accept="image/*"
                                onChange={handleLogoChange}
                                display="none"
                            />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Pictures</FormLabel>
                            <Button onClick={() => document.getElementById('picturesInput')?.click()} colorScheme="blue" variant="outline">
                                Upload Pictures
                            </Button>
                            <Input
                                id="picturesInput"
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handlePicturesChange}
                                display="none"
                            />
                        </FormControl>
                        <Button colorScheme="blue" size="lg" mt={4} onClick={() => setShowWebsite(true)}>
                            Create Website
                        </Button>

                        <Button colorScheme="blue" size="lg" mt={4} onClick={handleCreateWebsite}>
                            Create Website using AI
                        </Button>
                    </Box>
                </GridItem>
                <GridItem id="website-grid-item">
                    {isLoading ? (
                        <Flex justify="center" align="center" height="100%">
                            <Spinner size="xl" color="blue.500" />
                        </Flex>
                    ) : (
                        showWebsite && renderGeneratedWebsite()
                    )}
                </GridItem>
            </Grid>
        </Container>
    );
}
