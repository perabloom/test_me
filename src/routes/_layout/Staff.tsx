// Staff.tsx
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
  import { useState } from "react";

  import { StaffsService } from "../../client";
  import ActionsMenu from "../../components/Common/ActionsMenu";
  import AddStaffForm from "../../components/Common/AddStaffForm";

  export const Route = createFileRoute("/_layout/Staff")({
    component: Staff,
  });

  export default function Staff() {
    const [filterValue, setFilterValue] = useState("");
    const { data: staffs, isPending } = useQuery({
      queryKey: ["staffs", filterValue],
      queryFn: async () => {
        const response = await StaffsService.readStaffs({
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

    const filteredStaffs = staffs?.filter((staff) => {
      const filterLower = filterValue.toLowerCase();
      return (
        staff.name.toLowerCase().includes(filterLower) ||
        staff.description?.toLowerCase().includes(filterLower)
      );
    });

    const handleModalClose = () => {
      setIsModalOpen(false);
    };

    return (
      <Container maxW="full" mt={8} mb={8}>
        <Heading size="lg" textAlign={{ base: "center", md: "left" }} pt={12} pb={4}>
          Staff Management
        </Heading>

        <Flex direction="column" gap={6} mt={6}>
          <Box>
            <Heading size="md" pt={2} pb={2}>Add New Staff</Heading>
            <Button onClick={() => setIsModalOpen(true)} mt={2}>Add Staff</Button>
            {isModalOpen && (
              <AddStaffForm isOpen={isModalOpen} onClose={handleModalClose} />
            )}
          </Box>

          <Box mt={6}>
            <Heading size="md" pb={2}>All Staff</Heading>
            <Input
              placeholder="Filter by name or description"
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
                      <Th>Description</Th>
                      <Th>Start Date</Th>
                      <Th>Status</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {filteredStaffs?.map((staff) => (
                      <Tr key={staff.id as string}>
                        <Td>{staff.name}</Td>
                        <Td>{staff.description}</Td>
                        <Td>{staff.start_date}</Td>
                        <Td>{staff.status}</Td>
                        <Td>
                          <ActionsMenu type={"Staff"} value={staff as any} />
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
