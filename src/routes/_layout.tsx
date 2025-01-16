import { Flex, Spinner } from "@chakra-ui/react"
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router"

import Sidebar from "../components/Common/Sidebar"
import TopNavBar from "../components/Common/TopNavBar"; // Import the TopNavBar
import UserMenu from "../components/Common/UserMenu"
import useAuth, { isLoggedIn } from "../hooks/useAuth"

export const Route = createFileRoute("/_layout")({
  component: Layout,
  beforeLoad: async () => {
    if ( process.env.NODE_ENV === "production" && !isLoggedIn()) {
      throw redirect({
        to: "/login",
      })
    }
  },
})

function Layout() {
  const { isLoading } = useAuth()

  return (
    <Flex direction="column" maxW="large" h="auto" position="relative">
      <Flex direction="column" flex={1}>
        <TopNavBar />
        <Flex flex={1}>
          <Sidebar />
          {isLoading ? (
            <Flex justify="center" align="center" height="100vh" width="full">
              <Spinner size="xl" color="ui.main" />
            </Flex>
          ) : (
            <Outlet />
          )}
        </Flex>
      </Flex>
      <UserMenu />
    </Flex>
  );
}
