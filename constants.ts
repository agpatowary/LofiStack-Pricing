import { Pillar } from './types';

const STANDARD_AUTOMATION_PACKS = [
  'Lead Capture & Basic Lead Outbound Sequence',
  'Appointment Booking & Reminders',
  'Lead Nurture & Reactivation',
  'Native AI Chat + Inbound Voice AI Setup',
  'Custom Date Reminders',
];

export const PRICING_DATA: Pillar[] = [
  {
    id: 'pillar1',
    name: 'Pillar 1: Tiered Core Services',
    description: 'Comprehensive, project-based solutions for your core business needs. All services in this pillar follow our standard Launch, Scale, and Excel tier model to provide clear options based on project complexity and strategic depth.',
    categories: [
      {
        id: 'cat1',
        name: 'Website & Application Development',
        description: 'This universal model prices projects based on complexity, allowing any business type to select the tier that fits their needs and budget.',
        services: [
          {
            name: 'Web Development Tiers',
            description: '',
            tooltip: 'From simple landing pages to complex web applications, our development services are structured to provide the right solution at every stage of business growth.',
            tiers: [
              {
                name: 'Launch Tier: Foundational Presence',
                price: 'Starts at $500 - $1,000',
                timeframe: '1-2 weeks',
                goal: 'To establish a professional, credible, and effective online presence quickly and affordably.',
                description: 'We begin with a high-quality, professionally designed template which we then customize with your brand\'s logo, color palette, and content.',
                features: [
                    { text: 'Up to 5 essential pages', tooltip: 'Essential pages typically include Home, About Us, Services, Contact, and a Blog or Testimonials page.' },
                    { text: 'Fully mobile-responsive layout', tooltip: 'Your website will automatically adapt to look great on all screen sizes, including desktops, tablets, and smartphones.' },
                    { text: 'Basic on-page SEO setup', tooltip: 'We implement foundational SEO best practices, including title tags, meta descriptions, and header tags, to help search engines understand and rank your site.' },
                    'One round of revisions'
                ],
                deliverables: [
                  {
                    icon: 'template',
                    title: 'Customized Template Website',
                    description: 'A professionally designed, 5-page website tailored with your branding, logo, and color scheme to create a unique look.',
                    tooltip: 'We use premium, flexible templates as a starting point to reduce development time and cost, while still delivering a polished, custom feel.'
                  },
                  {
                    icon: 'mobile-responsive',
                    title: 'Fully Responsive Design',
                    description: 'Ensures a flawless viewing experience on all devices, from desktops to smartphones, which is crucial for user engagement and SEO.',
                  },
                  {
                    icon: 'seo-report',
                    title: 'Basic SEO & Launch Plan',
                    description: 'Implementation of on-page SEO best practices and a delivery of a simple report outlining your new site\'s SEO health.',
                  },
                ],
                limitations: 'Perfect for standard informational sites but does not include design from scratch, e-commerce functionality/automations, or complex integrations with external software.',
                calculator: {
                  type: 'web_pages',
                  label: 'Number of Pages',
                  min: 1,
                  max: 5,
                  step: 1,
                  defaultValue: 3,
                  unit: 'pages',
                },
              },
              {
                name: 'Scale Tier: Custom Growth Engine',
                price: 'Starts at $2,000 - $5,000',
                timeframe: '3-6 weeks',
                goal: 'To create a unique, brand-aligned digital experience designed to drive business growth, capture leads, and set you apart from the competition.',
                description: 'This tier features a fully custom design, created from a blank canvas to perfectly match your brand identity.',
                features: [
                    'Up to 15 pages',
                    { text: 'Advanced features like a blog or portfolio', tooltip: 'We can integrate dynamic content systems for you to easily manage and update your blog posts, case studies, or portfolio items.'},
                    { text: 'Basic e-commerce functionality', tooltip: 'Setup for selling a limited number of products, including secure payment gateway integration (e.g., Stripe, PayPal).'},
                    'Advanced SEO and performance analytics connection',
                    'Up to three rounds of revisions'
                ],
                deliverables: [
                  {
                    icon: 'custom-design',
                    title: 'Custom UI/UX Design Mockups',
                    description: 'We start with a blank canvas to create high-fidelity design mockups in Figma, which you can review and approve before development begins.',
                    tooltip: 'This is a collaborative process where we translate your brand and user needs into a visually stunning and intuitive website design.'
                  },
                  {
                    icon: 'ecommerce-cart',
                    title: 'E-commerce or Feature Integration',
                    description: 'Setup of a basic e-commerce store (e.g., Shopify Lite) or integration of a key feature like a blog, portfolio, or booking system.',
                  },
                  {
                    icon: 'analytics-dashboard',
                    title: 'Analytics & Performance Dashboard',
                    description: 'Configuration of Google Analytics and connection to a dashboard so you can track visitor behavior and website performance from day one.',
                  },
                ],
                limitations: 'Includes limited third-party integrations (e.g., connecting a standard CRM). Does not include fully custom-coded applications or complex features like secure client portals.',
                calculator: {
                  type: 'web_pages',
                  label: 'Number of Pages',
                  min: 6,
                  max: 15,
                  step: 1,
                  defaultValue: 10,
                  unit: 'pages',
                },
              },
              {
                name: 'Excel Tier: Bespoke Digital Solution',
                price: 'Starts at $6,000 - $10,000+',
                timeframe: '6+ weeks (Defined in Custom Scope)',
                goal: 'To build a scalable, custom web application or platform that serves as a core business asset.',
                description: 'The process begins with an in-depth UI/UX strategy and design phase. We develop a solution with 16+ pages and advanced functionality.',
                features: [
                    '16+ pages with advanced functionality',
                    { text: 'Client portals, user accounts, custom dashboards', tooltip: 'Develop secure, authenticated areas for your users to manage their information, view data, or interact with your service.' },
                    { text: 'Full, custom API integrations', tooltip: 'We can connect your web application to any third-party software that has an API, enabling seamless data flow between your systems.' },
                    'Dedicated consultant'
                ],
                deliverables: [
                  {
                    icon: 'strategy-session',
                    title: 'In-Depth Strategy & UI/UX Workshop',
                    description: 'A collaborative discovery session to define user flows, technical architecture, and a strategic roadmap for your web application.',
                  },
                  {
                    icon: 'api-integration',
                    title: 'Custom Backend & API Integrations',
                    description: 'Development of a robust backend and custom APIs to connect with third-party services, databases, or your existing software.',
                  },
                  {
                    icon: 'training-doc',
                    title: 'Admin Training & Documentation',
                    description: 'A personalized training session for your team on how to manage the new application, complete with comprehensive technical documentation.',
                    tooltip: 'We ensure your team is fully equipped to use and manage the new system effectively from day one.'
                  },
                ],
                calculator: {
                  type: 'web_pages',
                  label: 'Number of Pages',
                  min: 16,
                  max: 30,
                  step: 1,
                  defaultValue: 20,
                  unit: 'pages',
                },
              },
            ],
          },
        ],
      },
      {
        id: 'cat2',
        name: 'Automation & Workflow Optimization',
        description: 'Tiered solutions for automating your business processes, from simple tasks to complex, multi-platform business workflows. Standard Automation Packs Include: 1. Lead Capture & Basic Lead Outbound Sequence, 2. Appointment Booking & Reminders, 3. Lead Nurture & Reactivation, 4. Native AI Chat + Inbound Voice AI Setup, 5. Custom Date Reminders.',
        services: [
           {
            name: 'Automation Tiers',
            description: '',
            tiers: [
                {
                    name: "Launch Tier: Automation Starter",
                    price: "Starts at $500 (One-Time Fee)",
                    timeframe: "3-5 business days",
                    description: "A perfect start to automating your most critical tasks. Choose any two (2) of our Standard Automation Packs.",
                    features: ["Choose 2 Standard Automation Packs", "Regional Price Estimates: USA/EU/AU: $500 | UAE (at 1.2x): ~$600 | Asia (at 0.6x): ~$300"],
                    packSelector: {
                      limit: 2,
                      options: STANDARD_AUTOMATION_PACKS,
                    },
                },
                {
                    name: "Scale Tier: Integrated Workflow System",
                    price: "Starts at $1,500+ (One-Time Fee)",
                    timeframe: "1-2 weeks",
                    description: "A project to build more complex, multi-app workflows. This can include the setup of up to five (5) automation packs or a custom-scoped integration project of similar complexity.",
                    features: ["Up to 5 automation packs", "Custom-scoped integration project", "Regional Price Estimates: USA/EU/AU: $1,500+ | UAE (at 1.2x): $1,800+ | Asia (at 0.6x): $900+"],
                    packSelector: {
                      limit: 5,
                      options: STANDARD_AUTOMATION_PACKS,
                    },
                },
                {
                    name: "Excel Tier: Full Business Process Automation",
                    price: "Starts from $5,000+ (Custom Quoted)",
                    timeframe: "4+ weeks (Defined in Custom Scope)",
                    description: "A strategic deep dive into your operations. We audit your existing processes and design a comprehensive, custom automation infrastructure.",
                    features: ["Full audit of existing processes", "Design of custom automation infrastructure"],
                },
            ]
           }
        ],
      },
       {
        id: 'cat3',
        name: 'AI Solutions',
        description: 'A tiered suite of AI offerings, from deploying a single powerful tool to building a deeply integrated, intelligent system.',
        services: [
          {
            name: 'AI Implementation Tiers',
            description: '',
            tiers: [
              {
                name: 'Launch Tier: AI Tool Implementation',
                price: 'Starts at a $500+ Setup Fee',
                timeframe: '5-7 business days',
                description: 'The implementation of one standalone AI tool. You can choose either our ChatAI Implementation or our VoiceAI Implementation.',
                features: ['Choose ChatAI or VoiceAI implementation', 'Regional Price Estimates: USA/EU/AU: $500+ | UAE (at 1.2x): $600+ | Asia (at 0.6x): $300+'],
              },
              {
                name: 'Scale Tier: AI-Powered Customer Experience',
                price: 'Starts at $2,000+',
                timeframe: '2-3 weeks',
                description: 'A comprehensive setup that includes both ChatAI and VoiceAI Implementation, plus an AI-Enhanced Automation flow to intelligently qualify and route new leads.',
                features: ['ChatAI & VoiceAI Implementation', 'AI-Enhanced Automation flow', 'Regional Price Estimates: USA/EU/AU: $2,000+ | UAE (at 1.2x): $2,400+ | Asia (at 0.6x): $1,200+'],
              },
              {
                name: 'Excel Tier: Strategic AI Integration',
                price: 'Starts from $6,000+ (Custom Quoted)',
                timeframe: '6+ weeks (Defined in Custom Scope)',
                description: 'A fully bespoke project focused on deep AI integration, including the development of Predictive Analytics models, custom recommendation engines, or complex, multi-faceted AI-Enhanced Automation systems.',
                features: ['Predictive Analytics models', 'Custom recommendation engines', 'Complex AI-Enhanced Automation systems'],
              },
            ],
          },
        ],
      },
       {
        id: 'cat4',
        name: 'Ads & Marketing Management',
        description: 'Tiered solutions for businesses looking to leverage paid advertising platforms to generate a predictable stream of leads and sales.',
        services: [
            {
                name: 'Ads Management Tiers',
                description: '',
                tiers: [
                    {
                        name: 'Launch Tier: Ad Account Management',
                        price: '15% of monthly ad spend + Starts at $150 setup fee',
                        timeframe: '3-5 business days setup',
                        description: 'For clients who have their own ad creative and copy. We handle the technical heavy lifting: campaign setup, audience targeting, pixel installation, and ongoing performance optimization.',
                        features: ['Campaign setup', 'Audience targeting', 'Pixel installation', 'Ongoing performance optimization'],
                        calculator: {
                            type: 'ad_spend_launch',
                            label: 'Monthly Ad Spend',
                            min: 500,
                            max: 5000,
                            step: 100,
                            defaultValue: 1000,
                            unit: '$',
                        },
                    },
                    {
                        name: 'Scale Tier: Managed Campaigns + Creative',
                        price: '20% of monthly ad spend + Starts at $300 setup fee',
                        timeframe: '1-2 weeks setup',
                        description: 'We manage your campaigns and also create the ad content. This includes professional graphic design and video production (up to 10 images and 1-2 short videos per month).',
                        features: ['Campaign management', 'Ad content creation', 'Graphic design & video production'],
                        calculator: {
                            type: 'ad_spend_scale',
                            label: 'Monthly Ad Spend',
                            min: 1000,
                            max: 10000,
                            step: 100,
                            defaultValue: 2500,
                            unit: '$',
                        },
                    },
                    {
                        name: 'Excel Tier: All-Inclusive Growth Partner',
                        price: 'Flat monthly retainer (starts at $500/month) + 10% of monthly ad spend',
                        timeframe: '2+ weeks for initial strategy & setup',
                        description: 'A fully outsourced solution where we act as your strategic advertising partner.',
                        features: ['Unlimited creative production (one active request at a time)', 'Proactive strategy development', 'Rigorous A/B testing', 'Scaling recommendations', 'In-depth monthly reporting and review calls'],
                        calculator: {
                            type: 'ad_spend_excel',
                            label: 'Monthly Ad Spend',
                            min: 2000,
                            max: 20000,
                            step: 500,
                            defaultValue: 5000,
                            unit: '$',
                        },
                    },
                ]
            }
        ]
      },
      {
        id: 'cat5',
        name: 'Branding & Creative Services',
        description: 'Packaged solutions for creating a compelling brand identity and the ongoing content needed to engage your audience.',
        services: [
            {
                name: 'Branding Tiers',
                description: '',
                tiers: [
                    {
                        name: 'Launch Tier: Brand Starter Kit',
                        price: 'Starts at $750 (One-Time Fee)',
                        timeframe: '1-2 weeks',
                        description: 'For new businesses needing essential brand assets to launch with a professional and consistent image.',
                        features: ['Logo design (3 initial concepts, 2 revisions)', 'Defined color palette and font selection', 'Perfectly sized social media assets'],
                    },
                    {
                        name: 'Scale Tier: Full Brand Identity & Content Retainer',
                        price: 'Starts at $2,500 (Identity Project) + $500/month (Content Retainer)',
                        timeframe: '3-4 weeks (Identity Project)',
                        description: 'A comprehensive identity package plus an ongoing monthly retainer for producing a steady stream of marketing assets.',
                        features: ['Business card and email signature design', 'Simple brand guide', 'Monthly social media graphics and simple infographics'],
                    },
                    {
                        name: 'Excel Tier: Strategic Brand & Content Partner',
                        price: 'Starts from $7,000+ (Project) and $2,000+/month (Retainer)',
                        timeframe: '4-6+ weeks (Strategy & Identity Project)',
                        description: 'This begins with an in-depth brand strategy workshop to define your mission, messaging, and tone of voice, followed by a high-volume monthly content partnership.',
                        features: ['In-depth brand strategy workshop', 'Comprehensive brand guidelines document', 'High-volume monthly content partnership', 'Fair Use Policy: one active creative request at a time'],
                    },
                ]
            }
        ]
      },
      {
        id: 'cat6',
        name: 'CRM & Custom Integrations',
        description: 'Foundational setup and connectivity to power your core business operations and create a single source of truth for your data.',
         services: [
            {
                name: 'CRM Tiers',
                description: '',
                tiers: [
                    {
                        name: 'Launch Tier: CRM Quickstart',
                        price: 'Starts at $600 (One-Time Fee)',
                        timeframe: '3-5 business days',
                        description: 'Initial setup and configuration of your LofiCRM (or other) account, including user setup, one primary sales pipeline, and a one-time import of existing contacts from a single, clean source.',
                        features: ['Initial CRM setup and configuration', 'User setup', 'One primary sales pipeline', 'One-time contact import'],
                    },
                    {
                        name: 'Scale Tier: Core System Integration',
                        price: 'Starts at $2,000+ (One-Time Fee)',
                        timeframe: '2-3 weeks',
                        description: 'We connect your CRM to up to three (3) of your other core business applications (e.g., accounting software, e-commerce store) using pre-built connectors to ensure data flows automatically.',
                        features: ['Connect CRM to up to 3 core applications', 'Use pre-built connectors', 'Eliminate manual data entry'],
                    },
                    {
                        name: 'Excel Tier: Custom API & Platform Integration',
                        price: 'Starts from $6,000+ (Custom Quoted)',
                        timeframe: '5+ weeks (Defined in Custom Scope)',
                        description: 'For businesses with unique or proprietary software. We build custom APIs and middleware to create a fully unified technology ecosystem, enabling seamless two-way data synchronization.',
                        features: ['Build custom APIs and middleware', 'Create a unified technology ecosystem', 'Seamless two-way data synchronization'],
                    },
                ]
            }
        ]
      },
      {
        id: 'cat7',
        name: 'Dedicated Support & Whitelabel IT',
        description: 'All-inclusive, retainer-based access to our full range of skills, functioning as a flexible and scalable extension of your team. These are ongoing services and do not have a fixed timeframe.',
        services: [
            {
                name: 'Retainer Tiers',
                description: '',
                tiers: [
                    {
                        name: 'Business Retainer',
                        price: 'Starts at $2,500 per month',
                        description: 'A block of 40 monthly hours that can be used for any service we offer, from website updates to building automations. Managed by a shared project manager with bi-weekly check-in calls.',
                        features: ['40 monthly hours', 'Use for any service', 'Shared project manager', 'Bi-weekly check-ins', { text: 'Key Policy: Unused hours do not roll over', tooltip: 'Hours must be used within the calendar month and do not carry over to the next month to ensure consistent resource allocation.' }],
                    },
                    {
                        name: 'Professional Retainer',
                        price: 'Starts at $5,000 per month',
                        description: 'A block of 90 monthly hours with a dedicated project manager who acts as your strategic point of contact, plus priority support and weekly strategic calls.',
                        features: ['90 monthly hours', 'Dedicated project manager', 'Priority support', 'Weekly strategic calls', { text: 'Key Policy: Unused hours do not roll over', tooltip: 'Hours must be used within the calendar month and do not carry over to the next month to ensure consistent resource allocation.' }],
                    },
                    {
                        name: 'Enterprise (Dedicated Team)',
                        price: 'Starts from $8,000+ per month (Custom Quoted)',
                        description: 'A fully dedicated team that functions exclusively as part of your organization. This includes unlimited task requests and real-time collaboration through shared communication channels.',
                        features: ['Fully dedicated team', 'Unlimited task requests', 'Real-time collaboration', 'Entire expert department on demand'],
                    },
                ]
            }
        ]
      }
    ],
  },
  {
    id: 'pillar2',
    name: 'Pillar 2: A La Carte Specialist Services',
    description: 'Expert help for specific, well-defined tasks. This is for clients who have a specific need and want to leverage our specialized expertise without committing to a full project.',
    categories: [
      {
        id: 'cat8',
        name: 'Specialist Services',
        description: '',
        services: [
          {
            name: 'Virtual Assistant (VA) Services',
            description: 'Trained remote team members for a variety of business support tasks, billed on a weekly retainer.',
            pricing: [
              'Administrative & Technical Support - Solo VA (1 Person): $125/week',
              'Administrative & Technical Support - Small Team (2-3 People): $200/week',
              'Scale Support (5-10 VAs): Starts at $500/week',
              'Sales & Support Teams (Philippines-Based): Custom quoted',
            ],
          },
          {
            name: 'Consulting Hours',
            description: 'A 60-90 minute deep-dive strategy session with a senior consultant to solve a specific problem, review your tech stack, or map out a project.',
            pricing: ['Starts at $200 - $500 per session'],
          },
          {
            name: 'Web Scraping & Data Engineering',
            description: 'We build custom scrapers to extract and organize public data for market research, lead generation, or competitive analysis, turning raw information into a strategic asset. Timeframe: 1-3+ weeks.',
            pricing: ['Starts at $1,200+ (Custom Quoted)'],
          },
          {
            name: 'Custom Integration Solutions',
            description: 'We connect two or more specific applications that lack a native integration, using platforms like Zapier, Make, or n8n to build a reliable data bridge between them. Timeframe: 1-2+ weeks.',
            pricing: ['Starts at $1,000 (Custom Quoted)'],
          },
        ],
      },
    ],
  },
  {
    id: 'pillar3',
    name: 'Pillar 3: Productized Solutions & SaaS',
    description: 'Pre-built, scalable tools and products to accelerate growth. This pillar offers our proprietary intellectual property, allowing clients to deploy powerful systems and tools instantly.',
    categories: [
      {
        id: 'cat9',
        name: 'SaaS & Productized Offerings',
        description: '',
        services: [
          {
            name: 'LofiCRM Platform & Usage Billing',
            description: 'Our powerful, all-in-one sales and marketing platform.',
            details: [
              'Platform Subscription: Full access to the LofiCRM platform, including the CRM, funnels, website builder, email marketing, and more. Price: $29 per month.',
              'Usage-Based Billing (Pay-As-You-Go): Features like SMS, calls, and advanced AI are billed based on usage with a transparent markup.',
              'Phone System (US Rates): Outbound SMS: $0.0166/segment, Outbound Calls: $0.028/min, Inbound Calls: $0.017/min.',
              'Email Services: Per Email: $0.00135/email, Dedicated IP: $88.50/month.',
              'Advanced Automation & AI: Premium Workflows: $0.02/execution, Content AI: $0.18/1000 Words & $0.12/Image, Conversation AI: $0.04/Message & $0.26/Minute.'
            ],
          },
          {
            name: 'LofiCRM Snapshots',
            description: 'A complete, "done-for-you" installation of pre-built funnels, pipelines, and automations into a LofiCRM account. Includes lifetime access to our library of membership courses and SOPs.',
            pricing: [
              'Without AI Setup (DIY / DFY): $1,000 / $1,250',
              'With AI Setup (DIY / DFY): $1,500 / $2,000'
            ],
          },
          {
            name: 'Proprietary SaaS Products',
            description: 'In-house software solutions offered on a monthly or annual subscription.',
             pricing: [
              'LofiConnect (Networking & Outreach Tool): $49/month',
              'AI Call Center Replacement (Replaces 10-person human call center): Starts at $999/month',
            ],
          },
           {
            name: 'Digital Product Marketplace',
            description: 'A marketplace of individual digital assets like high-converting funnel templates, plug-and-play automation recipes, and social media design packs. Delivered instantly upon purchase.',
             pricing: [
              'Items priced individually (e.g., $29 - $99)',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'pillar4',
    name: 'Partnership & Legal Framework',
    description: 'All partnerships are governed by a formal Partnership Agreement that details the full terms, conditions, and operational business workflows.',
    categories: [
      {
        id: 'cat10',
        name: 'Partnership Programs',
        description: 'For agencies, consultants, and referrers who wish to collaborate with LofiStack, we offer a range of partnership opportunities.',
        services: [
          {
            name: 'Whitelabel & Reseller Program',
            description: '',
            infoBlocks: [
              { title: 'Ideal For', content: 'Digital agencies who want to expand their service offerings without increasing their in-house team.' },
              { title: 'How it Works', content: 'You can sell any of our services under your own brand. We operate as your silent, in-house execution team. We provide you with a confidential "base price" for any project, and you are free to add any markup and set the final price for your client. We deliver all work directly to you, allowing you to manage the client relationship completely.' },
              { title: 'Partner Benefits', content: ['Increased Profitability: Add high-value technical services to your offerings instantly.', 'Brand Protection: Your brand remains front and center with your clients.', 'Dedicated Support: Access to a dedicated partner support channel for quotes and project updates.'] , example: "Our base price for a 'Scale Tier: Custom Growth Engine' website is $2,000. You are free to sell this to your client for $3,500, earning a $1,500 profit margin." },
            ],
          },
          {
            name: 'Joint Venture (JV) Program',
            description: '',
            infoBlocks: [
              { title: 'Ideal For', content: 'Strategic partners with whom we engage in joint marketing, lead generation, and sales activities.' },
              { title: 'How it Works', content: 'We offer two flexible models for our JV partners, depending on the nature of the collaboration.' },
              { title: 'Model A: 50/50 Profit Share', content: 'For clients sourced through a jointly funded and executed marketing campaign. We calculate the total profit of a project by subtracting our "base price" from the final client price. This profit is then split 50/50.', example: 'A project sells for $5,000. Our base price is $3,000. The total profit of $2,000 is split, with each partner receiving $1,000.' },
              { title: 'Model B: 15% Markup Share', content: 'For clients that you source, but where we engage in a joint sales effort to close the deal. You set the final price, and LofiStack receives 15% of your markup.', example: 'Our base price is $1,000. You quote the client $1,500 (a $500 markup). LofiStack receives 15% of that markup ($75), for a total payment of $1,075 to us. You keep the remaining $425 profit.' },
            ],
          },
          {
            name: 'Affiliate & Referral Program',
            description: '',
            infoBlocks: [
              { title: 'Ideal For', content: 'Individuals and businesses who want to earn passive income by referring new clients to LofiStack.' },
              { title: 'How it Works', content: 'You will be provided with a unique referral link and access to an affiliate dashboard. Payouts are made monthly once a minimum threshold (e.g., $100) is reached.' },
              { title: 'Commission Structure', content: ['Subscription Services: Earn a 15% recurring commission for the first 12 months.', 'Project-Based Services: Earn a 10% one-time commission.'] },
            ],
          },
        ],
      },
      {
        id: 'cat11',
        name: 'Legal Framework & Project Governance',
        description: '',
        services: [
          {
            name: 'Master Service Agreement (MSA)',
            description: 'This document outlines our service offerings and pricing. All projects are governed by a formal Master Service Agreement (MSA) which will be provided with any formal proposal. The MSA contains detailed clauses on intellectual property, confidentiality, liability, and termination, providing legal protection for both parties.',
            infoBlocks: [],
          },
          {
            name: 'Client Responsibilities & Additional Costs',
            description: 'The quoted project price covers our design, development, and strategic services. To ensure transparency, the following ongoing and third-party costs are the client\'s responsibility and will be billed separately or paid directly by the client:',
            infoBlocks: [
              { title: 'Website Hosting & Domain', content: 'Annual/monthly fees for domain names and web hosting.'},
              { title: 'Premium Software Licenses', content: 'Costs for any premium themes, plugins, or software required for the project.'},
              { title: 'Third-Party Service Subscriptions', content: 'Ongoing fees for integrated services, ad spend, and any usage-based platform fees (e.g., email marketing platforms, Twilio for SMS/voice usage, Zapier/Make tasks). We will be transparent about all potential third-party costs in our formal proposal.'},
              { title: 'Content & Assets', content: 'Final website text, images, and brand assets are to be provided by the client. These can be created via our Branding & Creative Services for an additional fee.'},
            ]
          },
          {
            name: 'Service-Specific Disclaimers',
            description: '',
            infoBlocks: [
              { title: 'Web Scraping', content: 'For any Web Scraping & Data Engineering project, we will only scrape publicly available data and will make a best effort to operate within the terms of service of the target platform. The client assumes all responsibility for the use of the extracted data.'}
            ]
          }
        ]
      }
    ],
  },
];