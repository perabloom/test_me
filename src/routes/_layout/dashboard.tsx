import { Box, Container, Text } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"

import useAuth from "../../hooks/useAuth"
import { BusinessesService } from "../../client/sdk.gen" // Import the service

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
  const { user: currentUser } = useAuth()
  const { data: businesses = [], isPending } = useQuery(getBusinessesQueryOptions())

  if (isPending) {
    return (
      <Container maxW="full">
        <Box pt={12} m={4}>
          <Text fontSize="2xl">Loading...</Text>
        </Box>
      </Container>
    )
  }

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
            {businesses?.length > 0 ? (
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
