// TopNavBar.tsx
import { Flex, Box, Text, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FiBell, FiUser } from "react-icons/fi";

const TopNavBar = () => {
  const bgColor = useColorModeValue("ui.light", "ui.dark");
  const textColor = useColorModeValue("ui.dark", "ui.light");

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={4}
      bg={bgColor}
      color={textColor}
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Box>
        <Text fontSize="lg" fontWeight="bold">
         ZFlyN
        </Text>
      </Box>
      <Flex align="center">
        <IconButton
          aria-label="Notifications"
          icon={<FiBell />}
          variant="ghost"
          mr={2}
        />
        <IconButton
          aria-label="User Profile"
          icon={<FiUser />}
          variant="ghost"
        />
      </Flex>
    </Flex>
  );
};

export default TopNavBar;
