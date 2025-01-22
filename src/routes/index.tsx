import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Icon,
    useColorModeValue,
    IconProps,
    SimpleGrid,
  Avatar,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
} from '@chakra-ui/react';
import { FaChartLine, FaAd, FaUsers, FaShareAlt, FaCalendarAlt, FaSearch, FaStar, FaListUl, FaLaptopCode, FaCreditCard, FaQuoteLeft } from 'react-icons/fa';

import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import ContactUs from './ContactUs';
import LearnMore from './LearnMore';


// Define routes for the new pages
export const PrivacyPolicyRoute = createFileRoute("/")({
  component: PrivacyPolicy,
});

export const TermsOfServiceRoute = createFileRoute("/")({
  component: TermsOfService,
});

export const ContactUsRoute = createFileRoute("/")({
  component: ContactUs,
});



// Define routes for the new pages
export const LearnMoreRoute = createFileRoute("/")({
  component: LearnMore,
});

function LandingPage() {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <Box>
      {/* Navigation Bar */}
      <Box bg={useColorModeValue('white', 'gray.800')} boxShadow="md" position="fixed" width="100%" zIndex={10}>
        <Container maxW="7xl" py={4}>
          <Flex justify="space-between" align="center">
            <Heading size="sm" color={useColorModeValue('blue.500', 'white')}>
              ZFLYN
            </Heading>
            <Stack direction="row" spacing={4}>
              <Button variant="outline" colorScheme="blue" onClick={() => {
                navigate({ to: "/login" })
              }}>Login</Button>
              <Button colorScheme="blue" onClick={() => {
                navigate({ to: "/signup" })
              }}>Sign Up</Button>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Container maxW={'7xl'} pt={20}> {/* Added padding-top to avoid overlap with the navbar */}
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '1%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}
              >
                All-in-One Solution
              </Text>
              <br />
              <Text as={'span'} color={'blue.400'}>
                for all Businesses
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={'xl'}>
              Empower your business with our comprehensive SaaS platform. Manage everything from customer relationships to social media, all in one place.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'blue'}
                bg={'blue.400'}
                _hover={{ bg: 'blue.500' }}
                onClick={handleModalOpen}
              >
                Start Free Trial
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                onClick={() => navigate({ to: "/LearnMore" })}
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Blob
              w={'150%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'red.400')}
            />
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
            >
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Start Your Free Trial</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Thank you for your interest in our platform!</Text>
            <Text>
              Please enter your email address to start your free trial.
            </Text>
            <Input type="email" placeholder="Email address" value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
              }} />
          </ModalBody>
          <ModalFooter>
            {emailError && <Text color="red.500">{emailError}</Text>}
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                  setEmailError('Please enter a valid email address.');
                  return;
                }
                navigate({ to: `/signup?email=${encodeURIComponent(email)}` });
                handleModalClose();
              }}
            >
              Start Free Trial
            </Button>
            <Button variant="outline" colorScheme="blue" onClick={handleModalClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      {/* Feature Section */}
      <Box bg={useColorModeValue('gray.100', 'gray.700')}>
        <Container maxW={'7xl'} py={16}>
          <Heading textAlign={'center'} fontSize={'3xl'} pb={10}>
            Powerful Features for Your Business
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 5 }} spacing={10}>
            {features.map((feature) => (
              <Box key={feature.title} textAlign={'center'}>
                <Icon
                  as={feature.icon}
                  color={'blue.500'}
                  w={10}
                  h={10}
                  mb={4}
                />
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'} fontSize={'sm'}>{feature.text}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

     {/* Customer Review Section */}
     <Box bg={useColorModeValue('white', 'gray.800')}>
        <Container maxW={'7xl'} py={16}>
          <Heading textAlign={'center'} fontSize={'3xl'} pb={10}>
            What Our Customers Say
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {reviews.map((review, index) => (
              <Box key={index} bg={useColorModeValue('gray.100', 'gray.700')} p={6} rounded={'lg'} shadow={'md'}>
                <VStack spacing={4} align={'start'}>
                  <Icon as={FaQuoteLeft} color={'blue.500'} w={8} h={8} />
                  <Text fontSize={'md'} fontStyle={'italic'}>
                    "{review.text}"
                  </Text>
                  <Flex align={'center'}>
                    <Avatar src={review.avatar} mr={4} />
                    <Box>
                      <Text fontWeight={'bold'}>{review.name}</Text>
                      <Text fontSize={'sm'} color={'gray.500'}>{review.position}</Text>
                    </Box>
                  </Flex>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      {/* CTA Section */}
      <Container maxW={'5xl'} py={12}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          align={'center'}
          justify={'center'}
        >
          <Text fontSize={'2xl'} fontWeight={600}>
            Ready to grow your business?
          </Text>
          <Button
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
          >
            Get Started Now
          </Button>
        </Stack>
      </Container>

      {/* Footer Section */}
<Box bg={useColorModeValue('gray.800', 'gray.900')} color="white" py={10}>
  <Container maxW="7xl">
    <Flex justify="space-between" align="center" wrap="wrap">
      <Text> {new Date().getFullYear()} Pristine Tech Labs LLC. All rights reserved.</Text>
      <Text>30 N Gould St Ste N Sheridan, WY 82801</Text>
      <Stack direction="row" spacing={4}>
        <Button variant="link" colorScheme="whiteAlpha" onClick={() => navigate({ to: "/PrivacyPolicy" })}>
          Privacy Policy
        </Button>
        <Button variant="link" colorScheme="whiteAlpha" onClick={() => navigate({ to: "/TermsOfService" })}>
          Terms of Service
        </Button>
        <Button variant="link" colorScheme="whiteAlpha" onClick={() => navigate({ to: "/ContactUs" })}>
          Contact Us
        </Button>
      </Stack>

    </Flex>
  </Container>
</Box>
    </Box>
  );
}

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

const features = [
    {
        title: 'Health Dashboard',
        text: 'Monitor your business performance at a glance',
        icon: FaChartLine,
    },
    {
        title: 'Ads Management',
        text: 'Create and manage ad campaigns effortlessly',
        icon: FaAd,
    },
    {
        title: 'CRM',
        text: 'Manage customer relationships effectively',
        icon: FaUsers,
    },
    {
        title: 'Social Media',
        text: 'Manage all your social accounts in one place',
        icon: FaShareAlt,
    },
    {
        title: 'Scheduling',
        text: 'Easy appointment booking for your clients',
        icon: FaCalendarAlt,
    },
    {
        title: 'Social Monitoring',
        text: 'Track brand mentions and engagement',
        icon: FaSearch,
    },
    {
        title: 'Reputation Monitor',
        text: 'Keep track of your online reputation',
        icon: FaStar,
    },
    {
        title: 'Directory Listings',
        text: 'Manage your business listings across the web',
        icon: FaListUl,
    },
    {
        title: 'Website Builder',
        text: 'Create professional websites with ease',
        icon: FaLaptopCode,
    },
    {
        title: 'Payments & Invoices',
        text: 'Streamline your billing and payment process',
        icon: FaCreditCard,
    },
];
const reviews = [
    {
      text: "This platform has revolutionized how we manage our business. The all-in-one solution saves us time and money!",
      name: "Nicole Miller",
      position: "Small Business Owner",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80",
    },
    {
      text: "The CRM and social media tools have helped us engage with our customers like never before. Highly recommended!",
      name: "Jane Smith",
      position: "Marketing Manager",
      avatar: "https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      text: "From scheduling to invoicing, this platform does it all. It's been a game-changer for our growing business.",
      name: "Mike Johnson",
      position: "Freelance Consultant",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80",
    },
  ];
export const Route = createFileRoute("/")({
    component: LandingPage,
});
