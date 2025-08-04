import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorMode,
  Button,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const location = useLocation();

  const menuItems = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('projects'), path: '/projects' },
    { name: t('skills'), path: '/skills' },
    { name: t('contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Box
      position="fixed"
      w="100%"
      zIndex={1000}
      bg={colorMode === 'dark' ? 'rgba(10, 10, 15, 0.8)' : 'rgba(255, 255, 255, 0.8)'}
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor={colorMode === 'dark' ? 'whiteAlpha.200' : 'blackAlpha.200'}
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="7xl"
        mx="auto"
        px={4}
      >
        <Box
          as={RouterLink}
          to="/"
          fontSize="xl"
          fontWeight="bold"
          letterSpacing="wider"
          bgGradient="linear(to-r, brand.primary, brand.secondary)"
          bgClip="text"
          transition="transform 0.2s"
          _hover={{ transform: 'scale(1.1)' }}
          _active={{ transform: 'scale(0.9)' }}
        >
          CRISTIAN
        </Box>

        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          {menuItems.map((item) => (
            <Button
              key={item.path}
              as={RouterLink}
              to={item.path}
              variant="ghost"
              size="sm"
              px={3}
              color={isActive(item.path) ? 'brand.primary' : 'inherit'}
              borderBottom={isActive(item.path) ? '2px solid' : 'none'}
              borderColor="brand.primary"
              _hover={{
                bg: 'brand.glass.light',
                transform: 'translateY(-2px)',
              }}
              _active={{
                transform: 'translateY(0)',
              }}
            >
              {item.name}
            </Button>
          ))}
          <LanguageSwitcher />
        </HStack>

        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />
      </Flex>

      {/* Mobile menu */}
      <VStack
        display={{ base: isOpen ? 'flex' : 'none', md: 'none' }}
        bg={colorMode === 'dark' ? 'brand.background.dark' : 'white'}
        p={4}
        spacing={4}
      >
        {menuItems.map((item) => (
          <Button
            key={item.path}
            as={RouterLink}
            to={item.path}
            w="full"
            variant="ghost"
            onClick={onToggle}
            color={isActive(item.path) ? 'brand.primary' : 'inherit'}
            borderLeft={isActive(item.path) ? '3px solid' : 'none'}
            borderColor="brand.primary"
            justifyContent="flex-start"
            pl={4}
          >
            {item.name}
          </Button>
        ))}
        <LanguageSwitcher />
      </VStack>
    </Box>
  );
};

export default Navbar; 