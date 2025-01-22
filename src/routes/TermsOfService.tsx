import { Container, Heading, Text, Box } from '@chakra-ui/react';
import { createFileRoute } from '@tanstack/react-router';
import NavigationBar from '../components/common/MainNavigationBar';
export const Route = createFileRoute("/TermsOfService")({
  component: TermsOfService,
});

export default function TermsOfService() {
  return (
    <>
    <NavigationBar />
    <Box pt="50px">
      <Container maxW="7xl" py={12}>
        <Heading as="h1" mb={6}>Terms of Service</Heading>
        <Text mb={4}>
          Welcome to ZFLYN. By accessing or using our platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </Text>
        <Heading as="h2" size="md" mt={6} mb={4}>Use of the Platform</Heading>
        <Text mb={4}>
          You agree to use the platform only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of the platform complies with all applicable laws and regulations.
        </Text>
        <Heading as="h2" size="md" mt={6} mb={4}>User Responsibilities</Heading>
        <Text mb={4}>
          You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
        </Text>
        <Heading as="h2" size="md" mt={6} mb={4}>Prohibited Activities</Heading>
        <Text mb={4}>
          You agree not to engage in any activities that may harm or disrupt the platform, including but not limited to hacking, spamming, or distributing malware.
        </Text>
        <Heading as="h2" size="md" mt={6} mb={4}>Intellectual Property</Heading>
        <Text mb={4}>
          All content on the platform, including text, graphics, logos, and software, is the property of ZFLYN or its licensors and is protected by copyright and other intellectual property laws.
        </Text>
        <Heading as="h2" size="md" mt={6} mb={4}>Limitation of Liability</Heading>
        <Text mb={4}>
          ZFLYN shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the platform. This includes, but is not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses.
        </Text>
        <Heading as="h2" size="md" mt={6} mb={4}>Indemnification</Heading>
        <Text mb={4}>
          You agree to indemnify and hold ZFLYN harmless from any claims, losses, liabilities, damages, costs, or expenses arising from your use of the platform or violation of these Terms.
        </Text>
        <Heading as="h2" size="md" mt={6} mb={4}>Termination</Heading>
        <Text mb={4}>
          We reserve the right to terminate or suspend your access to the platform at any time, without notice, for any reason, including violation of these Terms.
        </Text>
        <Heading as="h2" size="md" mt={6} mb={4}>Changes to These Terms</Heading>
        <Text mb={4}>
          We may update these Terms of Service from time to time. We will notify you of any changes by posting the new terms on our platform.
        </Text>
        <Heading as="h2" size="md" mt={6} mb={4}>Contact Us</Heading>
        <Text>
          If you have any questions about these Terms of Service, please contact us at support@zflyn.com.
        </Text>
      </Container>
    </Box>
    </>
  );
}
