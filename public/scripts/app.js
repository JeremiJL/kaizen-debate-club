const ROUTES = [
  { id: "home", label: "Home" },
  { id: "rules", label: "Rules" },
  { id: "gallery", label: "Gallery" },
  { id: "presentation", label: "Presentation" },
  { id: "joinus", label: "Join Us" },
  { id: "aboutus", label: "About us" }
];

const RULE_TABS = [
  { id: "etiquette", label: "Basic Etiquette" },
  { id: "notions", label: "Basic Notions" },
  { id: "impromptu", label: "Kaizen Team Debate" },
  { id: "one_vs_all", label: "1 VS ALL" },
  { id: "policy", label: "Kaizen Policy Debate" },
  { id: "hot_potato", label: "Hot Potato" },
  { id: "box_of_presents", label: "Box of Presents" },
  { id: "you_vs_world", label: "You VS The World" },
  { id: "mildly_frustrated", label: "12 Mildly-Frustrated Men" },
  { id: "holivar", label: "Holivar Debate" },
  { id: "public_execution", label: "Public Execution" }
];

const RULE_GROUPS = {
  etiquette: "general",
  notions: "general",
  impromptu: "debate",
  one_vs_all: "debate",
  policy: "debate",
  hot_potato: "warmup",
  box_of_presents: "warmup",
  you_vs_world: "warmup",
  mildly_frustrated: "warmup",
  holivar: "warmup",
  public_execution: "warmup"
};

const PRESENTATION_CONFIGS = [
  {
    id: "blank",
    label: "Blank",
    motion: "",
    definition: "",
    tickets: []
  },
  {
    id: "workshop-06-05-2026",
    label: "07-05-2026",
    motion: "This house believes...",
    definition: "",
    tickets: [
      "This House Believes that in the IT industry, getting rich is often a product of immoral actions.",
      "THB that the recent internet shutdown in Russia will have positive consequences for the future of Europe.",
      "PTOETHW join a trade union for programmers to fight against the excessive use of AI in the workplace."
    ]
  },
  {
    id: "brainstormed-motions",
    label: "Brainstormed Motions",
    motion: "",
    definition: "",
    tickets: [
      "This House Would recognize religion as a mitigating factor in criminal sentencing.",
      "This House Prefers a world without marijuana.",
      "This House Believes that the COVID-19 pandemic resulted in a net increase in global pandemic preparedness.",
      "This House Believes that elections should be conducted via open voting.",
      "This House Believes that the COVID-19 pandemic was manufactured by big tech corporations."
    ]
  }
];

const DEFAULT_PRESENTATION_CONFIG = PRESENTATION_CONFIGS[0];
const PRESENTATION_TABS = ["stopwatch", "voting"];
const GALLERY_DRIVE_FOLDER_ID = "1na5zIMLsU2Toy0sHW7K_JIN2EfjvT4sb";
const GALLERY_EMBED_URL = `https://drive.google.com/embeddedfolderview?id=${GALLERY_DRIVE_FOLDER_ID}#grid`;

const MEMBERS = [
  {
    image: "images/portraits/abdulla.jpg",
    fullName: "Abdulla Mohamed",
    email: "abdulm@pjwstk.edu.pl",
    role: "Club Supervisor",
    group: "current"
  },
  {
    image: "images/portraits/jeremi.jpg",
    fullName: "Jeremi Lipniacki",
    email: "jeremi.lipniacki@pjwstk.edu.pl",
    role: "Co-founder / Organiser",
    group: "current"
  },
  {
    image: "images/portraits/kemal.jpg",
    fullName: "Kemal Ozcan",
    email: "kemal.ozcan@pjwstk.edu.pl",
    role: "President / Organiser / Photographer",
    group: "current"
  },
  {
    image: "images/portraits/alex.jpg",
    fullName: "Aleksandra Moltchanova",
    email: "aleksandra.moltchanova@pjwstk.edu.pl",
    role: "Organiser / Designer",
    group: "current"
  },
  {
    image: "images/portraits/fillipp.jpg",
    fullName: "Fillipp Klyshevich",
    email: "fillipp.klyshevich@pjwstk.edu.pl",
    role: "Co-founder / President / Organiser",
    group: "former"
  },
  {
    image: "images/portraits/amaliya.jpg",
    fullName: "Amaliya Parkhimovich",
    email: "amaliya.parkhimovich@pjwstk.edu.pl",
    role: "Co-founder / Organizer",
    group: "former"
  },
  {
    image: "images/portraits/ivan.jpg",
    fullName: "Ivan Abchuhskyi",
    email: "ivan.abchuhskyi@pjwstk.edu.pl",
    role: "Organiser",
    group: "former"
  }
];

const RULE_CONTENT = {
  etiquette: {
    title: "Basic etiquette and rules",
    strapline: "Baseline conduct for every KDC meeting.",
    intro:
      "To maintain KDC's highly supportive environment, all members are expected to follow a small set of core guidelines regardless of the debate format.",
    bullets: [
      "Do not talk over others. Interrupt only when the format allows it or when the speaker explicitly gives you permission.",
      "Post-debate feedback is meant to help everyone improve. Focus on skill growth and constructive support, not tearing people down.",
      "KDC has zero tolerance for personal insults, racism, sexism, or discrimination of any kind.",
      "Keep the clash focused on ideas rather than individuals. Personal attacks are out of bounds.",
      "Unconventional or wild arguments are welcome as long as they are logically relevant to the motion and not used to troll or offend."
    ],
    note: "Strong disagreement is welcome. Disrespect is not."
  },
  notions: {
    title: "Basic notions",
    strapline: "The shorthand used across KDC formats.",
    glossary: [
      {
        term: "The House",
        definition:
          "The hypothetical body or parliament debating the topic. When a motion says “This House,” it refers to everyone in the room acting as the decision-makers."
      },
      { term: "Motion", definition: "The topic being debated." },
      { term: "Affirmative side", definition: "Also called the government. This side argues for the motion." },
      { term: "Opposition side", definition: "The side arguing against the motion." },
      { term: "TH", definition: "This House." },
      { term: "THB", definition: "This House Believes." },
      { term: "THW", definition: "This House Would." }
    ]
  },
  impromptu: {
    title: "Kaizen Team Debate",
    strapline: "The foundational KDC format and the blueprint for its built-in variations.",
    intro:
      "Inspired by British Parliamentary debate but simplified for club use. Understanding this format is essential for taking part in a regular KDC meeting.",
    sections: [
      {
        heading: "Setup and flow",
        bullets: [
          "Members review the available motions of the day and vote to select the main topic.",
          "After warm-ups, six to eight volunteers are selected and divided into two equal teams of three or four.",
          "A coin toss determines which team is Affirmative and which team is Opposition.",
          "Before preparation begins, the moderator and both teams define the motion together to establish debate boundaries.",
          "Teams then receive 10 to 15 minutes of dedicated preparation time."
        ]
      },
      {
        heading: "Round structure",
        bullets: [
          "Each team gives three or four speeches, matching the number of speakers on that team.",
          "Only one speaker may deliver a speech within a round.",
          "Opposing team members may raise a hand during a speech to ask a question.",
          "Opposition may not speak during the other side's speech unless given the right to do so.",
          "The first speech on each side is the Opening Speech used to introduce the team and its core arguments.",
          "The last speech on each side is the Closing Speech used to summarize and make a final appeal.",
          "The Opposition is strongly advised not to introduce entirely new arguments during the Closing Speech.",
          "A Q&A session with the audience takes place before the Closing Speeches.",
          "Speech timings usually range from 2 to 5 minutes, depending on the meeting.",
          "Audience Q&A typically lasts between 6 and 10 minutes."
        ]
      },
      {
        heading: "Research Variation",
        bullets: [
          "Teams are formed during the previous meeting.",
          "Sides are chosen only on the Research Meeting itself, so teams must be prepared for both sides.",
          "Timings may change slightly, but the general flow stays the same."
        ]
      },
      {
        heading: "Unified Voice Variation",
        bullets: [
          "The rule that only one speaker can deliver a speech is removed. Team members may freely take turns and assist one another.",
          "If the opposing team raises a question, all members of that team may contribute to that question."
        ]
      }
    ]
  },
  one_vs_all: {
    title: "1 VS ALL",
    strapline: "Chaotic, individualistic, and competitive even within your own side.",
    intro:
      "You may stand on stage with a team, but in this format you are functionally alone. The goal is to earn the audience's vote as the single best speaker on stage.",
    sections: [
      {
        heading: "Rules",
        bullets: [
          "Six participants are chosen from the audience.",
          "They are divided into two teams of three and the sides are determined by coin toss.",
          "Even though they are placed in teams, participants do not work together.",
          "Every debater must independently create and defend their own arguments while outperforming teammates and clashing with opponents."
        ]
      },
      {
        heading: "Flow",
        bullets: [
          "The round starts with one-minute opening speeches from every participant.",
          "The debate then moves into a 15-minute open Arguments Clash section.",
          "During the clash, anyone can speak freely while an organizer moderates order.",
          "A six-minute audience Q&A follows the clash.",
          "Each participant then gives a final one-minute closing speech.",
          "The audience votes for the single best individual speaker."
        ]
      }
    ]
  },
  policy: {
    title: "Kaizen Policy Debate",
    strapline: "Listed in the PDF, but not yet described there.",
    intro: "to be added"
  },
  hot_potato: {
    title: "Hot Potato Debate",
    strapline: "Fast argument switching under pressure.",
    intro:
      "Inspired by the children's game, this is a high-tempo warm-up where arguments alternate sides while the potato keeps moving.",
    sections: [
      {
        heading: "Rules and flow",
        bullets: [
          "Participants gather on stage in a circle while a digital wheel of motions is displayed.",
          "One participant starts with the Potato. The wheel is spun and the chosen motion is read aloud.",
          "Classical music begins. The current holder chooses a side and immediately gives an argument.",
          "After finishing, they throw the Potato to someone else in the circle.",
          "The new holder must argue for the opposing side, then throw the Potato onward.",
          "This continues until the music suddenly switches to upbeat pop music.",
          "Whoever holds the Potato when the music changes loses the round.",
          "The loser receives a lighthearted punishment based on the event theme.",
          "The wheel is spun again for the next round."
        ]
      }
    ],
    note:
      "Special rule: after at least three arguments on the current motion, the Potato holder may request a new motion instead of arguing the existing one."
  },
  box_of_presents: {
    title: "Box of Presents",
    strapline: "Forced perspective and instant persuasion.",
    intro:
      "Originally created for a Christmas meeting, this exercise pushes members to improvise arguments and defend a chosen object under time pressure.",
    sections: [
      {
        heading: "Rules",
        bullets: [
          "A willing member is invited to the stage and shown a box containing multiple items.",
          "The participant either blindly picks an item or looks inside and deliberately chooses one.",
          "Blind pick grants a designated amount of preparation time.",
          "Choosing while looking grants no preparation time and the speech begins immediately.",
          "The speaker must convince the audience that the chosen item is the best present they could possibly receive.",
          "The game ends when the designated speaking time expires."
        ]
      }
    ]
  },
  you_vs_world: {
    title: "You VS The World",
    strapline: "Solo defense against audience questioning.",
    intro:
      "A simple exercise built around defending your argument under pressure and responding effectively to audience challenges.",
    sections: [
      {
        heading: "Rules",
        bullets: [
          "A willing participant is invited to the stage.",
          "A motion is shown and read aloud, then the participant chooses which side to defend.",
          "The participant delivers a speech presenting their arguments.",
          "After the speech, the audience gets the opportunity to ask questions.",
          "Audience members raise their hands and are called on one by one.",
          "The speaker's objective is to defend their arguments as effectively as possible.",
          "The exercise continues until the total allotted time for speech and Q&A runs out."
        ]
      }
    ]
  },
  mildly_frustrated: {
    title: "12 Mildly-Frustrated Men",
    strapline: "Negotiation, persuasion, and consensus under time pressure.",
    intro:
      "A collaborative exercise inspired by 12 Angry Men, focused on internal debate, value tradeoffs, and arriving at a unified group decision.",
    sections: [
      {
        heading: "Rules",
        bullets: [
          "Members are divided into two groups.",
          "Each group receives a set of personas in a hypothetical situation where one deserves to be saved.",
          "The group must debate internally and reach a unanimous decision.",
          "Each group has exactly 20 minutes to make its choice.",
          "If a group cannot reach unanimity within 20 minutes, it loses the exercise.",
          "If a decision is made, one person explains which persona was chosen and why."
        ]
      }
    ]
  },
  holivar: {
    title: "Holivar Debate",
    strapline: "Short prep, short speeches, fast adaptation.",
    intro:
      "A quick, high-energy exercise designed to test thinking on your feet, building a rapid argument, and adapting when the round changes.",
    sections: [
      {
        heading: "Rules",
        bullets: [
          "Two volunteers from the audience are invited to the stage.",
          "A coin toss determines which side each participant will defend.",
          "The motion is presented to the participants.",
          "Each side gets exactly 30 seconds of preparation followed by a one-minute speech.",
          "After both speeches, the audience votes to determine the winner.",
          "Organizers may ask participants to switch sides at the end of a round.",
          "Alternatively, participants may be asked to give a direct counter-argument to the speech they just delivered."
        ]
      }
    ]
  },
  public_execution: {
    title: "Public Execution",
    strapline: "Live audience pressure, visible momentum shifts, and king-of-the-hill survival.",
    intro:
      "A competitive warm-up built around immediate persuasion under pressure. One speaker defends their position against a stream of challengers while the audience continuously signals who is winning.",
    sections: [
      {
        heading: "Opening round",
        bullets: [
          "Two volunteers sign up for a three-minute debate.",
          "The motion is presented to both speakers.",
          "After the debate ends, the audience votes to choose the winner.",
          "The winner becomes the first Defender of the game."
        ]
      },
      {
        heading: "Challenge rounds",
        bullets: [
          "A new volunteer from the audience steps up as the Contestant.",
          "The Contestant must take the side opposite to the current Defender.",
          "At the start of each round, the audience is assumed to be on the Defender's side until persuaded otherwise.",
          "Whenever an audience member feels more convinced by the Contestant, they raise their hand.",
          "Audience members may raise or lower their hand at any time during the three minutes if they change their mind.",
          "If more than half of the audience has their hands raised at any point, the debate is interrupted immediately.",
          "In that case, the Contestant wins instantly, becomes the new Defender, and the next round begins with a search for a new Contestant."
        ]
      },
      {
        heading: "Voting and conduct",
        bullets: [
          "After each round, the audience members other than the current Defender may vote on whether to change the motion.",
          "If audience members believe a speaker committed a logical fallacy or behaved rudely, they may point it out aloud during the game.",
          "They may also try to persuade the rest of the audience to vote against the offending speaker."
        ]
      }
    ],
    note:
      "The ultimate winner is the person who survives the greatest total number of rounds as Defender."
  }
};

const state = {
  route: getRouteFromHash(),
  activeRule: "etiquette",
  carouselIndex: 0,
  mobileMenuOpen: false,
  presentationTab: "stopwatch",
  presentationSelectedConfig: DEFAULT_PRESENTATION_CONFIG.id,
  presentationPresetSeconds: 180,
  presentationCustomMinutes: "3",
  presentationRemainingMs: 180000,
  presentationTimerRunning: false,
  presentationTimerEndsAt: null,
  presentationMotion: DEFAULT_PRESENTATION_CONFIG.motion,
  presentationDefinition: DEFAULT_PRESENTATION_CONFIG.definition,
  presentationTickets: [...DEFAULT_PRESENTATION_CONFIG.tickets],
  presentationTicketDraft: ""
};

let presentationTimerInterval = null;

function getRouteFromHash() {
  const hash = window.location.hash || "#/home";
  const route = hash.replace(/^#\//, "").trim();
  return ROUTES.some((item) => item.id === route) ? route : "home";
}

function formatPresentationTime(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getPresentationRemainingMs() {
  if (!state.presentationTimerRunning || !state.presentationTimerEndsAt) {
    return Math.max(0, state.presentationRemainingMs);
  }
  return Math.max(0, state.presentationTimerEndsAt - Date.now());
}

function syncPresentationTimerState() {
  if (!state.presentationTimerRunning) return;
  const remaining = getPresentationRemainingMs();
  state.presentationRemainingMs = remaining;
  if (remaining <= 0) {
    state.presentationTimerRunning = false;
    state.presentationTimerEndsAt = null;
  }
}

function setPresentationDuration(seconds) {
  const normalizedSeconds = Math.max(1, Math.floor(seconds) || 180);
  state.presentationPresetSeconds = normalizedSeconds;
  state.presentationCustomMinutes = String(Number((normalizedSeconds / 60).toFixed(2)));
  state.presentationRemainingMs = normalizedSeconds * 1000;
  state.presentationTimerRunning = false;
  state.presentationTimerEndsAt = null;
  stopPresentationTimerInterval();
}

function applyPresentationConfig(configId) {
  const config = PRESENTATION_CONFIGS.find((item) => item.id === configId);
  if (!config) return;
  state.presentationSelectedConfig = config.id;
  state.presentationMotion = config.motion;
  state.presentationDefinition = config.definition;
  state.presentationTickets = [...config.tickets];
  state.presentationTicketDraft = "";
}

function setPresentationTab(nextTab) {
  if (!PRESENTATION_TABS.includes(nextTab) || state.presentationTab === nextTab) return;
  state.presentationTab = nextTab;
  renderApp();
}

function isEditableTarget(target) {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(target.closest("input, textarea, select, [contenteditable='true']"));
}

function stopPresentationTimerInterval() {
  if (presentationTimerInterval) {
    window.clearInterval(presentationTimerInterval);
    presentationTimerInterval = null;
  }
}

function updatePresentationTimerUi() {
  syncPresentationTimerState();
  const display = document.querySelector("[data-presentation-time]");
  const ring = document.querySelector("[data-presentation-progress]");
  const status = document.querySelector("[data-presentation-status]");
  if (!display || !ring || !status) return;

  const remaining = getPresentationRemainingMs();
  const total = Math.max(1000, state.presentationPresetSeconds * 1000);
  const ratio = Math.max(0, Math.min(1, remaining / total));

  display.textContent = formatPresentationTime(remaining);
  ring.style.setProperty("--presentation-progress", `${ratio}`);
  display.classList.toggle("is-finished", remaining <= 0);
  status.textContent = remaining <= 0 ? "Time is up" : state.presentationTimerRunning ? "Running" : "Ready";

  if (!state.presentationTimerRunning) {
    stopPresentationTimerInterval();
  }
}

function ensurePresentationTimerInterval() {
  stopPresentationTimerInterval();
  if (!state.presentationTimerRunning) return;
  presentationTimerInterval = window.setInterval(updatePresentationTimerUi, 200);
}

function isFullscreenActive() {
  return Boolean(document.fullscreenElement);
}

async function toggleFullscreenMode() {
  if (isFullscreenActive()) {
    await document.exitFullscreen();
    return;
  }
  await document.documentElement.requestFullscreen();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function textBlock({ sideNoteContent = "", h2Content = "", pContent = "", content = "", showDivider = true }) {
  const sideNote = sideNoteContent.trim()
    ? `<p class="side-note">${escapeHtml(sideNoteContent)}</p>`
    : "";
  const heading = h2Content.trim() ? `<h2>${escapeHtml(h2Content)}</h2>` : "";
  const paragraph = pContent.trim() ? `<p>${escapeHtml(pContent)}</p>` : "";
  const divider = showDivider ? "<hr>" : "";

  return `
    <section class="content-block">
      ${sideNote}
      ${heading}
      ${paragraph}
      ${content ? `<div class="pb-1">${content}</div>` : ""}
      ${divider}
    </section>
  `;
}

function renderRulePanels(rule) {
  const intro = rule.intro ? `<p class="rules-panel__intro">${escapeHtml(rule.intro)}</p>` : "";
  const bullets = rule.bullets?.length
    ? `
      <div class="rules-panel">
        <ul class="rules-list">
          ${rule.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>
    `
    : "";
  const sections = rule.sections?.length
    ? rule.sections
        .map(
          (section) => `
            <section class="rules-panel">
              <h3>${escapeHtml(section.heading)}</h3>
              <ul class="rules-list">
                ${section.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            </section>
          `
        )
        .join("")
    : "";
  const glossary = rule.glossary?.length
    ? `
      <section class="rules-panel rules-panel--glossary">
        <dl class="rules-glossary">
          ${rule.glossary
            .map(
              (entry) => `
                <div class="rules-glossary__item">
                  <dt>${escapeHtml(entry.term)}</dt>
                  <dd>${escapeHtml(entry.definition)}</dd>
                </div>
              `
            )
            .join("")}
        </dl>
      </section>
    `
    : "";
  const note = rule.note
    ? `
      <aside class="rules-note">
        <span class="rules-note__label">Note</span>
        <p>${escapeHtml(rule.note)}</p>
      </aside>
    `
    : "";

  return `${intro}${bullets}${sections}${glossary}${note}`;
}

function renderRuleVisual(ruleId) {
  if (ruleId === "impromptu") {
    return `
      <section class="rules-visual rules-visual--diagram">
        <figure class="diagram-embed">
          <figcaption class="diagram-embed__title">Kaizen Team Debate flow</figcaption>
          <img class="diagram-embed__image" src="images/diagrams/kaizen-team-debate.svg" alt="Kaizen Team Debate flowchart">
        </figure>
      </section>
    `;
  }

  if (ruleId === "one_vs_all") {
    return `
      <section class="rules-visual rules-visual--diagram">
        <figure class="diagram-embed">
          <figcaption class="diagram-embed__title">1 VS ALL flow</figcaption>
          <img class="diagram-embed__image" src="images/diagrams/one-vs-all.svg" alt="1 VS ALL flowchart">
        </figure>
      </section>
    `;
  }

  return "";
}
function memberCard(member) {
  return `
    <article class="card">
      <img class="card-img-top" src="${escapeHtml(member.image)}" alt="${escapeHtml(member.fullName)} portrait">
      <div class="card-body">
        <div class="card-title">${escapeHtml(member.fullName)}</div>
        <div class="card-text">
          <ul>
            <li class="my-0">${escapeHtml(member.email)}</li>
            <li class="my-0">${escapeHtml(member.role)}</li>
          </ul>
        </div>
      </div>
    </article>
  `;
}

function renderHome() {
  const rows = [
    {
      left: "Learn how to debate",
      right: "Build yours and demolish others’ arguments, all while learning how to withstand stress and scrutiny."
    },
    {
      left: "Improve soft skills",
      right: "Confidence, negotiation, conflict management, critical thinking, emotional intelligence - these skills will surely help you stand out on the job market."
    },
    {
      left: "Something for everyone",
      right: "We conduct public speaking exercises, team games, negotiation workshops, as well as classical debate sessions."
    },
    {
      left: "Practice your English",
      right: "Practice English language in a formal, work-like setting."
    },
    {
      left: "Network with others",
      right: "Meet and connect with various people in our club. Anyone could become your future colleague."
    }
  ]
    .map(
      (row) => `
        <div class="row container-flex py-2 mb-1">
          <div class="title-column col-sm-3">
            <p>${escapeHtml(row.left)}</p>
          </div>
          <div class="col-sm">
            <p>${escapeHtml(row.right)}</p>
          </div>
        </div>
      `
    )
    .join("");

  return `
    <section class="home-page">
      <section class="hero hero--video">
        <video class="homeBackGroundVideo" autoplay muted loop playsinline preload="auto">
          <source src="videos/loop.mp4" type="video/mp4">
        </video>
        <div class="hero__overlay"></div>
        <div class="hero__content">
          <figure class="text-center">
            <blockquote class="blockquote">
              <h1>Kaizen Debate Club</h1>
            </blockquote>
            <figcaption class="blockquote-footer">Japanese for "Continuous Improvement"</figcaption>
          </figure>
        </div>
      </section>
      ${textBlock({
        h2Content: "What do we do?",
        pContent: "As the name of the club suggests, during our meetings, we debate! Of course, that is not all. You can also expect our organisers to conduct lectures on specific aspects of debating. Occasionally, we host guests from the world of professional debate, as well as lecturers from our Academy who are eager to share a few wise words. On festive occasions, we organise special edition meetings full of competition, prizes, and unexpected forms of debating. We can also proudly say that Kaizen Debate Club represents our Academy beyond its walls — at cross-university competitions! Join us to find out more!" 
      })}
      ${textBlock({
        h2Content: "Why should you join?",
        content: rows
      })}
    </section>
  `;
}

function renderRules() {
  const tabs = RULE_TABS.map((tab) => {
    const activeClass = tab.id === state.activeRule ? "is-active" : "";
    return `
      <li class="page-item">
        <button type="button" class="page-link ${activeClass}" data-rule-tab="${escapeHtml(tab.id)}" title="${escapeHtml(tab.label)}">
          ${escapeHtml(tab.label)}
        </button>
      </li>
    `;
  }).join("");

  const activeContent = RULE_CONTENT[state.activeRule];
  const activeTab = RULE_TABS.find((tab) => tab.id === state.activeRule);
  const activeGroup = RULE_GROUPS[state.activeRule] || "general";
  const groupTitle =
    activeGroup === "warmup"
      ? "Warm-up rules"
      : activeGroup === "debate"
        ? "Debate format rules"
        : "General rules";
  const groupEyebrow =
    activeGroup === "warmup"
      ? "KDC Warm-Ups"
      : activeGroup === "debate"
        ? "KDC Debate Formats"
        : "KDC Core Rules";

  return `
    <section class="rules-page">
      <h1>${groupTitle}</h1>
      <div class="rules-hero">
        <div class="rules-hero__meta">
          <p class="rules-hero__eyebrow">${groupEyebrow}</p>
          <h2>${escapeHtml(activeContent.title)}</h2>
          <p class="rules-hero__strapline">${escapeHtml(activeContent.strapline || activeTab?.label || "")}</p>
        </div>
      </div>
      <nav aria-label="Rules" class="pager">
        <button class="pager__arrow" aria-label="Scroll left" data-scroll-rules="-1">
          <span aria-hidden="true">&laquo;</span>
        </button>
        <ul class="pagination pager__strip" data-rules-strip>
          ${tabs}
        </ul>
        <button class="pager__arrow" aria-label="Scroll right" data-scroll-rules="1">
          <span aria-hidden="true">&raquo;</span>
        </button>
      </nav>
      <div class="rules-content">
        ${renderRulePanels(activeContent)}
        ${renderRuleVisual(state.activeRule)}
      </div>
    </section>
  `;
}

function renderJoinUs() {
  return `
    <section class="join-page">
      <h1>Join Us!</h1>
      ${textBlock({
        h2Content: "Participate as a guest and became a member!",
        pContent: "Our meetings are open for everybody, in fact you don't even have to be a student of PJAIT, you don’t need to sing up to participate — simply come to our next meeting! Kaizen Debate Club offers various activities designed for newcomers, so don't be discouraged if you lack debating experience. Our meetings take place weekly, check our socials - Telegram or Instagram to make sure not to miss the next one!"
      })}
      <hr>
      ${textBlock({
        h2Content: "Contribute to our meetings",
        pContent: "Kaizen Debate Club is made by students, for students. To make our meetings engaging and practical, our members prepare their own presentations, exercises, debate topics, etc. If you’d like to organize something of your own, contact us."
      })}
      ${textBlock({
        h2Content: "Join our team of organisers!",
        pContent: "We’re looking to expand our team, so if you believe that your skills can be beneficial to our club, feel free to contact us about it."
      })}
      <div class="container-flex pt-2">
        <p class="side-note">
          We encourage everyone to treat our meetings as a formal occasion. That means dressing nicely, respecting each other, and minding your manners. That's not a "rule" you're forced to follow, that's simply our culture!
        </p>
      </div>
    </section>
  `;
}

function renderAboutUs() {
  const currentMembers = MEMBERS.filter((member) => member.group === "current")
    .map((member) => `<div class="col-sm">${memberCard(member)}</div>`)
    .join("");
  const formerMembers = MEMBERS.filter((member) => member.group === "former")
    .map((member) => `<div class="col-sm">${memberCard(member)}</div>`)
    .join("");

  const activeMember = MEMBERS[state.carouselIndex];

  return `
    <section>
      <h1>About us</h1>
      ${textBlock({
        h2Content: "Who are we?",
        pContent: "The Kaizen Debate club was created by a group of passionate PJATK students. Here, you can find information about our team, including the contact details and positions."
      })}

      <section class="staff-desktop">
        <p class="staff-section-label">Current Staff</p>
        <div class="row row-cols-4 mt-3 py-2">
          ${currentMembers}
        </div>

        <p class="staff-section-label">Former Staff</p>
        <div class="row row-cols-4 py-2">
          ${formerMembers}
          <div class="col-sm"></div>
        </div>
      </section>

      <section class="staff-mobile py-2 mb-5">
        <div class="carousel-slide">${memberCard(activeMember)}</div>
        <div class="carousel-controls">
          <button type="button" class="pager__arrow" data-carousel-step="-1" aria-label="Previous staff member">
            <span aria-hidden="true">&laquo;</span>
          </button>
          <p class="carousel-status">${state.carouselIndex + 1} / ${MEMBERS.length}</p>
          <button type="button" class="pager__arrow" data-carousel-step="1" aria-label="Next staff member">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </div>
      </section>

      <div class="py-2 my-2">
        <hr>
        <h2>Contact Us</h2>
        <p>
          We’re always looking to expand our team. If you believe that your skills can be beneficial to our club, feel free to contact us about it. We’re currently in need of promoters and proofreaders, but we’re open for suggestions as well!
        </p>
        <section class="feedback-callout">
          <div class="feedback-callout__copy">
            <p class="feedback-callout__eyebrow">Feedback</p>
            <p class="feedback-callout__message">We would trully appreaciate you leaving your feedback under the form below!</p>
          </div>
          <figure class="feedback-callout__qr">
            <img src="images/qr/unnamed.jpg" alt="QR code linking to the feedback form">
          </figure>
        </section>
      </div>
    </section>
  `;
}

function renderGallery() {
  return `
    <section class="gallery-page">
      <h1>Gallery</h1>
      <div class="gallery-shell">
        <div class="gallery-intro">
          <p class="gallery-intro__eyebrow">Club Photos</p>
          <h2>Moments from Kaizen Debate Club</h2>
        </div>
        <div class="gallery-embed">
          <iframe
            src="${GALLERY_EMBED_URL}"
            title="Kaizen Debate Club photo gallery"
            loading="lazy"
            referrerpolicy="no-referrer"
          ></iframe>
        </div>
      </div>
    </section>
  `;
}

function renderPresentation() {
  const remaining = getPresentationRemainingMs();
  const presetItems = PRESENTATION_CONFIGS.map((config) => `
    <button
      type="button"
      class="presentation-config ${state.presentationSelectedConfig === config.id ? "is-active" : ""}"
      data-presentation-config="${config.id}"
    >
      <span class="presentation-config__label">${escapeHtml(config.label)}</span>
      <span class="presentation-config__meta">${config.tickets.length} tickets</span>
    </button>
  `).join("");
  const ticketCards = state.presentationTickets.length
    ? state.presentationTickets
        .map(
          (ticket, index) => `
            <article class="presentation-ticket">
              <div class="presentation-ticket__index">${index + 1}</div>
              <div class="presentation-ticket__body">
                <p class="presentation-ticket__label">Motion</p>
                <p class="presentation-ticket__text">${escapeHtml(ticket)}</p>
              </div>
              <button type="button" class="presentation-ticket__remove" data-ticket-remove="${index}" aria-label="Remove motion ${index + 1}">
                Remove
              </button>
            </article>
          `
        )
        .join("")
    : `
      <div class="presentation-empty">
        <p>No voting tickets yet. Add motions during the meeting and they will appear here for the vote.</p>
      </div>
    `;
  const configListContent = presetItems || `<div class="presentation-empty"><p>No meeting configs available.</p></div>`;

  return `
    <section class="presentation-page">
      <h1>Presentation</h1>
      <div class="presentation-layout">
        <aside class="presentation-configs">
          <p class="presentation-configs__eyebrow">Meeting configs</p>
          <div class="presentation-configs__list">
            ${configListContent}
          </div>
        </aside>

        <div class="presentation-shell">
          <div class="presentation-tabs-row">
          <nav class="presentation-tabs" aria-label="Presentation tools">
            <button type="button" class="presentation-tab ${state.presentationTab === "stopwatch" ? "is-active" : ""}" data-presentation-tab="stopwatch">
              Stopwatch
            </button>
            <button type="button" class="presentation-tab ${state.presentationTab === "voting" ? "is-active" : ""}" data-presentation-tab="voting">
              Voting
            </button>
          </nav>
          <p class="presentation-shortcuts">Shortcuts: <kbd>1</kbd> Stopwatch, <kbd>2</kbd> Voting, <kbd>&larr;</kbd>/<kbd>&rarr;</kbd> switch tabs</p>
          </div>

          ${
            state.presentationTab === "stopwatch"
              ? `
                <section class="presentation-panel">
                <div class="presentation-timer-block">
                  <div class="presentation-timer-face">
                    <p class="presentation-timer-status" data-presentation-status>${state.presentationTimerRunning ? "Running" : "Ready"}</p>
                    <p class="presentation-timer-value" data-presentation-time>${formatPresentationTime(remaining)}</p>
                    <div class="presentation-progress-line" aria-hidden="true">
                      <span class="presentation-progress-line__fill" data-presentation-progress style="--presentation-progress: ${Math.max(0, Math.min(1, remaining / Math.max(1000, state.presentationPresetSeconds * 1000)))};"></span>
                    </div>
                  </div>
                  <div class="presentation-presets">
                    ${[60, 120, 180].map((seconds) => `
                      <button
                        type="button"
                        class="presentation-preset ${state.presentationPresetSeconds === seconds ? "is-active" : ""}"
                        data-presentation-preset="${seconds}"
                      >
                        ${Math.floor(seconds / 60)} min
                      </button>
                    `).join("")}
                    <form class="presentation-custom-time" data-presentation-custom-time>
                      <label class="presentation-custom-time__field">
                        <span class="presentation-custom-time__label">Custom</span>
                        <input
                          type="number"
                          min="0.25"
                          step="0.25"
                          inputmode="decimal"
                          class="presentation-custom-time__input"
                          data-presentation-custom-minutes
                          value="${escapeHtml(state.presentationCustomMinutes)}"
                        >
                        <span class="presentation-custom-time__unit">min</span>
                      </label>
                      <button type="submit" class="presentation-preset presentation-preset--custom">Apply</button>
                    </form>
                  </div>

                  <div class="presentation-controls">
                    <button type="button" class="btn" data-presentation-action="start">
                      ${state.presentationTimerRunning ? "Resume" : "Start"}
                    </button>
                    <button type="button" class="btn" data-presentation-action="pause">Pause</button>
                    <button type="button" class="btn" data-presentation-action="reset">Reset</button>
                  </div>
                </div>

                <div class="presentation-copy">
                  <label class="presentation-field">
                    <span class="presentation-field__label">Motion</span>
                    <textarea class="presentation-field__input presentation-field__input--motion" data-presentation-motion rows="3">${escapeHtml(state.presentationMotion)}</textarea>
                  </label>
                  <label class="presentation-field">
                    <span class="presentation-field__label">Definition</span>
                    <textarea class="presentation-field__input presentation-field__input--definition" data-presentation-definition rows="5">${escapeHtml(state.presentationDefinition)}</textarea>
                  </label>
                </div>
                </section>
              `
              : `
                <section class="presentation-panel presentation-panel--voting">
                <div class="presentation-voting-head">
                  <div>
                    <p class="presentation-voting-head__eyebrow">Meeting motions</p>
                    <h2>Voting tickets</h2>
                  </div>
                  <p class="presentation-voting-head__count">${state.presentationTickets.length} / 5 tickets</p>
                </div>

                <form class="presentation-ticket-form" data-ticket-form>
                  <textarea
                    class="presentation-ticket-form__input"
                    data-ticket-input
                    rows="3"
                    placeholder="Add a motion to the voting board"
                  >${escapeHtml(state.presentationTicketDraft)}</textarea>
                  <button
                    type="submit"
                    class="btn"
                    ${state.presentationTickets.length >= 5 ? "disabled" : ""}
                  >
                    Add ticket
                  </button>
                </form>

                <div class="presentation-ticket-grid">
                  ${ticketCards}
                </div>
                </section>
              `
          }
        </div>
      </div>
    </section>
  `;
}

function renderMainContent() {
  if (state.route === "rules") return renderRules();
  if (state.route === "gallery") return renderGallery();
  if (state.route === "presentation") return renderPresentation();
  if (state.route === "joinus") return renderJoinUs();
  if (state.route === "aboutus") return renderAboutUs();
  return renderHome();
}

function renderApp() {
  const app = document.getElementById("app");
  if (!app) return;
  const fullscreenLabel = isFullscreenActive() ? "Exit Fullscreen" : "Fullscreen";
  const mainClass = state.route === "presentation" ? "site-main site-main--presentation" : "site-main";

  const navLinks = ROUTES.map((route) => {
    const activeClass = route.id === state.route ? "is-current" : "";
    return `<li class="nav-item"><a class="nav-link ${activeClass}" href="#/${route.id}">${escapeHtml(route.label)}</a></li>`;
  }).join("");

  app.innerHTML = `
    <header>
      <nav class="site-nav site-nav--desktop" aria-label="Primary">
        <div class="navbar navbar-expand-sm site-nav__desktop-row">
          <ul class="navbar-nav">
            ${navLinks}
          </ul>
          <button type="button" class="site-fullscreen-btn" data-fullscreen-toggle>
            ${fullscreenLabel}
          </button>
        </div>
      </nav>

      <nav class="site-nav site-nav--mobile" aria-label="Primary">
        <div class="container-fluid">
          <div class="site-nav__mobile-bar">
            <a class="site-nav__brand" href="#/home">Kaizen Debate Club</a>
            <div class="site-nav__mobile-actions">
              <button type="button" class="site-fullscreen-btn site-fullscreen-btn--mobile" data-fullscreen-toggle>
                ${fullscreenLabel}
              </button>
              <button
                class="site-toggler"
                type="button"
                aria-expanded="${state.mobileMenuOpen ? "true" : "false"}"
                aria-controls="site-mobile-menu"
                data-mobile-toggle
              >
                <span class="site-toggler__line"></span>
                <span class="site-toggler__line"></span>
                <span class="site-toggler__line"></span>
              </button>
            </div>
          </div>
          <div id="site-mobile-menu" class="site-mobile-menu ${state.mobileMenuOpen ? "is-open" : ""}">
            <ul class="navbar-nav ms-auto">
              ${navLinks}
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <main class="${mainClass}">
      ${renderMainContent()}
    </main>

    <footer id="footer" class="container-fluid mt-auto site-footer">
      <div class="row py-2">
        <div class="col text-center">
          <div class="row">
            <a href="#/home" class="py-1">Kaizen Debate Club</a>
          </div>
          <a class="icon" href="#/home">
            <img src="images/icons/logo.png" alt="Our Logo">
          </a>
        </div>

        <div class="col d-flex justify-content-center">
          <a class="pt-2" href="https://pja.edu.pl/en/">
            <img id="pjait_logo" src="images/icons/logo-pjatk-white-text.png" width="108" height="56" alt="Polish-Japanese Academy of Information Technology">
          </a>
        </div>

        <div class="col socials-block">
          <p class="socials-title">Follow our socials to stay up to date!</p>
          <div class="social-columns">
            <a class="icon" href="https://www.instagram.com/kaizendebateclub/">
              <img src="images/icons/instagram_logo_colorfull.svg" alt="Our Instagram">
            </a>
            <a class="icon" href="https://t.me/+eCriPG7oRrxjN2Uy">
              <img src="images/icons/telegram_logo_colorfull.svg" alt="Our Telegram">
            </a>
            <a class="icon" href="https://www.linkedin.com/company/kaizen-debate-club">
              <img src="images/icons/linkedin_logo_colorfull.svg" alt="Our LinkedIn">
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;

  bindEvents(app);
}

function bindEvents(app) {
  const toggle = app.querySelector("[data-mobile-toggle]");
  if (toggle) {
    toggle.addEventListener("click", () => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
      renderApp();
    });
  }

  app.querySelectorAll(".site-mobile-menu a, .site-nav--desktop a").forEach((link) => {
    link.addEventListener("click", () => {
      state.mobileMenuOpen = false;
    });
  });

  app.querySelectorAll("[data-fullscreen-toggle]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await toggleFullscreenMode();
        renderApp();
      } catch {
        // Ignore rejected fullscreen requests from the browser.
      }
    });
  });

  app.querySelectorAll("[data-rule-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeRule = button.getAttribute("data-rule-tab");
      renderApp();
      const activeButton = document.querySelector(`[data-rule-tab="${state.activeRule}"]`);
      activeButton?.scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });
    });
  });

  app.querySelectorAll("[data-scroll-rules]").forEach((button) => {
    button.addEventListener("click", () => {
      const strip = app.querySelector("[data-rules-strip]");
      if (!strip) return;
      const direction = Number(button.getAttribute("data-scroll-rules")) || 0;
      const amount = Math.round(strip.clientWidth * 0.7) * direction;
      strip.scrollBy({ left: amount, behavior: "smooth" });
    });
  });

  app.querySelectorAll("[data-carousel-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const step = Number(button.getAttribute("data-carousel-step")) || 0;
      state.carouselIndex = (state.carouselIndex + step + MEMBERS.length) % MEMBERS.length;
      renderApp();
    });
  });

  app.querySelectorAll("[data-presentation-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      setPresentationTab(button.getAttribute("data-presentation-tab") || "stopwatch");
    });
  });

  app.querySelectorAll("[data-presentation-config]").forEach((button) => {
    button.addEventListener("click", () => {
      const configId = button.getAttribute("data-presentation-config");
      applyPresentationConfig(configId);
      renderApp();
    });
  });

  app.querySelectorAll("[data-presentation-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      const seconds = Number(button.getAttribute("data-presentation-preset")) || 180;
      setPresentationDuration(seconds);
      renderApp();
    });
  });

  const customMinutesInput = app.querySelector("[data-presentation-custom-minutes]");
  if (customMinutesInput) {
    customMinutesInput.addEventListener("input", (event) => {
      state.presentationCustomMinutes = event.target.value;
    });
  }

  const customTimeForm = app.querySelector("[data-presentation-custom-time]");
  if (customTimeForm) {
    customTimeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const nextMinutes = Number(state.presentationCustomMinutes);
      if (!Number.isFinite(nextMinutes) || nextMinutes <= 0) return;
      setPresentationDuration(nextMinutes * 60);
      renderApp();
    });
  }

  app.querySelectorAll("[data-presentation-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.getAttribute("data-presentation-action");
      if (action === "start") {
        const remaining = getPresentationRemainingMs();
        state.presentationRemainingMs = remaining;
        state.presentationTimerEndsAt = Date.now() + remaining;
        state.presentationTimerRunning = true;
        ensurePresentationTimerInterval();
        updatePresentationTimerUi();
        renderApp();
      }
      if (action === "pause") {
        state.presentationRemainingMs = getPresentationRemainingMs();
        state.presentationTimerRunning = false;
        state.presentationTimerEndsAt = null;
        stopPresentationTimerInterval();
        renderApp();
      }
      if (action === "reset") {
        state.presentationRemainingMs = state.presentationPresetSeconds * 1000;
        state.presentationTimerRunning = false;
        state.presentationTimerEndsAt = null;
        stopPresentationTimerInterval();
        renderApp();
      }
    });
  });

  const motionInput = app.querySelector("[data-presentation-motion]");
  if (motionInput) {
    motionInput.addEventListener("input", (event) => {
      state.presentationMotion = event.target.value;
    });
  }

  const definitionInput = app.querySelector("[data-presentation-definition]");
  if (definitionInput) {
    definitionInput.addEventListener("input", (event) => {
      state.presentationDefinition = event.target.value;
    });
  }

  const ticketInput = app.querySelector("[data-ticket-input]");
  if (ticketInput) {
    ticketInput.addEventListener("input", (event) => {
      state.presentationTicketDraft = event.target.value;
    });
  }

  const ticketForm = app.querySelector("[data-ticket-form]");
  if (ticketForm) {
    ticketForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const nextTicket = state.presentationTicketDraft.trim();
      if (!nextTicket || state.presentationTickets.length >= 5) return;
      state.presentationTickets = [...state.presentationTickets, nextTicket];
      state.presentationTicketDraft = "";
      renderApp();
    });
  }

  app.querySelectorAll("[data-ticket-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.getAttribute("data-ticket-remove"));
      state.presentationTickets = state.presentationTickets.filter((_, itemIndex) => itemIndex !== index);
      renderApp();
    });
  });

  if (state.route === "presentation" && state.presentationTab === "stopwatch") {
    updatePresentationTimerUi();
    ensurePresentationTimerInterval();
  } else {
    stopPresentationTimerInterval();
  }
}

window.addEventListener("hashchange", () => {
  state.route = getRouteFromHash();
  state.mobileMenuOpen = false;
  if (state.route !== "presentation") {
    stopPresentationTimerInterval();
  }
  renderApp();
});

window.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash) {
    window.location.hash = "/home";
  }

  state.route = getRouteFromHash();
  renderApp();
});

document.addEventListener("fullscreenchange", () => {
  renderApp();
});

document.addEventListener("keydown", (event) => {
  if (state.route !== "presentation" || isEditableTarget(event.target)) return;
  if (event.altKey || event.ctrlKey || event.metaKey) return;

  if (event.key === "1") {
    event.preventDefault();
    setPresentationTab("stopwatch");
    return;
  }

  if (event.key === "2") {
    event.preventDefault();
    setPresentationTab("voting");
    return;
  }

  const currentIndex = PRESENTATION_TABS.indexOf(state.presentationTab);
  if (currentIndex === -1) return;

  if (event.key === "ArrowRight") {
    event.preventDefault();
    setPresentationTab(PRESENTATION_TABS[(currentIndex + 1) % PRESENTATION_TABS.length]);
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    setPresentationTab(PRESENTATION_TABS[(currentIndex - 1 + PRESENTATION_TABS.length) % PRESENTATION_TABS.length]);
  }
});
