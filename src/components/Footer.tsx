import { Box, Container, Stack, Text, IconButton, useColorMode } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { colorMode } = useColorMode();

  const socialLinks = [
    {
      label: 'GitHub',
      icon: <FaGithub />,
      href: 'https://github.com/CrisUlim',
    },
    {
      label: 'LinkedIn',
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/in/ciobanu-cristian-a0ab52290',
    },
    {
      label: 'Email',
      icon: <FaEnvelope />,
      href: 'mailto:ciobanu.cristian082@gmail.com',
    },
  ];

  return (
    <Box
      as="footer"
      py={8}
      bg={colorMode === 'dark' ? 'brand.background.dark' : 'white'}
      borderTop="1px solid"
      borderColor={colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.200'}
    >
      <Container maxW="7xl">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify="space-between"
          align="center"
        >
          <Text
            bgGradient="linear(to-r, brand.primary, brand.secondary)"
            bgClip="text"
            fontWeight="bold"
          >
            © 2026 Ciobanu Cristian
          </Text>

          <Stack direction="row" spacing={4}>
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                as="a"
                href={social.href}
                target="_blank"
                aria-label={social.label}
                icon={social.icon}
                variant="ghost"
                size="md"
                _hover={{
                  transform: 'translateY(-2px)',
                  color: 'brand.primary',
                }}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer; 