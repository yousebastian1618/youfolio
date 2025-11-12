export const NavigationBarItems = [
  {
    name: 'about',
    label: 'ABOUT'
  },
  {
    name: 'projects',
    label: 'PROJECTS'
  },
  {
    name: 'experiences',
    label: 'EXPERIENCES'
  },
  {
    name: 'contact',
    label: 'CONTACT'
  }
]
export const IntroText = "<b>Hi</b>, I'm <br/><b>Sebastian</b>"

export const AboutMe = "My journey blends <b style='color: var(--main-yellow-dark);'>technology</b>, <b style='color: var(--main-yellow-dark);'>finance</b>, and <b style='color: var(--main-yellow-dark);'>adventure</b>. I build modern applications as a full-stack <b style='color: var(--main-purple);'>engineer</b>, study global markets as a <b style='color: var(--main-purple);'>trader</b>, and discover new places as a <b style='color: var(--main-purple);'>traveler</b>. Each path teaches me something new about system, people, and the world, and I love bringing those lessons into the products I create."

export const ProjectItems = [
  {
    name: 'bannerCMS',
    label: 'Banner CMS',
    color: '#0363ae',
    thumbnail: '/projects/banner-thumbnail.png',
    description: 'BannerCMS is a digital signage content management system I built while working at SRA. it lets businesses easily create, schedule, and update display content through a simple web interface. Designed for scalability and ease of use, it helps teams <b style="color: #0363ae">manage multiple screens remotely</b> and keep content consistent across locations.',
    techs: ['Angular', 'Django', 'PostgreSQL', 'AWS', 'TypeScript', 'Python'],
    progress: 100
  },
  {
    name: 'creativeEngine',
    label: 'Creative Engine',
    color: '#86d4ce',
    thumbnail: '/projects/ce-thumbnail.png',
    description: 'Creative Engine is a cloud-based design tool I created while working at SRA. It enables users to pick from a library of templates and quickly customize text, colors and backgrounds to <b style="color: #86d4ce">generate polished content</b> for LED displays without hiring a designer. Seamlessly integrated with <b style="color: #0363ae">Banner CMS</b>, it helps teams deliver eye-catching visuals with minimal effort.',
    techs: ['Angular', 'Django', 'PostgreSQL', 'AWS', 'TypeScript', 'Python'],
    progress: 100
  },
  {
    name: 'xConnect',
    label: 'XConnect',
    color: '#768af0',
    thumbnail: '/projects/xconnect-thumbnail.png',
    description: 'XConnect is a Windows application I created while working at SRA. It is designed for <b style="color: #768af0">remote device management</b> of LED displays. It allows display owners to adjust brightness, control RGB lighting, enable blanking modes, monitor system status from a central dashboard, and so on. The software also provides real-time alerts for warnings and errors, helping users quickly diagnose and resolve issues. Built with a focus on reliability and user convenience, it streamlines the <b style="color: #768af0">maintenance and operation</b> of large-scale LED networks.',
    techs: ['Flutter', 'Dart'],
    progress: 100
  },
  {
    name: 'vitaliNutrition',
    label: 'Vitali Nutrition Inc.',
    color: '#a91d24',
    thumbnail: '/projects/vitali-nutrition-thumbnail.png',
    description: "Vitali Nutrition is a <b style='color: #a91d24'>SPA</b> built for an OEM/ODM pharmaceutical company to highlight its brand identity and manufacturing process. The website presents the company’s capabilities and product details while maintaining a clean, professional design. It includes an <b style='color: #a91d24'>admin dashboard</b> for managing product images and blog posts, and an <b style='color: #a91d24'>inquiry system</b> that allows visitors to contact the owner or schedule calls directly, creating an efficient connection between clients and the business.",
    techs: ['React', 'Next.js', 'PostgreSQL', 'Prisma', 'Neon', 'TypeScript'],
    progress: 100
  },
  {
    name: 'frugalist',
    label: 'Frugalist',
    color: '#61682e',
    thumbnail: '/projects/coming-soon.gif',
    description: 'Frugalist is a <b style="color: #61682e">budgeting mobile app</b> built for people who want to spend smarter and save more. It lets users <b style="color: #61682e">track expenses</b>, set spending limits, and receive real-time alerts when nearing their budgets. Using <b style="color: #61682e">Google and Google Maps data</b>, Frugalist also recommends cheaper alternatives for food, goods, and services, helping users develop mindful spending habits through simplicity and actionable insights.',
    techs: ['React', 'GO', 'PostgreSQL', 'Neon', 'TypeScript', 'GoLang'],
    progress: 50
  },
  {
    name: 'simTradr',
    label: 'SimTradr',
    color: '#ffbf01',
    thumbnail: '/projects/coming-soon.gif',
    description: 'SimTradr is an <b style="color: #ffbf01">intelligent trading assistant</b> designed for both new and experienced traders. It analyzes trends and discussions from Reddit and other financial sources to suggest potential stocks, ETFs, and futures to trade. Users can <b style="color: #ffbf01">backtest</b> their strategies with historical daily charts to refine decision-making. The platform also provides <b style="color: #ffbf01">performance tracking</b> tools that monitor earnings, returns, and win rates, giving traders clear insights into their progress and profitability.',
    techs: ['React', 'Next.js', 'FastAPI', 'PostgreSQL', 'Neon', 'TypeScript', 'Python'],
    progress: 15
  }
]

export const TechLogoMap: Record<string, string> = {
  'Angular': '/programming-logo/angular-logo.png',
  'AWS': '/programming-logo/aws-logo.png',
  'Dart': '/programming-logo/dart-logo.png',
  'Django': '/programming-logo/django-logo.png',
  'Flutter': '/programming-logo/flutter-logo.png',
  'GO': '/programming-logo/go-logo.png',
  'Neon': '/programming-logo/neon-logo.png',
  'Next.js': '/programming-logo/nextjs-logo.png',
  'PostgreSQL': '/programming-logo/postgresql-logo.png',
  'Prisma': '/programming-logo/prisma-logo.png',
  'Python': '/programming-logo/python-logo.png',
  'React': '/programming-logo/react-logo.png',
  'TypeScript': '/programming-logo/typescript-logo.png',
  'GoLang': '/programming-logo/golang-logo.png',
  'FastAPI': '/programming-logo/fastapi-logo.png',
  'CSS': '/programming-logo/css-logo.png',
  'SASS':'/programming-logo/sass-logo.png',
  'HTML': '/programming-logo/html-logo.png',
  'JavaScript': '/programming-logo/javascript-logo.png'
}

export const YouSkills = [
  {
    head: 'HTML',
    yearsOfExperience: 6,
    proficiency: 5,
    type: 'language'
  },
  {
    head: 'SASS',
    yearsOfExperience: 6,
    proficiency: 5,
    type: 'language'
  },
  {
    head: 'Angular',
    yearsOfExperience: 4,
    proficiency: 4.5,
    type: 'framework'
  },
  {
    head: 'React',
    yearsOfExperience: 3,
    proficiency: 5,
    type: 'framework'
  },
  {
    head: 'Next.js',
    yearsOfExperience: 2,
    proficiency: 5,
    type: 'framework'
  },
  {
    head: 'Flutter',
    yearsOfExperience: 2,
    proficiency: 4,
    type: 'framework'
  },
  {
    head: 'Django',
    yearsOfExperience: 5,
    proficiency: 4.5,
    type: 'framework'
  },
  {
    head: 'FastAPI',
    yearsOfExperience: 1,
    proficiency: 2,
    type: 'framework'
  },
  {
    head: 'GO',
    yearsOfExperience: 1,
    proficiency: 1,
    type: 'framework'
  },
  {
    head: 'Dart',
    yearsOfExperience: 2,
    proficiency: 3,
    type: 'language'
  },
  {
    head: 'Python',
    yearsOfExperience: 7,
    proficiency: 5,
    type: 'language'
  },
  {
    head: 'TypeScript',
    yearsOfExperience: 5,
    proficiency: 5,
    type: 'language'
  },
  // {
  //   head: 'JavaScript',
  //   yearsOfExperience: 6,
  //   proficiency: 5,
  //   type: 'language'
  // },
  {
    head: 'GoLang',
    yearsOfExperience: 1,
    proficiency: 1,
    type: 'language'
  }
]

export const ProfessionalExperiences = [
  {
    employer: 'Samsung Research America',
    jobTitle: 'Full Stack Engineer',
    thumbnail: '/professional_experiences/sra-thumbnail.png',
    description: 'At Samsung Research America, I worked as a Full-Stack Engineer helping to modernize and improve key company platforms. I rebuilt an outdated web system into a more stable and easy-to-use product that increased customer adoption and reduced issues significantly. I also helped design a new content creation platform that made publishing faster and more efficient, saving teams time and effort. In addition, I improved several features that made the platform more engaging and reliable for users, and redesigned a desktop application to make it simpler and more intuitive to use. Throughout my time there, I focused on creating better user experiences, improving efficiency, and helping teams work more effectively.',
    startDate: new Date(2022, 3),
    endDate: new Date(2025, 10),
    color: '#038aff'
  }
]