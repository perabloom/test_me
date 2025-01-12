
import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute("/addme")({
  component: AddClientx,
})

// CRMTable.tsx

import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  Button,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { CSVLink } from 'react-csv';

import { FiPlus, FiDownload } from 'react-icons/fi';
const customers = [
  {
    id: 1,
    name: 'John Doe',
    company: 'ABC Inc.',
    address: '123 Main St',
    phone: '123-456-7890',
    email: 'johndoe@example.com',
    created: '2022-01-01',
  },
  {
    id: 2,
    name: 'Jane Smith',
    company: 'XYZ Corp.',
    address: '456 Elm St',
    phone: '987-654-3210',
    email: 'janesmith@example.com',
    created: '2022-02-01',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    company: null,
    address: null,
    phone: null,
    email: 'bobjohnson@example.com',
    created: '2022-03-01',
  },
];

// Define the CRM table component
function AddClientx () {
  const headers = [
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Company', key: 'company' },
    { label: 'Address', key: 'address' },
    { label: 'Phone', key: 'phone' },
    { label: 'Email', key: 'email' },
    { label: 'Created', key: 'created' },
  ];

  // Render the CRM table
  return (
    <Box>
      <Flex justifyContent="space-between" mb={4}>
        <Heading size="md">Customer List</Heading>
        <Flex>
          <Button leftIcon={<FiPlus />} colorScheme="blue" mr={2}>
            Add Client
          </Button>
          <CSVLink
            data={customers}
            headers={headers}
            filename="customers.csv"
            target="_blank"
          >
            <Button leftIcon={<FiDownload />} colorScheme="blue">
              Export to CSV
            </Button>
          </CSVLink>
        </Flex>
      </Flex>
      <Box overflow="auto" maxH="500px">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Company</Th>
              <Th>Address</Th>
              <Th>Phone</Th>
              <Th>Email</Th>
              <Th>Created</Th>
            </Tr>
          </Thead>
          <Tbody>
            {customers.map((customer) => (
              <Tr key={customer.id}>
                <Td>{customer.id}</Td>
                <Td>{customer.name || '-'}</Td>
                <Td>{customer.company || '-'}</Td>
                <Td>{customer.address || '-'}</Td>
                <Td>{customer.phone || '-'}</Td>
                <Td>{customer.email || '-'}</Td>
                <Td>{customer.created || '-'}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};
