import { Container, Heading, Text, FormControl, FormLabel, Input, Textarea, Button, Box } from '@chakra-ui/react';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import NavigationBar from '../components/common/MainNavigationBar'; // Import the navigation bar

export const Route = createFileRoute("/ContactUs")({
  component: ContactUs,
});
export default function ContactUs() {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Add your logic to send the message here
    setIsMessageSent(true);
  };

  return (
    <>
    <NavigationBar />
    <Box pt="50px">
    <Container maxW="7xl" py={12}>
      <Heading as="h1" mb={6}>Contact Us</Heading>
      <Text mb={4}>
        If you have any questions, feel free to reach out to us using the form below.
      </Text>
      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isReadOnly={isMessageSent}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isReadOnly={isMessageSent}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Message</FormLabel>
        <Textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          isReadOnly={isMessageSent}
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handleSendMessage} isDisabled={isMessageSent}>
        {isMessageSent ? 'Message Sent' : 'Send Message'}
      </Button>
      {isMessageSent && (
        <Text mt={4}>
          Thank you for reaching out to us! We will get back to you soon.
        </Text>
      )}
    </Container>
    </Box>
    </>
  );
}
