import { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    Text,
    Box,
    ModalCloseButton,
    IconButton,
    Flex,
} from "@chakra-ui/react";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useAuth from "../../hooks/useAuth"; // Import the useAuth hook

interface OnboardingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
    const [step, setStep] = useState(0);
    const [businessName, setBusinessName] = useState("");
    const [_, setHasSocialMedia] = useState(false);
    const { user: currentUser } = useAuth(); // Get the current user

    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handlePreviousStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleBusinessNameSubmit = () => {
        // Save business name logic
        handleNextStep();
    };

    const handleSocialMediaSubmit = () => {
        // Connect or create social media logic
        handleNextStep();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="2xl">
            <ModalOverlay />
            <ModalContent sx={{ height: "80vh", position: "relative", padding: "20px" }}>
                <ModalHeader>
                    {step === 2 ? 'Onboarding Complete' : 'Onboarding'}
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody>
                    {step === 0 && (
                        <FormControl>
                            <FormLabel fontSize="lg" fontWeight="bold">
                                Let's get started with entering your business name!
                            </FormLabel>
                            <Input
                                placeholder={`${currentUser?.full_name || 'Your'}'s Business`}
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                                size="lg"
                                borderColor="gray.300"
                                _hover={{ borderColor: "gray.400" }}
                            />
                            <Text fontSize="sm" fontStyle="italic">You can always update it later.</Text>

                        </FormControl>

                    )}




                    {step === 1 && (
                        <Box>
                            <Text fontSize="lg" fontWeight="bold">Do you have a social media presence?</Text>
                            <Flex mt={4} direction="column" gap={4}>
                                <Box
                                    p={6}
                                    borderWidth="1px"
                                    borderRadius="lg"
                                    boxShadow="md"
                                    textAlign="center"
                                    cursor="pointer"
                                    onClick={() => setHasSocialMedia(true)} // Replace with actual connect logic
                                >
                                    <IconButton icon={<FaGoogle size={24} />} aria-label="Google Business" />
                                    <Text fontSize="md" fontWeight="bold">Google Business</Text>
                                </Box>
                                <Box
                                    p={6}
                                    borderWidth="1px"
                                    borderRadius="lg"
                                    boxShadow="md"
                                    textAlign="center"
                                    cursor="pointer"
                                    onClick={() => setHasSocialMedia(true)} // Replace with actual connect logic
                                >
                                    <IconButton icon={<FaFacebookF size={24} />} aria-label="Facebook" />
                                    <Text fontSize="md" fontWeight="bold">Facebook</Text>
                                </Box>
                                <Box
                                    p={6}
                                    borderWidth="1px"
                                    borderRadius="lg"
                                    boxShadow="md"
                                    textAlign="center"
                                    cursor="pointer"
                                    onClick={() => setHasSocialMedia(true)} // Replace with actual connect logic
                                >
                                    <IconButton icon={<FaInstagram size={24} />} aria-label="Instagram" />
                                    <Text fontSize="md" fontWeight="bold">Instagram</Text>
                                </Box>
                            </Flex>
                            <Flex justify="center" mt={4}>
                                <Box
                                    p={6}
                                    borderWidth="1px"
                                    borderRadius="lg"
                                    boxShadow="md"
                                    textAlign="center"
                                    cursor="pointer"
                                    onClick={() => setHasSocialMedia(false)}
                                >
                                    <IconButton icon={<FaGoogle size={24} />} aria-label="No online presence ? Help me setup social media accounts" />
                                    <Text fontSize="md" fontWeight="bold"> I have none. Help me setup social media accounts!</Text>
                                </Box>
                            </Flex>
                        </Box>
                    )}
                    {step === 2 && (
                        <Box>
                            <Text fontSize="xl" fontWeight="bold">You are all set! Enjoy Zflyn!</Text>
                        </Box>
                    )}



                </ModalBody>
                <ModalFooter>
                    <Flex justify="flex-start" w="full" gap={2}>
                        <IconButton
                            icon={<FiArrowLeft />}
                            aria-label="Previous"
                            onClick={handlePreviousStep}
                            isDisabled={step === 0}
                        />
                        <IconButton
                            icon={<FiArrowRight />}
                            aria-label="Next"
                            onClick={step === 0 ? handleBusinessNameSubmit : handleSocialMediaSubmit}
                            isDisabled={step === 0 && businessName.trim() === ""}
                        />
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
