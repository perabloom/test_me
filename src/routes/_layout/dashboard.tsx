import {  Button, Grid, IconButton, Flex, Card, Box, Container, Text,   useColorModeValue, } from "@chakra-ui/react"
import { FaUserAstronaut } from "react-icons/fa"
import { createFileRoute } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";
import { UsersService } from "../../client";

import useAuth from "../../hooks/useAuth"
import { BusinessesService } from "../../client/sdk.gen" // Import the service

import { Stack } from "@chakra-ui/react"
import { Skeleton } from "../../components/ui/skeleton"
import OnboardingModal from "../../components/Common/OnboardingModal";

export const Route = createFileRoute("/_layout/dashboard")({
  component: Dashboard,
})

function getBusinessesQueryOptions() {
  return {
    queryFn: () => BusinessesService.readBusinesses(),
    queryKey: ["businesses"],
  }
}

function Dashboard() {
  const [isOnboarding, setIsOnboarding] = useState(false);
  const { user: currentUser } = useAuth();
  const { data: businesses = [], isPending } = useQuery(getBusinessesQueryOptions());
  const cardBg = useColorModeValue("ui.light", "ui.dark");
  const cardColor = useColorModeValue("ui.dark", "ui.light");
  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const status = await UsersService.getOnboardingStatus();
        setIsOnboarding(!status);
      } catch (error) {
        console.error("Error checking onboarding status:", error);
      }
    };

    checkOnboardingStatus();
  }, []);

  if (isPending) {
    return (
      <Container maxW="full">
        <Box pt={12} m={4}>
          <Stack align="flex-start" gap="4">
            <Skeleton height="6">
              <Text>Chakra UI is cool</Text>
            </Skeleton>
          </Stack>
        </Box>
      </Container>
    );
  }




  return (
    <>
     <Container maxW="full" p={4}>
      <Box>
        <Grid templateColumns="repeat(3, min-content)" gap={4} justifyItems="start">
          <Card
            variant="outline"
            p={4}
            borderRadius="lg"
            boxShadow="md"
            w="xs"
            h="xs"
            bg={cardBg}
            color={cardColor}
          >
            <Flex justify="space-between" align="center">
              <Text fontSize="2xl">Welcome back, {currentUser?.full_name || currentUser?.email}</Text>
              <IconButton icon={<FaUserAstronaut />} variant="ghost" aria-label="User Profile" />
            </Flex>
            <Text mt={2}>Nice to see you again!</Text>
          </Card>

          <Card
            variant="outline"
            p={4}
            borderRadius="lg"
            boxShadow="md"
            w="xs"
            h="xs"
            bg={cardBg}
            color={cardColor}
          >
            <Text fontSize="lg">Your Businesses:</Text>
            {businesses.length > 0 ? (
              <Grid templateColumns="repeat(1, 1fr)" gap={4} mt={4}>
                {businesses.map((business) => (
                  <Box key={business.id}>
                    <Text fontSize="lg">{business.name}</Text>
                    <Text mt={2}>{business.id}</Text>
                  </Box>
                ))}
              </Grid>
            ) : (
              <Box>
                <Text>No businesses found.</Text>
                <Button variant="solid" colorScheme="blue" mt={2}>
                  Create a new business
                </Button>
              </Box>
            )}
          </Card>

          {/* Additional cards */}
          <Card
            variant="outline"
            p={4}
            borderRadius="lg"
            boxShadow="md"
            w="xs"
            h="xs"
            bg={cardBg}
            color={cardColor}
          >
            {/* Card 3 */}
          </Card>

          <Card
            variant="outline"
            p={4}
            borderRadius="lg"
            boxShadow="md"
            w="xs"
            h="xs"
            bg={cardBg}
            color={cardColor}
          >
            {/* Card 4 */}
          </Card>

          <Card
            variant="outline"
            p={4}
            borderRadius="lg"
            boxShadow="md"
            w="xs"
            h="xs"
            bg={cardBg}
            color={cardColor}
          >
            {/* Card 5 */}
          </Card>

          <Card
            variant="outline"
            p={4}
            borderRadius="lg"
            boxShadow="md"
            w="xs"
            h="xs"
            bg={cardBg}
            color={cardColor}
          >
            {/* Card 6 */}
          </Card>
        </Grid>
      </Box>
    </Container>
    {isOnboarding && <OnboardingModal isOpen={isOnboarding} onClose={() => setIsOnboarding(false)} />}
    </>
  );
}


/*
import { Box, Container, Text } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useState } from "react"

import useAuth from "../../hooks/useAuth"
import { BusinessesService } from "../../client/sdk.gen" // Import the service

type Business = {
  id: string
  name: string
}

export const Route = createFileRoute("/_layout/dashboard")({
  component: Dashboard,
})

function Dashboard() {
  const { user: currentUser } = useAuth()
  const [businesses, setBusinesses] = useState<Business[]>([]) // Use the correct type here

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await BusinessesService.readBusinesses()
        setBusinesses(response as Business[]) // Cast the response to the correct type
      } catch (error) {
        console.error("Failed to fetch businesses:", error)
      }
    }

    fetchBusinesses()
  }, [])

  return (
    <>
      <Container maxW="full">
        <Box pt={12} m={4}>
          <Text fontSize="2xl">
            Hi, {currentUser?.full_name || currentUser?.email}
          </Text>
          <Text>Welcome back, nice to see you again!</Text>
          <Box mt={4}>
            <Text fontSize="lg">Your Businesses:</Text>
            {businesses.length > 0 ? (
              businesses.map((business) => (
                <Text key={business.id}>{business.name}</Text>
              ))
            ) : (
              <Text>No businesses found.</Text>
            )}
          </Box>
        </Box>
      </Container>
    </>
  )
}
*/
