// AddStaffForm.tsx
import React from 'react';
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
  import { format } from 'date-fns';
  import { useQueryClient } from "@tanstack/react-query";
  import { StaffsService } from "../../client";

  const staffCreateSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    start_date: z.date().optional(),
    end_date: z.date().optional(),
    status: z.string().optional(),
  });

  interface AddStaffFormProps {
    isOpen: boolean;
    onClose: () => void;
  }

  export default function AddStaffForm({ isOpen, onClose }: AddStaffFormProps) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("");

    const queryClient = useQueryClient();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const staffData = staffCreateSchema.parse({
            name,
            description,
            start_date: startDate ? new Date(startDate) : undefined,
            end_date: endDate ? new Date(endDate) : undefined,
            status,
          });

          // Format the dates to match the backend's expected format
          const requestData = {
            ...staffData,
            start_date: startDate ? format(new Date(startDate), "yyyy-MM-dd HH:mm:ss.SSS") : undefined,
            end_date: endDate ? format(new Date(endDate), "yyyy-MM-dd HH:mm:ss.SSS") : undefined,
          };

          await StaffsService.createStaff({ requestBody: requestData });
          queryClient.invalidateQueries({ queryKey: ["staffs"] }); // Invalidate the staff query
          onClose(); // Close the modal on successful submission
        } catch (error) {
          console.error("Error adding staff:", error);
        }
      };

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Staff</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Start Date</FormLabel>
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>End Date</FormLabel>
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Status</FormLabel>
                <Input
                  type="text"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </FormControl>
              <Flex justify="end">
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" colorScheme="blue" ml={2}>
                  Add Staff
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
