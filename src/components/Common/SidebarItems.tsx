// SidebarItems.tsx
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react"
import { useQueryClient } from "@tanstack/react-query"
import { Link } from "@tanstack/react-router"
import { FiBriefcase, FiHome, FiSettings, FiUsers, FiMapPin, FiUserPlus , FiUser, FiAnchor, FiCalendar} from "react-icons/fi"
import type { UserPublic } from "../../client"

const items = [
  { icon: FiHome, title: "Dashboard", path: "/dashboard" },
  { icon: FiBriefcase, title: "Items", path: "/items" },
  { icon: FiSettings, title: "User Settings", path: "/settings" },
  { icon: FiMapPin,  title: "Google Business Profile", path: "/google-business-profile"},
  { icon: FiUser,  title: "Add Client", path: "/add-client"},
  { icon: FiUserPlus, title: "CRM", path: "/crm" },
  { icon: FiAnchor, title: "Staff", path: "/staff" },
  { icon: FiCalendar, title: "Appointments", path: "/appointments" },

]

interface SidebarItemsProps {
  onClose?: () => void
  isCollapsed?: boolean
}

const SidebarItems = ({ onClose, isCollapsed }: SidebarItemsProps) => {
  const queryClient = useQueryClient()
  const textColor = useColorModeValue("ui.main", "ui.light")
  const bgActive = useColorModeValue("#E2E8F0", "#4A5568")
  const currentUser = queryClient.getQueryData<UserPublic>(["currentUser"])

  const finalItems = currentUser?.is_superuser
    ? [...items, { icon: FiUsers, title: "Admin", path: "/admin" }]
    : items

  const listItems = finalItems.map(({ icon, title, path }) => (
    <Flex
      as={Link}
      to={path}
      w="100%"
      p={2}
      key={title}
      activeProps={{
        style: {
          background: bgActive,
          borderRadius: "12px",
        },
      }}
      color={textColor}
      onClick={onClose}
      justifyContent={isCollapsed ? "center" : "flex-start"}
    >
      <Icon as={icon} alignSelf="center" />
      {!isCollapsed && <Text ml={2}>{title}</Text>}
    </Flex>
  ))

  return (
    <>
      <Box>{listItems}</Box>
    </>
  )
}

export default SidebarItems
