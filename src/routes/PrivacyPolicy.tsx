import { Container, Heading, Text } from '@chakra-ui/react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/PrivacyPolicy")({
  component: PrivacyPolicy,
});

export default function PrivacyPolicy() {
  return (
    <Container maxW="7xl" py={12}>
      <Heading as="h1" mb={6}>Privacy Policy</Heading>
      <Text mb={4}>
        At ZFLYN, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our platform.
      </Text>
      <Heading as="h2" size="md" mt={6} mb={4}>Information We Collect</Heading>
      <Text mb={4}>
        We collect information that you provide directly to us, such as when you create an account, update your profile, or use our services. This information may include your name, email address, phone number, and business details.
      </Text>
      <Text mb={4}>
        We also collect information about your clients, including their names, contact details, and any other information you choose to provide.
      </Text>
      <Text mb={4}>
        Additionally, we collect public Google reviews related to your business to help you monitor and manage your online reputation.
      </Text>
      <Text mb={4}>
        We manage and collect data from your social media accounts, including posts, comments, and interactions, to help you engage with your audience and analyze social media performance.
      </Text>
      <Text mb={4}>
        We also collect information automatically as you navigate through our platform. This may include usage details, IP addresses, and information collected through cookies and other tracking technologies.
      </Text>
      <Heading as="h2" size="md" mt={6} mb={4}>How We Use Your Information</Heading>
      <Text mb={4}>
        We use the information we collect to:
        <ul>
          <li>Provide, maintain, and improve our services.</li>
          <li>Manage your account and provide customer support.</li>
          <li>Communicate with you about products, services, and promotions.</li>
          <li>Monitor and analyze trends, usage, and activities.</li>
          <li>Personalize your experience on our platform.</li>
        </ul>
      </Text>
      <Heading as="h2" size="md" mt={6} mb={4}>Sharing Your Information</Heading>
      <Text mb={4}>
        We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights.
      </Text>
      <Heading as="h2" size="md" mt={6} mb={4}>Data Security</Heading>
      <Text mb={4}>
        We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure.
      </Text>
      <Heading as="h2" size="md" mt={6} mb={4}>Your Rights</Heading>
      <Text mb={4}>
        You have the right to access, update, or delete your personal information. You can do this by logging into your account or contacting us directly.
      </Text>
      <Heading as="h2" size="md" mt={6} mb={4}>Changes to This Policy</Heading>
      <Text mb={4}>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our platform.
      </Text>
      <Heading as="h2" size="md" mt={6} mb={4}>Contact Us</Heading>
      <Text>
        If you have any questions about this Privacy Policy, please contact us at support@zflyn.com.
      </Text>
    </Container>
  );
}
