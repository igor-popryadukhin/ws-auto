import type {
  Article,
  Brand,
  FaqItem,
  GalleryImage,
  Location,
  PriceCategory,
  Promotion,
  ReviewWidget,
  ServiceTag,
  Vacancy,
} from '../../types/entities'

export const navigationItems = [
  { label: 'Главная', href: '/' },
  { label: 'Марки авто', href: '#brands' },
  { label: 'Акции', href: '/akcii' },
  { label: 'Прайс-лист', href: '/price' },
  { label: 'Контакты', href: '/contacts' },
  { label: 'Отзывы', href: '/reviews' },
  { label: 'Гарантии', href: '/garantii' },
  { label: 'Полезные статьи', href: '/poleznye-stati' },
] as const

export const brands: Brand[] = [
  {
    slug: 'vw',
    name: 'Volkswagen',
    heroImage: '/images/brands/vw.svg',
    description:
      'Сертифицированные мастера Only-Vag выполняют диагностику и ремонт автомобилей Volkswagen с использованием оригинального оборудования VAS и проверенных запчастей.',
    advantages: [
      'Гарантия до 24 месяцев или 40 000 км пробега',
      'Диагностика всех узлов и точный подбор запчастей',
      'Опыт работы более 10 лет с автомобилями VAG',
    ],
    services: [
      'Плановое ТО и замена расходников',
      'Ремонт АКПП и DSG',
      'Диагностика электрооборудования',
      'Кузовной ремонт и детейлинг',
    ],
    heroCta: {
      label: 'Записаться на сервис Volkswagen',
      href: '#quote-form',
    },
  },
  {
    slug: 'audi',
    name: 'Audi',
    heroImage: '/images/brands/audi.svg',
    description:
      'Профессиональное обслуживание автомобилей Audi, включающее обслуживание пневмоподвески, сложную электронику и спортивные версии RS.',
    advantages: [
      'Персональные рекомендации по обслуживанию',
      'Опытные мастера по Audi S и RS',
      'Запас оригинальных масел и жидкостей',
    ],
    services: [
      'Диагностика и ремонт подвески',
      'Обслуживание систем полного привода',
      'Чип-тюнинг и улучшение производительности',
    ],
    heroCta: {
      label: 'Обслуживание Audi',
      href: '#quote-form',
    },
  },
  {
    slug: 'skoda',
    name: 'Škoda',
    heroImage: '/images/brands/skoda.svg',
    description:
      'Комплексный сервис Škoda с акцентом на экономию и сохранение заводской гарантии. Работаем с моделями Rapid, Octavia, Kodiaq и другими.',
    advantages: [
      'Прозрачные расчёты и фотографии выполненных работ',
      'Склад расходников под популярные модели',
      'Комфортные зоны ожидания',
    ],
    services: [
      'Замена ГРМ и помпы',
      'Ремонт подвески и рулевого управления',
      'Комплексная диагностика перед покупкой',
    ],
  },
  {
    slug: 'porsche',
    name: 'Porsche',
    heroImage: '/images/brands/porsche.svg',
    description:
      'Специалисты Only-Vag имеют доступ к техническим данным Porsche и выполняют обслуживание премиальных моделей Cayenne, Panamera, Macan и 911.',
    advantages: [
      'Отдельная зона приёма премиум-класса',
      'Мотористы с опытом Porsche SportChrono',
      'Диагностика и ремонт гибридных установок',
    ],
    services: [
      'Ремонт двигателей и турбин',
      'Реставрация салона и детейлинг',
      'Подготовка к трек-дням',
    ],
  },
]

export const promotions: Promotion[] = [
  {
    id: 'referral-discount',
    title: '7% скидка за рекомендацию друга',
    description: 'Приведите знакомого и получите скидку на следующее обслуживание.',
    image: '/images/promotions/referral.svg',
    terms: 'Скидка предоставляется после посещения сервиса приглашённым клиентом. Срок действия не ограничен.',
  },
  {
    id: 'free-diagnostics',
    title: 'Бесплатная диагностика подвески + 5% скидка на ремонт',
    description: 'Полный осмотр подвески с выдачей чек-листа и скидкой на необходимые работы.',
    image: '/images/promotions/suspension.svg',
    terms: 'Предложение действует до 31.12.2025, требуется предварительная запись.',
    validUntil: '2025-12-31',
  },
  {
    id: 'oil-change',
    title: 'Скидка 10% на замену масла DSG',
    description: 'Оригинальные масла и фильтры, гарантии на работы до 12 месяцев.',
    image: '/images/promotions/oil.svg',
    terms: 'Скидка распространяется на модели с коробками DSG6 и DSG7.',
  },
]

export const priceCategories: PriceCategory[] = [
  {
    id: 'diagnostics',
    name: 'Диагностика',
    description: 'Комплексные и узкоспециализированные диагностики',
    items: [
      { id: 'computer', title: 'Компьютерная диагностика всех систем', priceFrom: 1500, unit: '₽' },
      { id: 'pre-purchase', title: 'Диагностика перед покупкой', priceFrom: 4500, unit: '₽' },
      { id: 'suspension', title: 'Диагностика подвески на подъемнике', priceFrom: 1200, unit: '₽' },
    ],
  },
  {
    id: 'maintenance',
    name: 'Плановое ТО',
    items: [
      { id: 'inspection', title: 'ТО по регламенту', priceFrom: 6500, unit: '₽' },
      { id: 'oil-change', title: 'Замена моторного масла', priceFrom: 2500, unit: '₽', note: 'Стоимость без учёта материалов' },
      { id: 'filters', title: 'Замена фильтров (воздушный, салонный, топливный)', priceFrom: 1800, unit: '₽' },
    ],
  },
  {
    id: 'transmission',
    name: 'Трансмиссия',
    items: [
      { id: 'dsg', title: 'Замена масла DSG', priceFrom: 5200, unit: '₽' },
      { id: 'clutch', title: 'Замена сцепления (МКПП/DSG)', priceFrom: 9800, unit: '₽' },
      { id: 'haldex', title: 'Обслуживание муфты Haldex', priceFrom: 6200, unit: '₽' },
    ],
  },
  {
    id: 'engine',
    name: 'Двигатель и охлаждение',
    items: [
      { id: 'timing', title: 'Замена ГРМ', priceFrom: 11500, unit: '₽' },
      { id: 'pump', title: 'Замена помпы охлаждения', priceFrom: 6500, unit: '₽' },
      { id: 'injectors', title: 'Чистка форсунок', priceFrom: 3000, unit: '₽' },
    ],
  },
]

export const faqItems: FaqItem[] = [
  {
    id: 'warranty',
    question: 'Какую гарантию вы даёте на работы?',
    answer: 'Мы предоставляем гарантию от 3 до 24 месяцев или 5 000–40 000 км пробега в зависимости от вида работ. Все условия фиксируются в заказ-наряде.',
  },
  {
    id: 'parts',
    question: 'Можно ли приехать со своими запчастями?',
    answer: 'Мы не предоставляем гарантию на работы с запчастями заказчика. Однако готовы помочь с подбором оригинальных или качественных аналогов.',
  },
  {
    id: 'factory-warranty',
    question: 'Сохраняется ли заводская гарантия?',
    answer: 'Да, мы работаем в соответствии с требованиями производителя и используем сертифицированные материалы, что позволяет сохранить гарантию.',
  },
]

export const locations: Location[] = [
  {
    id: 'north',
    title: 'Only-Vag Север',
    address: 'Санкт-Петербург, пр. Энгельса, 154',
    phone: '+7 (812) 555-01-01',
    schedule: 'ежедневно с 9:00 до 21:00',
    mapUrl: 'https://yandex.ru/maps/?um=constructor%3Aexample1',
    coordinates: [60.037, 30.321],
  },
  {
    id: 'south',
    title: 'Only-Vag Юг',
    address: 'Санкт-Петербург, Московское шоссе, 18',
    phone: '+7 (812) 555-02-02',
    schedule: 'ежедневно с 9:00 до 21:00',
    mapUrl: 'https://yandex.ru/maps/?um=constructor%3Aexample2',
    coordinates: [59.829, 30.382],
  },
]

export const reviewWidgets: ReviewWidget[] = [
  {
    id: 'north-widget',
    branch: 'Only-Vag Север',
    rating: 4.9,
    reviewsCount: 312,
    iframeSrc: 'https://yandex.ru/maps-reviews-widget/example1',
    platformUrl: 'https://yandex.ru/maps/org/example1',
    highlight: 'Рейтинг 4.9 по 300+ отзывам на Яндекс.Картах',
  },
  {
    id: 'south-widget',
    branch: 'Only-Vag Юг',
    rating: 4.8,
    reviewsCount: 198,
    iframeSrc: 'https://yandex.ru/maps-reviews-widget/example2',
    platformUrl: 'https://yandex.ru/maps/org/example2',
  },
]

export const vacancies: Vacancy[] = [
  {
    id: 'mechanic',
    title: 'Автослесарь-механик',
    description: 'Обслуживание автомобилей VAG, ремонт ходовой части и трансмиссии.',
    responsibilities: [
      'Проведение диагностики и ремонта подвески, тормозной системы',
      'Замена агрегатов и узлов по регламенту',
      'Поддержание порядка на рабочем месте',
    ],
    requirements: [
      'Опыт работы от 3 лет',
      'Знание автомобилей группы VAG',
      'Аккуратность и внимательность к деталям',
    ],
    conditions: [
      'Сменный график 2/2',
      'Официальное оформление',
      'Корпоративное обучение и доступ к базе знаний',
    ],
  },
  {
    id: 'diagnostic',
    title: 'Автоэлектрик-диагност',
    description: 'Работа с диагностическим оборудованием VAS, выявление и устранение электрических неисправностей.',
    responsibilities: [
      'Комплексная диагностика электрооборудования',
      'Пайка и ремонт проводки',
      'Подбор программных решений',
    ],
    requirements: [
      'Опыт работы от 2 лет',
      'Знание CAN, MOST, LIN-шин',
      'Умение работать с электронными схемами',
    ],
    conditions: [
      'График 5/2',
      'Высокий уровень заработной платы',
      'Современное диагностическое оборудование',
    ],
  },
]

export const articles: Article[] = [
  {
    id: 'dq200-problems',
    slug: 'dq200-dsg-problemy',
    title: 'Основные проблемы DSG DQ200 и способы их решения',
    excerpt: 'Разбираем слабые места коробки DSG DQ200, признаки неисправностей и план действий при первых симптомах.',
    coverImage: '/images/articles/dq200.svg',
    publishedAt: '2024-10-05',
    tags: ['DSG', 'Трансмиссия', 'Советы'],
    content: `<h2>Почему DSG DQ200 требует внимания</h2>
<p>Коробка передач DSG DQ200 с сухим двойным сцеплением популярна на автомобилях VAG, но имеет ряд слабых мест. Основные проблемы связаны с перегревом, износом мехатроника и сцеплений.</p>
<h3>Ключевые симптомы</h3>
<ul>
<li>Рывки при переключениях</li>
<li>Посторонние звуки и вибрации</li>
<li>Появление ошибок по мехатронику</li>
</ul>
<p>При первых симптомах рекомендуем провести компьютерную диагностику и заменить масло, даже если производитель заявляет пожизненную заливку.</p>
<h3>Решения от Only-Vag</h3>
<p>Мы используем оригинальное оборудование VAS, обновляем прошивки, устанавливаем усиленные комплекты сцеплений и даём гарантию до 12 месяцев.</p>`,
  },
  {
    id: 'winter-prep',
    slug: 'podgotovka-k-zime',
    title: 'Как подготовить автомобиль VAG к зиме',
    excerpt: 'Пошаговое руководство по подготовке вашего автомобиля к холодному сезону: жидкости, аккумулятор, подвеска.',
    coverImage: '/images/articles/winter.svg',
    publishedAt: '2024-11-12',
    tags: ['Сезонное ТО', 'Эксплуатация'],
    content: `<h2>Шаг 1. Диагностика важных систем</h2>
<p>Перед зимним сезоном проверяем состояние аккумулятора, свечей накаливания, тормозной системы. Обязательно выполняем диагностику подвески.</p>
<h3>Шаг 2. Жидкости и масла</h3>
<p>Меняем охлаждающую жидкость на рассчитанную на низкие температуры, заливаем зимнюю стеклоомывательную жидкость и обновляем моторное масло.</p>
<h3>Шаг 3. Колёса и кузов</h3>
<p>Ставим зимние шины, проверяем давление и балансировку, наносим защитное покрытие кузова от реагентов.</p>`,
  },
]

export const serviceTags: ServiceTag[] = [
  { id: 'diagnostics', label: '#Диагностика' },
  { id: 'maintenance', label: '#ТО' },
  { id: 'oil-change', label: '#ЗаменаМасла' },
  { id: 'suspension', label: '#Подвеска' },
  { id: 'engine', label: '#Двигатель' },
  { id: 'gearbox', label: '#КПП' },
]

export const gallery: GalleryImage[] = [
  {
    id: 'service-bay-1',
    alt: 'Сервисный бокс Only-Vag',
    url: '/images/gallery/service-bay-1.svg',
    width: 1200,
    height: 800,
  },
  {
    id: 'waiting-area',
    alt: 'Зона ожидания Only-Vag',
    url: '/images/gallery/waiting-area.svg',
    width: 1200,
    height: 800,
  },
  {
    id: 'team',
    alt: 'Команда мастеров Only-Vag',
    url: '/images/gallery/team.svg',
    width: 1200,
    height: 800,
  },
]
