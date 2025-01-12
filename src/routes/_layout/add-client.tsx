import React from 'react';
import {
    Container,
    Heading,
    FormLabel,
    FormControl,
    Input,
    Button,
    Grid,
    GridItem,
    //Map,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { createFileRoute } from "@tanstack/react-router"


  export const Route = createFileRoute("/_layout/add-client")({
    component: AddClient,
  })

  function AddClient() {
    const [client, setClient] = useState({
      firstName: "",
      lastName: "",
      companyName: "",
      contactInformation: {
        phoneNumber: "",
        secondaryPhoneNumber: "",
        email: "",
      },
      address: {
        address: "",
        city: "",
        region: "",
        postalCode: "",
        country: "",
      },
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setClient((prevClient) => ({ ...prevClient, [name]: value }));
    };

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setClient((prevClient) => ({
        ...prevClient,
        address: { ...prevClient.address, [name]: value },
      }));
    };

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      // Call API to add new client
    };

    return (
      <Container maxW="full">
        <Heading size="lg" textAlign={{ base: "center", md: "left" }} pt={12}>
          Add new client
        </Heading>

        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                name="firstName"
                value={client.firstName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                name="lastName"
                value={client.lastName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Company Name</FormLabel>
              <Input
                type="text"
                name="companyName"
                value={client.companyName}
                onChange={handleInputChange}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Contact Information</FormLabel>
              <Input
                type="text"
                name="contactInformation.phoneNumber"
                value={client.contactInformation.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
              />
              <Input
                type="text"
                name="contactInformation.secondaryPhoneNumber"
                value={client.contactInformation.secondaryPhoneNumber}
                onChange={handleInputChange}
                placeholder="Secondary Phone"
              />
              <Input
                type="email"
                name="contactInformation.email"
                value={client.contactInformation.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                name="address.address"
                value={client.address.address}
                onChange={handleAddressChange}
                placeholder="Address"
              />
              <Input
                type="text"
                name="address.city"
                value={client.address.city}
                onChange={handleAddressChange}
                placeholder="City"
              />
              <Input
                type="text"
                name="address.region"
                value={client.address.region}
                onChange={handleAddressChange}
                placeholder="Region"
              />
              <Input
                type="text"
                name="address.postalCode"
                value={client.address.postalCode}
                onChange={handleAddressChange}
                placeholder="Postal Code"
              />
              <Input
                type="text"
                name="address.country"
                value={client.address.country}
                onChange={handleAddressChange}
                placeholder="Country"
              />
            </FormControl>
          </GridItem>
        </Grid>

        <Button type="submit" onClick={handleSubmit}>
          Add Client
        </Button>
      </Container>
    );
  }
