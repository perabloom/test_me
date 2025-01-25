import { Container, Heading, Box, SimpleGrid, IconButton, Text, Flex, Spinner, useToast } from '@chakra-ui/react';
import { Image, VStack, HStack } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter, FaCheckCircle } from "react-icons/fa";
import { createFileRoute} from '@tanstack/react-router';
import { useQuery, useMutation } from '@tanstack/react-query';
import { MetaService } from '../../client/sdk.gen'; // Adjust the import path as necessary


export const Route = createFileRoute("/_layout/SocialMedia")({
  component: SocialMedia,
});

export default function SocialMedia() {
  const toast = useToast();
  const { data: isInstagramConnected, isLoading } = useQuery({
    queryKey: ['isInstagramConnected'],
    queryFn: () => MetaService.isInstagramConnected()
  });

  const disconnectInstagramMutation = useMutation({
    mutationFn: () => MetaService.disconnectInstagram(),
    onSuccess: () => {
      toast({
        title: "Disconnected",
        description: "Instagram has been disconnected.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to disconnect Instagram.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  });

  const handleInstagramClick = () => {
    if (isInstagramConnected) {
      if (window.confirm("Do you want to disconnect Instagram?")) {
        disconnectInstagramMutation.mutate();
      }
    } else {
      window.location.href = "https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=1687717362158671&redirect_uri=https://www.zflyn.com/IGReroute&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish%2Cinstagram_business_manage_insights";
    }
  };

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


  // Inside the SocialMedia component
const { data: instagramProfile, isLoading: isLoadingProfile } = useQuery({
  queryKey: ['fetchInstagramProfile'],
  queryFn: () => MetaService.fetchInstagramProfile(),
  enabled: !!isInstagramConnected
});

const { data: instagramPosts, isLoading: isLoadingPosts } = useQuery({
  queryKey: ['fetchInstagramPosts'],
  queryFn: () => MetaService.fetchInstagramPosts(),
  enabled: !!isInstagramConnected
});
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
          position="relative"
          onClick={handleInstagramClick}
        >
          <Flex alignItems="center" justifyContent="center">
            <IconButton icon={<FaInstagram size={24} />} aria-label="Instagram" />
          </Flex>
          {isLoading ? (
            <Spinner size="sm" position="absolute" top="8px" right="8px" />
          ) : isInstagramConnected ? (

              <FaCheckCircle
                color="green"
                size={20}
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                }}
              />
          ) : null}
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
      {isInstagramConnected && (
  <VStack spacing={4} align="stretch" mt={8}>
    {isLoadingProfile ? (
      <Spinner />
    ) : (
      <HStack spacing={4} align="center">
        <Image
          borderRadius="full"
          boxSize="50px"
          src={(instagramProfile as any)?.profilePicture}
          alt="Profile Picture"
        />
        <Text fontSize="lg" fontWeight="bold">{(instagramProfile as any)?.username}</Text>
      </HStack>
    )}

    {isLoadingPosts ? (
      <Spinner />
    ) : (
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        {(instagramPosts as any)?.posts?.map((post: any, index: number) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={post.imageUrl} alt={`Post ${index}`} />
            <Box p={4}>
              <Text>{post.caption}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    )}
  </VStack>
)}

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
