import { Container, Heading, Text, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/ContactUs")({
  component: ContactUs,
});
export default function ContactUs() {
  return (
    <Container maxW="7xl" py={12}>
      <Heading as="h1" mb={6}>Contact Us</Heading>
      <Text mb={4}>
        If you have any questions, feel free to reach out to us using the form below.
      </Text>
      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Your Name" />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Your Email" />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Your Message" />
      </FormControl>
      <Button colorScheme="blue">Send Message</Button>
    </Container>
  );
}
