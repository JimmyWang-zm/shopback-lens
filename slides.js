const SLIDES = [
  {
    dark: true,
    title: "Title",
    html: `
      <div class="k">ShopBack · product proposal · 12-month horizon</div>
      <h2 style="font-size:42px;margin-top:28px">ShopBack Lens</h2>
      <p class="sub" style="font-size:18px;color:#C8CED8;max-width:80%">Turning every link, screenshot and question into a tracked ShopBack order.</p>
      <div class="rule"></div>
      <p class="sub">ShopBack already has an answer engine. What it does not have is a capture surface for the journey that no longer starts at ShopBack. Lens is that intercept. Smart Rates is how merchants pay for verified incrementality without cutting anyone’s published rate.</p>
      <p style="position:absolute;bottom:28px;color:#6E7684;font-size:12px">Wang Zhiming (王至明) · Launch: Singapore, then Malaysia + Taiwan · 29 Sep 2026</p>`
  },
  {
    title: "The problem",
    html: `
      <div class="k">The problem</div>
      <h2>ShopBack is built for a journey that no longer exists</h2>
      <div class="rule"></div>
      <div class="cols c-2">
        <div>
          <p><b>Discovery has moved.</b> A product is seen inside a TikTok live, a creator’s story, a WhatsApp group. The path from “I want this” to “I bought this” is two taps, and it never passes a ShopBack surface.</p>
          <p><b>The cashback is not declined.</b> It is simply never claimed — by a user who has the app installed and wants the money.</p>
        </div>
        <div class="tile">
          <div class="t">What that costs, per lost order</div>
          <p class="b"><span class="hi">The user</span> earns nothing on a purchase they wanted cashback on.</p>
          <p class="b"><span class="hi">ShopBack</span> earns nothing on demand it helped create.</p>
          <p class="b"><span class="hi">The merchant</span> pays full price for a customer ShopBack could have claimed.</p>
          <p class="b" style="margin-top:8px">That is not a demand problem. It is a capture problem.</p>
        </div>
      </div>`
  },
  {
    dark: true,
    title: "Why now",
    html: `
      <div class="k">Why now</div>
      <h2>And a second clock is running</h2>
      <div class="rule"></div>
      <div class="cols c-2">
        <div>
          <p>General-purpose AI assistants are moving into shopping. ShopBack’s ChatGPT app is the right move for that channel. It does not capture TikTok, Instagram or WhatsApp, where product decisions in this region actually start.</p>
          <p style="color:var(--orange);font-weight:700">An affiliate intermediary that does not own the intent layer does not survive the intent layer being automated.</p>
        </div>
        <div>
          <div class="tile" style="margin-bottom:10px"><div class="t">01 · Multimodal models</div><div class="b">A screenshot can be resolved cheaply enough for production, inside a 2.4% take rate.</div></div>
          <div class="tile" style="margin-bottom:10px"><div class="t">02 · Share sheets are habit</div><div class="b">Users already share between apps. No new behaviour is required.</div></div>
          <div class="tile"><div class="t">03 · Merchants are under CFO pressure</div><div class="b">“Am I paying for customers I already had?” is what makes Smart Rates sellable this year.</div></div>
        </div>
      </div>`
  },
  {
    title: "The proposal",
    html: `
      <div class="k">The proposal</div>
      <h2>ShopBack Lens</h2>
      <p class="sub">Share anything. Get a tracked True Net Price. The new capability is the intercept — not another assistant.</p>
      <div class="rule"></div>
      <div class="cols c-3">
        <div class="tile"><div class="t">Mode A — Lens</div><div class="b">Zero typing. Share a URL, image or screenshot from any app. URL parse, OCR and vision matching.</div></div>
        <div class="tile"><div class="t">Mode B — Ask</div><div class="b">A follow-on on the same card, not a rebuild of AI Assistant. “Must arrive Friday.”</div></div>
        <div class="tile"><div class="t">The answer</div><div class="b">Every merchant ranked by what the user actually pays, after vouchers and cashback.</div></div>
      </div>
      <div class="tile" style="margin-top:12px;background:var(--ink);color:#fff">
        <div class="t" style="color:#fff">True Net Price = listed − stackable vouchers − cashback + shipping</div>
        <div class="b" style="color:#9AA2B0">Ranked by what the user pays. Never by what ShopBack earns.</div>
      </div>`
  },
  {
    title: "The gap",
    html: `
      <div class="k">The gap</div>
      <h2>ShopBack already has the answer engine. It does not have the intercept.</h2>
      <div class="rule"></div>
      <table class="mini">
        <tr><th>Live today</th><th>Job it already does</th><th>Gap that remains</th></tr>
        <tr><td>AI Assistant · Search by Photo</td><td>Compare and match — inside the app</td><td class="hi">User must already have opened ShopBack</td></tr>
        <tr><td>Smart Alerts</td><td>Watch a price, notify when it moves</td><td>Becomes Watch inside Lens</td></tr>
        <tr><td>Travel Planner · ChatGPT app</td><td>Travel compare, cashback in ChatGPT</td><td>Neither intercepts TikTok / WhatsApp</td></tr>
        <tr><td>Browser extension</td><td>Desktop checkout reminder</td><td>Misses mobile social commerce</td></tr>
        <tr><td>Pay + card-linked · AU Receipts</td><td>In-store and offline frequency</td><td>Different job. Does not recover a social checkout.</td></tr>
      </table>
      <p style="margin-top:12px"><b>Lens is not a new assistant.</b> It is Share → ShopBack, from the app the user is already in.</p>`
  },
  {
    title: "Who this is for",
    html: `
      <div class="k">Who this is for</div>
      <h2>Three users. One of them writes the cheque.</h2>
      <p class="sub">v1 is retention-and-capture. People who have never installed ShopBack are not the launch target.</p>
      <div class="rule"></div>
      <div class="cols c-3">
        <div class="tile"><div class="t">01 Primary · Social-first deal seeker</div><div class="b">SG, 22–35. App installed. Discovers on TikTok, IG, Xiaohongshu, WhatsApp. Wants cashback — needs the friction removed.</div></div>
        <div class="tile"><div class="t">02 Secondary · Considered buyer</div><div class="b">SG, 28–45. S$200–S$2,000 purchase. High AOV. Capture the SKU, then refine in Ask.</div></div>
        <div class="tile"><div class="t">03 Paying user · Merchant growth manager</div><div class="b">CFO is asking if affiliate spend is incremental. Buys a holdout-verified CPA they can take to a QBR.</div></div>
      </div>`
  },
  {
    title: "How it works",
    html: `
      <div class="k">How it works</div>
      <h2>Four layers. The riskiest part is tested first.</h2>
      <p class="sub">The catalogue eval happens in month zero, before any client code.</p>
      <div class="rule"></div>
      <div class="cols c-4">
        <div class="tile"><div class="t">Capture</div><div class="b">iOS share extension, Android share intent, paste, clipboard, screenshot.</div></div>
        <div class="tile"><div class="t">Resolve</div><div class="b">URL parser first (no LLM). OCR + vision. LLM only on text. Tuned to false negatives.</div></div>
        <div class="tile"><div class="t">Price</div><div class="b">Live price, vouchers, published base + optional Smart Rate boost. Rank by net price.</div></div>
        <div class="tile"><div class="t">Route</div><div class="b">Tracked deeplink. In-app browser fallback. Automated canary orders.</div></div>
      </div>
      <p style="margin-top:14px">If two listings cannot be declared the same SKU, Lens has no comparison. <b>Kill: match rate below 55%.</b></p>`
  },
  {
    title: "TikTok Live",
    html: `
      <div class="k">Use case 1 of 6</div>
      <h2>The TikTok Live handoff</h2>
      <p class="sub">Jia Hui, 27, Singapore. Has ShopBack installed. Watching a live sell a hair dryer at S$189.</p>
      <div class="rule"></div>
      <div class="cols c-4" style="margin-bottom:12px">
        <div class="tile"><div class="t">01 Share</div><div class="b">Native Share → ShopBack. She has not left the live.</div></div>
        <div class="tile"><div class="t">02 Resolve</div><div class="b">Sheet over TikTok. Under two seconds.</div></div>
        <div class="tile"><div class="t">03 Net price</div><div class="b">Lazada wins at S$168.26 — 6% welcome rate, never bought there.</div></div>
        <div class="tile"><div class="t">04 One tap</div><div class="b">Tracked deeplink. An order ShopBack would have lost.</div></div>
      </div>
      <table class="mini">
        <tr><th>Merchant</th><th>Listed</th><th>Cashback</th><th>True net</th></tr>
        <tr><td>Lazada · never bought here</td><td>S$179.00</td><td class="ok">6% welcome</td><td class="ok">S$168.26 · BEST</td></tr>
        <tr><td>TikTok Shop · the link she shared</td><td>S$189.00</td><td>2.5% base</td><td>S$184.28</td></tr>
        <tr><td>Official brand store</td><td>S$205.00</td><td>8% base</td><td>S$188.60</td></tr>
      </table>`
  },
  {
    dark: true,
    title: "Smart Rates",
    html: `
      <div class="k">The monetisation engine</div>
      <h2>Where the money actually comes from</h2>
      <p class="sub">Three claims cannot be true at once: rates only go up, merchant spend is unchanged, and ShopBack margin expands by cutting ACTIVE users. The last of those is not the design.</p>
      <div class="rule"></div>
      <div class="cols c-2">
        <div>
          <p><b style="color:var(--orange)">Extra cashback is merchant-funded</b> — a welcome or win-back on top of the published base. ACTIVE customers keep the public rate.</p>
          <p><b style="color:var(--orange)">ShopBack’s new line is a 71 bps platform fee</b> on participating GMV, for allocation and a holdout-verified incrementality report. Extra cashback is a pass-through, not margin.</p>
        </div>
        <div>
          <table class="mini">
            <tr><th>State</th><th>Definition</th><th>Action</th><th>Rate</th></tr>
            <tr><td class="ok">NEW</td><td>Never purchased here</td><td>Boost to max</td><td>8–12%</td></tr>
            <tr><td class="hi">LAPSED</td><td>No purchase in 180+ days</td><td>Win-back</td><td>6–8%</td></tr>
            <tr><td>ACTIVE</td><td>Bought recently</td><td>Published base</td><td>4%</td></tr>
          </table>
          <p style="color:#FF8A65;font-size:12.5px;margin-top:10px"><b>Guardrail.</b> A user never sees a rate below the published base. Zero tolerance.</p>
        </div>
      </div>`
  },
  {
    title: "Why this",
    html: `
      <div class="k">Prioritisation</div>
      <h2>Why this — including what is already live</h2>
      <div class="rule"></div>
      <table class="mini">
        <tr><th>Option</th><th>Demand</th><th>12-mo</th><th>Margin</th><th>Verdict</th></tr>
        <tr><td class="hi">Lens + Smart Rates</td><td class="ok">High</td><td class="ok">High</td><td class="ok">High</td><td class="hi">SELECTED</td></tr>
        <tr><td>Deeper in-app AI</td><td>Medium</td><td class="ok">High</td><td class="bad">Low</td><td>Improves a surface the leaky journey never visits</td></tr>
        <tr><td>Card-linked on all online spend</td><td class="ok">High</td><td class="bad">Low</td><td>Medium</td><td>Already live in SG in-store. Misses social checkouts</td></tr>
        <tr><td>Instant cashback</td><td class="ok">High</td><td>Medium</td><td class="bad">Negative</td><td>Credit-risk decision, trivially copied</td></tr>
        <tr><td>Retail media</td><td>Medium</td><td>Medium</td><td class="ok">Very high</td><td>Needs Lens intent. The sequel</td></tr>
        <tr><td>Receipts in SG</td><td>Medium</td><td>Medium</td><td>Medium</td><td>Already live in AU. Separate sales motion</td></tr>
        <tr><td>Expand Plus</td><td class="bad">Low</td><td class="ok">High</td><td>Medium</td><td>Already live. Willingness to pay is the risk</td></tr>
      </table>`
  },
  {
    dark: true,
    title: "Assumptions",
    html: `
      <div class="k">Assumptions</div>
      <h2>I have no ShopBack data. Here is exactly what I made up.</h2>
      <p class="sub">Eighteen assumptions in the PRD. The business case hangs on these three.</p>
      <div class="rule"></div>
      <div class="cols c-3">
        <div class="tile"><div class="t" style="color:var(--orange);font-size:32px">60%</div><div class="t">A-1 Leakage</div><div class="b">Partner-merchant purchases that never pass through ShopBack. Kill below 30%.</div></div>
        <div class="tile"><div class="t" style="color:var(--orange);font-size:32px">78%</div><div class="t">A-4 Match rate</div><div class="b">Submissions resolved to a product. Offline eval in month zero. Kill below 55%.</div></div>
        <div class="tile"><div class="t" style="color:var(--orange);font-size:32px">55%</div><div class="t">A-8 Incrementality</div><div class="b">Lens orders that would not otherwise be tracked. 10% holdout. Kill below 25%.</div></div>
      </div>`
  },
  {
    title: "Impact",
    html: `
      <div class="k">Expected impact</div>
      <h2>Singapore, month-12 run-rate</h2>
      <p class="sub">Arithmetic of the assumptions — not a forecast. Totals include retention lift.</p>
      <div class="rule"></div>
      <div class="cols c-2">
        <div>
          <table class="mini">
            <tr><td>SG MAU</td><td>600,000</td></tr>
            <tr><td>Lens users · 22%</td><td>132,000</td></tr>
            <tr><td>Submissions · 3.2</td><td>422,400</td></tr>
            <tr><td>Match · 78%</td><td>329,472</td></tr>
            <tr><td>Click-out · 46%</td><td>151,557</td></tr>
            <tr><td>Orders · 9.5%</td><td>14,398</td></tr>
            <tr><td class="hi">Incremental · 55%</td><td class="hi">7,919 / month</td></tr>
          </table>
        </div>
        <div class="tile" style="background:var(--ink);color:#fff">
          <div class="t" style="color:var(--orange)">ANNUALISED AT M12</div>
          <p style="font-size:22px;font-weight:800;margin:8px 0 0">S$11.3M</p><p class="b" style="color:#9AA2B0">Incremental GMV incl. retention</p>
          <p style="font-size:22px;font-weight:800;margin:10px 0 0">S$271k</p><p class="b" style="color:#9AA2B0">Net revenue from Lens</p>
          <p style="font-size:22px;font-weight:800;margin:10px 0 0">S$994k</p><p class="b" style="color:#9AA2B0">Smart Rates platform fee</p>
          <p style="margin-top:10px;color:#fff"><b>Combined SG S$1.26M.</b> Year one does not pay a S$2.6M team. Year one buys the run-rate.</p>
        </div>
      </div>`
  },
  {
    title: "Scenarios",
    html: `
      <div class="k">Expected impact</div>
      <h2>What happens when the assumptions are wrong</h2>
      <p class="sub">GMV and revenue include retention lift, matching the previous slide.</p>
      <div class="rule"></div>
      <table class="mini">
        <tr><th>Driver</th><th>Conservative</th><th>Base</th><th>Aggressive</th></tr>
        <tr><td>Lens adoption [A-2]</td><td>10%</td><td class="hi">22%</td><td>35%</td></tr>
        <tr><td>Match rate [A-4]</td><td>62%</td><td class="hi">78%</td><td>88%</td></tr>
        <tr><td>Incrementality [A-8]</td><td>35%</td><td class="hi">55%</td><td>70%</td></tr>
        <tr><td>Smart Rates participation [A-9]</td><td>15%</td><td class="hi">35%</td><td>55%</td></tr>
        <tr><td><b>Incremental GMV</b></td><td>S$3.1M</td><td class="hi">S$11.3M</td><td>S$24.2M</td></tr>
        <tr><td><b>Net revenue, SG</b></td><td>S$0.50M</td><td class="hi">S$1.26M</td><td>S$2.14M</td></tr>
        <tr><td><b>M12 exit, 3 markets</b></td><td>S$1.6M</td><td class="hi">S$4.0M</td><td>S$6.9M</td></tr>
      </table>
      <p style="margin-top:10px">Conservative SG run-rate is S$0.50M. That does not cover a S$2.6M team in year one. Fund it if A-1 and A-4 clear Phase 0. Kill it in month one if they do not.</p>`
  },
  {
    dark: true,
    title: "Validation",
    html: `
      <div class="k">Validation</div>
      <h2>How I would know it is working</h2>
      <div class="rule"></div>
      <div class="cols c-2">
        <div>
          <div class="tile" style="margin-bottom:10px"><div class="t">North star · +S$1.57 / MAU / month</div><div class="b">Incremental tracked GMV per monthly active. Not usage (inflatable). Not plain GMV (rewards cannibalisation).</div></div>
          <div class="tile"><div class="t">Counter-metric</div><div class="b">Tracked orders per user in the non-Lens cohort. If this falls, Lens is redistributing.</div></div>
        </div>
        <div>
          <table class="mini">
            <tr><th>Guardrail</th><th>Threshold</th></tr>
            <tr><td>False-match rate</td><td>≤ 3%</td></tr>
            <tr><td>Cost per resolution</td><td>≤ S$0.02</td></tr>
            <tr><td>Time to first answer, p95</td><td>≤ 2.5s</td></tr>
            <tr><td>Rate-floor violations</td><td class="hi">0</td></tr>
            <tr><td>Merchant churn vs baseline</td><td>≤ baseline</td></tr>
          </table>
        </div>
      </div>`
  },
  {
    title: "Plan",
    html: `
      <div class="k">Plan</div>
      <h2>Twelve months, six phases, five gates</h2>
      <div class="rule"></div>
      <table class="mini">
        <tr><th></th><th>Phase</th><th>Window</th><th>Gate</th></tr>
        <tr><td class="hi">0</td><td>De-risk</td><td>M0–M1</td><td>A-1 ≥ 30% and A-4 ≥ 55%</td></tr>
        <tr><td class="hi">1</td><td>Alpha · URL-only, Android</td><td>M2–M3</td><td>Funnel in range, p95 &lt; 2.5s</td></tr>
        <tr><td class="hi">2</td><td>Beta · iOS + image + Watch</td><td>M4–M5</td><td>Adoption trending, guardrails green</td></tr>
        <tr><td class="hi">3</td><td>GA + 10-merchant pilot</td><td>M6–M7</td><td>Pilot merchants renew</td></tr>
        <tr><td class="hi">4</td><td>Self-serve Smart Rates</td><td>M8–M9</td><td>Participation trending to 35%</td></tr>
        <tr><td class="hi">5</td><td>MY + TW + extension</td><td>M10–M12</td><td>SG unit economics on a path to cover run-rate</td></tr>
      </table>`
  },
  {
    title: "Risks",
    html: `
      <div class="k">Risks</div>
      <h2>What would kill this</h2>
      <div class="rule"></div>
      <table class="mini">
        <tr><th>Severity</th><th>Risk</th><th>Mitigation</th></tr>
        <tr><td class="bad">Critical</td><td>Catalogue cannot match SKUs [A-4]</td><td>Phase 0 gate. Fallback: same-merchant-only comparison</td></tr>
        <tr><td class="hi">High</td><td>TikTok / Meta block share-out [A-14]</td><td>Paste and clipboard, which no platform can block</td></tr>
        <tr><td class="hi">High</td><td>Cannibalisation [A-8]</td><td>Permanent holdout. North star defined so it cannot look like growth</td></tr>
        <tr><td class="hi">High</td><td>Merchants refuse the fee [A-9]</td><td>Pilot-sell in M6. If it fails, justify Lens on capture alone</td></tr>
        <tr><td>Medium</td><td>Read as a rebuild of AI Assistant</td><td>Share-sheet is the headline. Ask and Watch are components</td></tr>
      </table>`
  },
  {
    dark: true,
    title: "Close",
    html: `
      <div class="k">In one sentence</div>
      <h2 style="font-size:28px;max-width:90%;margin-top:20px">The cheapest incremental GMV available to ShopBack is not new demand — it is the demand ShopBack already influences but fails to capture.</h2>
      <div class="rule"></div>
      <p><span class="hi">Lens</span> &nbsp; removes the requirement to remember — from the app the user is already in.</p>
      <p><span class="hi">Smart Rates</span> &nbsp; lets merchants buy verified incrementality without cutting anyone’s published rate.</p>
      <p><span class="hi">The holdout</span> &nbsp; tells us honestly whether either of those is true.</p>`
  }
];
