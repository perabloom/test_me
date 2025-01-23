import { Container, Heading, Text, Box, SimpleGrid, Icon, Stack, Button } from '@chakra-ui/react';
import { createFileRoute } from '@tanstack/react-router';
import { FaChartLine, FaAd, FaUsers, FaShareAlt, FaCalendarAlt, FaSearch, FaStar, FaListUl, FaLaptopCode, FaCreditCard } from 'react-icons/fa';
import NavigationBar from '../components/Common/MainNavigationBar';
export const Route = createFileRoute("/LearnMore")({
  component: LearnMore,
});

export default function LearnMore() {
  return (
    <>
    <NavigationBar />
    <Box pt="50px">
    <Container maxW="7xl" py={12}>
      <Heading as="h1" mb={6} textAlign="center" color="blue.400">
        Discover More About Our Platform
      </Heading>
      <Text mb={6} fontSize="lg" textAlign="center" color="gray.600">
        Our platform offers a comprehensive suite of tools designed to help your business thrive. From managing customer relationships to optimizing your social media presence, we have everything you need to succeed.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {features.map((feature) => (
          <Box key={feature.title} p={6} bg="gray.100" borderRadius="lg" boxShadow="md">
            <Stack direction="row" align="center">
              <Icon as={feature.icon} w={10} h={10} color="blue.500" />
              <Box>
                <Text fontWeight="bold" fontSize="xl">{feature.title}</Text>
                <Text color="gray.600">{feature.text}</Text>
              </Box>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
      <Box textAlign="center" mt={10}>
        <Button colorScheme="blue" size="lg" onClick={() => window.location.href = '/signup'}>
          Get Started Today
        </Button>
      </Box>
    </Container>
    </Box>
    </>
  );
}

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
