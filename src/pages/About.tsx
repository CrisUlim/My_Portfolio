import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  useColorMode,
  Flex,
  Badge,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaBrain,
  FaGraduationCap,
  FaCertificate,
  FaGlobe,
  FaServer,
  FaRocket,
  FaUsers,
  FaGithub,
  FaLayerGroup,
} from 'react-icons/fa';
import { TbFileCv } from "react-icons/tb";
import { SiDjango, SiScikitlearn, SiPandas, SiNumpy, SiJavascript, SiHtml5, SiCss3, SiFlask } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);


const About = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  const skills = [
    { name: 'Python', icon: FaPython, level: t('expert') },
    { name: 'Django', icon: SiDjango, level: t('advanced') },
    { name: 'Flask', icon: SiFlask, level: t('advanced') },
    { name: 'Machine Learning', icon: FaBrain, level: t('advanced') },
    { name: 'Scikit-learn', icon: SiScikitlearn, level: t('advanced') },
    { name: 'React', icon: FaReact, level: t('intermediate') },
    { name: 'SQL', icon: FaDatabase, level: t('advanced') },
    { name: 'Pandas', icon: SiPandas, level: t('intermediate') },
    { name: 'Numpy', icon: SiNumpy, level: t('intermediate') },
    { name: 'JavaScript', icon: SiJavascript, level: t('intermediate') },
    { name: 'HTML5', icon: SiHtml5, level: t('advanced') },
    { name: 'CSS3', icon: SiCss3, level: t('advanced') },
  ];

  const languages = [
    { name: t('languages.romanian'), level: t('fluent'), icon: FaGlobe },
    { name: t('languages.english'), level: t('communication'), icon: FaGlobe },
    { name: t('languages.russian'), level: t('basic'), icon: FaGlobe },
  ];

  const accomplishments = [
    {
      title: t('accomplishments.webdev'),
      description: t('accomplishments.webdevDesc'),
      icon: FaServer,
    },
    {
      title: t('accomplishments.process'),
      description: t('accomplishments.processDesc'),
      icon: FaRocket,
    },
    {
      title: t('accomplishments.ml'),
      description: t('accomplishments.mlDesc'),
      icon: FaBrain,
    },
    {
      title: t('accomplishments.team'),
      description: t('accomplishments.teamDesc'),
      icon: FaUsers,
    },
    {
      title: t('accomplishments.opensource'),
      description: t('accomplishments.opensourceDesc'),
      icon: FaGithub,
    },
    {
      title: t('accomplishments.fullstack'),
      description: t('accomplishments.fullstackDesc'),
      icon: FaLayerGroup,
    },
  ];

  const education = [
    {
      degree: t('education.bachelor'),
      institution: t('education.ulim'),
      period: '2021-2025',
      icon: FaGraduationCap,
    },
    {
      degree: t('education.highschool'),
      institution: t('education.mircea'),
      period: '2019-2021',
      icon: FaGraduationCap,
    }
  ];

  const certifications = [
    {
      name: 'Google UI/UX Design',
      issuer: 'Google',
      year: '2024',
      icon: FaCertificate,
      
    },
    {
      name: 'Health Innovation Zone',
      issuer: 'Health Tech',
      year: '2023',
      icon: FaCertificate,
    }  
      
  ];

  const boxVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Box as="section" py={20}>
      <Container maxW="7xl">
        <VStack spacing={16} align="stretch">
          {/* About Me Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MotionHeading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl' }}
              mb={6}
              bgGradient="linear(to-r, brand.primary, brand.secondary)"
              bgClip="text"
            >
              {t('aboutMe')}
            </MotionHeading>
            <Text fontSize="lg" color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'} mb={6}>
              {t('aboutDescription')}
            </Text>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                as="a"
                href="/assets/cv.pdf"
                download="Cristian_CV.pdf"
                variant="neon"
                size="lg"
                leftIcon={<TbFileCv />}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)',
                }}
              >
                {t('downloadCV')}
              </Button>
            </MotionBox>
          </MotionBox>

          {/* Accomplishments Section */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl' }}
              mb={8}
              color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
            >
              {t('keyAccomplishments')}
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {accomplishments.map((accomplishment) => (
                <MotionBox
                  key={accomplishment.title}
                  variants={boxVariants}
                  whileHover="hover"
                  p={6}
                  bg="brand.glass.dark"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  backdropFilter="blur(10px)"
                  cursor="pointer"
                >
                  <Flex align="start" mb={3}>
                    <MotionBox
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <Icon 
                        as={accomplishment.icon} 
                        boxSize={5} 
                        color="brand.primary" 
                        mr={3} 
                        mt={1} 
                      />
                    </MotionBox>
                    <VStack align="start" spacing={2}>
                      <Text fontWeight="bold" fontSize="lg">{accomplishment.title}</Text>
                      <Text color="whiteAlpha.800" fontSize="md">
                        {accomplishment.description}
                      </Text>
                    </VStack>
                  </Flex>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>

          {/* Skills Section */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl' }}
              mb={8}
              color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
            >
              {t('technicalSkills')}
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
              {skills.map((skill) => (
                <MotionBox
                  key={skill.name}
                  variants={boxVariants}
                  whileHover="hover"
                  p={4}
                  bg="brand.glass.dark"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  backdropFilter="blur(10px)"
                  cursor="pointer"
                >
                  <VStack spacing={2}>
                    <MotionBox
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <Icon as={skill.icon} boxSize={8} color="brand.primary" />
                    </MotionBox>
                    <Text fontWeight="bold">{skill.name}</Text>
                    <Badge colorScheme="blue">{skill.level}</Badge>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>

          {/* Languages Section */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl' }}
              mb={8}
              color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
            >
              {t('languages')}
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {languages.map((language) => (
                <MotionBox
                  key={language.name}
                  variants={boxVariants}
                  whileHover="hover"
                  p={4}
                  bg="brand.glass.dark"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  backdropFilter="blur(10px)"
                  cursor="pointer"
                >
                  <VStack spacing={2}>
                    <MotionBox
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <Icon as={language.icon} boxSize={8} color="brand.primary" />
                    </MotionBox>
                    <Text fontWeight="bold">{language.name}</Text>
                    <Badge colorScheme="green">{language.level}</Badge>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>

          {/* Education and Certifications */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {/* Education Section */}
            <Box>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                mb={8}
                color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
              >
                {t('education')}
              </Heading>
              <VStack spacing={4} align="stretch">
                {education.map((edu) => (
                  <MotionBox
                    key={edu.degree}
                    variants={boxVariants}
                    whileHover="hover"
                    p={4}
                    bg="brand.glass.dark"
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    backdropFilter="blur(10px)"
                    cursor="pointer"
                  >
                    <Flex align="center">
                      <MotionBox
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        <Icon as={edu.icon} boxSize={6} color="brand.primary" mr={3} />
                      </MotionBox>
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="bold">{edu.degree}</Text>
                        <Text color="whiteAlpha.800">{edu.institution}</Text>
                        <Text fontSize="sm" color="whiteAlpha.600">{edu.period}</Text>
                      </VStack>
                    </Flex>
                  </MotionBox>
                ))}
              </VStack>
            </Box>

            {/* Certifications Section */}
            <Box>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                mb={8}
                color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
              >
                {t('certifications')}
              </Heading>
              <VStack spacing={4} align="stretch">
                {certifications.map((cert) => (
                  <MotionBox
                    key={cert.name}
                    variants={boxVariants}
                    whileHover="hover"
                    p={4}
                    bg="brand.glass.dark"
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    backdropFilter="blur(10px)"
                    cursor="pointer"
                  >
                    <Flex align="center">
                      <MotionBox
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        <Icon as={cert.icon} boxSize={6} color="brand.primary" mr={3} />
                      </MotionBox>
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="bold">{cert.name}</Text>
                        <Text color="whiteAlpha.800">{cert.issuer}</Text>
                        <Text fontSize="sm" color="whiteAlpha.600">{cert.year}</Text>
                      </VStack>
                    </Flex>
                  </MotionBox>
                ))}
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default About; 