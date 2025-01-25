import { Container, Heading, Box, SimpleGrid, IconButton, Text, Badge, Flex, Tooltip } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter, FaCheckCircle } from "react-icons/fa";
import { createFileRoute} from '@tanstack/react-router';


export const Route = createFileRoute("/_layout/SocialMedia")({
  component: SocialMedia,
});
const isInstagramConnected = () => {
  // Logic to check if Instagram is connected
  return true; // Replace with actual logic to check connection
};

export default function SocialMedia() {

  const handleConnectFacebook = () => {
    // Logic to connect to Facebook
    console.log("Connecting to Facebook...");
    // Add your connection logic here
  };

  const handleConnectTwitter = () => {
    // Logic to connect to Twitter
    console.log("Connecting to Twitter...");
    // Add your connection logic here
  };

  return (
    <Container maxW="7xl" py={12}>
      <Heading as="h1" mb={6} textAlign="center" color="blue.400">
        Manage Your Social Media
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Box
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
          textAlign="center"
          cursor="pointer"
          onClick={handleConnectFacebook} // Connect to Facebook
        >
          <IconButton icon={<FaFacebookF size={24} />} aria-label="Facebook" />
          <Text fontSize="md" fontWeight="bold">Connect Facebook</Text>
        </Box>
        <Box
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
          textAlign="center"
          cursor="pointer"
          position="relative" // Make the box a relative container
        >
          <a href="https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=1687717362158671&redirect_uri=https://www.zflyn.com/IGReroute&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish%2Cinstagram_business_manage_insights" target="_blank" rel="noopener noreferrer">
            <Flex alignItems="center" justifyContent="center">
              <IconButton icon={<FaInstagram size={24} />} aria-label="Instagram" />
            </Flex>
            {isInstagramConnected() && (
              <Tooltip label="Connected" aria-label="Connected">
                <FaCheckCircle
                  color="green"
                  size={20}
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                  }}
                />
              </Tooltip>
            )}
            <Text fontSize="md" fontWeight="bold">Connect Instagram</Text>
          </a>
        </Box>

        <Box
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
          textAlign="center"
          cursor="pointer"
          onClick={handleConnectTwitter} // Connect to Twitter
        >
          <IconButton icon={<FaTwitter size={24} />} aria-label="Twitter" />
          <Text fontSize="md" fontWeight="bold">Connect Twitter</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}




// const handleConnectInstagram = () => {
//   // Redirect to Instagram's OAuth page
//   const clientId = '1687717362158671'; // Replace with your Instagram client ID
//   const redirectUri = 'YOUR_REDIRECT_URI'; // Replace with your redirect URI
//   const instagramAuthUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

//   window.location.href = instagramAuthUrl;
// };
