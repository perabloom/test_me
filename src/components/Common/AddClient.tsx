import { useState } from "react"

import {
    Box,
    Button,
    Text,
    Input,
    FormControl,
    // Select,

    HStack,
    VStack,
    Container,
    Flex,
} from '@chakra-ui/react';

const AddClient = ({ onClose }: { onClose: () => void }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        phoneNumber: '',
        phoneExt: '',
        secondaryPhoneNumber: '',
        secondaryPhoneExt: '',
        email: '',
        address: '',
        unit: '',
        city: '',
        region: '',
        postalCode: '',
        country: '',
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleClearForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            companyName: '',
            phoneNumber: '',
            phoneExt: '',
            secondaryPhoneNumber: '',
            secondaryPhoneExt: '',
            email: '',
            address: '',
            unit: '',
            city: '',
            region: '',
            postalCode: '',
            country: '',
        });
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
          // const response = await fetch('http://localhost:8000/clients', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify(formData),
          // });

          // if (!response.ok) {
          //   throw new Error('Failed to create client');
          // }

          console.log('Client created successfully');
          console.log(formData);
          handleClearForm();
          onClose(); // Close the modal
        } catch (error) {
          console.error(error);
        } finally {
          setIsSubmitting(false);
        }
      };
    return (
        <>
            <Container maxW="full" p={4}>
                {/* <Text fontSize="xl" mb={6}>Add new client</Text> */}
                <Flex gap={6}>
                    {/* Left Column - Client Details */}
                    <Box flex={1} borderWidth="1px" borderRadius="lg" p={6}>
                        <Text fontWeight="medium" mb={4}>Client Details</Text>

                        <VStack spacing={4} align="stretch">
                            <HStack spacing={4}>
                                <FormControl>
                                    <Input placeholder="First Name" size="md" name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange} />
                                </FormControl>
                                <FormControl>
                                    <Input placeholder="Last Name" size="md" name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange} />
                                </FormControl>
                            </HStack>

                            <FormControl>
                                <Input placeholder="Company Name" size="md" name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange} />
                            </FormControl>

                            <Text fontWeight="medium">Contact Information</Text>

                            <HStack spacing={4}>
                                <FormControl flex={3}>
                                    <Input placeholder="Phone Number" size="md" name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange} />
                                </FormControl>
                                <FormControl flex={1}>
                                    <Input placeholder="EXT" size="md" name="phoneExt"
                                        value={formData.phoneExt}
                                        onChange={handleInputChange} />
                                </FormControl>
                            </HStack>

                            <HStack spacing={4}>
                                <FormControl flex={3}>
                                    <Input placeholder="Secondary Phone" size="md" name="secondaryPhoneNumber"
                                        value={formData.secondaryPhoneNumber}
                                        onChange={handleInputChange} />
                                </FormControl>
                                <FormControl flex={1}>
                                    <Input placeholder="EXT" size="md" name="secondaryPhoneExt"
                                        value={formData.secondaryPhoneExt}
                                        onChange={handleInputChange} />
                                </FormControl>
                            </HStack>

                            <FormControl>
                                <Input placeholder="Email" size="md" name="email"
                                    value={formData.email}
                                    onChange={handleInputChange} />
                            </FormControl>
                            {/*
                <Text fontWeight="medium">Ad Source</Text>
                  <FormControl>
                    <Select placeholder="Select Ad Source" size="md">
                      <option>Google</option>
                      <option>Facebook</option>
                      <option>Referral</option>
                    </Select>
                  </FormControl>
                */}
                            {/* <Box>
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
                </Box> */}

                        </VStack>
                    </Box>

                    {/* Right Column - Client Address */}
                    <Box flex={1} borderWidth="1px" borderRadius="lg" p={6}>
                        <Text fontWeight="medium" mb={4}>Client Address</Text>

                        {/* <Box
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
              </Box> */}


                        <VStack spacing={4} align="stretch">
                            <HStack spacing={4}>
                                <FormControl flex={3}>
                                    <Input placeholder="Address" size="md" name="address"
                                        value={formData.address}
                                        onChange={handleInputChange} />
                                </FormControl>
                                <FormControl flex={1}>
                                    <Input placeholder="Unit" size="md" name="unit"
                                        value={formData.unit}
                                        onChange={handleInputChange} />
                                </FormControl>
                            </HStack>

                            <HStack spacing={4}>
                                <FormControl>
                                    <Input placeholder="City" size="md" name="city"
                                        value={formData.city}
                                        onChange={handleInputChange} />
                                </FormControl>
                                <FormControl>
                                    <Input placeholder="Region" size="md" name="region"
                                        value={formData.region}
                                        onChange={handleInputChange} />
                                </FormControl>
                            </HStack>

                            <HStack spacing={4}>
                                <FormControl>
                                    <Input placeholder="Postal Code" size="md" name="postalCode"
                                        value={formData.postalCode}
                                        onChange={handleInputChange} />
                                </FormControl>
                                {/* <FormControl>
                                    <Select placeholder="Country" size="md" name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}>
                                        <option>United States</option>
                                        <option>Canada</option>
                                    </Select>
                                </FormControl> */}

                            </HStack>

                            <Button variant="link" colorScheme="blue" alignSelf="flex-start" onClick={handleClearForm}>
                                Clear
                            </Button>
                            <Button
    colorScheme="blue"
    type="submit"
    onClick={handleSubmit}
    isLoading={isSubmitting}
    loadingText="Submitting"
  >
    Submit
  </Button>
                        </VStack>
                    </Box>
                </Flex>

                {/* <Box mt={4}>
            <Link color="blue.500" fontSize="sm">
              Need to track more fields? Add a custom field
            </Link>
          </Box> */}

            </Container>
        </>
    );
}


export default AddClient
