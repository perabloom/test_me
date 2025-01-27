import { Container, Heading, Box, SimpleGrid, IconButton, Text, Flex, Spinner, useToast } from '@chakra-ui/react';
import { Image, VStack, HStack } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaGoogle, FaCheckCircle } from "react-icons/fa";
import { createFileRoute } from '@tanstack/react-router';
import { useQuery, useMutation } from '@tanstack/react-query';
import { MetaService } from '../../client/sdk.gen'; // Adjust the import path as necessary
import {useEffect } from 'react';
//import { useNavigate } from "@tanstack/react-router"


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


  useEffect(() => {
    // Load the Facebook SDK script
    const loadFacebookSDK = () => {
      (window as any).fbAsyncInit = function() {
        (window as any).FB.init({
          appId      : '1155592099418918', // Replace with your app ID
          cookie     : true,
          xfbml      : true,
          version    : 'v22.0' // Replace with the API version you want to use
        });

        (window as any).FB.AppEvents.logPageView();

        // Check login status
        // (window as any).FB.getLoginStatus(function(response: any) {
        //   statusChangeCallback(response);
        // });
      };

      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        (js as HTMLScriptElement).src = "https://connect.facebook.net/en_US/sdk.js";
        fjs?.parentNode?.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    };

    loadFacebookSDK();
  }, []);

  // const navigate = useNavigate()
  // const statusChangeCallback = (response: any) => {
  //   if (response.status === 'connected') {
  //     console.log('User is logged into Facebook and your app.');
  //     // Redirect to the logged-in experience
  //     navigate({ to: "/dashboard" });
  //   } else if (response.status === 'not_authorized') {
  //     console.log('User is logged into Facebook but not your app.');
  //     // Prompt them with the Login dialog
  //     handleFacebookLogin();
  //   } else {
  //     console.log('User is not logged into Facebook.');
  //     // Show the Login Button or prompt them with the Login dialog
  //     handleFacebookLogin();
  //   }
  // };
  const handleFacebookLogin = () => {
    (window as any).FB.login((response: any) => {
      if (response.authResponse) {
        console.log('Welcome! Fetching your information.... ');
        (window as any).FB.api('/me', function(response: any) {
          console.log('Successful login response: ' + response);
          console.log('Good to see you, ' + response.name + '.');
          // Handle the response and navigate or update state as needed
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  };


  // const handleConnectFacebook = () => {
  //   // Logic to connect to Facebook
  //   console.log("Connecting to Facebook...");
  //   // Add your connection logic here
  // };

  const handleConnectGoogle = () => {
    // Logic to connect to Google
    console.log("Connecting to Google...");
    const clientId = '416714402153-2m3ps023q10fo50ikfc0ks8tj72ut8la.apps.googleusercontent.com'; // Replace with your Google client ID
    const redirectUri = 'https://www.zflyn.com/GoogleReroute'; // Replace with your redirect URI
    const scope = 'profile email https://www.googleapis.com/auth/business.manage'; // Define the scopes you need
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

    window.open(googleAuthUrl, '_blank', 'width=600,height=400');

    // Add your connection logic here
  };


  // Inside the SocialMedia component
  const { data: instagramProfile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['fetchInstagramProfile'],
    queryFn: () => {
      const profile = MetaService.fetchInstagramProfile();
      console.log('Query returned:', profile);
      return profile;
    },
    enabled: !!isInstagramConnected
  });

  const { data: instagramPosts, isLoading: isLoadingPosts } = useQuery({
    queryKey: ['fetchInstagramPosts'],
    queryFn: () => {
      const posts = MetaService.fetchInstagramPosts();
      console.log('Query returned:', posts);
      return posts;
    },
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
          onClick={handleFacebookLogin} // Connect to Facebook
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
          onClick={handleConnectGoogle} // Connect to Google
        >
          <IconButton icon={<FaGoogle size={24} />} aria-label="Google" />
          <Text fontSize="md" fontWeight="bold">Connect Google</Text>
        </Box>
        <Box
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
          textAlign="center"
          cursor="pointer"
        >
          <Text fontSize="md" fontWeight="bold">Facebook Posts</Text>
        </Box>
         <Box
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
          textAlign="center"
          cursor="pointer"
        >
          {isInstagramConnected && (
        <VStack spacing={4} align="stretch" mt={8}>
          {isLoadingProfile ? (
            <Spinner />
          ) : (
            <HStack spacing={4} align="center">
              <Image
                borderRadius="full"
                boxSize="50px"
                src={(instagramProfile as any)?.profile_picture_url}
                alt="Profile Picture"
              />
              <Text fontSize="lg" fontWeight="bold">{(instagramProfile as any)?.username}</Text>
            </HStack>
          )}

          {isLoadingPosts ? (
            <Spinner />
          ) : (
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4} overflowY="auto" maxHeight="500px">
              {(instagramPosts as any)?.data?.map((post: any, index: number) => (
                <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                  <Image src={post.media_url} alt={`Post ${index}`} />
                  <Box p={4}>
                    <Text fontSize="md" fontWeight="bold">{post.caption}</Text>
                    <Text fontSize="sm" color="gray.500">{new Date(post.timestamp).toLocaleString()}</Text>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          )}
        </VStack>
      )}
        </Box>
        <Box
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
          textAlign="center"
          cursor="pointer"
        >
          <Text fontSize="md" fontWeight="bold">EMPTY</Text>
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
