import { 
  internationalShowreel, 
  serviceBroadcastTech, 
  serviceScoringAnalytics, 
  serviceCommentary, 
  serviceReplay, 
  serviceStreaming, 
  serviceEventManagement,
  imaging16Cam,
  equipmentAudioSystems,
  equipmentStreamingInfra,
  lokeshImage,
  deepakImage,
  pankajImage,
  dharamImage,
  satishImage,
  tinuImage,
  sahilImage,
  keshavImage,
  nageshImage,
  rishabhImage
} from './assets';

export const defaultSiteContent = {
  navLinks: [
    { name: 'Home', href: '/' },
    { name: 'Auction', href: '/auction' },
    { name: 'Services', href: '/services' },
    { name: 'LMS Series', href: '/lms' },
    { name: 'Journey', href: '/journey' },
    { name: 'Sponsorship Proposal', href: '/proposal' },
    { name: 'Success', href: '/success' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Team', href: '/teams' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  hero: {
    backgroundImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1280&q=75',
    titleLine1: "INDIA'S PREMIER",
    titleHighlight: 'CRICKET LIVE STREAMING SERVICE',
    description:
      'Professional sports broadcasting company providing 18-camera 4K live streaming for Cricket, Football, and Kabaddi tournaments across India.',
    stats: [
      { icon: 'Video', label: '10,000+ Matches' },
      { icon: 'Trophy', label: '500+ Tournaments' },
      { icon: 'Users', label: '50+ Celebrity Events' },
      { icon: 'Camera', label: '18-Camera 4K' },
    ],
    primaryCta: 'BOOK PRODUCTION',
    secondaryCta: 'VIEW OUR WORK',
  },
  showreel: {
    title: 'Live Cricket Match Streaming Showreel',
    subtitle: 'Broadcast Production in Action',
    thumbnail: 'https://picsum.photos/seed/showreel-thumb/1920/1080',
    videoUrl: internationalShowreel,
    badgeTitle: 'Professional Setup',
    badgeSubtitle: 'Live 18-Camera 4K Production Demo',
  },
  about: {
    title: "Professional Cricket, Football & Kabaddi Broadcasting Company",
    subtitle: 'About JBMR Sports Pvt. Ltd.',
    image: serviceBroadcastTech,
    foundedLine: 'Established March 7, 2020 | 6 Years of Excellence',
    description1:
      'JBMR Sports is India\'s leading sports live streaming company, established in 2020. We specialize in professional cricket tournament live streaming and multi-camera sports production with 10,000+ matches delivered.',
    description2:
      'Based in Gurugram, Haryana, we provide live cricket match broadcasting and tournament streaming services across Delhi NCR and India with advanced 18-camera 4K setups and professional crew.',
    learnMoreLabel: 'OUR PRODUCTION PROCESS',
    experienceBadgeValue: '6+',
    experienceBadgeLabel: 'Years of Excellence',
    highlights: [
      { icon: 'Trophy', title: 'Tournament Production', desc: '500+ events covered' },
      { icon: 'Video', title: 'Live Streaming Service', desc: '10,000+ matches' },
      { icon: 'Users', title: 'Broadcast Team', desc: '50+ Celebrity Events' },
      { icon: 'CheckCircle2', title: 'Multi-Cam Setup', desc: 'Professional 18-camera 4K' },
    ],
  },
  services: {
    title: 'Professional Sports Broadcasting Solutions',
    subtitle: 'Our Services',
    items: [
      {
        icon: 'Trophy',
        title: 'Player Auction & League Production',
        desc: 'End-to-end sports player auction management: custom digital bidding software, real-time purse & budget analytics, multi-camera live auction streaming, LED wall graphics, and stage production.',
        image: serviceEventManagement,
        tags: ['Player Auction', 'Live Bidding Software', 'LED Wall Stage', 'Multi-Cam Stream'],
      },
      {
        icon: 'Camera',
        title: 'Multi-Camera Sports Production',
        desc: 'Professional 18-camera 4K setups delivering cinematic live streaming for elite cricket tournaments. Seamlessly integrated with JBMR OTT for instant global reach.',
        image: serviceBroadcastTech,
        tags: ['18-Camera', '4K', 'Live Streaming'],
      },
      {
        icon: 'Layout',
        title: 'Cricket Live Streaming Service',
        desc: 'Advanced YouTube live cricket streaming with real-time score graphics and professional match production.',
        image: serviceScoringAnalytics,
        tags: ['YouTube Live', 'Score Graphics', 'HD Stream'],
      },
      {
        icon: 'Mic2',
        title: 'Professional Match Commentary',
        desc: 'Expert analysis and play-by-play commentary for live sports broadcasts on YouTube and National TV.',
        image: serviceCommentary,
        tags: ['Expert Panel', 'Multi-lingual', 'Analysis'],
      },
      {
        icon: 'RotateCcw',
        title: 'Tournament Broadcast Setup',
        desc: 'Full-scale cricket match production including Slow-Mo replays, 3rd Umpire system, and Stump Mics.',
        image: serviceReplay,
        tags: ['Slow-Mo', '3rd Umpire', 'Stump Mic'],
      },
      {
        icon: 'Globe',
        title: 'Global Live Streaming',
        desc: 'Seamless, high-bitrate broadcasting across YouTube, Facebook, and custom OTT platforms.',
        image: serviceStreaming,
        tags: ['YouTube', 'Facebook', 'Instagram'],
      },
      {
        icon: 'Target',
        title: 'Elite Sponsorship Programs',
        desc: 'Strategic brand integration for big leagues. We offer a minimum 8-camera setup for sponsored tournaments, scaling up to 18-cameras based on league prestige.',
        image: serviceEventManagement,
        tags: ['Big League', 'Sponsorship', '8-Cam Min'],
      },
    ],
  },
  equipment: {
    title: 'Broadcast Technology',
    subtitle: 'Our Arsenal',
    description:
      'We utilize industry-standard infrastructure trusted by global sports networks to ensure zero-latency and elite production quality.',
    items: [
      { name: '18-Camera 4K Multi-Angle Setup', category: 'Imaging', image: imaging16Cam },
      { name: 'Professional Audio Systems', category: 'Audio', image: equipmentAudioSystems },
      { name: 'HD Streaming Infrastructure', category: 'Streaming', image: equipmentStreamingInfra },
      { name: 'Stump Mic & Replay Systems', category: 'Tech', image: serviceReplay },
      { name: 'Production Control Room', category: 'Control', image: serviceBroadcastTech },
    ],
  },
  stats: {
    title: 'Our Impact by Numbers',
    items: [
      { label: 'Live Matches Produced', value: 10000, suffix: '+' },
      { label: 'Tournaments Delivered', value: 500, suffix: '+' },
      { label: 'Years of Excellence', value: 6, suffix: '+' },
      { label: 'Camera Capacity', value: 18, suffix: ' (4K)' },
      { label: 'Celebrity Events', value: 50, suffix: '+' },
    ],
  },
  projects: {
    title: 'Recent Productions',
    subtitle: 'Past Projects',
    items: [
      { name: 'Artist Event Premier League (AEPL) Season 8', year: '2026', loc: 'Delhi NCR', matches: 'Season 8 Matches + Grand Live Auction', platform: 'JBMR Sports 7-Camera Live Setup & Real-Time Graphics Switching' },
      { name: 'Unicorn Premier League (UPL) 2026', year: '2026', loc: 'Wisteria Sports Club, Gurugram', matches: '16 Teams, 50+ Startups', platform: 'Broadcasting & Live Production Partner' },
      { name: 'Rajasthan Legends League', year: '2026', loc: 'Jaipur', matches: '25 April - 3 June 2026', platform: 'Production Only (Live Match Production)' },
      { name: 'Champions Cricket Passion League', year: '2026', loc: 'Noida', matches: '28 March - 3 May 2026', platform: 'Professional League Broadcast' },
      { name: 'IIMT Meerut T20 League', year: '2026', loc: 'Meerut, Uttar Pradesh', matches: '15 March - 1 April 2026', platform: 'Director of Production' },
      { name: 'APL Apollo Mixed Disability T20i Series (India vs England)', year: '2026', loc: 'International Series', matches: '29 Jan - 6 Feb 2026', platform: 'DD Sports (National TV)' },
      { name: 'Empress Cricket League - Season 3', year: '2026', loc: 'Gurugram, Haryana', matches: '9 Feb - 18 Feb 2026', platform: 'Professional League Broadcast' },
      { name: 'Business Owners Premier League - Season 6', year: '2026', loc: 'Delhi NCR', matches: 'January 18 - March 1, 2026', platform: 'Professional League Broadcast' },
      { name: 'Indian Healthcare League 2025', year: '2025', loc: 'Udaipur City & Nathdwara', matches: '14 Dec - 21 Dec 2025', platform: 'DD Sports (National TV)' },
      { name: 'Empress Cricket League', year: '2025', loc: 'Gurugram, Haryana', matches: '19 Matches', platform: 'Instagram / YouTube' },
      { name: 'Unicorn Premier League - Season 5', year: '2025', loc: 'Delhi NCR', matches: '14 Startup Teams', platform: 'Professional Digital Broadcast' },
      { name: 'Advocates Premier League - Season 2', year: '2025', loc: 'Delhi NCR', matches: 'Auction Format Season', platform: 'League Broadcast Coverage' },
      { name: 'SILF 17th Edition', year: '2025', loc: 'Delhi NCR', matches: 'Major League Coverage', platform: 'Professional Broadcast' },
      { name: 'Business Owners Premier League - Season 5', year: '2025', loc: 'Delhi NCR', matches: 'Successfully Completed', platform: 'League Broadcast Coverage' },
      { name: 'LMS India Super Series 2024', year: '2024', loc: 'Chandigarh, India', matches: '20 Teams (Global & Indian)', platform: 'Live Stream Production & Videography' },
      { name: 'LMS India Super Series 2023', year: '2023', loc: 'New Delhi, India', matches: 'Inaugural International Edition', platform: 'Live Stream Production & Multi-Camera' },
      { name: 'BOPL - Season 3', year: '2023', loc: 'Vinay Marg Sports Complex, Delhi', matches: '6 Teams (90 Entrepreneurs)', platform: 'Professional Broadcast' },
    ],
  },
  successStories: {
    title: 'Our Success Stories',
    subtitle: 'Since 2020, JBMR Sports has delivered world-class cricket broadcasting for prestigious tournaments, celebrity events, and state championships across India.',
    highlights: ['50+ Tournaments', 'DD Sports Partner', 'Celebrity Events', '18-Camera 4K Setup'],
    viralSuccess: {
      label: 'VIRAL SUCCESS',
      title: 'Empress Cricket League 2025 (Season 2)',
      subtitle: 'Premier T20 Cricket Tournament - Viral Moments',
      venue: 'Yug 2.O Cricket Ground, Gurugram (Gurgaon), Haryana',
      date: 'February 20 - March 4, 2025',
      champion: 'Sahgal Cricket Club (SCC)',
      viralMoment:
        "Digvesh Rathi's 5 wickets in 5 consecutive deliveries (7 wickets total) - went viral during IPL 2025",
      stats: [
        { value: '12', label: 'Teams' },
        { value: '19', label: 'Matches' },
        { value: '264', label: 'Highest Score' },
        { value: '7/45', label: 'Best Bowling' },
      ],
      platforms: ['Instagram', 'YouTube'],
    },
    majorTournaments: {
      title: 'Major Tournaments',
      subtitle: "Professional broadcasting for India's most prestigious cricket leagues and championships",
          items: [
        {
          category: 'ENTERTAINMENT & EVENTS LEAGUE',
          name: 'Artist Event Premier League (AEPL) - Season 8',
          line: "Delhi NCR's Premier Cricket League for Event & Entertainment Professionals",
          blocks: [
            {
              title: 'Season 8 (2026) - Turnkey Match & Auction Production',
              points: [
                'Live Setup: Dedicated 7-Camera Live Production Setup',
                'Video Control: Real-time multi-camera switching & live director PCR',
                'Graphics Suite: Broadcast dynamic TV graphics, live score bugs & player stats',
                'Live Auction: Turnkey stage setup, LED display wall & digital bidding system',
                'Replay & Tech: Instant slow-motion replay system & multi-platform streaming',
                'JBMR Scope: Complete turnkey sports broadcasting by JBMR Sports',
              ],
            },
          ],
        },
        {
          category: 'LEGENDS LEAGUE',
          name: 'Rajasthan Legends League',
          line: "Elite Legends Cricket Tournament in Jaipur",
          blocks: [
            {
              title: '2026 Edition',
              points: [
                'Duration: 25 April - 3 June 2026',
                'Location: Jaipur',
                'Status: Successfully Completed',
                'JBMR Scope: Production Only (Live Match Production)',
              ],
            },
          ],
        },
        {
          category: 'PREMIER LEAGUE',
          name: 'Champions Cricket Passion League',
          line: "Elite T20 Cricket Tournament for Cricket Enthusiasts",
          blocks: [
            {
              title: '2026 Edition',
              points: [
                'Duration: 28 March - 3 May 2026',
                'Location: Noida',
                'Status: Upcoming Broadcast',
                'Production: Professional Multi-Camera 4K Setup',
              ],
            },
          ],
        },
        {
          category: 'COLLEGE LEAGUE',
          name: 'IIMT Meerut T20 League',
          line: "Premier Educational Institution Cricket League",
          blocks: [
            {
              title: '2026 Edition',
              points: [
                'Duration: 15 March - 1 April 2026',
                'Role: Director of Production',
                'Status: Successfully Completed',
              ],
            },
          ],
        },
        {
          category: 'PREMIER LEAGUE',
          name: 'Empress Cricket League (ECL)',
          line: "North India's High-Visibility T20 Cricket Tournament",
          blocks: [
            {
              title: 'Season 3 (2026) - Current',
              points: ['Duration: 9 February - 18 February 2026', 'Status: Successfully Completed'],
            },
            {
              title: 'Season 2 (2025) - Viral Success',
              points: ['Winner: Sahgal Cricket Club (SCC)', 'Highlight: Digvesh Rathi (7 wickets in a match)', 'Status: Achievement Milestone'],
            },
          ],
        },
        {
          category: 'STARTUP LEAGUE',
          name: 'Unicorn Premier League - IPL for Indian Startups',
          line: "Delhi NCR's Premier Entrepreneur Cricket League",
          blocks: [
            {
              title: 'Season 5 (2025) - Latest Success',
              points: ['Champion: TBO Warriors', 'Runner-up: Team Entrackr', 'Teams: 14 Startup Teams', 'Status: Successfully Completed'],
            },
            {
              title: 'Key Features',
              points: [
                'Inclusive teams with male and female players',
                '5,000+ attendees',
                'Strong networking platform for startups',
              ],
            },
          ],
        },
        {
          category: 'BUSINESS OWNERS',
          name: 'Business Owners Premier League (BOPL)',
          line: 'Premier Cricket League for Delhi NCR Entrepreneurs and Business Owners',
          blocks: [
            {
              title: 'Season 6 (2026) - Current Season',
              points: ['Duration: 18 January - 1 March 2026', 'Status: Live Broadcast in Progress'],
            },
            {
              title: 'Season 5 (2025) - Previous Season',
              points: ['Auction: February 7, 2025', 'Status: Successfully Completed'],
            },
            {
              title: 'Season 4 (2024)',
              points: [
                'Champion: Haritimas Phailaav Strikers',
                'Final: Haritimas Phailaav Strikers defeated Noida Bulls by 46 runs',
              ],
            },
            {
              title: 'Season 3 (2023)',
              points: ['Teams: 6 Teams (90 Entrepreneurs)', 'Duration: August 27 - October 8, 2023', 'Final Venue: Vinay Marg Sports Complex'],
            },
            {
              title: 'Focus',
              points: ['Business owners networking through cricket', 'Entrepreneurial community building'],
            },
          ],
        },
        {
          category: 'LEGAL PROFESSIONALS',
          name: 'SILF Turf Cricket League - Legal Professionals Championship',
          line: 'Annual T20 Cricket Tournament for Top Indian Law Firms',
          blocks: [
            {
              title: '2025 (17th Edition) - Latest',
              points: ['Winner: Lakshmikumaran & Sridharan (LKS)', 'Status: Successfully Completed'],
            },
            {
              title: '2024 (16th Edition)',
              points: ['Winner: Lakshmikumaran & Sridharan (LKS)', 'Teams: 24 law firms'],
            },
            {
              title: 'Digital Partner',
              points: ['Bar & Bench'],
            },
          ],
        },
        {
          category: 'HISTORIC FIRST',
          name: 'Advocates Premier League (APL)',
          line: "Country's First Lawyers' Cricket Tournament with Auction Format",
          blocks: [
            {
              title: 'Season 2 (2025) - Latest',
              points: ['Status: Successfully Completed', 'Format: Auction-based', 'Streaming: JBMR Sports YouTube'],
            },
            {
              title: 'Season 1 (2024)',
              points: ['Duration: September 14 - October 2, 2024', 'Format: Auction-based', 'Venues: 5 Grounds', 'Streaming: JBMR Sports YouTube'],
            },
            {
              title: 'Historic Achievement',
              points: ["First-ever lawyers' cricket tournament using auction format in India"],
            },
          ],
        },
        {
          category: 'HEALTHCARE LEAGUE',
          name: 'Indian Healthcare League (IHL)',
          line: "India's Premier Healthcare Professional Cricket League",
          blocks: [
            {
              title: '2025 Edition (Udaipur & Nathdwara)',
              points: [
                'Venue: Miraj Stadium, Nathdwara & Udaipur City',
                'Duration: 14 December - 21 December 2025',
                'Platform: DD Sports (National TV)',
                'Specialty: Live 3rd Umpire & Final Feed Output',
                'Status: Successfully Completed',
              ],
            },
          ],
        },
        {
          category: 'INTERNATIONAL CRICKET PRODUCTION',
          name: 'Last Man Stands (LMS) India Super Series',
          line: "World's Leading Amateur T20 Cricket Platform — International Production Partner",
          blocks: [
            {
              title: '2024 Edition — Chandigarh, India',
              points: [
                'Scale: 20 Teams from India and around the world',
                'International Teams: Auckland Warriors, Perth Power, Melbourne Mavericks, Brisbane Burners, Heritage Cricketers Bangladesh, Cape Town Jackals, Joburg Jets',
                'JBMR Role: Live Stream Production, Cricket Videography, Match Coverage & Technical Support',
                'Status: Successfully Completed International Broadcast',
              ],
            },
            {
              title: '2023 Inaugural Edition — New Delhi, India',
              points: [
                'Host City: New Delhi, India',
                'International Sides: Bangladesh, Australia, United States, United Kingdom',
                'Production Head: Lokesh Yadav',
                'JBMR Role: Live Stream Production, Match Videography, Multi-Camera Cricket Coverage & Crew Support',
                'Status: Successfully Completed Landmark Series',
              ],
            },
            {
              title: 'The Production Standard',
              points: [
                'Two Editions. One International Standard.',
                'Live Cricket Production. Every Moment. Everywhere.',
              ],
            },
          ],
        },
      ],
    },
    nationalStateCoverage: {
      title: 'National TV, Premier Leagues & Auction Productions',
      subtitle: 'Official broadcast production, player auction setup, multi-camera operations & technical ground execution delivered by JBMR Sports',
      items: [
        {
          category: 'FEATURED PREMIER LEAGUE & EVENT PRODUCTION',
          name: 'Artist Event Premier League (AEPL) Season',
          productionBadge: 'Production Awarded by The House of Events',
          highlight: true,
          points: [
            'Organized & Commissioned By: The House of Events',
            'Scope: Complete Season Tournament Live Match Production & Grand Player Auction',
            'Player Auction Setup: Real-Time Digital Bidding Software, LED Stage Graphics & Multi-Camera Owner Stream',
            'Match Broadcast: Multi-Camera 4K Live Telecast, Ultra Slow-Mo Replays & Real-Time On-Screen Graphics',
            'JBMR Production Work: Turnkey Live Production Setup, Stage & LED Wall Integration, and High-Bitrate Live Streaming',
          ],
        },
        {
          category: 'STARTUP & PREMIER LEAGUE PARTNER',
          name: 'Unicorn Premier League (UPL) 2026',
          productionBadge: 'Broadcasting & Live Production Partner',
          highlight: true,
          points: [
            'Venue: Wisteria Sports Club, Gurugram',
            'Scale: 16 Teams representing 50+ Startups',
            'Focus: India’s leading startups, founders & business leaders',
            'Coverage: Live Match Production & Digital Streaming',
            'JBMR Production Work: Complete Live Production, Multi-Camera Broadcasting & Digital Feed Execution',
          ],
        },
        {
          category: 'NATIONAL TV PRODUCTION',
          name: 'APL Apollo Mixed Disability T20i Series (India vs England)',
          productionBadge: 'JBMR Live Production & Ground Setup',
          points: [
            'Platform: DD Sports (National Television)',
            'Duration: 29 January - 6 February 2026',
            'Type: International Mixed Disability Series',
            'Specialty: Elite International Production',
            'JBMR Production Work: Complete On-Ground Multi-Camera Setup, Match Production & Technical Feed for DD Sports',
          ],
        },
        {
          category: 'NATIONAL TV PRODUCTION',
          name: 'Wheelchair Cricket T20 - India vs Sri Lanka',
          productionBadge: 'JBMR Live Production & Ground Setup',
          points: [
            'Platform: DD Sports (National Television)',
            'Type: International Disability Sports Coverage',
            'Specialty: Adaptive Sports Coverage Specialist',
            'JBMR Production Work: Full Multi-Camera Ground Operations, Broadcast Control & Telecast Feed for DD Sports',
          ],
        },
        {
          category: 'NATIONAL TV PRODUCTION',
          name: 'Indian Healthcare League 2025',
          productionBadge: 'JBMR Live Production & 3rd Umpire Replay',
          points: [
            'Platform: DD Sports (National Television)',
            'Specialty: Live 3rd Umpire & Final Feed Output',
            'Type: Professional Healthcare League',
            'Year: 2025',
            'JBMR Production Work: Turnkey Multi-Camera Production, 3rd Umpire Replay Tech & Final Broadcast Feed Execution',
          ],
        },
        {
          category: 'STATE CHAMPIONSHIPS PRODUCTION',
          name: 'State Championships',
          productionBadge: 'JBMR On-Ground Production Partner',
          highlight: true,
          points: [
            'Senior Elite Group T20 - Chhattisgarh District Association (BCCI Affiliated)',
            'Duration: 26 April - 07 May, 2025 | Matches: 23',
            'Colvin Shield - Rajasthan Cricket Association',
            'Colvin Shield Duration: June 6-25, 2025 | Matches: 63',
            'JBMR Production Work: End-to-End Ground Production Setup, Multi-Camera Coverage & Live Scoring (86 Total Matches Executed)',
          ],
        },
      ],
    },
    specializedCoverage: {
      title: 'Specialized Productions & Extreme Conditions',
      subtitle: 'Technical broadcast production, camera rigging, and field execution across high-altitude and diverse sports disciplines',
      items: [
        {
          name: 'Climate Cup Football',
          location: 'Ladakh (High Altitude)',
          productionBadge: 'JBMR Live Production Setup',
          points: [
            'High-altitude sports coverage (11,000+ ft altitude)',
            'Extreme weather conditions coverage & cold-climate camera rigging',
            'JBMR Production Work: Complete Ground Multi-Camera Setup, Rigging & Technical Match Production Execution',
          ],
        },
        {
          name: 'Manali Edition Super Cricket League',
          location: 'Kullu Manali, Shimla',
          productionBadge: 'JBMR Ground Production',
          points: [
            'Hill station cricket tournament broadcast',
            'Professional mountain sports coverage & dynamic tracking',
            'JBMR Production Work: On-Ground Camera Unit Deployment & Hill-Terrain Match Production',
          ],
        },
        {
          name: 'Roller Hockey Premier League',
          location: 'Multi-Sport Arena',
          productionBadge: 'JBMR Multi-Camera Ops',
          points: [
            'Professional indoor high-speed sports coverage',
            'Multi-angle fast-action tracking & replay workflows',
            'JBMR Production Work: High-Speed Camera Rigging & Switcher Control',
          ],
        },
        {
          name: 'PD Champions Trophy',
          location: 'Sri Lanka',
          productionBadge: 'JBMR International Ops',
          points: [
            'International disability cricket championship',
            'Asia Cup disability tournament broadcast feed',
            'JBMR Production Work: Live Match Production Control & Scoring Telecast Integration',
          ],
        },
      ],
    },
  },
  journey: {
    title: 'Our Journey',
    subtitle: 'Milestones',
    milestones: [
      {
        year: '2020',
        title: 'Founding Vision',
        desc: 'Established JBMR Sports with a mission to redefine grassroots cricket broadcasting using professional-grade production standards.',
        icon: 'Rocket',
      },
      {
        year: '2021',
        title: 'Regional Expansion',
        desc: 'Scaled operations across North India, becoming the preferred production partner for premier regional leagues and tournaments.',
        icon: 'Camera',
      },
      {
        year: '2022',
        title: 'Technological Advancement',
        desc: 'Integrated advanced broadcast technologies, including multi-angle setups and real-time live scoring analytics.',
        icon: 'Trophy',
      },
      {
        year: '2023',
        title: 'Celebrity & Global Icons',
        desc: 'Delivered landmark productions featuring international legends like AB de Villiers, solidifying our reputation for elite sports coverage.',
        icon: 'Users',
      },
      {
        year: '2024',
        title: 'Institutional Benchmarking',
        desc: 'Partnered with prestigious legal and corporate bodies for SILF and Advocates Premier League, setting new industry standards.',
        icon: 'Tv',
      },
      {
        year: '2025',
        title: 'National Impact & Viral Success',
        desc: 'Achieved massive viral visibility with Empress Cricket League and successfully delivered high-stakes nationwide tournament broadcasts.',
        icon: 'Trophy',
      },
      {
        year: '2026',
        title: 'International Production & Incorporation',
        desc: 'Officially incorporated as JBMR Sports Pvt. Ltd. and produced high-profile international series like APL Apollo T20i live on DD Sports.',
        icon: 'Globe',
      },
    ],
  },
  leadership: {
    title: 'The Visionaries Behind JBMR Sports',
    subtitle: 'Leadership',
    directors: [
      {
        image: lokeshImage,
        name: 'Lokesh Yadav',
        role: 'Co-Founder, CEO & Director',
        bio1: 'Lokesh Yadav, Co-Founder, Chief Executive Officer & Director of JBMR Sports Pvt. Ltd., is the visionary leader spearheading business growth, strategic partnerships, and tournament management across India.',
        bio2: 'Under his leadership, JBMR Sports has grown from grassroots cricket coverage to national-level broadcasting and international sports productions.',
        socials: [
        ],
      },
      {
        image: deepakImage,
        name: 'Deepak Kumar',
        role: 'Co-Founder & Technical Director',
        bio1: 'Deepak Kumar, Co-Founder, Technical Director & Owner of JBMR Sports Pvt. Ltd., is the engineering pillar behind the company\'s multi-camera production setups, PCR systems, and live streaming infrastructure.',
        bio2: 'With specialized mastery over video switcher operations, slow-motion replay engines, and extreme condition broadcasting, he ensures flawless technical execution for state, national, and international tournaments.',
        socials: [
        ],
      },
    ],
    directorNote: 'JBMR Sports Pvt. Ltd. is founded and directed by Lokesh Yadav and Deepak Kumar, providing united executive leadership and broadcast engineering excellence.',
  },
  team: {
    title: 'Operations & Technical Team',
    subtitle: 'Our Experts',
    groups: [
      {
        title: 'System Operations',
        members: [
          { name: 'Lokesh Yadav', role: 'Director', image: lokeshImage },
          { name: 'Deepak Kumar', role: 'Technical Expert & Director', image: deepakImage },
          { name: 'Pankaj Yadav', role: 'Replay and System Operator', image: pankajImage },
        ],
      },
      {
        title: 'Camera Team',
        members: [
          {
            name: 'Dharam Singh',
            role: 'Senior Cameraman',
            bio: 'Lead cameraman with expertise in sports coverage.',
            image: dharamImage,
          },
          {
            name: 'Satish Kumar',
            role: 'Camera Operator',
            bio: 'Specialist in dynamic field angles and action capture.',
            image: satishImage,
          },
          {
            name: 'Tinu',
            role: 'Camera Operator',
            bio: 'Master of close-up and tracking shots in live matches.',
            image: tinuImage,
          },
          {
            name: 'Sahil Thakur',
            role: 'Camera Operator',
            bio: 'Ensures steady wide-angle match coverage.',
            image: sahilImage,
          },
          {
            name: 'Keshav',
            role: 'Camera Operator',
            bio: 'Focuses on dynamic camera transitions during games.',
            image: keshavImage,
          },
          {
            name: 'Nagesh',
            role: 'Camera Operator',
            bio: 'Captures professional slow-motion and replay shots.',
            image: nageshImage,
          },
          {
            name: 'Rishabh',
            role: 'Camera Operator',
            bio: 'Specializes in capturing cinematic close-ups, slow-motion, and replay shots with precision and creativity.',
            image: rishabhImage,
          },
          {
            name: 'Paramjeet Choudary',
            role: 'Close-Up Camera Expert',
            bio: 'Specialist in close-up live match shots with sharp subject tracking.',
            image: 'https://picsum.photos/seed/paramjeet-choudary/200/200',
          },
        ],
      },
    ],
  },
  clients: {
    title: 'Prestigious Partnerships',
    items: [
      { name: 'DD Sports', subtitle: 'National Television' },
      { name: 'The House of Events', subtitle: 'AEPL Production' },
      { name: 'State Cricket Associations', subtitle: 'Official Media Partner' },
      { name: 'AB de Villiers', subtitle: 'Celebrity Events' },
      { name: 'Corporate Leagues', subtitle: 'AEPL, UPL, BOPL, SILF' },
    ],
  },
  contact: {
    title: "Let's Produce Your Next Big Tournament",
    subtitle: 'Get In Touch',
    intro:
      'Ready to take your league to the next level? Our team is available for bookings across India. Contact us for a custom quote.',
    email: 'jbmrsports@gmail.com',
    details: [
      { icon: 'Phone', label: 'Call / WhatsApp', value: '+91 79888 79238', href: 'tel:+917988879238' },
      { icon: 'Mail', label: 'Email Us', value: 'jbmrsports@gmail.com', href: 'mailto:jbmrsports@gmail.com' },
      { icon: 'MapPin', label: 'Head Office', value: 'Gurugram, Haryana, India', href: 'https://maps.google.com/?q=Gurugram,+Haryana,+India' },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything You Need to Know',
    items: [
      {
        question: 'Where is the JBMR Sports head office located in Gurugram, Haryana?',
        answer: 'JBMR Sports Pvt. Ltd. head office is located in Gurugram, Haryana, PIN 122001, India (Geo Coordinates: 28.4595° N, 77.0266° E). You can view our physical office on Google Maps (https://maps.google.com/?q=Gurugram,+Haryana,+India). We operate nationwide across India with mobile broadcast units, OB vans, and multi-camera live setups for cricket tournaments and player auctions.',
      },
      {
        question: 'Do you provide Player Auction live camera production and broadcasting?',
        answer: 'Yes! JBMR Sports provides professional Multi-Camera Live Video Production and Broadcast Streaming for Player Auctions. We deploy dedicated cameras for the auctioneer stage, team owner bidding tables, and reaction angles, paired with live video switching (PCR), on-stream TV lower-thirds graphics & bid tickers, and high-definition 1080p/4K live streaming to YouTube and OTT platforms—as executed for Artist Event Premier League (AEPL) Season 8 (featuring a dedicated 7-camera live setup with real-time video switching & live graphics), APL, and BOPL.',
      },
      {
        question: 'What is JBMR Sports?',
        answer: 'JBMR Sports Pvt. Ltd. is a premier broadcasting and media production company specialized in high-quality sports content. We provide end-to-end production, live streaming, and sports marketing services for organizations, teams, and networks across India.',
      },
      {
        question: 'What types of sports do you cover?',
        answer: 'While we are leaders in cricket broadcasting, we produce content for a wide range of sports including football (Climate Cup Ladakh), hockey (Roller Hockey Premier League), tennis, basketball, and more. Our expertise covers live broadcasts, highlights, and expert analysis.',
      },
      {
        question: 'Which major organizations have you worked with?',
        answer: 'JBMR Sports has partnered with prestigious entities including DD Sports (National TV), Last Man Standing (featuring AB de Villiers), Power Grid, and various State Cricket Associations (Chhattisgarh, Rajasthan, etc.).',
      },
      {
        question: 'What services do you offer for tournaments?',
        answer: 'Our comprehensive services include 18-Camera 4K multi-angle production, live scoring analytics (Stump Mic, Slow-Mo), professional commentary, brand activation, sponsorship management, and multi-platform streaming (YouTube, FB, Instagram).',
      },
      {
        question: 'How can I contact JBMR Sports for a booking?',
        answer: 'You can reach us via our website contact form, call/WhatsApp us at +91 79888 79238, or email jbmrsports@gmail.com. We serve clients all across India including remote locations like Ladakh and Manali.',
      },
      {
        question: 'Where is JBMR Sports based?',
        answer: 'Our head office is located in Gurugram, Haryana, India, but we operate nationwide with a fully mobile broadcast infrastructure.',
      },
      {
        question: 'What makes JBMR Sports unique?',
        answer: 'We combine industry-standard equipment (18-Camera 4K setups) with a team of experienced sports media professionals. With over 6 years of experience, 10,000+ matches, and 500+ tournaments, we deliver international-quality production at every level.',
      },
      {
        question: 'Do you offer sponsorship for big leagues?',
        answer: 'Yes, for large-scale and prestigious leagues, we provide comprehensive sponsorship programs. For such events, we maintain a minimum professional standard of an 8-camera setup, which can be scaled up to 18 cameras depending on the tournament level and requirements.',
      },
      {
        question: 'What is the mission of JBMR Sports?',
        answer: 'Our mission is to deliver high-quality content and strategic marketing that helps sports brands grow, helping them engage their audience meaningfully through cutting-edge technology and professional expertise.',
      },
    ],
  },
  footer: {
    description:
      "India's premier sports production house specializing in high-quality cricket broadcasting and live streaming solutions.",
    socials: [
      { icon: 'Instagram', href: 'https://instagram.com/jbmrsports' },
      { icon: 'Facebook', href: 'https://facebook.com/jbmrsports' },
    ],
    quickLinks: [
      { label: 'Home', href: '/' },
      { label: 'Player Auction', href: '/auction' },
      { label: 'About Us', href: '/about' },
      { label: 'LMS Super Series', href: '/lms' },
      { label: 'Sponsorship Proposal', href: '/proposal' },
      { label: 'Services', href: '/services' },
      { label: 'Success', href: '/success' },
    ],
    serviceLinks: [
      { label: 'Live Streaming', href: '/services' },
      { label: 'Multi-Cam Production', href: '/services' },
      { label: 'Graphics Design', href: '/services' },
      { label: 'Commentary', href: '/services' },
      { label: 'Slow Motion', href: '/services' },
    ],
    copyright: '© 2026 JBMR Sports Pvt. Ltd. All rights reserved.',
    corporateInfo: {
      cin: 'U93190HR2026PTC141465',
      dateOfInc: '05/02/2026',
      rocCode: 'ROC Delhi'
    }
  },
  testimonials: {
    title: 'Client Experiences',
    subtitle: 'Testimonials',
    items: [
      {
        quote: "JBMR Sports delivered exceptional 4K quality for our league. Their 18-camera setup truly captured every angle with broadcast precision.",
        author: "Tournament Director",
        role: "Empress Cricket League",
        image: "https://picsum.photos/seed/testimonial1/100/100"
      },
      {
        quote: "The live scoring and analytics provided by JBMR Sports were a game-changer for our viewers on DD Sports. Highly professional team.",
        author: "Media Partner",
        role: "National TV Broadcast",
        image: "https://picsum.photos/seed/testimonial2/100/100"
      },
      {
        quote: "From Ladakh to Delhi, their team handles extreme conditions with ease. The best sports production house we've worked with.",
        author: "Event Organizer",
        role: "Startup Premier League",
        image: "https://picsum.photos/seed/testimonial3/100/100"
      }
    ]
  }
};

export type SiteContent = typeof defaultSiteContent;
