// CRM.tsx
import {
    Box,
    Container,
    Flex,
    Heading,
    Input,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Button,
} from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query";
//import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
//import { z } from "zod";

import { ClientsService } from "../../client";
import ActionsMenu from "../../components/Common/ActionsMenu";
import Navbar from "../../components/Common/Navbar";
import AddClientForm from "../../components/Common/AddClientForm";

export const Route = createFileRoute("/_layout/CRM")({
    component: CRM,
});

//const clientSearchSchema = z.object({
//  name: z.string().optional(),
//});

export default function CRM() {
    //const queryClient = useQueryClient();
    const [filterValue, setFilterValue] = useState("");
    const { data: clients, isPending } = useQuery({
        queryKey: ["clients", filterValue],
        queryFn: async () => {
            const response = await ClientsService.readClients({
                businessId: null,
                skip: 0,
                limit: 100,
            });
            return response;
        },
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filterValue = e.target.value.trim();
        setFilterValue(filterValue);
    };

    const filteredClients = clients?.filter((client) => {
        const filterLower = filterValue.toLowerCase();
        return (
            client.first_name.toLowerCase().includes(filterLower) ||
            client.last_name.toLowerCase().includes(filterLower) ||
            client.email.toLowerCase().includes(filterLower) ||
            client.address?.toLowerCase().includes(filterLower)
        );
    });

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <Container maxW="full" mt={8} mb={8}>
            <Heading size="lg" textAlign={{ base: "center", md: "left" }} pt={12} pb={4}>
                Client Relationship Management
            </Heading>

            {false && <Navbar type={"Client"} addModalAs={() => <AddClientForm isOpen={isModalOpen} onClose={handleModalClose} />} />}

            <Flex direction="column" gap={6} mt={6}>
                <Box>
                    <Heading size="md" pt={2} pb={2}>Add New Client</Heading>
                    <Button onClick={() => setIsModalOpen(true)} mt={2}>Add Client</Button>
                    {isModalOpen && (
                        <AddClientForm isOpen={isModalOpen} onClose={handleModalClose} />
                    )}
                </Box>


                <Box mt={6}>
                    <Heading size="md" pb={2}>All Clients</Heading>
                    <Input
                        placeholder="Filter by name, last name, email, or address"
                        onChange={handleFilter}
                        value={filterValue}
                        mt={2}
                    />

                    {isPending ? (
                        <p>Loading...</p>
                    ) : (
                        <TableContainer>
                            <Table size={{ base: "sm", md: "md" }}>
                                <Thead>
                                    <Tr>
                                        <Th>Name</Th>
                                        <Th>Last Name</Th>
                                        <Th>Phone Number</Th>
                                        <Th>Email</Th>
                                        <Th>Address</Th>
                                        <Th>Actions</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {filteredClients?.map((client) => (
                                        <Tr key={client.id as string}>
                                            <Td>{client.first_name}</Td>
                                            <Td>{client.last_name}</Td>
                                            <Td>{client.phone_number}</Td>
                                            <Td>{client.email}</Td>
                                            <Td>{client.address}</Td>
                                            <Td>
                                                <ActionsMenu type={"Client"} value={client as any} />
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    )}
                </Box>
            </Flex>
        </Container>
    );
}
