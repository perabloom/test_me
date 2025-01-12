// Create a route for the client registration page
export const Route = createFileRoute('/addme2')({
  component: AddClientForm,
});
import { createFileRoute } from '@tanstack/react-router';

import {
  Box,
  Button,
  Text,
  Input,
  FormControl,
  Select,
  HStack,
  VStack,
  Container,
  Flex,
  Link,
} from '@chakra-ui/react';






function AddClientForm() {


  return (
    <>
    <Container maxW="full" p={4}>
      <Text fontSize="xl" mb={6}>Add new client</Text>

      <Flex gap={6}>
        {/* Left Column - Client Details */}
        <Box flex={1} borderWidth="1px" borderRadius="lg" p={6}>
          <Text fontWeight="medium" mb={4}>Client Details</Text>

          <VStack spacing={4} align="stretch">
            <HStack spacing={4}>
              <FormControl>
                <Input placeholder="First Name" size="md" />
              </FormControl>
              <FormControl>
                <Input placeholder="Last Name" size="md" />
              </FormControl>
            </HStack>

            <FormControl>
              <Input placeholder="Company Name" size="md" />
            </FormControl>

            <Text fontWeight="medium">Contact Information</Text>

            <HStack spacing={4}>
              <FormControl flex={3}>
                <Input placeholder="Phone Number" size="md" />
              </FormControl>
              <FormControl flex={1}>
                <Input placeholder="EXT" size="md" />
              </FormControl>
            </HStack>

            <HStack spacing={4}>
              <FormControl flex={3}>
                <Input placeholder="Secondary Phone" size="md" />
              </FormControl>
              <FormControl flex={1}>
                <Input placeholder="EXT" size="md" />
              </FormControl>
            </HStack>

            <FormControl>
              <Input placeholder="Email" size="md" />
            </FormControl>

            <Text fontWeight="medium">Ad Source</Text>
            <FormControl>
              <Select placeholder="Select Ad Source" size="md">
                <option>Google</option>
                <option>Facebook</option>
                <option>Referral</option>
              </Select>
            </FormControl>

            <Box>
              <Text fontWeight="medium" mb={2}>Allow Billing</Text>
              <HStack spacing={4}>
                <Button
                  size="sm"
                  colorScheme="gray"
                  variant="solid"
                  bg="gray.200"
                >
                  NO
                </Button>
              </HStack>
            </Box>
          </VStack>
        </Box>

        {/* Right Column - Client Address */}
        <Box flex={1} borderWidth="1px" borderRadius="lg" p={6}>
          <Text fontWeight="medium" mb={4}>Client Address</Text>

          <Box
            mb={4}
            borderRadius="md"
            height="200px"
            bg="gray.100"
            position="relative"
          >
            <Link
              position="absolute"
              top={2}
              right={2}
              fontSize="sm"
              color="blue.500"
            >
              View larger map
            </Link>
          </Box>

          <VStack spacing={4} align="stretch">
            <HStack spacing={4}>
              <FormControl flex={3}>
                <Input placeholder="Address" size="md" />
              </FormControl>
              <FormControl flex={1}>
                <Input placeholder="Unit" size="md" />
              </FormControl>
            </HStack>

            <HStack spacing={4}>
              <FormControl>
                <Input placeholder="City" size="md" />
              </FormControl>
              <FormControl>
                <Input placeholder="Region" size="md" />
              </FormControl>
            </HStack>

            <HStack spacing={4}>
              <FormControl>
                <Input placeholder="Postal Code" size="md" />
              </FormControl>
              <FormControl>
                <Select placeholder="Country" size="md">
                  <option>United States</option>
                  <option>Canada</option>
                </Select>
              </FormControl>
            </HStack>

            <Button variant="link" colorScheme="blue" alignSelf="flex-start">
              Clear
            </Button>
          </VStack>
        </Box>
      </Flex>

      <Box mt={4}>
        <Link color="blue.500" fontSize="sm">
          Need to track more fields? Add a custom field
        </Link>
      </Box>
    </Container>
    </>
  );
}
