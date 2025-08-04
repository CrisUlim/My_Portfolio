import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  Badge,
  Button,
  Icon,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const MotionBox = motion.create(Box);
const MotionSimpleGrid = motion(SimpleGrid);

const Projects = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  const projects = [
    {
      title: 'Diabetes Prediction Algorithm',
      description:
        'Machine learning model for predicting diabetes risk using patient data. Implemented using Python, scikit-learn, Numpy, Pandas.',
      image: 'ML.png',
      tags: ['Python', 'streamlit', 'scikit-learn', 'Numpy', 'Pandas'],
      demo: 'https://diabetespredictionappml-cyyprekrnbavk7lb7vqxuc.streamlit.app/',
    },
    {
      title: 'Diabetes Prediction Algorithm V2',
      description:
        'A better machine learning model for predicting diabetes risk using patient data. Implemented using Python, scikit-learn, Numpy, Pandas.',
      image: 'ML_V2.png',
      tags: ['Python', 'streamlit', 'scikit-learn', 'Numpy', 'Pandas'],
      demo: 'https://diabetespredictionappmlv2-pycznlko356jue5pcjtkte.streamlit.app/',
    },
    {
      title: 'Luxury Travel Agency',
      description:
        'Luxury travel agency crafting bespoke, high-end travel experiences with personalized itineraries and premium service.',
      image: 'Travel.png',
      tags: ['React', 'Vite', 'UI/UX', 'HTML', 'CSS', 'JS', 'responsive mobile device'],
      demo: 'https://travel-rouge-delta.vercel.app/',
    },
    {
      title: 'Sex Shop ',
      description:
        'Luxury sex shop offering premium intimate products, elegant designs, and a discreet shopping experience for sophisticated pleasure.',
      image: 'Sex.png',
      tags: ['HTML', 'CSS', 'JS', 'UI/UX', 'responsive'],
      demo: 'https://sex-shop-umber.vercel.app/',
    },
    {
      title: 'Luxe - Luxury Restaurant ',
      description:
        'Luxe – A luxury restaurant offering exquisite fine dining, gourmet cuisine, and an elegant ambiance for a refined culinary experience.',
      image: 'Luxe.png',
      tags: ['Next.js', 'CSS', 'JS', 'UI/UX', 'responsive', 'HTML'],
      demo: 'https://luxe-restaurant-bice.vercel.app/',
    },
    {
      title: 'Burger Haven - Fast Food',
      description:
        'Burger fast food serving juicy, handcrafted burgers with fresh ingredients and bold flavors for a delicious, quick bite.',
      image: 'Burger.png',
      tags: ['Html', 'CSS', 'JS', 'UI/UX', 'responsive'],
      demo: 'https://fast-food-nine-vert.vercel.app/',
    },
    {
      title: 'Coffee Shop',
      description:
        'Simple coffee shop serving premium blends, artisanal brews, and a cozy ambiance for the perfect coffee experience.',
      image: 'Coffee.png',
      tags: ['Vite', 'React', 'JS', 'UI/UX', 'html', 'responsive'],
      demo: 'https://coffee-shop-blush-rho.vercel.app/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
          {t('featuredProjects')}
        </Heading>

        <MotionSimpleGrid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
        >
          {projects.map((project) => (
            <MotionBox
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              bg="brand.glass.dark"
              borderRadius="xl"
              overflow="hidden"
              border="1px solid"
              borderColor="whiteAlpha.200"
              backdropFilter="blur(10px)"
            >
              <Box position="relative" height="200px">
                <Image
                  src={project.image}
                  alt={project.title}
                  objectFit="cover"
                  w="full"
                  h="auto"
                />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                />
              </Box>

              <Stack p={6} spacing={4}>
                <Heading
                  as="h3"
                  fontSize="xl"
                  color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
                >
                  {project.title}
                  
                </Heading>

                <Text
                  fontSize="md"
                  color={colorMode === 'dark' ? 'whiteAlpha.800' : 'gray.600'}
                >
                  {project.description}
                </Text>

                <Stack direction="row" spacing={2} flexWrap="wrap">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      colorScheme="cyan"
                      variant="subtle"
                      px={2}
                      py={1}
                      borderRadius="md"
                    >
                      {tag}
                    </Badge>
                  ))}
                </Stack>

                <Stack direction="row" spacing={4} pt={2}>
                  <Button
                    as="a"
                    href={project.demo}
                    target="_blank"
                    leftIcon={<Icon as={FaExternalLinkAlt} />}
                    variant="glass"
                    size="sm"
                  >
                    {t('viewDemo')}
                  </Button>
                </Stack>
              </Stack>
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Container>
    </Box>
  );
};

export default Projects; 