import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Text,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGlobe, FaCheck } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const MotionBox = motion(Box);

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const menuBg = useColorModeValue('white', 'gray.800');
  const hoverBg = useColorModeValue('gray.100', 'whiteAlpha.200');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300');

  const languages = [
    { 
      code: 'en',
      name: 'English',
      flag: '🇬🇧'
    },
    { 
      code: 'ro',
      name: 'Română',
      flag: '🇷🇴'
    },
    { 
      code: 'ru',
      name: 'Русский',
      flag: '🇷🇺'
    },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={MotionBox}
        display="flex"
        alignItems="center"
        px={4}
        py={2}
        borderRadius="full"
        cursor="pointer"
        border="1px solid"
        borderColor={borderColor}
        bg="transparent"
        _hover={{ bg: hoverBg }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <HStack spacing={2}>
          <Text fontSize="xl" lineHeight={1}>
            {currentLanguage.flag}
          </Text>
          <Text fontSize="sm" fontWeight="medium">
            {currentLanguage.name}
          </Text>
          <Icon as={FaGlobe} fontSize="sm" />
        </HStack>
      </MenuButton>
      <MenuList
        bg={menuBg}
        borderColor={borderColor}
        boxShadow="lg"
        p={2}
        minW="150px"
        borderRadius="xl"
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            bg="transparent"
            borderRadius="lg"
            px={4}
            py={2}
            _hover={{ bg: hoverBg }}
            position="relative"
          >
            <HStack spacing={3} flex={1}>
              <Text fontSize="xl" lineHeight={1}>
                {lang.flag}
              </Text>
              <Text fontSize="sm" fontWeight="medium">
                {lang.name}
              </Text>
              {lang.code === i18n.language && (
                <Icon
                  as={FaCheck}
                  fontSize="xs"
                  color="brand.primary"
                  ml="auto"
                />
              )}
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher; 