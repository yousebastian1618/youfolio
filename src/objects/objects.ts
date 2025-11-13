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

export const AboutMe = "My journey blends <b style='color: var(--main-yellow-dark);'>technology</b>, <b style='color: var(--main-yellow-dark);'>finance</b>, and <b style='color: var(--main-yellow-dark);'>adventure</b>. I build modern applications as a full-stack <b style='color: var(--main-purple);'>engineer</b>, study global markets as a <b style='color: var(--main-purple);'>trader</b>, and discover new places as a <b style='color: var(--main-purple);'>traveler</b>. Each path teaches me something new about system, people, and the world, and I love bringing those lessons into the products I create."

export const ProjectItems = [
  {
    name: 'bannerCMS',
    label: 'Banner CMS',
    color: '#0363ae',
    thumbnail: '/projects/banner-thumbnail.png',
    url: 'https://bannercms.sea.samsung.com',
    description: 'BannerCMS is a digital signage content management system I built while working at SRA. it lets businesses easily create, schedule, and update display content through a simple web interface. Designed for scalability and ease of use, it helps teams <b style="color: #0363ae">manage multiple screens remotely</b> and keep content consistent across locations.',
    techs: ['Angular', 'Django', 'PostgreSQL', 'AWS', 'TypeScript', 'Python'],
    progress: 100
  },
  {
    name: 'creativeEngine',
    label: 'Creative Engine',
    color: '#86d4ce',
    url: 'https://ce.sea.samsung.com',
    thumbnail: '/projects/ce-thumbnail.png',
    description: 'Creative Engine is a cloud-based design tool I created while working at SRA. It enables users to pick from a library of templates and quickly customize text, colors and backgrounds to <b style="color: #86d4ce">generate polished content</b> for LED displays without hiring a designer. Seamlessly integrated with <b style="color: #0363ae">Banner CMS</b>, it helps teams deliver eye-catching visuals with minimal effort.',
    techs: ['Angular', 'Django', 'PostgreSQL', 'AWS', 'TypeScript', 'Python'],
    progress: 100
  },
  {
    name: 'xConnect',
    label: 'XConnect',
    color: '#768af0',
    url: '',
    thumbnail: '/projects/xconnect-thumbnail.png',
    description: 'XConnect is a Windows application I created while working at SRA. It is designed for <b style="color: #768af0">remote device management</b> of LED displays. It allows display owners to adjust brightness, control RGB lighting, enable blanking modes, monitor system status from a central dashboard, and so on. The software also provides real-time alerts for warnings and errors, helping users quickly diagnose and resolve issues. Built with a focus on reliability and user convenience, it streamlines the <b style="color: #768af0">maintenance and operation</b> of large-scale LED networks.',
    techs: ['Flutter', 'Dart'],
    progress: 100
  },
  {
    name: 'vitaliNutrition',
    label: 'Vitali Nutrition Inc.',
    color: '#a91d24',
    url: '',
    thumbnail: '/projects/vitali-nutrition-thumbnail.png',
    description: "Vitali Nutrition is a <b style='color: #a91d24'>SPA</b> built for an OEM/ODM pharmaceutical company to highlight its brand identity and manufacturing process. The website presents the company’s capabilities and product details while maintaining a clean, professional design. It includes an <b style='color: #a91d24'>admin dashboard</b> for managing product images and blog posts, and an <b style='color: #a91d24'>inquiry system</b> that allows visitors to contact the owner or schedule calls directly, creating an efficient connection between clients and the business.",
    techs: ['React', 'Next.js', 'PostgreSQL', 'Prisma', 'Neon', 'TypeScript'],
    progress: 100
  },
  {
    name: 'askAva',
    label: 'AskAva',
    color: '#2AB7CA',
    url: '',
    thumbnail: '/projects/coming-soon.gif',
    description: 'AskAva is your friendly, intelligent <b style="color: #2AB7CA">interview companion</b> designed to help you practice and prepare with confidence. Whether you’re aiming for your first job or a senior role, AskAva simulates realistic interview scenarios tailored to your resume and target position. It generates personalized questions, provides smart feedback on your answers, and even creates flashcards to help you master key topics. With a calm, conversational <b style="color: #2AB7CA">AI persona</b>, AskAva helps you refine your communication, identify improvement areas, and feel genuinely ready for the real interview',
    techs: ['React', 'Next.js', 'OpenAI', 'FastAPI', 'PostgreSQL', 'Neon', 'TypeScript', 'Python'],
    progress: 30
  },
  {
    name: 'frugalist',
    label: 'Frugalist',
    color: '#61682e',
    url: '',
    thumbnail: '/projects/coming-soon.gif',
    description: 'Frugalist is a <b style="color: #61682e">budgeting mobile app</b> built for people who want to spend smarter and save more. It lets users <b style="color: #61682e">track expenses</b>, set spending limits, and receive real-time alerts when nearing their budgets. Using <b style="color: #61682e">Google and Google Maps data</b>, Frugalist also recommends cheaper alternatives for food, goods, and services, helping users develop mindful spending habits through simplicity and actionable insights.',
    techs: ['React', 'Expo', 'PostgreSQL', 'Neon', 'TypeScript'],
    progress: 20
  },
  {
    name: 'simTradr',
    label: 'SimTradr',
    color: '#ffbf01',
    url: '',
    thumbnail: '/projects/coming-soon.gif',
    description: 'SimTradr is an <b style="color: #ffbf01">intelligent trading assistant</b> designed for both new and experienced traders. It analyzes trends and discussions from Reddit and other financial sources to suggest potential stocks, ETFs, and futures to trade. Users can <b style="color: #ffbf01">backtest</b> their strategies with historical daily charts to refine decision-making. The platform also provides <b style="color: #ffbf01">performance tracking</b> tools that monitor earnings, returns, and win rates, giving traders clear insights into their progress and profitability.',
    techs: ['React', 'Next.js', 'OpenAI', 'FastAPI', 'PostgreSQL', 'Neon', 'TypeScript', 'Python'],
    progress: 0
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
  'JavaScript': '/programming-logo/javascript-logo.png',
  'Expo': '/programming-logo/expo-logo.png',
  "OpenAI": '/programming-logo/openai-logo.png'
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
    head: 'Expo',
    yearsOfExperience: 3,
    proficiency: 2,
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
    color: '#038aff',
    url: 'https://www.linkedin.com/company/prismview/'
  }
]

export const SocialMedias = [
  {
    name: 'github',
    icon: 'github',
    url: 'https://github.com/yousebastian1618'
  },
  {
    name: 'x',
    icon: 'X',
    url: 'https://x.com/yousebastian1618'
  },
  {
    name: 'linkedin',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/sebastian-you-902306218/'
  },
  {
    name: 'instagram',
    icon: 'instagram',
    url: 'https://www.instagram.com/yousebastian1618'
  }
]

export const CopyRight = "© 2025 Sebastian You. All rights Reserved";

export const IconMap: any = {
  twitter: {
    name: 'twitter',
    icon: 'fi fi-brands-twitter-alt'
  },
  youtube: {
    name: 'youtube',
    icon: 'fi fi-brands-youtube'
  },
  instagram: {
    name: 'instagram',
    icon: 'fi fi-brands-instagram'
  },
  arrow_down: {
    name: 'arrow_down',
    icon: 'fi fi-rr-angle-down'
  },
  edit: {
    name: 'edit',
    icon: 'fi fi-rr-pencil'
  },
  delete: {
    name: 'delete',
    icon: 'fi fi-rr-trash'
  },
  category: {
    name: 'category',
    icon: 'fi fi-rr-category'
  },
  keyword: {
    name: 'keyword',
    icon: 'fi fi-rr-input-text'
  },
  email: {
    name: 'email',
    icon: 'fi fi-rr-envelope'
  },
  password: {
    name: 'password',
    icon: 'fi fi-rr-lock'
  },
  swap: {
    name: 'swap',
    icon: 'fi fi-ss-swap'
  },
  name: {
    name: 'name',
    icon: 'fi fi-rr-id-card-clip-alt'
  },
  screen: {
    name: 'screen',
    icon: 'fi fi-rr-screen'
  },
  code: {
    name: 'code',
    icon: 'fi fi-rr-password-lock'
  },
  maintenance: {
    name: 'maintenance',
    icon: 'fi fi-rs-settings'
  },
  notification: {
    name: 'notification',
    icon: 'fi fi-rr-bell-notification-social-media'
  },
  title: {
    name: 'title',
    icon: 'fi fi-rr-text'
  },
  toggle_on: {
    name: 'toggle_on',
    icon: 'fi fi-rr-toggle-on'
  },
  toggle_off: {
    name: 'toggle_off',
    icon: 'fi fi-rr-toggle-off'
  },
  check: {
    name: 'check',
    icon: 'fi fi-rr-check'
  },
  x: {
    name: 'x',
    icon: 'fi fi-rr-cross-small'
  },
  x_circle: {
    name: 'x_circle',
    icon: 'fi fi-rr-circle-xmark'
  },
  phone: {
    name: 'phone',
    icon: 'fi fi-rr-phone-call'
  },
  address_pin: {
    name: 'address_pin',
    icon: 'fi fi-rr-marker'
  },
  email_circle: {
    name: 'email_circle',
    icon: 'fi fi-rr-circle-envelope'
  },
  question: {
    name: 'question',
    icon: 'fi fi-rr-interrogation'
  },
  info: {
    name: 'info',
    icon: 'fi fi-rr-info'
  },
  warning: {
    name: 'warning',
    icon: 'fi fi-rr-triangle-warning'
  },
  success: {
    name: 'success',
    icon: 'i fi-rr-check-circle'
  },
  check_circle: {
    name: 'check_circle',
    icon: 'i fi-rr-check-circle'
  },
  error: {
    name: 'error',
    icon: 'fi fi-rr-times-hexagon'
  },
  search: {
    name: 'search',
    icon: 'fi fi-rr-search'
  },
  key: {
    name: 'key',
    icon: 'fi fi-rr-key'
  },
  date: {
    name: 'date',
    icon: 'fi fi-rr-calendar-day'
  },
  list: {
    name: 'list',
    icon: 'fi fi-rr-list'
  },
  wizard: {
    name: 'wizard',
    icon: 'fi fi-rr-hat-wizard'
  },
  link: {
    name: 'link',
    icon: 'fi fi-ss-link-horizontal'
  },
  order: {
    name: 'order',
    icon: '"fi fi-rr-apps-sort'
  },
  grid: {
    name: 'grid',
    icon: 'fi fi-rr-apps'
  },
  image: {
    name: 'image',
    icon: 'fi fi-rr-picture'
  },
  video: {
    name: 'video',
    icon: 'fi fi-rr-play-alt'
  },
  file: {
    name: 'file',
    icon: 'fi fi-rr-file'
  },
  file_upload: {
    name: 'file_upload',
    icon: 'fi fi-rr-file-upload'
  },
  download: {
    name: 'download',
    icon: 'fi fi-rr-download'
  },
  checkbox: {
    name: 'checkbox',
    icon: 'fi fi-rr-checkbox'
  },
  square: {
    name: 'square',
    icon: 'fi fi-rr-square'
  },
  back: {
    name: 'back',
    icon: 'fi fi-rr-arrow-small-left'
  },
  video_file: {
    name: 'video_file',
    icon: 'fi fi-rr-file-video'
  },
  text: {
    name: 'text',
    icon: 'fi fi-rr-text'
  },
  "file-step": {
    name: 'file-step',
    icon: 'fi fi-rr-file-image'
  },
  "color-step": {
    name: 'color-step',
    icon: 'fi fi-rr-palette'
  },
  "text-step": {
    name: 'text_step',
    icon: 'fi fi-rr-text'
  },
  "image-step": {
    name: 'image_step',
    icon: 'fi fi-rr-images'
  },
  "final-step": {
    name: 'final_step',
    icon: 'fi fi-rr-overview'
  },
  small_arrow_right: {
    name: 'small_arrow_right',
    icon: 'fi fi-rr-arrow-small-right'
  },
  display: {
    name: 'display',
    icon: 'fi fi-rr-display-code'
  },
  width: {
    name: 'width',
    icon: 'fi fi-rr-ruler-horizontal'
  },
  height: {
    name: 'height',
    icon: 'fi fi-rr-ruler-vertical'
  },
  sort_stb: {
    name: 'sort_stb',
    icon: 'fi fi-rr-sort-amount-down'
  },
  sort_bts: {
    name: 'sort_bts',
    icon: 'fi fi-rr-sort-amount-up'
  },
  sort: {
    name: 'sort',
    icon: 'fi fi-rr-sort-alt'
  },
  role: {
    name: 'role',
    icon: 'fi fi-rr-id-card-clip-alt'
  },
  login_failure: {
    name: 'login_failure',
    icon: 'fi fi-rr-vote-nay'
  },
  first_page: {
    name: 'first_page',
    icon: 'fi fi-rr-angle-double-small-left'
  },
  last_page: {
    name: 'last_page',
    icon: 'fi fi-rr-angle-double-small-right'
  },
  previous_page: {
    name: 'previous_page',
    icon: 'fi fi-rr-angle-small-left'
  },
  next_page: {
    name: 'next_page',
    icon: 'fi fi-rr-angle-small-right'
  },
  duration: {
    name: 'duration',
    icon: 'fi fi-rr-video-duration'
  },
  description: {
    name: 'description',
    icon: 'fi fi-rr-poll-h'
  },
  render_time: {
    name: 'render_time',
    icon: 'fi fi-rr-pending'
  },
  after_effect: {
    name: 'after_effect',
    icon: 'fi fi-brands-after-effects'
  },
  frame_number: {
    name: 'frame_number',
    icon: 'fi fi-rr-mode-landscape'
  },
  card: {
    name: 'card',
    icon: 'fi fi-rr-credit-card'
  },
  cvv: {
    name: 'cvv',
    icon: 'fi fi-rr-cvv-card'
  },
  postal_code: {
    name: 'postal_code',
    icon: 'fi fi-rr-mailbox'
  },
  days: {
    name: 'days',
    icon: 'fi fi-rr-calendar-days'
  },
  plus: {
    name: 'plus',
    icon: 'fi fi-rr-plus'
  },
  plus_small: {
    name: 'plus_small',
    icon: 'fi fi-rr-plus-small'
  },
  uploading: {
    name: 'uploading',
    icon: 'fi fi-rr-progress-upload'
  },
  fail: {
    name: 'fail',
    icon: 'fi fi-rr-fail'
  },
  rotate_right: {
    name: 'rotate_right',
    icon: 'fi fi-rr-rotate-right'
  },
  refresh: {
    name: 'refresh',
    icon: 'fi fi-rr-refresh'
  },
  update: {
    name: 'update',
    icon: 'fi fi-rr-cloud-upload'
  },
  support: {
    name: "support",
    icon: 'fi fi-rr-admin-alt'
  },
  regenerate: {
    name: "regenerate",
    icon: 'fi fi-rr-magic-wand'
  },
  subscription: {
    name: "subscription",
    icon: 'fi fi-rr-subscription-user'
  },
  cancel: {
    name: 'cancel',
    icon: 'fi fi-rr-times-hexagon'
  },
  arrow_left: {
    name: 'arrow_left',
    icon: 'fi fi-br-angle-left'
  },
  arrow_right: {
    name: 'arrow_right',
    icon: 'fi fi-br-angle-right'
  },
  settings: {
    name: 'settings',
    icon: 'fi fi-rr-settings-sliders'
  },
  X: {
    name: 'X',
    icon: 'fi fi-brands-twitter-alt'
  },
  linkedin: {
    name: 'linkedin',
    icon: 'fi fi-brands-linkedin'
  },
  github: {
    name: 'github',
    icon: 'fi fi-brands-github'
  },
  meta: {
    name: 'meta',
    icon: 'fi fi-brands-meta'
  }
}