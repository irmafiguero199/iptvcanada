const fs = require('fs');
let html = fs.readFileSync('iptv-toronto.html','utf8');

// Simple string replacements
const reps = [
  ['iptv-toronto.html','iptv-alberta.html'],
  ['IPTV Toronto 2026 —','IPTV Alberta 2026 —'],
  ['Best IPTV Service for Toronto','Best IPTV Service for Alberta'],
  ['Leafs, Raptors, Blue Jays in 4K','Flames, Oilers, Stampeders in 4K'],
  ['Best IPTV service in Toronto 2026','Best IPTV service in Alberta 2026'],
  ['Watch Leafs, Raptors, Blue Jays on TSN & Sportsnet in 4K. All Toronto local channels: CP24, CityTV, CBC Toronto. From $12.99 CAD/mo. Free trial.','Watch Flames & Oilers on Sportsnet West in 4K. All Alberta local channels: Global Calgary, CTV Edmonton, CBC Alberta. From $12.99 CAD/mo. Free trial.'],
  ['for Toronto viewers in 2026','for Alberta viewers in 2026'],
  ['in Toronto','in Alberta'],
  ['for Toronto','for Alberta'],
  ['Toronto viewers','Alberta viewers'],
  ['Toronto Channels','Alberta Channels'],
  ['All Toronto','All Alberta'],
  ['Get IPTV Toronto','Get IPTV Alberta'],
  ['I\'m in Toronto','I\'m in Alberta'],
  ['IPTV Toronto · Updated April 2026','IPTV Alberta · Updated April 2026'],
  ['Every Leafs Game. Every Channel.','Flames, Oilers & Stamps — All in 4K'],
  ['35+ local Toronto channels, all Leafs games on TSN and Sportsnet, Raptors, Blue Jays, CP24 live news — all in 4K Ultra HD from','80+ Alberta channels, Flames & Oilers on Sportsnet West, Stampeders on TSN — all in 4K Ultra HD from'],
  ['stat-num\">35<span>+</span></div><div class="stat-label">Toronto Channels</div>','stat-num\">80<span>+</span></div><div class="stat-label">Alberta Channels</div>'],
  ['IPTV Toronto Pricing','IPTV Alberta Pricing'],
  ['Plans for <span>Toronto</span> Viewers','Plans for <span>Alberta</span> Viewers'],
  ['All plans include every Toronto channel','All plans include every Alberta channel'],
  ['What Toronto <span>Users</span> Say','What Alberta <span>Users</span> Say'],
  ['David K.','Chris M.'],
  ['Scarborough, Toronto, ON','Calgary, AB'],
  ['Amanda M.','Lisa P.'],
  ['North York, Toronto, ON','Edmonton, AB'],
  ['Tom R.','Jason W.'],
  ['Etobicoke, Toronto, ON','Red Deer, AB'],
  ["Toronto's <span>Best IPTV</span>",'Alberta\'s <span>Best IPTV</span>'],
  ['24-hour trial. No credit card. All Toronto channels','24-hour trial. No credit card. All Alberta channels'],
  ['More Toronto & Ontario IPTV Guides','More Alberta IPTV Guides'],
  ['How to Set Up IPTV in <span>Toronto</span>','How to Set Up IPTV in <span>Alberta</span>'],
  ['Toronto IPTV <span>FAQ</span>','Alberta IPTV <span>FAQ</span>'],
  ['IPTV <span>Toronto</span> 2026','IPTV <span>Alberta</span> 2026'],
];

reps.forEach(([from, to]) => {
  while (html.includes(from)) html = html.replace(from, to);
});

// Fix title
html = html.replace(/<title>.*?<\/title>/, '<title>IPTV Alberta 2026 — Best IPTV Service for Alberta | Flames, Oilers, Stampeders in 4K</title>');

// Fix sports cards
html = html
  .replace('Toronto Maple Leafs</div>\n        <div class="sport-channels">TSN · Sportsnet Ontario · Sportsnet 360</div>\n        <div class="sport-desc">Every home and away game. Multiple feeds per game. 4K quality during playoffs. Zero blackouts — watch every Leafs game from anywhere in Alberta.</div>',
    'Calgary Flames</div>\n        <div class="sport-channels">Sportsnet West · TSN</div>\n        <div class="sport-desc">Every Flames home and away game. 4K quality during playoffs. Watch at Scotiabank Saddledome from anywhere in Alberta — no blackouts.</div>')
  .replace('Toronto Raptors</div>\n        <div class="sport-channels">TSN · Sportsnet ONE</div>\n        <div class="sport-desc">All 82 regular season games plus full playoff coverage. Pre and post-game shows in both English and French. Watch the Raptors in 4K on every device.</div>',
    'Edmonton Oilers</div>\n        <div class="sport-channels">Sportsnet West · TSN</div>\n        <div class="sport-desc">Every Oilers game featuring Connor McDavid. 4K quality at Rogers Place. Multiple TSN and Sportsnet feeds per game with zero blackout restrictions.</div>')
  .replace('Toronto Blue Jays</div>\n        <div class="sport-channels">Sportsnet · Sportsnet East</div>\n        <div class="sport-desc">Full MLB season — every Blue Jays home and road game. Rogers Centre games in 4K with local commentary. Day games and night games included.</div>',
    'Calgary Stampeders & Edmonton Elks</div>\n        <div class="sport-channels">TSN · RDS</div>\n        <div class="sport-desc">Full CFL season for both Alberta teams. Grey Cup included. Every Stampeders and Elks home and away game in HD on TSN.</div>')
  .replace('Toronto FC</div>\n        <div class="sport-channels">TSN · OneSoccer</div>\n        <div class="sport-desc">All MLS Toronto FC games including playoffs. Full Canadian Premier League coverage. Watch TFC at BMO Field in HD from your living room.</div>',
    'FC Edmonton & Soccer</div>\n        <div class="sport-channels">TSN · OneSoccer</div>\n        <div class="sport-desc">All Canadian Premier League games including FC Edmonton. OneSoccer included for full CanPL and international soccer coverage from Alberta.</div>')
  .replace('CFL Toronto Argonauts</div>\n        <div class="sport-channels">TSN · ESPN</div>\n        <div class="sport-desc">Full CFL season including Toronto Argonauts home and away. Grey Cup included. Every NFL Sunday game plus RedZone. Super Bowl in 4K.</div>',
    'NFL & Winter Sports</div>\n        <div class="sport-channels">TSN · ESPN · NFL Network</div>\n        <div class="sport-desc">Every NFL Sunday game plus RedZone. Super Bowl in 4K. Full NHL coverage beyond local teams — all playoff games and Stanley Cup Final included.</div>')
  .replace('Rogers Cup & More</div>\n        <div class="sport-channels">TSN · Sportsnet</div>\n        <div class="sport-desc">Rogers Cup tennis in Toronto, golf majors, boxing PPVs — all included. No pay-per-view fees. Every major sporting event covered.</div>',
    'Boxing & UFC</div>\n        <div class="sport-channels">TSN · Sportsnet · ESPN</div>\n        <div class="sport-desc">All major PPV boxing events at no extra cost. UFC Fight Night and Pay-Per-View on ESPN+ included. Every major sporting event from Alberta and beyond.</div>');

// Fix local channels
html = html
  .replace('<span class="chip">CBC Alberta</span>','<span class="chip">CBC Calgary</span>')
  .replace('<span class="chip">CTV Alberta</span>','<span class="chip">CTV Calgary</span>')
  .replace('<span class="chip">CTV2 Alberta</span>','<span class="chip">CTV Edmonton</span>')
  .replace('<span class="chip">Global Alberta</span>','<span class="chip">Global Calgary</span>')
  .replace('<span class="chip">CityTV Alberta</span>','<span class="chip">Global Edmonton</span>')
  .replace('<span class="chip">CP24</span>','<span class="chip">CBC Edmonton</span>')
  .replace('<span class="chip">TVO</span>','<span class="chip">CBC News Network</span>')
  .replace('<span class="chip">CHCH Hamilton</span>','<span class="chip">CTV News Edmonton</span>')
  .replace('<span class="chip">CBC News Network</span>','<span class="chip">Citytv Edmonton</span>')
  .replace('Sportsnet East</span><span class="chip">Sportsnet Ontario','Sportsnet West</span><span class="chip">Sportsnet Pacific')
  .replace('<span class="chip">Sportsnet 360</span>','<span class="chip">TSN 1</span>');

// Fix reviews
html = html
  .replace('Been watching Leafs all season on NorthStream. Zero buffering, even during overtime Game 7. TSN quality is identical to what I had on Rogers — at a fifth of the price.',
    'Been watching Flames and Oilers all season on NorthStream. Zero buffering, even during playoff overtime. Sportsnet West quality is identical to what I had on Shaw — at a fifth of the price.')
  .replace('CP24 is always live, CityTV quality is perfect. EPG is accurate for every Toronto channel. Running it on 4 screens at once during a Raptors playoff game — no issues.',
    'Global Calgary is always live, CBC Edmonton quality is perfect. EPG is accurate for all Alberta channels. Running it on 3 screens for Flames vs Oilers — works flawlessly.')
  .replace('Blue Jays games in 4K on my Firestick. Setup was 4 minutes. Cancelled Bell Fibe after 8 years. Saving $160/month. This is the best IPTV I have tried in Alberta.',
    'Oilers games in 4K on my Firestick. Setup was 5 minutes. Cancelled Shaw after 10 years. Saving $140/month. Best IPTV service I have tested in Alberta.');

// Fix Quick Answer
html = html
  .replace('What is the best IPTV service in Alberta?</p>\n    <p style="color:var(--muted);font-size:14px;margin:0">NorthStream IPTV is the best IPTV service in Alberta, offering 35+ local Alberta channels including CP24, CityTV, CBC Alberta, and full sports coverage (Leafs, Raptors, Blue Jays) on TSN and Sportsnet from $12.99 CAD/month with a free 24-hour trial.</p>',
    'What is the best IPTV service in Alberta?</p>\n    <p style="color:var(--muted);font-size:14px;margin:0">NorthStream IPTV is the best IPTV service in Alberta, offering 80+ local Alberta channels including Sportsnet West for Flames & Oilers, CBC/CTV Calgary & Edmonton, and 25,000+ total channels from $12.99 CAD/month with a free 24-hour trial.</p>');

// Fix Steps
html = html
  .replace('Alberta IPTV from $12.99 CAD/month — includes CP24, CityTV, CBC Alberta, TSN, Sportsnet, and all Leafs games.',
    'Alberta IPTV from $12.99 CAD/month — includes Sportsnet West, TSN, CBC/CTV Calgary & Edmonton, and all Flames & Oilers games.')
  .replace('Test all Alberta channels free for 24 hours — no credit card needed. Instant access to Leafs, CP24, and more.',
    'Test all Alberta channels free for 24 hours — no credit card needed. Instant access to Sportsnet West, Flames, Oilers, and more.')
  .replace('Watch Alberta TV in 4K</div><p style="color:var(--muted);font-size:14px;margin:0">Access CP24, CityTV, every Leafs game, Raptors, Blue Jays, and 25,000+ channels from your couch.</p>',
    'Watch Alberta TV in 4K</div><p style="color:var(--muted);font-size:14px;margin:0">Access Sportsnet West, every Flames & Oilers game, CBC/CTV Calgary & Edmonton, and 25,000+ channels from your couch.</p>');

// Fix FAQ
html = html
  .replace('What is the best IPTV service in Alberta in 2026?</div>\n        <div class="faq-a" style="max-height:300px"><div class="faq-a-inner">NorthStream IPTV is the #1 rated IPTV service in Alberta for 2026. It delivers 35+ local Alberta channels, complete sports coverage (Leafs, Raptors, Blue Jays), CP24 live news, CityTV, and 25,000+',
    'What is the best IPTV service in Alberta in 2026?</div>\n        <div class="faq-a" style="max-height:300px"><div class="faq-a-inner">NorthStream IPTV is the #1 rated IPTV service in Alberta for 2026. It delivers 80+ local Alberta channels, complete sports coverage (Flames & Oilers on Sportsnet West, Stampeders & Elks on TSN), CBC Calgary, CTV Edmonton, and 25,000+')
  .replace('Does IPTV work with Alberta ISPs like Rogers, Bell, and TekSavvy?</div>\n        <div class="faq-a"><div class="faq-a-inner">Yes. NorthStream IPTV works with all Alberta internet service providers: Rogers, Bell, Cogeco, TekSavvy, Distributel, and any other ISP.',
    'Does IPTV work with Alberta ISPs like Shaw, Telus, and Rogers?</div>\n        <div class="faq-a"><div class="faq-a-inner">Yes. NorthStream IPTV works with all Alberta internet service providers: Shaw, Telus, Rogers, Xplornet, TekSavvy, and any other ISP.')
  .replace('Can I watch CP24 and local Alberta news on IPTV?</div>\n        <div class="faq-a"><div class="faq-a-inner">Yes — CP24 is included in all NorthStream plans and streams live 24/7. You also get CBC Alberta, CTV Alberta, Global Alberta, and CityTV Alberta — all local Alberta news channels in HD. The EPG is accurate so you can schedule recordings through supported IPTV players.',
    'Can I watch Flames and Oilers games on IPTV in Alberta?</div>\n        <div class="faq-a"><div class="faq-a-inner">Yes — Sportsnet West and TSN are included in every NorthStream plan, giving you both Flames and Oilers games with no blackouts. You also get Global Calgary, CTV Calgary, CBC Calgary, Global Edmonton, and CTV Edmonton. Full Alberta sports coverage included.')
  .replace('How much does Alberta IPTV cost vs Rogers or Bell cable?</div>\n        <div class="faq-a"><div class="faq-a-inner">Rogers and Bell cable in Alberta costs $120–$200+/month with sports packages. NorthStream IPTV costs $12.99/month or $69.99/year — saving Alberta households $1,300–$2,000/year on average. Same channels including RDS and TVA Sports, no equipment rental, no contracts.',
    'How much does Alberta IPTV cost vs Shaw or Telus cable?</div>\n        <div class="faq-a"><div class="faq-a-inner">Shaw and Telus cable in Alberta costs $100–$180+/month with sports packages. NorthStream IPTV costs $12.99/month or $69.99/year — saving Alberta households $1,100–$1,900/year. Same channels including Sportsnet West and TSN, no equipment rental, no contracts.');

// Related pages
html = html
  .replace('<a href="/iptv-ontario.html">IPTV Ontario</a>\n      <a href="/iptv-ottawa.html">IPTV Ottawa</a>',
    '<a href="/iptv-bc.html">IPTV BC</a>\n      <a href="/iptv-vancouver.html">IPTV Vancouver</a>');

// See Also
html = html
  .replace('<li><a href="/iptv-ontario.html">IPTV Ontario</a></li>\n        <li><a href="/iptv-ottawa.html">IPTV Ottawa</a></li>',
    '<li><a href="/iptv-bc.html">IPTV BC</a></li>\n        <li><a href="/iptv-calgary.html">IPTV Calgary</a></li>');

fs.writeFileSync('iptv-alberta.html', html, 'utf8');
console.log('✅ Created iptv-alberta.html (' + html.length + ' bytes)');
