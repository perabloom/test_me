// AddClientForm.tsx
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Textarea,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { z } from "zod";
  import { useQueryClient } from "@tanstack/react-query";
  import { ClientsService } from "../../client";

  const clientCreateSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    phone_number: z.string().optional(),
    email: z.string(),
    address: z.string().optional(),
  });

  interface AddClientFormProps {
    isOpen: boolean;
    onClose: () => void;
  }

  export default function AddClientForm({ isOpen, onClose }: AddClientFormProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const queryClient = useQueryClient();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const clientData = clientCreateSchema.parse({
          first_name: firstName,
          last_name: lastName,
          phone_number: phoneNumber,
          email,
          address,
        });
        await ClientsService.createClient({ requestBody: clientData });
        queryClient.invalidateQueries({ queryKey: ["clients"] }); // Invalidate and refetch the clients data
        onClose();
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Client</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>
              <Flex justify="end">
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" colorScheme="blue" ml={2}>
                  Add Client
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
