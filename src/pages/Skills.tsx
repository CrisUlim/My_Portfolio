import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  useColorMode,
  Flex,
  Progress,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaBrain,
  FaAws,
} from 'react-icons/fa';
import {
  SiDjango,
  SiMysql,
  SiScikitlearn,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiPandas,
  SiNumpy,
} from 'react-icons/si';
import { AiFillApi } from "react-icons/ai";

const MotionBox = motion(Box);
const MotionProgress = motion(Progress);

const Skills = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  const skillCategories = [
    {
      name: t('skills.backend'),
      icon: FaPython,
      skills: [
        { name: 'Python', level: 95, icon: FaPython },
        { name: 'Django', level: 90, icon: SiDjango },
        { name: 'RestAPI', level: 85, icon: AiFillApi },
        { name: 'PostgreSQL', level: 85, icon: SiPostgresql },
        { name: 'MySQL', level: 80, icon: SiMysql },
      ],
    },
    {
      name: t('skills.ml'),
      icon: FaBrain,
      skills: [
        { name: 'scikit-learn', level: 90, icon: SiScikitlearn },
        { name: 'Pandas', level: 85, icon: SiPandas },
        { name: 'Numpy', level: 80, icon: SiNumpy },
        { name: 'Data Analysis', level: 85, icon: FaBrain },
        { name: 'Neural Networks', level: 80, icon: FaBrain },
      ],
    },
    {
      name: t('skills.frontend'),
      icon: FaReact,
      skills: [
        { name: 'JavaScript', level: 80, icon: SiJavascript },
        { name: 'TypeScript', level: 75, icon: SiTypescript },
        { name: 'React', level: 75, icon: FaReact },
        { name: 'HTML/CSS', level: 85, icon: FaReact },
      ],
    },
    {
      name: t('skills.devops'),
      icon: FaDocker,
      skills: [
        { name: 'Git', level: 90, icon: FaGitAlt },
        { name: 'Docker', level: 80, icon: FaDocker },
        { name: 'AWS', level: 75, icon: FaAws },
        { name: 'CI/CD', level: 75, icon: FaGitAlt },
      ],
    },
  ];

  return (
    <Box as="section" py={20}>
      <Container maxW="7xl">
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '4xl' }}
          mb={12}
          bgGradient="linear(to-r, brand.primary, brand.secondary)"
          bgClip="text"
        >
          {t('skills.title')}
        </Heading>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
          {skillCategories.map((category, index) => (
            <MotionBox
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Flex align="center" mb={6}>
                <Icon
                  as={category.icon}
                  boxSize={8}
                  color="brand.primary"
                  mr={3}
                />
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl' }}
                  color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
                >
                  {category.name}
                </Heading>
              </Flex>

              <VStack
                spacing={6}
                align="stretch"
                bg="brand.glass.dark"
                p={6}
                borderRadius="xl"
                border="1px solid"
                borderColor="whiteAlpha.200"
                backdropFilter="blur(10px)"
              >
                {category.skills.map((skill, skillIndex) => (
                  <Box key={skill.name}>
                    <Flex justify="space-between" align="center" mb={2}>
                      <Flex align="center">
                        <Icon
                          as={skill.icon}
                          boxSize={5}
                          color="brand.primary"
                          mr={2}
                        />
                        <Text
                          fontWeight="medium"
                          color={
                            colorMode === 'dark'
                              ? 'whiteAlpha.900'
                              : 'gray.700'
                          }
                        >
                          {skill.name}
                        </Text>
                      </Flex>
                      <Text
                        color={
                          colorMode === 'dark' ? 'whiteAlpha.700' : 'gray.500'
                        }
                      >
                        {skill.level}%
                      </Text>
                    </Flex>
                    <MotionProgress
                      value={skill.level}
                      size="sm"
                      colorScheme="cyan"
                      bg="whiteAlpha.200"
                      borderRadius="full"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{
                        duration: 1,
                        delay: index * 0.2 + skillIndex * 0.1,
                      }}
                    />
                  </Box>
                ))}
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          mt={16}
          p={8}
          bg="brand.glass.dark"
          borderRadius="xl"
          border="1px solid"
          borderColor="whiteAlpha.200"
          backdropFilter="blur(10px)"
        >
          <Heading
            as="h3"
            fontSize={{ base: 'xl', md: '2xl' }}
            mb={4}
            color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
          >
            {t('skills.subtitle')}
          </Heading>
          <Text
            color={colorMode === 'dark' ? 'whiteAlpha.800' : 'gray.600'}
            fontSize="lg"
          >
            {t('skills.description')}
          </Text>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Skills; 