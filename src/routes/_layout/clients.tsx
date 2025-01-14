// import {
//     Box,
//     Button,
//     Container,
//     Flex,
//     FormControl,
//     FormLabel,
//     Input,
//     Table,
//     TableContainer,
//     Tbody,
//     Td,
//     Th,
//     Thead,
//     Tr,
//     useDisclosure,
//   } from "@chakra-ui/react";
//   import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
//   import { createFileRoute } from "@tanstack/react-router";
//   import { useState } from "react";
//   import { ClientsService } from "../../client"; // Assume this service exists
//   import { AddClientModal } from "../../components/Clients/AddClientModal"; // Assume this component exists

//   export const Route = createFileRoute("/_layout/clients")({
//     component: Clients,
//   });

//   function Clients() {
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const queryClient = useQueryClient();
//     const [search, setSearch] = useState("");

//     const { data: clients, isLoading } = useQuery(["clients", search], () =>
//       ClientsService.readClients({ search })
//     );

//     const addClientMutation = useMutation(ClientsService.addClient, {
//       onSuccess: () => {
//         queryClient.invalidateQueries("clients");
//       },
//     });

//     const handleAddClient = (clientData) => {
//       addClientMutation.mutate(clientData);
//       onClose();
//     };

//     return (
//       <Container maxW="full">
//         <Flex direction="column" pt={12}>
//           <Box mb={8}>
//             <Button onClick={onOpen} colorScheme="teal">
//               Add Client
//             </Button>
//             <AddClientModal isOpen={isOpen} onClose={onClose} onSubmit={handleAddClient} />
//           </Box>

//           <Box mb={8}>
//             <FormControl>
//               <FormLabel>Search Clients</FormLabel>
//               <Input
//                 placeholder="Search by name, email, etc."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//             </FormControl>
//           </Box>

//           <TableContainer>
//             <Table size="md">
//               <Thead>
//                 <Tr>
//                   <Th>Name</Th>
//                   <Th>Email</Th>
//                   <Th>Company</Th>
//                   <Th>Phone</Th>
//                   <Th>Address</Th>
//                   <Th>Created At</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {isLoading ? (
//                   <Tr>
//                     <Td colSpan={6}>Loading...</Td>
//                   </Tr>
//                 ) : (
//                   clients?.data.map((client) => (
//                     <Tr key={client.id}>
//                       <Td>{client.name}</Td>
//                       <Td>{client.email}</Td>
//                       <Td>{client.company}</Td>
//                       <Td>{client.phone}</Td>
//                       <Td>{client.address}</Td>
//                       <Td>{new Date(client.createdAt).toLocaleDateString()}</Td>
//                     </Tr>
//                   ))
//                 )}
//               </Tbody>
//             </Table>
//           </TableContainer>
//         </Flex>
//       </Container>
//     );
//   }

//   export default Clients;

import { Box, Container, Text } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"

import useAuth from "../../hooks/useAuth"

export const Route = createFileRoute("/_layout/clients")({
  component: Clients,
})

function Clients() {
  const { user: currentUser } = useAuth()

  return (
    <>
      <Container maxW="full">
        <Box pt={12} m={4}>
          <Text fontSize="2xl">
            Hi, {currentUser?.full_name || currentUser?.email} 👋🏼
          </Text>
          <Text>Welcome back, nice to see you again!</Text>
        </Box>
      </Container>
    </>
  )
}
