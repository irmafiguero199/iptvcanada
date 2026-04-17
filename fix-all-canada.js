const fs = require('fs');
const path = require('path');

// ── SEE ALSO config per page ──────────────────────────────────────────────
const SEE_ALSO = {
  'index.html': [
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/pricing.html', text:'IPTV Plans & Pricing'},
    {href:'/channels.html', text:'Channel List'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
    {href:'/iptv-sports-canada.html', text:'Sports Channels Canada'},
  ],
  'pricing.html': [
    {href:'/free-trial.html', text:'Start Free 24h Trial'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/cheap-iptv-canada.html', text:'Cheapest IPTV Canada'},
    {href:'/channels.html', text:'Full Channel List'},
    {href:'/checkout.html', text:'Subscribe Now'},
  ],
  'free-trial.html': [
    {href:'/pricing.html', text:'View All Plans'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/channels.html', text:'Channel List'},
    {href:'/iptv-firestick-canada.html', text:'Set Up on Firestick'},
    {href:'/iptv-smart-tv-canada.html', text:'Set Up on Smart TV'},
  ],
  'channels.html': [
    {href:'/iptv-sports-canada.html', text:'Sports Channels Canada'},
    {href:'/french-channels-iptv-canada.html', text:'French Channels IPTV'},
    {href:'/iptv-4k-canada.html', text:'4K IPTV Canada'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/free-trial.html', text:'Free Trial'},
  ],
  'best-iptv-canada.html': [
    {href:'/cheap-iptv-canada.html', text:'Cheapest IPTV Canada'},
    {href:'/iptv-vs-cable-canada.html', text:'IPTV vs Cable Canada'},
    {href:'/iptv-vs-netflix-canada.html', text:'IPTV vs Netflix Canada'},
    {href:'/is-iptv-legal-canada.html', text:'Is IPTV Legal in Canada?'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'cheap-iptv-canada.html': [
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/pricing.html', text:'View Plans & Pricing'},
    {href:'/iptv-vs-cable-canada.html', text:'IPTV vs Cable Canada'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
    {href:'/channels.html', text:'Channel List'},
  ],
  'is-iptv-legal-canada.html': [
    {href:'/best-iptv-canada.html', text:'Best Legal IPTV Canada 2026'},
    {href:'/is-canada-iptv-legit.html', text:'Is Canada IPTV Legit?'},
    {href:'/canada-iptv-crackdown.html', text:'Canada IPTV Crackdown 2026'},
    {href:'/iptv-vs-cable-canada.html', text:'IPTV vs Cable Canada'},
    {href:'/free-trial.html', text:'Try Legal IPTV Free'},
  ],
  'iptv-vs-cable-canada.html': [
    {href:'/iptv-vs-netflix-canada.html', text:'IPTV vs Netflix Canada'},
    {href:'/cheap-iptv-canada.html', text:'Cheapest IPTV Canada'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/pricing.html', text:'IPTV Plans & Pricing'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'iptv-vs-netflix-canada.html': [
    {href:'/iptv-vs-cable-canada.html', text:'IPTV vs Cable Canada'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/iptv-sports-canada.html', text:'Sports Channels Canada'},
    {href:'/cheap-iptv-canada.html', text:'Cheapest IPTV Canada'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'iptv-firestick-canada.html': [
    {href:'/iptv-smart-tv-canada.html', text:'IPTV on Smart TV Canada'},
    {href:'/canada-iptv-app.html', text:'Best Canada IPTV App'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/channels.html', text:'Channel List'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'iptv-smart-tv-canada.html': [
    {href:'/iptv-firestick-canada.html', text:'IPTV on Firestick Canada'},
    {href:'/canada-iptv-app.html', text:'Best Canada IPTV App'},
    {href:'/canada-iptv-box.html', text:'Best IPTV Box Canada'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'iptv-sports-canada.html': [
    {href:'/channels.html', text:'Full Channel List'},
    {href:'/iptv-4k-canada.html', text:'4K IPTV Canada'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/iptv-ontario.html', text:'IPTV Ontario'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'iptv-4k-canada.html': [
    {href:'/iptv-sports-canada.html', text:'Sports Channels Canada'},
    {href:'/channels.html', text:'Full Channel List'},
    {href:'/iptv-smart-tv-canada.html', text:'IPTV on Smart TV Canada'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'french-channels-iptv-canada.html': [
    {href:'/iptv-quebec.html', text:'IPTV Quebec'},
    {href:'/channels.html', text:'Full Channel List'},
    {href:'/iptv-sports-canada.html', text:'Sports Channels Canada'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'iptv-ontario.html': [
    {href:'/iptv-ottawa.html', text:'IPTV Ottawa'},
    {href:'/iptv-quebec.html', text:'IPTV Quebec'},
    {href:'/iptv-sports-canada.html', text:'Sports Channels Canada'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'iptv-quebec.html': [
    {href:'/french-channels-iptv-canada.html', text:'French Channels IPTV'},
    {href:'/iptv-ontario.html', text:'IPTV Ontario'},
    {href:'/iptv-sports-canada.html', text:'Sports Channels Canada'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'iptv-bc .html': [
    {href:'/iptv-vancouver.html', text:'IPTV Vancouver'},
    {href:'/iptv-ontario.html', text:'IPTV Ontario'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/iptv-sports-canada.html', text:'Sports Channels Canada'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'iptv-calgary (1).html': [
    {href:'/iptv-vancouver.html', text:'IPTV Vancouver'},
    {href:'/iptv-ottawa.html', text:'IPTV Ottawa'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/iptv-sports-canada.html', text:'Sports Channels Canada'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'iptv-ottawa.html': [
    {href:'/iptv-ontario.html', text:'IPTV Ontario'},
    {href:'/iptv-quebec.html', text:'IPTV Quebec'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/iptv-sports-canada.html', text:'Sports Channels Canada'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'iptv-vancouver.html': [
    {href:'/iptv-bc .html', text:'IPTV BC'},
    {href:'/iptv-ontario.html', text:'IPTV Ontario'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/iptv-sports-canada.html', text:'Sports Channels Canada'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'blog.html': [
    {href:'/canada-iptv-crackdown.html', text:'Canada IPTV Crackdown 2026'},
    {href:'/is-canada-iptv-legit.html', text:'Is Canada IPTV Legit?'},
    {href:'/canada-iptv-m3u.html', text:'Canada IPTV M3U Guide'},
    {href:'/canada-iptv-box.html', text:'Best IPTV Box Canada'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
  ],
  'contact.html': [
    {href:'/free-trial.html', text:'Start Free Trial'},
    {href:'/pricing.html', text:'View Plans'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/channels.html', text:'Channel List'},
    {href:'/blog.html', text:'IPTV Blog'},
  ],
  'canada-iptv-crackdown.html': [
    {href:'/is-iptv-legal-canada.html', text:'Is IPTV Legal in Canada?'},
    {href:'/is-canada-iptv-legit.html', text:'Is Canada IPTV Legit?'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/blog.html', text:'IPTV Blog'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'is-canada-iptv-legit.html': [
    {href:'/is-iptv-legal-canada.html', text:'Is IPTV Legal in Canada?'},
    {href:'/canada-iptv-crackdown.html', text:'Canada IPTV Crackdown 2026'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/blog.html', text:'IPTV Blog'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'canada-iptv-m3u.html': [
    {href:'/canada-iptv-app.html', text:'Best Canada IPTV App'},
    {href:'/canada-iptv-box.html', text:'Best IPTV Box Canada'},
    {href:'/iptv-firestick-canada.html', text:'IPTV on Firestick Canada'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'canada-iptv-box.html': [
    {href:'/canada-iptv-app.html', text:'Best Canada IPTV App'},
    {href:'/iptv-firestick-canada.html', text:'IPTV on Firestick Canada'},
    {href:'/iptv-smart-tv-canada.html', text:'IPTV on Smart TV Canada'},
    {href:'/best-iptv-canada.html', text:'Best IPTV Canada 2026'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
  'canada-iptv-app.html': [
    {href:'/canada-iptv-box.html', text:'Best IPTV Box Canada'},
    {href:'/iptv-firestick-canada.html', text:'IPTV on Firestick Canada'},
    {href:'/iptv-smart-tv-canada.html', text:'IPTV on Smart TV Canada'},
    {href:'/canada-iptv-m3u.html', text:'Canada IPTV M3U Guide'},
    {href:'/free-trial.html', text:'Free 24h Trial'},
  ],
};

// ── STEPS config per page ─────────────────────────────────────────────────
const STEPS = {
  'index.html': {
    title: 'How to Start IPTV in Canada',
    steps: [
      {n:'1', h:'Choose a Plan', p:'Pick Monthly ($12.99), 6-Month ($44.99), or Yearly ($69.99) at <a href="/pricing.html">pricing.html</a>.'},
      {n:'2', h:'Start Free Trial', p:'Activate your free 24-hour trial — no credit card required. Instant access to 25,000+ channels.'},
      {n:'3', h:'Install the App', p:'Download the NorthStream IPTV app on your Firestick, Smart TV, Android, iPhone, or Windows PC.'},
      {n:'4', h:'Watch Live TV', p:'Launch the app, browse 25,000+ channels, and enjoy CBC, TSN, RDS, NHL, and 4K content.'},
    ]
  },
  'pricing.html': {
    title: 'How to Subscribe to NorthStream IPTV',
    steps: [
      {n:'1', h:'Select Your Plan', p:'Choose Monthly ($12.99 CAD), 6-Month ($44.99), or Yearly ($69.99). All plans include 25,000+ channels.'},
      {n:'2', h:'Complete Checkout', p:'Pay securely via credit card, PayPal, or crypto. Instant activation after payment.'},
      {n:'3', h:'Receive Login Details', p:'Get your M3U URL and credentials by email within 2 minutes of purchase.'},
      {n:'4', h:'Start Watching', p:'Install on any device — Firestick, Smart TV, Android, iPhone — and start watching instantly.'},
    ]
  },
  'free-trial.html': {
    title: 'How to Activate Your Free IPTV Trial',
    steps: [
      {n:'1', h:'Click Free Trial', p:'Hit the "Start Free Trial" button above — no credit card required, instant activation.'},
      {n:'2', h:'Receive Credentials', p:'Get your trial M3U URL by WhatsApp or email within 5 minutes.'},
      {n:'3', h:'Install on Your Device', p:'Use the credentials with IPTV Smarters, TiViMate, or any IPTV player.'},
      {n:'4', h:'Test 25,000+ Channels', p:'Browse CBC, TSN, RDS, NHL, and 4K channels free for 24 hours. No commitment.'},
    ]
  },
  'channels.html': {
    title: 'How to Browse the Full Channel List',
    steps: [
      {n:'1', h:'Start Free Trial', p:'Activate your free trial to access the complete channel list on any device.'},
      {n:'2', h:'Install IPTV Smarters', p:'Download IPTV Smarters Pro on your device and enter your M3U credentials.'},
      {n:'3', h:'Browse by Category', p:'Use the built-in EPG to browse Sports, News, Entertainment, Kids, and regional channels.'},
      {n:'4', h:'Add Favourites', p:'Bookmark your favourite channels (TSN, CBC, RDS, Sportsnet) for quick access.'},
    ]
  },
  'best-iptv-canada.html': {
    title: 'How to Choose the Best IPTV Canada',
    steps: [
      {n:'1', h:'Compare Services', p:'Check uptime, Canadian channel count, and price. NorthStream leads with 99.9% uptime and 25,000+ channels.'},
      {n:'2', h:'Test with Free Trial', p:'All top services offer a free trial. Test CBC, TSN, and RDS before paying.'},
      {n:'3', h:'Check Device Support', p:'Confirm your devices (Firestick, Smart TV, Android, iOS) are supported before subscribing.'},
      {n:'4', h:'Subscribe & Install', p:'Choose a plan from $12.99 CAD/month and follow the setup guide for your device.'},
    ]
  },
  'cheap-iptv-canada.html': {
    title: 'How to Get the Cheapest IPTV in Canada',
    steps: [
      {n:'1', h:'Compare Plans', p:'Monthly ($12.99), 6-Month ($44.99 = $7.50/mo), Yearly ($69.99 = $5.83/mo). Longer = cheaper.'},
      {n:'2', h:'Use Free Trial', p:'Test before buying — activate the free 24-hour trial with no credit card.'},
      {n:'3', h:'Choose Annual Plan', p:'The $69.99/year plan saves 55% vs monthly — best value for IPTV in Canada.'},
      {n:'4', h:'Install & Enjoy', p:'Set up on your Firestick, Smart TV, or Android in under 5 minutes.'},
    ]
  },
  'is-iptv-legal-canada.html': {
    title: 'How to Use Legal IPTV in Canada',
    steps: [
      {n:'1', h:'Choose a Licensed Service', p:'Use only services that have CRTC-compliant content agreements and operate from Canada or the EU.'},
      {n:'2', h:'Avoid Piracy Services', p:'Steer clear of free IPTV services offering premium channels — these violate Canadian copyright law.'},
      {n:'3', h:'Subscribe to NorthStream', p:'NorthStream IPTV offers 25,000+ channels with full licensing compliance from $12.99 CAD/month.'},
      {n:'4', h:'Watch with Confidence', p:'Enjoy CBC, CTV, TSN, RDS legally on any device — Firestick, Smart TV, Android, iOS.'},
    ]
  },
  'iptv-vs-cable-canada.html': {
    title: 'How to Switch from Cable to IPTV in Canada',
    steps: [
      {n:'1', h:'Cancel Cable Subscription', p:'Contact your cable provider (Rogers, Bell, Videotron) and cancel. No early termination for month-to-month plans.'},
      {n:'2', h:'Start IPTV Free Trial', p:'Activate your 24-hour NorthStream free trial to confirm all your channels are included.'},
      {n:'3', h:'Install IPTV App', p:'Set up IPTV Smarters or TiViMate on your existing Smart TV, Firestick, or Android box.'},
      {n:'4', h:'Enjoy 80%+ Savings', p:'Pay $12.99/month instead of $80–$150 for cable. Same CBC, TSN, RDS channels.'},
    ]
  },
  'iptv-vs-netflix-canada.html': {
    title: 'How to Get Both IPTV and Netflix in Canada',
    steps: [
      {n:'1', h:'Keep Netflix for VOD', p:'Netflix is great for on-demand shows and movies. Keep it if you use it regularly.'},
      {n:'2', h:'Add IPTV for Live TV', p:'IPTV fills the gap Netflix misses: live sports, news, CBC, CTV, TSN — all in real time.'},
      {n:'3', h:'Install Both on Your TV', p:'Run IPTV Smarters and Netflix side by side on your Firestick, Smart TV, or Android.'},
      {n:'4', h:'Compare Total Cost', p:'IPTV ($12.99/mo) + Netflix ($17/mo) = $30/mo. Cable alone = $80–$150/mo. IPTV wins.'},
    ]
  },
  'iptv-firestick-canada.html': {
    title: 'How to Install IPTV on Firestick Canada',
    steps: [
      {n:'1', h:'Enable Apps from Unknown Sources', p:'Go to Firestick Settings → My Fire TV → Developer Options → Apps from Unknown Sources → ON.'},
      {n:'2', h:'Install Downloader App', p:'Search "Downloader" in the Firestick store and install it. It\'s free and safe.'},
      {n:'3', h:'Download IPTV Smarters Pro', p:'Open Downloader, enter the IPTV Smarters APK URL, download and install.'},
      {n:'4', h:'Enter Your M3U Credentials', p:'Open IPTV Smarters, select "Add User via M3U URL", paste your NorthStream M3U link and start watching.'},
    ]
  },
  'iptv-smart-tv-canada.html': {
    title: 'How to Install IPTV on Smart TV Canada',
    steps: [
      {n:'1', h:'Identify Your TV Brand', p:'Samsung (Tizen), LG (webOS), Sony/TCL (Android TV) — each has a different install method.'},
      {n:'2', h:'Install IPTV App', p:'Samsung: use Smart IPTV. LG: use SS IPTV. Android TV: install IPTV Smarters from Google Play.'},
      {n:'3', h:'Enter M3U Credentials', p:'Open the app, go to Settings, add your NorthStream M3U URL and port credentials.'},
      {n:'4', h:'Watch 25,000+ Channels', p:'Browse the full channel list including CBC, TSN, RDS, CTV, and 4K sports channels.'},
    ]
  },
  'iptv-sports-canada.html': {
    title: 'How to Watch Canadian Sports on IPTV',
    steps: [
      {n:'1', h:'Get NorthStream IPTV', p:'Subscribe from $12.99 CAD/month — includes TSN 1–5, Sportsnet East/Ontario/West, RDS, and TVA Sports.'},
      {n:'2', h:'Install on Your Device', p:'Set up IPTV Smarters on your Firestick, Smart TV, or Android in under 5 minutes.'},
      {n:'3', h:'Find Sports Channels', p:'Use the EPG guide to browse upcoming NHL, NBA, CFL, and MLS games by date and channel.'},
      {n:'4', h:'Watch in 4K', p:'Enable 4K quality in the app settings for the best NHL and CFL viewing experience.'},
    ]
  },
  'iptv-4k-canada.html': {
    title: 'How to Watch 4K IPTV in Canada',
    steps: [
      {n:'1', h:'Confirm Your Internet Speed', p:'4K streaming requires at least 25 Mbps. Run a speed test at fast.com before subscribing.'},
      {n:'2', h:'Get a 4K-Compatible Device', p:'Use a 4K Firestick, Apple TV 4K, Android TV box, or 4K Smart TV for the best experience.'},
      {n:'3', h:'Subscribe to NorthStream', p:'NorthStream includes 500+ 4K channels from $12.99 CAD/month. Activate the free trial to test.'},
      {n:'4', h:'Enable 4K in the App', p:'Open IPTV Smarters → Settings → Video Quality → select "4K / Ultra HD" for supported channels.'},
    ]
  },
  'french-channels-iptv-canada.html': {
    title: 'How to Get French IPTV Channels in Canada',
    steps: [
      {n:'1', h:'Choose NorthStream IPTV', p:'NorthStream includes all major French channels: RDS, TVA, RDI, ICI Radio-Canada, TVA Sports, Canal Vie.'},
      {n:'2', h:'Activate Free Trial', p:'Test all French channels free for 24 hours — no credit card needed.'},
      {n:'3', h:'Install on Your Device', p:'Set up IPTV Smarters on Firestick, Smart TV, or Android in 5 minutes.'},
      {n:'4', h:'Filter by Language', p:'In IPTV Smarters, use the search or category filter to find "FR" or "French" channels instantly.'},
    ]
  },
  'iptv-ontario.html': {
    title: 'How to Set Up IPTV in Ontario',
    steps: [
      {n:'1', h:'Subscribe to NorthStream', p:'Get Ontario-focused IPTV from $12.99 CAD/month — includes CP24, City Toronto, TVO, CBC Ontario.'},
      {n:'2', h:'Activate Free Trial', p:'Test all Ontario channels (Leafs on TSN/Sportsnet, CP24, City) free for 24 hours.'},
      {n:'3', h:'Install IPTV Smarters', p:'Download IPTV Smarters Pro on your Firestick, Smart TV, or Android device.'},
      {n:'4', h:'Watch Ontario Local TV', p:'Access CP24, CityNews Toronto, TVO, and all Ontario sports coverage in HD and 4K.'},
    ]
  },
  'iptv-quebec.html': {
    title: 'Comment installer IPTV au Québec',
    steps: [
      {n:'1', h:'Choisir NorthStream IPTV', p:'Accès à RDS, TVA Sports, ICI Radio-Canada, Canal Vie, Évasion et 200+ chaînes françaises. Dès 12,99$ CAD/mois.'},
      {n:'2', h:'Essai gratuit 24h', p:'Activez l\'essai gratuit — aucune carte bancaire requise. Testez RDS et TVA avant de vous abonner.'},
      {n:'3', h:'Installer IPTV Smarters', p:'Téléchargez IPTV Smarters Pro sur votre Firestick, Smart TV, ou Android en 5 minutes.'},
      {n:'4', h:'Regarder en 4K', p:'Profitez du hockey, du soccer et de toutes vos émissions québécoises préférées en HD et 4K.'},
    ]
  },
  'iptv-bc .html': {
    title: 'How to Set Up IPTV in BC',
    steps: [
      {n:'1', h:'Subscribe to NorthStream', p:'Get BC-focused IPTV from $12.99 CAD/month — Canucks on Sportsnet Pacific, Global BC, CHEK TV.'},
      {n:'2', h:'Activate Free Trial', p:'Test Canucks games on Sportsnet Pacific and all BC local channels free for 24 hours.'},
      {n:'3', h:'Install IPTV Smarters', p:'Download IPTV Smarters Pro on your Firestick, Smart TV, or Android in 5 minutes.'},
      {n:'4', h:'Watch BC Local TV', p:'Access Global BC, CHEK TV, CBC Vancouver, and 4K sports coverage without a cable contract.'},
    ]
  },
  'iptv-calgary (1).html': {
    title: 'How to Set Up IPTV in Calgary',
    steps: [
      {n:'1', h:'Subscribe to NorthStream', p:'Calgary IPTV from $12.99 CAD/month — Flames on Sportsnet West, Global Calgary, CTV Calgary, CBC Calgary.'},
      {n:'2', h:'Activate Free Trial', p:'Test Flames games and all Calgary local channels free for 24 hours. No credit card needed.'},
      {n:'3', h:'Install IPTV Smarters', p:'Set up IPTV Smarters on your Firestick, Smart TV, or Android device in 5 minutes.'},
      {n:'4', h:'Watch Calgary TV', p:'Watch Global Calgary, CTV Calgary, CBC Calgary, and Flames/Stamps games in HD and 4K.'},
    ]
  },
  'iptv-ottawa.html': {
    title: 'How to Set Up IPTV in Ottawa',
    steps: [
      {n:'1', h:'Subscribe to NorthStream', p:'Ottawa IPTV from $12.99 CAD/month — Senators on TSN/Sportsnet, CFRA, CBC Ottawa, CTV Ottawa.'},
      {n:'2', h:'Activate Free Trial', p:'Test Senators games on TSN and all Ottawa local channels free for 24 hours.'},
      {n:'3', h:'Install IPTV Smarters', p:'Download IPTV Smarters Pro on your Firestick, Smart TV, or Android in 5 minutes.'},
      {n:'4', h:'Watch Ottawa TV', p:'Access CTV Ottawa, CBC Ottawa, CFRA News, and bilingual content in HD and 4K.'},
    ]
  },
  'iptv-vancouver.html': {
    title: 'How to Set Up IPTV in Vancouver',
    steps: [
      {n:'1', h:'Subscribe to NorthStream', p:'Vancouver IPTV from $12.99 CAD/month — Canucks on Sportsnet Pacific, Global BC, CBC Vancouver.'},
      {n:'2', h:'Activate Free Trial', p:'Test Canucks and Whitecaps coverage on Sportsnet Pacific free for 24 hours.'},
      {n:'3', h:'Install IPTV Smarters', p:'Download IPTV Smarters Pro on your Firestick, Smart TV, or Android in 5 minutes.'},
      {n:'4', h:'Watch Vancouver TV', p:'Access Global BC, CBC Vancouver, CHEK TV, and all Vancouver sports in HD and 4K.'},
    ]
  },
  'blog.html': {
    title: 'How to Stay Updated on IPTV Canada News',
    steps: [
      {n:'1', h:'Bookmark This Blog', p:'Save amslerfamilyfondation.org/blog.html for weekly IPTV Canada news, guides, and reviews.'},
      {n:'2', h:'Read Latest Articles', p:'Check the crackdown updates, M3U guides, and device setup articles below.'},
      {n:'3', h:'Share with Friends', p:'Know someone paying $100+/month for cable? Share the IPTV vs cable comparison article.'},
      {n:'4', h:'Start Free Trial', p:'Ready to switch? Activate your free 24-hour NorthStream IPTV trial below.'},
    ]
  },
  'contact.html': {
    title: 'How to Contact NorthStream IPTV Support',
    steps: [
      {n:'1', h:'WhatsApp (Fastest)', p:'Message us at <a href="https://wa.me/212776056268" target="_blank">WhatsApp</a> — responses within 5 minutes, 24/7.'},
      {n:'2', h:'Use the Contact Form', p:'Fill in your name, email, and message below. We respond within 1 hour.'},
      {n:'3', h:'Describe Your Issue', p:'Include your device type, IPTV player, and the channel/issue for faster support.'},
      {n:'4', h:'Get Resolved Fast', p:'Our bilingual (EN/FR) support team resolves 95% of issues within 30 minutes.'},
    ]
  },
  'canada-iptv-crackdown.html': {
    title: 'How to Stay Safe During the IPTV Crackdown',
    steps: [
      {n:'1', h:'Avoid Piracy Services', p:'Unsubscribe from any IPTV service that offers premium channels for under $5/month — these are illegal.'},
      {n:'2', h:'Use a Licensed Provider', p:'Choose a provider like NorthStream that operates with proper licensing and content agreements.'},
      {n:'3', h:'Use a VPN (Optional)', p:'A VPN adds privacy but is not required with a legal IPTV service. NordVPN or ExpressVPN work well.'},
      {n:'4', h:'Watch Legally for $12.99', p:'NorthStream IPTV gives you CBC, CTV, TSN, RDS legally from $12.99 CAD/month.'},
    ]
  },
  'is-canada-iptv-legit.html': {
    title: 'How to Verify If a Canada IPTV Service Is Legit',
    steps: [
      {n:'1', h:'Check the Website', p:'Legit services have a real website, pricing page, and support contact. Avoid Telegram-only sellers.'},
      {n:'2', h:'Look for Free Trial', p:'Legitimate services offer a free trial so you can test before paying. NorthStream offers 24 hours free.'},
      {n:'3', h:'Verify Canadian Channels', p:'Test CBC, CTV, TSN, and RDS during the trial — if all work in HD, the service is legitimate.'},
      {n:'4', h:'Check Payment Security', p:'Only pay via secure checkout (Stripe/PayPal). Never send crypto to unknown sellers without a real site.'},
    ]
  },
  'canada-iptv-m3u.html': {
    title: 'How to Use an M3U Playlist for Canada IPTV',
    steps: [
      {n:'1', h:'Get Your M3U URL', p:'Subscribe to NorthStream or activate free trial to receive your personal M3U URL by email.'},
      {n:'2', h:'Choose an IPTV Player', p:'Download IPTV Smarters Pro, TiViMate, or VLC — all support M3U playlists.'},
      {n:'3', h:'Add M3U URL to Player', p:'Open the IPTV player → Add Playlist/Source → paste your M3U URL → Save.'},
      {n:'4', h:'Browse 25,000+ Channels', p:'The playlist loads all channels including CBC, TSN, RDS, and 4K sports with full EPG.'},
    ]
  },
  'canada-iptv-box.html': {
    title: 'How to Set Up an IPTV Box in Canada',
    steps: [
      {n:'1', h:'Choose Your IPTV Box', p:'Best options: Amazon Firestick 4K Max ($79), Nvidia Shield ($199), or any Android TV box from $40.'},
      {n:'2', h:'Connect to Your TV', p:'Plug the box into your TV\'s HDMI port and connect to your home Wi-Fi or Ethernet.'},
      {n:'3', h:'Install IPTV Smarters', p:'Download IPTV Smarters Pro from the app store and enter your NorthStream M3U credentials.'},
      {n:'4', h:'Watch 25,000+ Channels', p:'Browse live TV, sports, and 4K channels including CBC, TSN, and RDS — all in one place.'},
    ]
  },
  'canada-iptv-app.html': {
    title: 'How to Install a Canada IPTV App',
    steps: [
      {n:'1', h:'Choose Your App', p:'IPTV Smarters Pro (all devices), TiViMate (Android/Firestick), or GSE Smart IPTV (iOS/Android).'},
      {n:'2', h:'Download & Install', p:'Find the app on Google Play, App Store, or Firestick store. IPTV Smarters Pro is free to download.'},
      {n:'3', h:'Enter M3U Credentials', p:'Open the app → Add Playlist → select "M3U URL" → paste your NorthStream URL and credentials.'},
      {n:'4', h:'Watch Canadian TV Anywhere', p:'Access CBC, CTV, TSN, RDS, and 25,000+ channels from your phone, tablet, or TV.'},
    ]
  },
};

// ── QUICK ANSWER config for specific pages ────────────────────────────────
const QUICK_ANSWERS = {
  'best-iptv-canada.html': {
    q: 'What is the best IPTV service in Canada in 2026?',
    a: 'NorthStream IPTV is the best IPTV service in Canada in 2026, offering 25,000+ live channels including CBC, CTV, TSN, RDS, and Sportsnet, 4K streaming, 99.9% uptime, and bilingual support from $12.99 CAD/month with a free 24-hour trial.'
  },
  'cheap-iptv-canada.html': {
    q: 'What is the cheapest IPTV service in Canada?',
    a: 'NorthStream IPTV is the cheapest full-featured IPTV service in Canada, starting at $12.99 CAD/month (monthly) or as low as $5.83/month on the yearly plan — up to 80% cheaper than Rogers or Bell cable packages.'
  },
  'channels.html': {
    q: 'How many channels does NorthStream IPTV Canada include?',
    a: 'NorthStream IPTV Canada includes 25,000+ live channels — CBC, CTV, TSN 1–5, Sportsnet (East, Ontario, West, Pacific), RDS, TVA Sports, ICI Radio-Canada, and 500+ 4K channels. Full EPG guide included.'
  },
  'is-iptv-legal-canada.html': {
    q: 'Is IPTV legal in Canada in 2026?',
    a: 'IPTV is legal in Canada when using a licensed service like NorthStream. Accessing pirated streams of copyrighted content violates the Copyright Act. Legal IPTV services have proper licensing agreements and operate transparently with a real website and support.'
  },
  'iptv-vs-netflix-canada.html': {
    q: 'Is IPTV better than Netflix in Canada?',
    a: 'IPTV and Netflix serve different purposes. IPTV excels at live TV (CBC, TSN, NHL games, news) while Netflix specializes in on-demand series and movies. Most Canadians use IPTV for live sports and news, and Netflix for entertainment — total cost still beats cable at under $30/month.'
  },
  'iptv-ontario.html': {
    q: 'What is the best IPTV service in Ontario?',
    a: 'NorthStream IPTV is the best IPTV service in Ontario, offering all 120+ Ontario local channels including CP24, City Toronto, TVO, CBC Ontario, and full sports coverage (Leafs, Raptors, Blue Jays) on TSN and Sportsnet from $12.99 CAD/month.'
  },
  'free-trial.html': {
    q: 'How do I get a free IPTV trial in Canada?',
    a: 'Click "Start Free Trial" above — no credit card required. You\'ll receive your 24-hour trial credentials via WhatsApp or email within 5 minutes. Test all 25,000+ channels including CBC, TSN, and RDS before committing to any plan.'
  },
  'pricing.html': {
    q: 'How much does NorthStream IPTV Canada cost?',
    a: 'NorthStream IPTV Canada costs $12.99 CAD/month (monthly), $44.99 for 6 months ($7.50/mo), or $69.99/year ($5.83/mo). All plans include 25,000+ channels, 4K streaming, and 24/7 bilingual support. Free 24-hour trial available.'
  },
  'blog.html': {
    q: 'Where can I find the latest IPTV Canada news and guides?',
    a: 'This blog publishes weekly IPTV Canada guides covering legal updates, crackdowns, device setup tutorials, M3U tips, and service reviews — everything you need to watch Canadian TV legally and affordably in 2026.'
  },
  'contact.html': {
    q: 'How do I contact NorthStream IPTV Canada support?',
    a: 'Contact NorthStream IPTV Canada support via WhatsApp at +212 776 056 268 (24/7, fastest response) or use the contact form below. Our bilingual EN/FR team responds within 5 minutes on WhatsApp and within 1 hour by email.'
  },
};

// ── HTML GENERATORS ───────────────────────────────────────────────────────
function buildSeeAlso(links) {
  const items = links.map(l =>
    `        <li><a href="${l.href}">${l.text}</a></li>`
  ).join('\n');
  return `
  <!-- See Also -->
  <section class="see-also" style="background:var(--bg2);border-top:1px solid var(--border);padding:40px 0">
    <div class="container">
      <h2 style="font-family:var(--font-head);font-size:clamp(22px,2.5vw,30px);letter-spacing:.04em;text-transform:uppercase;margin-bottom:20px">See Also</h2>
      <ul style="list-style:none;display:flex;flex-wrap:wrap;gap:12px;padding:0;margin:0">
${items}
      </ul>
    </div>
  </section>
  <style>
  .see-also ul li a{display:inline-block;padding:9px 18px;background:var(--card);border:1px solid var(--border);border-radius:100px;font-size:13px;font-weight:600;color:var(--white);transition:.2s}
  .see-also ul li a:hover{border-color:var(--cyan);color:var(--cyan);background:rgba(0,229,255,.06)}
  </style>`;
}

function buildSteps(config) {
  const stepItems = config.steps.map(s => `
      <div class="step-item" style="display:flex;gap:16px;align-items:flex-start">
        <div style="min-width:36px;height:36px;border-radius:50%;background:var(--cyan);color:var(--bg);display:flex;align-items:center;justify-content:center;font-family:var(--font-head);font-size:18px;font-weight:700;flex-shrink:0">${s.n}</div>
        <div>
          <div style="font-weight:700;font-size:15px;margin-bottom:4px">${s.h}</div>
          <p style="color:var(--muted);font-size:14px;margin:0">${s.p}</p>
        </div>
      </div>`).join('\n');
  return `
  <!-- Steps Section -->
  <div class="steps-section channel-section">
    <h2 class="section-h2">${config.title.replace(/(.+)/, (m) => {
      const parts = m.split(' ');
      const last = parts.pop();
      return parts.join(' ') + ' <span>' + last + '</span>';
    })}</h2>
    <div style="display:flex;flex-direction:column;gap:20px;margin-top:20px">
${stepItems}
    </div>
  </div>`;
}

function buildQuickAnswer(qa) {
  return `
  <!-- Quick Answer -->
  <div class="quick-answer channel-section" style="background:rgba(0,229,255,.06);border:1px solid rgba(0,229,255,.2);border-radius:var(--r2);padding:24px 28px;margin-bottom:0">
    <div style="font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--cyan);margin-bottom:10px">⚡ Quick Answer</div>
    <p style="font-weight:700;font-size:15px;margin-bottom:8px">${qa.q}</p>
    <p style="color:var(--muted);font-size:14px;margin:0">${qa.a}</p>
  </div>`;
}

// ── MAIN ──────────────────────────────────────────────────────────────────
const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') &&
  !f.startsWith('404') && f !== 'googledda038c80d70f368.html');

let stats = { seeAlso: 0, steps: 0, quickAnswer: 0, skipped: 0 };

files.forEach(file => {
  const fp = path.join(dir, file);
  let html = fs.readFileSync(fp, 'utf8');
  const before = html;

  // ── Add Quick Answer (before first <div class="faq-list"> in body) ──
  if (!html.includes('quick-answer') && QUICK_ANSWERS[file]) {
    const faqIdx = html.indexOf('<div class="faq-list">');
    if (faqIdx !== -1) {
      // Find the opening of the <!-- FAQ --> section
      const faqSectionIdx = html.lastIndexOf('<!-- FAQ', faqIdx);
      if (faqSectionIdx !== -1) {
        html = html.slice(0, faqSectionIdx) +
               buildQuickAnswer(QUICK_ANSWERS[file]) + '\n\n  ' +
               html.slice(faqSectionIdx);
        stats.quickAnswer++;
      }
    }
  }

  // ── Add Steps (before <div class="faq-list"> in body) ──
  if (!html.includes('steps-section') && STEPS[file]) {
    const faqIdx = html.indexOf('<div class="faq-list">');
    if (faqIdx !== -1) {
      const faqSectionIdx = html.lastIndexOf('<!-- FAQ', faqIdx);
      const insertAt = faqSectionIdx !== -1 ? faqSectionIdx : faqIdx;
      html = html.slice(0, insertAt) +
             buildSteps(STEPS[file]) + '\n\n  ' +
             html.slice(insertAt);
      stats.steps++;
    } else {
      // No faq-list — insert before </main>
      const mainEnd = html.lastIndexOf('</main>');
      if (mainEnd !== -1) {
        html = html.slice(0, mainEnd) +
               buildSteps(STEPS[file]) + '\n\n' +
               html.slice(mainEnd);
        stats.steps++;
      }
    }
  }

  // ── Add See Also (before </main>) ──
  if (!html.includes('see-also') && SEE_ALSO[file]) {
    const mainEnd = html.lastIndexOf('</main>');
    if (mainEnd !== -1) {
      html = html.slice(0, mainEnd) +
             buildSeeAlso(SEE_ALSO[file]) + '\n' +
             html.slice(mainEnd);
      stats.seeAlso++;
    }
  }

  if (html !== before) {
    fs.writeFileSync(fp, html, 'utf8');
    console.log(`✅ Fixed: ${file}`);
  } else {
    stats.skipped++;
  }
});

console.log('\n── DONE ──');
console.log(`See Also added:    ${stats.seeAlso}`);
console.log(`Steps added:       ${stats.steps}`);
console.log(`Quick Answer added:${stats.quickAnswer}`);
console.log(`Skipped (no change):${stats.skipped}`);
