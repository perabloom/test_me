// /Users/vjain1/Downloads/FE/frontend/src/components/Clients/AddClientModal.tsx
import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
  } from "@chakra-ui/react";

  import { useState } from "react";

  export function AddClientModal({ isOpen, onClose, onSubmit }) {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      company: "",
      phone: "",
      address: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
      onSubmit(formData);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        address: "",
      });
      onClose();
    };

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Client</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter client name"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter client email"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Company</FormLabel>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter client company"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Phone</FormLabel>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter client phone"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Address</FormLabel>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter client address"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Add Client
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
