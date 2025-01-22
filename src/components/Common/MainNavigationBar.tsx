import { Box, Button, Container, Flex, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from '@tanstack/react-router';

export default function MainNavigationBar() {
  const navigate = useNavigate();

  return (
    <Box bg={useColorModeValue('white', 'gray.800')} boxShadow="md" position="fixed" width="100%" zIndex={10}>
      <Container maxW="7xl" py={4}>
        <Flex justify="space-between" align="center">
          <Heading
            size="sm"
            color={useColorModeValue('blue.500', 'white')}
            onClick={() => navigate({ to: "/" })} // Navigate to root
            cursor="pointer" // Change cursor to pointer to indicate it's clickable
          >
            ZFLYN
          </Heading>
          <Stack direction="row" spacing={4}>
            <Button variant="outline" colorScheme="blue" onClick={() => navigate({ to: "/login" })}>
              Login
            </Button>
            <Button colorScheme="blue" onClick={() => navigate({ to: "/signup" })}>
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
