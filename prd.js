window.PRD_HTML = `
<p class="kicker">Wang Zhiming (王至明) · v1.1 · 29 Sep 2026 · Singapore first, then Malaysia + Taiwan</p>
<h1>PRD — ShopBack Lens</h1>
<p><b>Turning every social link, screenshot and question into a tracked ShopBack order.</b></p>
<blockquote>I do not have ShopBack’s internal data. Every quantitative input is an assumption tagged [A-n], with a test and a kill condition. Public figures are tagged [P] and directional only.</blockquote>

<h2>1. TL;DR</h2>
<p>ShopBack already has an answer engine: AI Assistant, Search by Photo, Smart Alerts, Travel Planner, a ChatGPT app, a browser extension. What it does not have is a capture surface for the journey that no longer starts at ShopBack.</p>
<p>Purchase decisions now happen inside TikTok, Instagram, Xiaohongshu and WhatsApp. By the time the user thinks “was there cashback on this?”, the order is already placed at an untracked merchant session.</p>
<p><b>ShopBack Lens</b> is the missing capture layer. The user shares a product link, a screenshot or a sentence into ShopBack from the app they are already in. Lens resolves the product, computes <b>True Net Price</b>, and returns a one-tap tracked checkout. Ask and Watch are components of that surface, not a rebuild of AI Assistant or Smart Alerts.</p>
<p><b>Smart Rates:</b> merchants fund an additional welcome / win-back budget on top of the published base rate, and pay ShopBack a platform fee for allocating that budget with a holdout-verified incrementality report. Extra cashback is merchant-funded. Users never see a rate below the public base.</p>
<p><b>The bet:</b> the cheapest incremental GMV available to ShopBack is not new demand — it is the demand ShopBack already influences but fails to capture.</p>

<h2>2. What I am building</h2>
<h3>2.1 Product</h3>
<p><b>Mode A — Lens (the v1 headline).</b> Zero typing. Share a URL, image or screenshot via the OS share sheet. This is the capability ShopBack does not have today.</p>
<p><b>Mode B — Ask (component).</b> Persistent Ask bar using the same True Net Price card. ShopBack’s live AI Assistant already does conversational comparison; Ask exists so a Lens user who then wants to refine never leaves the same surface.</p>
<pre>True Net Price = Listed price
               − Stackable vouchers
               − Cashback (published base + optional Smart Rate boost)
               + Shipping</pre>
<p>Primary action: Buy via ShopBack. Secondary: Watch, wired to existing Smart Alerts.</p>
<h3>2.2 Target users</h3>
<p><b>Primary — Social-first Deal Seeker (SG, 22–35).</b> App installed. Discovers on TikTok / IG / Xiaohongshu / WhatsApp. Wants cashback; the journey never starts in ShopBack. [A-2]</p>
<p><b>Secondary — Considered Buyer (SG, 28–45).</b> S$200–S$2,000 purchases. High AOV. Capture then refine in Ask.</p>
<p><b>Tertiary — Merchant Growth Manager.</b> Buys a holdout-verified CPA they can take to a QBR.</p>
<p>Not the v1 target: people who have never installed ShopBack.</p>
<h3>2.3 Use cases</h3>
<p><b>UC-1 TikTok Live.</b> Jia Hui shares a S$189 hair dryer. Lazada wins at net S$168.26 because she has never bought there (6% welcome). ShopBack gets an order it would have lost.</p>
<p><b>UC-2</b> WhatsApp forward. <b>UC-3</b> Screenshot of an Instagram ad. <b>UC-4</b> Refine in Ask (“must arrive Friday”). <b>UC-5</b> Watch until a win-back fires. <b>UC-6</b> Merchant sets a S$40,000 extra budget and a S$22 target CPA.</p>
<h3>2.7 Smart Rates — where the money comes from</h3>
<p>Three claims cannot be true at once: rates only go up, merchant spend is unchanged, and ShopBack margin expands by cutting ACTIVE users. The last of those is not the design.</p>
<p><b>User:</b> published base is the floor. NEW / LAPSED may see a labelled welcome or win-back.</p>
<p><b>Merchant:</b> optional extra acquisition budget, target CPA, maximum boost. Holdout is non-optional.</p>
<p><b>ShopBack:</b> 71 bps platform fee on participating GMV [A-16] for allocation and measurement. Extra cashback is a pass-through of the merchant boost budget. Base affiliate commissions continue as today.</p>

<h2>3. Why this</h2>
<p>Every money-making surface today assumes the user opened ShopBack first. Discovery no longer works that way. The recoverable pool is demand ShopBack already influenced but failed to capture. [A-1]</p>
<table>
<tr><th>Live today</th><th>Gap</th></tr>
<tr><td>AI Assistant, Search by Photo</td><td>User must already be in ShopBack</td></tr>
<tr><td>Smart Alerts</td><td>No attachment to a social capture; becomes Watch</td></tr>
<tr><td>Travel Planner, ChatGPT app</td><td>Travel-only, or a different channel</td></tr>
<tr><td>Extension</td><td>Misses mobile social commerce</td></tr>
<tr><td>Pay + card-linked (SG); Receipts (AU)</td><td>Different job. Does not recover an online social checkout</td></tr>
<tr><td>ShopBack Plus</td><td>Already live; expanding it is not the year’s impact bet</td></tr>
</table>
<p>Every other option either already exists, asks the user to want something new, or cannot ship in 12 months. Lens asks them to do something they already want, from the app they are already in.</p>

<h2>4. UX principles</h2>
<ol>
<li>Rank by what the user pays, never by what ShopBack earns.</li>
<li>Rates only ever adjust upward from the published base.</li>
<li>Say “I don’t know.” A wrong match is worse than no match.</li>
<li>Answer in under 2 seconds or show progress.</li>
<li>Do not rebuild what already exists.</li>
</ol>
<p>If ShopBack is not cheaper: “The link you shared is already the best price.” Still offer Buy via ShopBack so they do not lose the base cashback, plus Watch.</p>

<h2>6. Assumptions</h2>
<p>[P-1] 13 markets, 20M+ annual actives, 20k+ merchants, ~US$5.5B GMV — public, directional.</p>
<p>[P-2] Net take ~2.4% after user cashback — industry norm, replace with actuals.</p>
<table>
<tr><th>ID</th><th>Assumption</th><th>Value</th><th>Kill</th></tr>
<tr><td>A-1</td><td>Leakage</td><td>60%</td><td>&lt; 30%</td></tr>
<tr><td>A-2</td><td>Lens adoption of SG MAU</td><td>22%</td><td>&lt; 8%</td></tr>
<tr><td>A-3</td><td>Submissions / Lens user / month</td><td>3.2</td><td>&lt; 1.5</td></tr>
<tr><td>A-4</td><td>Match rate</td><td>78%</td><td>&lt; 55%</td></tr>
<tr><td>A-6</td><td>Match → click-out</td><td>46%</td><td>&lt; 20%</td></tr>
<tr><td>A-7</td><td>Click-out → order</td><td>9.5%</td><td>&lt; 4%</td></tr>
<tr><td>A-8</td><td>Incrementality</td><td>55%</td><td>&lt; 25%</td></tr>
<tr><td>A-9</td><td>Smart Rates GMV participation</td><td>35%</td><td>&lt; 12%</td></tr>
<tr><td>A-10</td><td>Cost per resolution</td><td>≤ S$0.02</td><td>&gt; S$0.08</td></tr>
<tr><td>A-11</td><td>Retention lift, orders outside Lens</td><td>+0.015 / user / mo</td><td>no difference</td></tr>
<tr><td>A-12</td><td>AOV</td><td>S$95</td><td>—</td></tr>
<tr><td>A-13</td><td>SG MAU</td><td>600,000</td><td>internal; not derived from 20M AAU</td></tr>
<tr><td>A-15</td><td>SG annual tracked GMV</td><td>S$400M</td><td>internal</td></tr>
<tr><td>A-16</td><td>Platform fee on participating GMV</td><td>71 bps</td><td>&lt; 20 bps</td></tr>
<tr><td>A-17</td><td>Fully loaded team cost</td><td>S$2.6M</td><td>—</td></tr>
<tr><td>A-18</td><td>MY+TW as multiple of SG at M12 exit</td><td>3.2×</td><td>—</td></tr>
</table>

<h2>7. Expected impact</h2>
<p>Three mechanisms: recovered leakage (highest confidence), Watch-driven repurchase (set low so it cannot double-count), platform fee on participating GMV.</p>
<pre>600,000 MAU × 22% × 3.2 × 78% × 46% × 9.5% × 55% × S$95
→ 7,919 incremental orders / month → S$9.03M Lens-direct GMV
+ S$2.26M retention lift
= S$11.28M incremental GMV × 2.4% = S$271k Lens net
+ S$400M × 35% × 71 bps = S$994k platform fee
= S$1.26M combined SG month-12 net revenue</pre>
<p>Year one does not pay a S$2.6M team. Malaysia and Taiwan take the M12 <i>exit</i> run-rate to ~S$4.0M. That is the investment number.</p>
<table>
<tr><th></th><th>Conservative</th><th>Base</th><th>Aggressive</th></tr>
<tr><td>Incremental GMV</td><td>S$3.1M</td><td>S$11.3M</td><td>S$24.2M</td></tr>
<tr><td>SG net revenue</td><td>S$0.50M</td><td>S$1.26M</td><td>S$2.14M</td></tr>
<tr><td>M12 exit, 3 markets</td><td>S$1.6M</td><td>S$4.0M</td><td>S$6.9M</td></tr>
</table>
<p>North star: incremental tracked GMV per MAU. Base target <b>+S$1.57 / MAU / month</b>. Counter-metric: tracked orders per user in the non-Lens cohort.</p>

<h2>8–10. Plan, risks, open questions</h2>
<p>Phase 0 (M0–M1) is an offline eval on 2,000 real social links and a leakage survey. Gates: A-1 ≥ 30% and A-4 ≥ 55%. Catalogue work happens before any client code.</p>
<p><b>Open questions for week one:</b> measured leakage; SKU-level completeness of the merchant feed; whether contracts allow a platform fee plus a merchant-funded boost; whether Taiwan is a cleaner first market for A-2; actual engineering capacity.</p>
`;
