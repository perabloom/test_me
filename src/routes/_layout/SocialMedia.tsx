import { Container, Heading, Box, SimpleGrid, IconButton, Text } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/_layout/SocialMedia")({
  component: SocialMedia,
});

export default function SocialMedia() {
  const handleConnectFacebook = () => {
    // Logic to connect to Facebook
    console.log("Connecting to Facebook...");
    // Add your connection logic here
  };

  const handleConnectInstagram = () => {
    // Logic to connect to Instagram
    console.log("Connecting to Instagram...");
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
          onClick={handleConnectInstagram} // Connect to Instagram
        >
          <IconButton icon={<FaInstagram size={24} />} aria-label="Instagram" />
          <Text fontSize="md" fontWeight="bold">Connect Instagram</Text>
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
