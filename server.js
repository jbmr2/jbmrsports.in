import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Health Check (Optimized for Node 22 & Hostinger SEO Express SSR routing)
app.get('/status', (req, res) => {
  res.json({ 
    status: 'online', 
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'development'
  });
});

const states = {
  '/andhra-pradesh': 'Andhra Pradesh',
  '/arunachal-pradesh': 'Arunachal Pradesh',
  '/assam': 'Assam',
  '/bihar': 'Bihar',
  '/chhattisgarh': 'Chhattisgarh',
  '/goa': 'Goa',
  '/gujarat': 'Gujarat',
  '/haryana': 'Haryana',
  '/himachal-pradesh': 'Himachal Pradesh',
  '/jharkhand': 'Jharkhand',
  '/karnataka': 'Karnataka',
  '/kerala': 'Kerala',
  '/madhya-pradesh': 'Madhya Pradesh',
  '/maharashtra': 'Maharashtra',
  '/manipur': 'Manipur',
  '/meghalaya': 'Meghalaya',
  '/mizoram': 'Mizoram',
  '/nagaland': 'Nagaland',
  '/odisha': 'Odisha',
  '/punjab': 'Punjab',
  '/rajasthan': 'Rajasthan',
  '/sikkim': 'Sikkim',
  '/tamil-nadu': 'Tamil Nadu',
  '/telangana': 'Telangana',
  '/tripura': 'Tripura',
  '/uttar-pradesh': 'Uttar Pradesh',
  '/uttarakhand': 'Uttarakhand',
  '/west-bengal': 'West Bengal',
  '/delhi': 'Delhi',
  '/jammu-kashmir': 'Jammu & Kashmir',
  '/ladakh': 'Ladakh',
  '/chandigarh': 'Chandigarh',
  '/puducherry': 'Puducherry',
  '/andaman-nicobar': 'Andaman & Nicobar',
  '/lakshadweep': 'Lakshadweep',
  '/dadra-nagar-haveli': 'Dadra & Nagar Haveli',
  '/kabaddi': 'Kabaddi Matches Latest Updates'
};

// Proxy for Kabaddi API
app.get('/api/kabaddi/*', async (req, res) => {
  const targetUrl = `https://kabaddi-api-144271912366.asia-south1.run.app${req.path.replace('/api/kabaddi', '/api')}`;
  try {
    const response = await fetch(targetUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error proxying to Kabaddi API:', error);
    res.status(500).json({ error: 'Failed to fetch from Kabaddi API' });
  }
});

// Real-Time Active Viewers Tracking System with optional Google Analytics GA4 Integration
import { BetaAnalyticsDataClient } from '@google-analytics/data';

let analyticsDataClient = null;
try {
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.GA_PROPERTY_ID) {
    analyticsDataClient = new BetaAnalyticsDataClient();
  }
} catch (e) {
  console.log('GA4 client init note:', e.message);
}

const activeSessions = new Map();

// Cleanup stale sessions every 15 seconds (inactive for > 25 seconds)
setInterval(() => {
  const now = Date.now();
  for (const [id, timestamp] of activeSessions.entries()) {
    if (now - timestamp > 25000) {
      activeSessions.delete(id);
    }
  }
}, 15000);

app.use(express.json());

async function getRealtimeViewerCount() {
  if (analyticsDataClient && process.env.GA_PROPERTY_ID) {
    try {
      const [response] = await analyticsDataClient.runRealtimeReport({
        property: `properties/${process.env.GA_PROPERTY_ID}`,
        metrics: [{ name: 'activeUsers' }],
      });
      const gaUsers = parseInt(response.rows?.[0]?.metricValues?.[0]?.value || '0', 10);
      if (!isNaN(gaUsers) && gaUsers >= 0) {
        return Math.max(gaUsers, activeSessions.size || 1);
      }
    } catch (err) {
      // fallback
    }
  }
  return Math.max(1, activeSessions.size);
}

app.post('/api/live-viewers/ping', async (req, res) => {
  const { clientId } = req.body || {};
  if (clientId) {
    activeSessions.set(clientId, Date.now());
  }
  const count = await getRealtimeViewerCount();
  res.json({ activeCount: count });
});

app.get('/api/live-viewers', async (req, res) => {
  const count = await getRealtimeViewerCount();
  res.json({ activeCount: count });
});

// Serve static files from the dist directory with aggressive caching for optimal mobile speed index
app.use(express.static(path.join(__dirname, 'dist'), {
  index: false,
  maxAge: '30d',
  etag: true,
  lastModified: true,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=2592000, immutable');
    }
  }
}));

app.get('*', (req, res) => {
  const filePath = path.join(__dirname, 'dist', 'index.html');
  
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Error reading index.html', err);
      return res.status(404).send('Not Found');
    }

    const pathName = req.path.toLowerCase().replace(/\/+$/, '') || '/';
    const currentState = states[pathName];

    if (currentState || ['/about', '/journey', '/services', '/success', '/leadership', '/team', '/teams', '/contact', '/privacy-policy', '/proposal', '/sponsorship'].includes(pathName)) {
      let title = "JBMR Sports Pvt. Ltd. | Live Cricket, Football, Hockey & Sports Broadcasting India";
      let description = "India's premier sports broadcasting company. Professional 18-camera 4K live streaming for Cricket, Football, and Hockey across India.";

      if (pathName === '/kabaddi') {
        title = "Kabaddi Live Streaming Service | JBMR Sports Broadcasting";
        description = "Professional Kabaddi tournament live streaming and multi-camera production. Get 18-camera 4K broadcasting for Kabaddi leagues across India.";
      } else if (currentState) {
        title = `${currentState} Cricket Live Streaming Service | JBMR Sports`;
        description = `Professional sports broadcasting company in ${currentState}. We provide 18-camera 4K live cricket match streaming, tournament production, and multi-camera sports broadcasting.`;
      } else if (pathName === '/about') {
        title = "About JBMR Sports | Professional Sports Broadcasting Company";
        description = "India's leading sports live streaming company since 2020. Experts in 18-camera 4K cricket tournament broadcasting with 10,000+ matches delivered.";
      } else if (pathName === '/services') {
        title = "Our Services | Multi-Camera Sports Production & Live Streaming";
        description = "Explore our professional broadcast solutions: 18-camera 4K production, YouTube live cricket streaming, real-time graphics, and sports commentary.";
      } else if (pathName === '/success' || pathName === '/success') {
        title = "Success Stories | Professional Cricket Match Broadcasting";
        description = "Discover our past projects: Empress Cricket League, APL Apollo Series on DD Sports, and professional live streaming for major leagues.";
      } else if (pathName === '/contact') {
        title = "Contact Us | Hire Cricket Live Streaming Company";
        description = "Hire JBMR Sports for professional cricket, football, and kabaddi live streaming services. Book your tournament broadcast production today.";
      } else if (pathName === '/proposal' || pathName === '/sponsorship') {
        title = "Tournament Live Streaming Proposal | JBMR Sports";
        description = "Professional 18-camera broadcast setup proposal for cricket leagues and sports events. Partner with India's top sports production company.";
      } else if (pathName === '/journey') {
        title = "Our Journey | 6 Years of Professional Sports Broadcasting";
        description = "From founding in 2020 to international productions on national TV, follow our journey of cricket live streaming excellence.";
      } else if (pathName === '/leadership') {
        title = "Leadership | Lokesh Yadav & Deepak Kumar - JBMR Sports";
        description = "Meet the founders of JBMR Sports: Lokesh Yadav (CEO) and Deepak Kumar (Technical Expert), driving innovation in Indian sports broadcasting.";
      } else if (pathName === '/team' || pathName === '/teams') {
        title = "Our Team | Professional Sports Production Crew";
        description = "Meet our expert broadcast crew, cameramen, and system operators providing professional live sports streaming across India.";
      }

      // Inject dynamic meta tags for social crawlers
      let modifiedHtml = htmlData
        .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
        .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`)
        .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`)
        .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`)
        .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="https://jbmrsports.com${pathName === '/' ? '' : pathName}" />`)
        .replace(/preview\.jpg/g, 'broadcast.png')
        .replace(/teaser\.mp4/g, 'showreel.mp4')
        .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="https://jbmrsports.com${pathName}" />`);

      return res.send(modifiedHtml);
    }

    // Default response for home and other routes
    res.send(htmlData);
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
