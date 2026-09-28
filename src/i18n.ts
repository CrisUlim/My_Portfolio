import i18n from 'i18next';
import { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      downloadCV: 'Download CV',

      // Home Page
      greeting: "Hi, I'm Cristian",
      role: 'ML & Backend Developer | UI/UX Designer',
      description: 'Crafting intelligent solutions through code and design. Specializing in Python, Django, Machine Learning, Backend Development, and UI/UX Design. Currently teaching Operating Systems and Computer Architecture, while developing intelligent and user-focused software solutions.',
      viewProjects: 'View Projects',
      connectWithMe: 'Connect with Me',
      currentlyStudying: '🎓 B.Sc. in Computer Science — ULIM University (2021–2025)',
      googleCertified: '🏆 Google UI/UX Design Certified',
      healthCertified: '🌟 Health Innovation Zone Certificate Holder',

      // About Page
      aboutMe: 'About Me',
      aboutDescription: "I'm a passionate Backend Developer and Machine Learning Engineer specializing in Python, Django, and intelligent software solutions. I also work in UI/UX Design and currently teach Operating Systems and Computer Architecture, combining technical development with practical computer science education.",
      keyAccomplishments: 'Key Accomplishments',
      technicalSkills: 'Technical Skills',
      languages: 'Languages',
      education: 'Education',
      certifications: 'Certifications',
      expert: 'Expert',
      advanced: 'Advanced',
      intermediate: 'Intermediate',
      fluent: 'Fluent',
      communication: 'Communication',
      basic: 'Basic',

      // Languages
      'languages.romanian': 'Romanian',
      'languages.english': 'English',
      'languages.russian': 'Russian',

      // Education
      'education.bachelor': 'Bachelor in Computer Science',
      'education.ulim': 'ULIM University',
      'education.highschool': 'High School',
      'education.mircea': 'L.T "Mircea Eliade"',

      // Accomplishments
      'accomplishments.webdev': 'Developed Robust Web Applications',
      'accomplishments.webdevDesc': 'Successfully designed and deployed dynamic web applications using frameworks like Django and Flask, ensuring scalability and responsiveness.',
      'accomplishments.process': 'Streamlined Development Processes',
      'accomplishments.processDesc': 'Implemented efficient coding practices, reducing development time while maintaining high-quality standards in codebase and performance.',
      'accomplishments.ml': 'Applied Machine Learning',
      'accomplishments.mlDesc': 'Explored and applied machine learning concepts in real-world projects, showcasing innovation and integration of advanced technologies.',
      'accomplishments.team': 'Team Collaboration',
      'accomplishments.teamDesc': 'Contributed effectively to team-based development projects, demonstrating strong teamwork and communication skills.',
      'accomplishments.opensource': 'Open Source Contribution',
      'accomplishments.opensourceDesc': 'Maintains an active GitHub portfolio showcasing innovative projects and contributions to the tech community.',
      'accomplishments.fullstack': 'Full-Stack Development',
      'accomplishments.fullstackDesc': 'Proficiently utilized HTML5, CSS, and JavaScript to complement backend skills, delivering comprehensive full-stack solutions.',

      // Skills Page
      'skills.title': 'My Skills',
      'skills.subtitle': 'Expertise & Technologies',
      'skills.description': 'A comprehensive overview of my technical skills and proficiency levels across different domains of software development.',
      
      // Skill Categories
      'skills.backend': 'Backend Development',
      'skills.backendDesc': 'Building robust server-side applications with Python, Django, and Flask. Experienced in RESTful APIs, database design, and system architecture.',
      
      'skills.ml': 'Machine Learning',
      'skills.mlDesc': 'Implementing ML solutions using scikit-learn, TensorFlow, and pandas. Experienced in data preprocessing, model training, and deployment.',
      
      'skills.web': 'Web Development',
      'skills.webDesc': 'Creating responsive web applications using modern frameworks and technologies. Proficient in React, HTML5, CSS3, and JavaScript.',
      
      'skills.database': 'Database Management',
      'skills.databaseDesc': 'Designing and optimizing database systems. Experienced with SQL, PostgreSQL, and MongoDB.',
      
      'skills.api': 'API Integration',
      'skills.apiDesc': 'Developing and consuming RESTful APIs. Experienced in API design, documentation, and integration.',
      
      'skills.frontend': 'Frontend Development',
      'skills.frontendDesc': 'Building user interfaces with React and modern CSS frameworks. Focus on responsive design and user experience.',
      
      'skills.cloud': 'Cloud Services',
      'skills.cloudDesc': 'Working with cloud platforms and services. Experience with AWS and cloud deployment.',
      
      'skills.devops': 'DevOps',
      'skills.devopsDesc': 'Implementing CI/CD pipelines and automated deployment processes. Experience with Docker and version control.',

      // Projects Page
      featuredProjects: 'Featured Projects',
      viewCode: 'Code',
      viewDemo: 'Demo',
      projectDescriptions: {
        diabetes: 'Model de machine learning pentru predicția riscului de diabet folosind date ale pacienților. Implementat folosind Python, scikit-learn și TensorFlow.',
        portfolio: 'Website portfolio modern și responsiv construit cu React și Chakra UI. Include animații fluide și mod întunecat.',
        ecommerce: 'Platformă e-commerce completă cu autentificare utilizator, gestionare produse și integrare plăți.'
      },

      // Contact Page
      'contact.title': 'Get in Touch',
      'contact.subtitle': "Let's Work Together",
      'contact.description': 'Have a question or want to work together? Feel free to reach out!',
      'contact.connectDesc': 'Connect with me on social media or through direct contact',
      'contact.form.name': 'Name',
      'contact.form.namePlaceholder': 'Your name',
      'contact.form.email': 'Email',
      'contact.form.emailPlaceholder': 'your.email@example.com',
      'contact.form.phone': 'Phone',
      'contact.form.message': 'Message',
      'contact.form.messagePlaceholder': 'Your message here...',
      'contact.form.send': 'Send Message',
      'contact.form.sending': 'Sending...',
      'contact.form.success': 'Message sent!',
      'contact.form.successDesc': "Thank you for reaching out! I'll get back to you as soon as possible.",
      'contact.form.error': 'Error sending message. Please try again.',
      'contact.location': 'Based in Moldova',
      'contact.availability': 'Available for remote work worldwide',
      'contact.connect': 'Connect With Me',
      'contact.social.github': 'GitHub',
      'contact.social.linkedin': 'LinkedIn',
      'contact.social.twitter': 'Twitter',
      'contact.social.email': 'Email',
      'contact.validation.required': 'This field is required',
      'contact.validation.email': 'Please enter a valid email address',
      'contact.validation.minLength': 'Message must be at least 10 characters',
    },
  },
  ro: {
    translation: {
      // Navigation
      home: 'Acasă',
      about: 'Despre',
      projects: 'Proiecte',
      skills: 'Abilități',
      contact: 'Contact',
      downloadCV: 'Descarcă CV-ul',

      // Home Page
      greeting: 'Salut, sunt Cristian',
      role: 'ML & Backend Developer | UI/UX Designer',
      description: 'Creez soluții inteligente prin cod și design. Specializat în Python, Django, Machine Learning, Dezvoltare Backend și Design UI/UX. În prezent studiez Informatica la Universitatea ULIM.',
      viewProjects: 'Vezi Proiectele',
      connectWithMe: 'Conectează-te cu Mine',
      currentlyStudying: '🎓 B.Sc. in Computer Science — ULIM University (2021–2025)',
      googleCertified: '🏆 Certificat Google UI/UX Design',
      healthCertified: '🌟 Certificat Health Innovation Zone',

      // About Page
      aboutMe: 'Despre Mine',
      aboutDescription: 'Sunt un Backend Developer și Machine Learning Engineer pasionat, cu o bază solidă în Python și ecosistemul său. Mă specializez în dezvoltarea sistemelor backend robuste, crearea soluțiilor inteligente bazate pe Machine Learning și proiectarea unor experiențe UI/UX intuitive și eficiente. În prezent, predau Sisteme de Operare și Arhitectura Calculatoarelor, combinând experiența practică în dezvoltare software cu o înțelegere solidă a fundamentelor informaticii.',
      keyAccomplishments: 'Realizări Cheie',
      technicalSkills: 'Abilități Tehnice',
      languages: 'Limbi Străine',
      education: 'Educație',
      certifications: 'Certificări',
      expert: 'Expert',
      advanced: 'Avansat',
      intermediate: 'Intermediar',
      fluent: 'Fluent',
      communication: 'Comunicare',
      basic: 'De bază',

      // Languages
      'languages.romanian': 'Română',
      'languages.english': 'Engleză',
      'languages.russian': 'Rusă',

      // Education
      'education.bachelor': 'Licență în Informatică',
      'education.ulim': 'Universitatea ULIM',
      'education.highschool': 'Liceu',
      'education.mircea': 'L.T "Mircea Eliade"',

      // Accomplishments
      'accomplishments.webdev': 'Dezvoltare Aplicații Web Robuste',
      'accomplishments.webdevDesc': 'Am proiectat și implementat cu succes aplicații web dinamice folosind framework-uri precum Django și Flask, asigurând scalabilitate și performanță.',
      'accomplishments.process': 'Optimizarea Proceselor de Dezvoltare',
      'accomplishments.processDesc': 'Am implementat practici eficiente de codare, reducând timpul de dezvoltare și menținând standarde înalte de calitate în cod și performanță.',
      'accomplishments.ml': 'Aplicarea Machine Learning',
      'accomplishments.mlDesc': 'Am explorat și aplicat concepte de machine learning în proiecte reale, demonstrând inovație și integrarea tehnologiilor avansate.',
      'accomplishments.team': 'Colaborare în Echipă',
      'accomplishments.teamDesc': 'Am contribuit eficient la proiecte de dezvoltare în echipă, demonstrând abilități puternice de lucru în echipă și comunicare.',
      'accomplishments.opensource': 'Contribuții Open Source',
      'accomplishments.opensourceDesc': 'Mențin un portofoliu activ pe GitHub care prezintă proiecte inovatoare și contribuții în comunitatea tech.',
      'accomplishments.fullstack': 'Dezvoltare Full-Stack',
      'accomplishments.fullstackDesc': 'Am utilizat cu succes HTML5, CSS și JavaScript pentru a completa abilitățile backend, oferind soluții complete full-stack.',

      // Skills Page
      'skills.title': 'Abilitățile Mele',
      'skills.subtitle': 'Expertiză & Tehnologii',
      'skills.description': 'O prezentare completă a abilităților mele tehnice și a nivelurilor de competență în diferite domenii ale dezvoltării software.',
      
      // Skill Categories
      'skills.backend': 'Dezvoltare Backend',
      'skills.backendDesc': 'Construirea aplicațiilor robuste server-side cu Python, Django și Flask. Experiență în API-uri RESTful, design de baze de date și arhitectură de sistem.',
      
      'skills.ml': 'Machine Learning',
      'skills.mlDesc': 'Implementarea soluțiilor ML folosind scikit-learn, TensorFlow și pandas. Experiență în preprocesarea datelor, antrenarea modelelor și implementare.',
      
      'skills.web': 'Dezvoltare Web',
      'skills.webDesc': 'Crearea aplicațiilor web responsive folosind framework-uri și tehnologii moderne. Competent în React, HTML5, CSS3 și JavaScript.',
      
      'skills.database': 'Administrare Baze de Date',
      'skills.databaseDesc': 'Proiectarea și optimizarea sistemelor de baze de date. Experiență cu SQL, PostgreSQL și MongoDB.',
      
      'skills.api': 'Integrare API',
      'skills.apiDesc': 'Dezvoltarea și consumul API-urilor RESTful. Experiență în design-ul API, documentație și integrare.',
      
      'skills.frontend': 'Dezvoltare Frontend',
      'skills.frontendDesc': 'Construirea interfețelor utilizator cu React și framework-uri CSS moderne. Focus pe design responsive și experiența utilizatorului.',
      
      'skills.cloud': 'Servicii Cloud',
      'skills.cloudDesc': 'Lucrul cu platforme și servicii cloud. Experiență cu AWS și implementare în cloud.',
      
      'skills.devops': 'DevOps',
      'skills.devopsDesc': 'Implementarea pipeline-urilor CI/CD și a proceselor de implementare automatizată. Experiență cu Docker și control versiune.',

      // Projects Page
      featuredProjects: 'Proiecte',
      viewCode: 'Cod',
      viewDemo: 'Demo',
      projectDescriptions: {
        diabetes: 'Model de machine learning pentru predicția riscului de diabet folosind date ale pacienților. Implementat folosind Python, scikit-learn și TensorFlow.',
        portfolio: 'Website portfolio modern și responsiv construit cu React și Chakra UI. Include animații fluide și mod întunecat.',
        ecommerce: 'Platformă e-commerce completă cu autentificare utilizator, gestionare produse și integrare plăți.'
      },

      // Contact Page
      'contact.title': 'Contactează-mă',
      'contact.subtitle': 'Să Colaborăm',
      'contact.description': 'Ai o întrebare sau vrei să lucrăm împreună? Contactează-mă!',
      'contact.connectDesc': 'Conectează-te cu mine pe rețelele sociale sau direct',
      'contact.form.name': 'Nume',
      'contact.form.namePlaceholder': 'Numele tău',
      'contact.form.email': 'Email',
      'contact.form.emailPlaceholder': 'email@exemplu.com',
      'contact.form.phone': 'Telefon',
      'contact.form.message': 'Mesaj',
      'contact.form.messagePlaceholder': 'Scrie mesajul tău aici...',
      'contact.form.send': 'Trimite Mesaj',
      'contact.form.sending': 'Se trimite...',
      'contact.form.success': 'Mesaj trimis!',
      'contact.form.successDesc': 'Mulțumesc pentru mesaj! Voi reveni cu un răspuns cât mai curând.',
      'contact.form.error': 'Eroare la trimiterea mesajului. Te rog încearcă din nou.',
      'contact.location': 'Localizat în Moldova',
      'contact.availability': 'Disponibil pentru lucru remote la nivel global',
      'contact.connect': 'Conectează-te',
      'contact.social.github': 'GitHub',
      'contact.social.linkedin': 'LinkedIn',
      'contact.social.twitter': 'Twitter',
      'contact.social.email': 'Email',
      'contact.validation.required': 'Acest câmp este obligatoriu',
      'contact.validation.email': 'Te rog introdu o adresă de email validă',
      'contact.validation.minLength': 'Mesajul trebuie să aibă cel puțin 10 caractere',
    },
  },
  ru: {
    translation: {
      // Navigation
      home: 'Главная',
      about: 'Обо мне',
      projects: 'Проекты',
      skills: 'Навыки',
      contact: 'Контакты',
      downloadCV: 'Скачать Резюме',

      // Home Page
      greeting: 'Привет, я Кристиан',
      role: 'ML & Backend Developer | UI/UX Designer',
      description: 'Создаю интеллектуальные решения с помощью кода и дизайна. Специализируюсь на Python, Django, Machine Learning, Backend Development и UI/UX Design. В настоящее время изучаю информатику в университете ULIM.',
      viewProjects: 'Смотреть Проекты',
      connectWithMe: 'Связаться со Мной',
      currentlyStudying: '🎓 Бакалавр информатики — Университет ULIM (2021–2025)',
      googleCertified: '🏆 Сертифицирован Google UI/UX Design',
      healthCertified: '🌟 Сертификат Health Innovation Zone',

      // About Page
      aboutMe: 'Обо мне',
      aboutDescription: 'Я увлеченный Backend Разработчик и Инженер Machine Learning с сильной базой в Python и его экосистеме. В настоящее время получаю степень по Информатике в университете ULIM, специализируюсь на создании надежных backend систем и разработке интеллектуальных решений с использованием машинного обучения.',
      keyAccomplishments: 'Ключевые достижения',
      technicalSkills: 'Технические навыки',
      languages: 'Языки',
      education: 'Образование',
      certifications: 'Сертификаты',
      expert: 'Эксперт',
      advanced: 'Продвинутый',
      intermediate: 'Средний',
      fluent: 'Свободно',
      communication: 'Общение',
      basic: 'Базовый',

      // Languages
      'languages.romanian': 'Румынский',
      'languages.english': 'Английский',
      'languages.russian': 'Русский',

      // Education
      'education.bachelor': 'Бакалавр Информатики',
      'education.ulim': 'Университет ULIM',
      'education.highschool': 'Лицей',
      'education.mircea': 'Л.Т "Мирча Елиаде"',

      // Accomplishments
      'accomplishments.webdev': 'Разработка Веб-приложений',
      'accomplishments.webdevDesc': 'Успешно разработал и развернул динамические веб-приложения с использованием фреймворков Django и Flask, обеспечивая масштабируемость и отзывчивость.',
      'accomplishments.process': 'Оптимизация Процессов Разработки',
      'accomplishments.processDesc': 'Внедрил эффективные практики кодирования, сокращая время разработки при сохранении высоких стандартов качества кода и производительности.',
      'accomplishments.ml': 'Применение Машинного Обучения',
      'accomplishments.mlDesc': 'Исследовал и применял концепции машинного обучения в реальных проектах, демонстрируя инновации и интеграцию передовых технологий.',
      'accomplishments.team': 'Командная Работа',
      'accomplishments.teamDesc': 'Эффективно участвовал в командных проектах разработки, демонстрируя сильные навыки работы в команде и коммуникации.',
      'accomplishments.opensource': 'Вклад в Open Source',
      'accomplishments.opensourceDesc': 'Поддерживаю активное портфолио на GitHub, демонстрирующее инновационные проекты и вклад в технологическое сообщество.',
      'accomplishments.fullstack': 'Full-Stack Разработка',
      'accomplishments.fullstackDesc': 'Умело использовал HTML5, CSS и JavaScript в дополнение к навыкам backend разработки, создавая комплексные full-stack решения.',

      // Skills Page
      'skills.title': 'Мои Навыки',
      'skills.subtitle': 'Экспертиза и Технологии',
      'skills.description': 'Комплексный обзор моих технических навыков и уровней владения в различных областях разработки программного обеспечения.',
      
      // Skill Categories
      'skills.backend': 'Backend Разработка',
      'skills.backendDesc': 'Создание надежных серверных приложений с использованием Python, Django и Flask. Опыт работы с RESTful API, проектированием баз данных и системной архитектурой.',
      
      'skills.ml': 'Машинное Обучение',
      'skills.mlDesc': 'Реализация ML решений с использованием scikit-learn, TensorFlow и pandas. Опыт в предобработке данных, обучении моделей и развертывании.',
      
      'skills.web': 'Веб-разработка',
      'skills.webDesc': 'Создание отзывчивых веб-приложений с использованием современных фреймворков и технологий. Владение React, HTML5, CSS3 и JavaScript.',
      
      'skills.database': 'Управление Базами Данных',
      'skills.databaseDesc': 'Проектирование и оптимизация систем баз данных. Опыт работы с SQL, PostgreSQL и MongoDB.',
      
      'skills.api': 'Интеграция API',
      'skills.apiDesc': 'Разработка и использование RESTful API. Опыт в проектировании API, документации и интеграции.',
      
      'skills.frontend': 'Frontend Разработка',
      'skills.frontendDesc': 'Создание пользовательских интерфейсов с React и современными CSS фреймворками. Фокус на отзывчивом дизайне и пользовательском опыте.',
      
      'skills.cloud': 'Облачные Сервисы',
      'skills.cloudDesc': 'Работа с облачными платформами и сервисами. Опыт работы с AWS и облачным развертыванием.',
      
      'skills.devops': 'DevOps',
      'skills.devopsDesc': 'Внедрение CI/CD пайплайнов и автоматизированных процессов развертывания. Опыт работы с Docker и системами контроля версий.',

      // Projects Page
      featuredProjects: 'Проекты',
      viewCode: 'Код',
      viewDemo: 'Демо',

      backendDevelopment: 'Разработка Backend',
      machineLearning: 'Разработка машинного обучения',
      webDevelopment: 'Разработка веб-приложений',
      databaseManagement: 'Управление базами данных',
      apiIntegration: 'Интеграция API',
      frontendDevelopment: 'Разработка фронтенда',
      softwareDevelopment: 'Разработка программного обеспечения',
      systemDesign: 'Разработка системных архитектур',
      cloudServices: 'Разработка облачных сервисов',
      devOps: 'Разработка DevOps',
      security: 'Разработка безопасности',
      

      // Contact Page
      'contact.title': 'Свяжитесь со Мной',
      'contact.subtitle': 'Давайте Сотрудничать',
      'contact.description': 'Есть вопрос или хотите работать вместе? Свяжитесь со мной!',
      'contact.connectDesc': 'Свяжитесь со мной в социальных сетях или напрямую',
      'contact.form.name': 'Имя',
      'contact.form.namePlaceholder': 'Ваше имя',
      'contact.form.email': 'Email',
      'contact.form.emailPlaceholder': 'ваш.email@пример.com',
      'contact.form.phone': 'Телефон',
      'contact.form.message': 'Сообщение',
      'contact.form.messagePlaceholder': 'Ваше сообщение...',
      'contact.form.send': 'Отправить',
      'contact.form.sending': 'Отправка...',
      'contact.form.success': 'Сообщение отправлено!',
      'contact.form.successDesc': 'Спасибо за сообщение! Я отвечу вам как можно скорее.',
      'contact.form.error': 'Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.',
      'contact.location': 'Нахожусь в Молдове',
      'contact.availability': 'Доступен для удаленной работы по всему миру',
      'contact.connect': 'Связаться со Мной',
      'contact.social.github': 'GitHub',
      'contact.social.linkedin': 'LinkedIn',
      'contact.social.twitter': 'Twitter',
      'contact.social.email': 'Email',
      'contact.validation.required': 'Это поле обязательно',
      'contact.validation.email': 'Пожалуйста, введите действительный email адрес',
      'contact.validation.minLength': 'Сообщение должно содержать не менее 10 символов',
    },
  },
} as const;

const options: InitOptions = {
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
};

i18n.use(initReactI18next).init(options);

export default i18n; 