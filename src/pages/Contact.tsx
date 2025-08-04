import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorMode,
  SimpleGrid,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhoneSquareAlt, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const MotionBox = motion(Box);

const Contact = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

 
  useEffect(() => {
    emailjs.init("_KBDYRY1N_6l0jy5j"); 
  }, []);

  const socialLinks = [
    {
      name: t('contact.social.github'),
      icon: FaGithub,
      url: 'https://github.com/CrisUlim',
      color: '#FFF',
    },
    {
      name: t('contact.social.linkedin'),
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/ciobanu-cristian-a0ab52290',
      color: '#0077B5',
    },
    {
      name: t('contact.form.phone'),
      icon: FaPhoneSquareAlt,
      url: 'tel:+37379762023',
      color: '#00C000',
    },
    {
      name: t('contact.social.email'),
      icon: FaEnvelope,
      url: 'mailto:ciobanu.cristian082@gmail.com',
      color: '#EA4335',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        "service_tk3xgrg", 
        "template_quu1dff", 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ciobanu.cristian082@gmail.com', // Your email
        }
      );

      if (result.status === 200) {
        toast({
          title: t('contact.form.success'),
          description: t('contact.form.successDesc'),
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: t('contact.form.error'),
        description: error instanceof Error ? error.message : t('contact.form.errorDesc'),
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box as="section" py={20}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16}>
          {/* Contact Form */}
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl' }}
              mb={6}
              bgGradient="linear(to-r, brand.primary, brand.secondary)"
              bgClip="text"
            >
              {t('contact.title')}
            </Heading>
            <Text
              fontSize="lg"
              mb={8}
              color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
            >
              {t('contact.subtitle')}
            </Text>

            <VStack
              as="form"
              onSubmit={handleSubmit}
              spacing={6}
              align="stretch"
              bg="brand.glass.dark"
              p={8}
              borderRadius="xl"
              border="1px solid"
              borderColor="whiteAlpha.200"
              backdropFilter="blur(10px)"
            >
              <FormControl isRequired>
                <FormLabel>{t('contact.form.name')}</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.namePlaceholder')}
                  _placeholder={{ color: 'whiteAlpha.500' }}
                  bg="whiteAlpha.50"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  _hover={{ borderColor: 'brand.primary' }}
                  _focus={{ borderColor: 'brand.primary', boxShadow: 'none' }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>{t('contact.form.email')}</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.emailPlaceholder')}
                  _placeholder={{ color: 'whiteAlpha.500' }}
                  bg="whiteAlpha.50"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  _hover={{ borderColor: 'brand.primary' }}
                  _focus={{ borderColor: 'brand.primary', boxShadow: 'none' }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>{t('contact.form.message')}</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.messagePlaceholder')}
                  _placeholder={{ color: 'whiteAlpha.500' }}
                  bg="whiteAlpha.50"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  _hover={{ borderColor: 'brand.primary' }}
                  _focus={{ borderColor: 'brand.primary', boxShadow: 'none' }}
                  rows={5}
                />
              </FormControl>

              <Button
                type="submit"
                variant="neon"
                size="lg"
                isLoading={isSubmitting}
                loadingText={t('contact.form.sending')}
              >
                {t('contact.form.send')}
              </Button>
            </VStack>
          </MotionBox>

          {/* Social Links */}
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              mb={6}
              bgGradient="linear(to-r, brand.primary, brand.secondary)"
              bgClip="text"
            >
              {t('contact.connect')}
            </Heading>
            <Text
              fontSize="lg"
              mb={8}
              color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
            >
              {t('contact.connectDesc')}
            </Text>

            <SimpleGrid columns={{ base: 2 }} spacing={6}>
              {socialLinks.map((social) => (
                <MotionBox
                  key={social.name}
                  as="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  p={6}
                  bg="brand.glass.dark"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  backdropFilter="blur(10px)"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  transition="all 0.3s"
                  _hover={{
                    borderColor: social.color,
                    transform: 'translateY(-5px)',
                  }}
                >
                  <Icon
                    as={social.icon}
                    boxSize={8}
                    mb={3}
                    color={social.color}
                  />
                  <Text fontWeight="bold">{social.name}</Text>
                </MotionBox>
              ))}
            </SimpleGrid>

            <Box
              mt={12}
              p={6}
              bg="brand.glass.dark"
              borderRadius="xl"
              border="1px solid"
              borderColor="whiteAlpha.200"
              backdropFilter="blur(10px)"
            >
              <Text
                fontSize="lg"
                color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
                textAlign="center"
              >
                {t('contact.location')}
                <br />
                {t('contact.availability')}
              </Text>
            </Box>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;