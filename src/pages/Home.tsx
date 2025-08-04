import { Box, Container, Heading, Text, Button, Stack, useColorMode, Image, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { TbFileCv } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);


const Home = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      as="section"
      minH="100vh"
      pt={20}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient: 'radial(circle at top right, brand.accent, transparent 70%)',
        opacity: 0.1,
        zIndex: -1,
      }}
    >
      <Container maxW="7xl" h="full">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: 12, lg: 8 }}
          h="full"
          pt={20}
        >
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            flex="1"
          >
            <MotionHeading
              variants={childVariants}
              as="h1"
              fontSize={{ base: '4xl', md: '6xl' }}
              bgGradient="linear(to-r, brand.primary, brand.secondary)"
              bgClip="text"
              letterSpacing="tight"
              mb={4}
            >
              {t('greeting')}
            </MotionHeading>

            <MotionText
              variants={childVariants}
              fontSize={{ base: 'xl', md: '2xl' }}
              mb={6}
              color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
            >
              {t('role')}
            </MotionText>

            <MotionText
              variants={childVariants}
              fontSize={{ base: 'md', md: 'lg' }}
              mb={8}
              maxW="2xl"
              color={colorMode === 'dark' ? 'whiteAlpha.800' : 'gray.600'}
            >
              {t('description')}
            </MotionText>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              w={{ base: 'full', sm: 'auto' }}
            >
              <Button
                as={Link}
                to="/projects"
                variant="neon"
                size="lg"
                leftIcon={<FaGithub />}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)',
                }}
              >
                {t('viewProjects')}
              </Button>
              <Button
                as="a"
                href="/assets/cv.pdf"
                download="Cristian_CV.pdf"
                variant="glass"
                size="lg"
                leftIcon={<TbFileCv />}
                _hover={{
                  transform: 'translateY(-2px)',
                }}
              >
                {t('downloadCV')}
              </Button>
            </Stack>

            <MotionBox
              variants={childVariants}
              mt={16}
              p={6}
              borderRadius="xl"
              bg="brand.glass.dark"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.200"
            >
              <Text fontSize="sm" color={colorMode === 'dark' ? 'whiteAlpha.700' : 'gray.500'}>
                {t('currentlyStudying')}
                <br />
                {t('googleCertified')}
                <br />
                {t('healthCertified')}
              </Text>
            </MotionBox>
          </MotionBox>

          <MotionBox
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              position="relative"
              w={{ base: "300px", md: "400px" }}
              h={{ base: "300px", md: "400px" }}
              borderRadius="full"
              overflow="hidden"
              border="3px solid"
              borderColor="brand.primary"
              boxShadow="0 0 20px rgba(0, 245, 255, 0.2)"
            >
              <Image
                src="/my.jpeg"
                alt={t('greeting')}
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.3s ease"
                _hover={{
                  transform: 'scale(1.05)',
                }}
              />
            </Box>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home; 