import { assets, type Asset } from "./assets";

/** Anchor of the hero KYC form — every "open account" CTA points here. */
export const OPEN_ACCOUNT_HREF = "https://ekyc.arihantcapital.com/";
export const TERMS_HREF = "https://www.arihantcapital.com/termsandconditions"; // T&C URL
export const PRIVACY_HREF = "https://www.arihantcapital.com/privacyandsecurity"; // Privacy Policy URL
export const SUPPORT_HREF = "https://support.arihantcapital.com/support/home"; // support page URL
export const BLOGS_HREF = "https://www.arihantplus.com/blogs"; // blog listing URL
export const YOUTUBE_HREF = "https://www.youtube.com/@arihant_plus"; // Arihant's channel URL
export const VIDEO_HREF = "https://youtu.be/tfHBbSA_F_s"; // "How to open HUF demat account" video

export const highlights = ["Tax Advantages", "Trusted Since 1992", "100% Digital", "Dedicated Support"];

export const familyBenefits: { title: string; body: string; icon: Asset }[] = [
  {
    title: "A separate taxpayer",
    body: "Its own PAN and exemption limit. HUF income isn’t added to yours.",
    icon: assets.taxpayer,
  },
  {
    title: "One more IPO application",
    body: "Apply as a separate investor and boost your family’s allotment chances.",
    icon: assets.ipo,
  },
  {
    title: "Succession planning",
    body: "Simplifies intergenerational wealth transfer and keeps family assets structured and well-planned.",
    icon: assets.succession,
  },
  {
    title: "Built for the whole family",
    body: "Gifts, ancestral assets and returns in one account, run by the Karta.",
    icon: assets.family,
  },
];

export const steps = [
  { title: "Verify the Karta’s mobile", body: "Enter the number above and confirm with a one-time password." },
  { title: "Add HUF details", body: "Share the HUF’s PAN, verify bank account & take a photo" },
  { title: "e-Sign", body: "Review details and then esign with the Karta’s Aadhaar OTP." },
  { title: "Start investing", body: "You're done! Account will be activated upon verification" },
];

export const requiredDocuments = [
  "Karta & HUF PAN Card",
  "Karta Aadhar Card",
  "Karta Selfie",
  "HUF bank statement",
  "Co-Parcener list",
  "6-Months Bank Statement for F&O Trading",
];

export const arihantReasons = [
  {
    title: "100% digital account opening",
    body: "Zero paperwork. Submit documents online, eSign with Aadhaar OTP and open it seamlessly.",
  },
  {
    title: "Every asset, one app",
    body: "Stocks, F&O, ETFs, IPOs, gold, mutual funds and NCD for the HUF on ArihantPlus.",
  },
  {
    title: "Research you can act on",
    body: "Stock ideas, IPO analysis and market views from our award-winning Sebi-registered research team, right in the app.",
  },
  {
    title: "Unmatched service",
    body: "Great trading platforms with human support. Our team is always there for all your queries.",
  },
];

// NOTE: the desktop design shows "AMC ₹0.00", the mobile design "Annual Maintenance ₹300.00".
// Confirm the correct value with the business before going live.
export const charges = [
  { label: "Account Opening", value: "₹0.00" },
  { label: "AMC", value: "₹0.00", fullLabel: "Annual maintenance charge" },
];

export const stats = [
  { value: "34+", label: "Years" },
  { value: "2.5Lac+", label: "Clients" },
  { value: "1,000+", label: "Corporations" },
  { value: "125+", label: "Institutions" },
  { value: "800+", label: "Investment Centers" },
];

export const hufRoles = [
  { term: "Karta.", body: "The senior member who opens, operates and signs for the account." },
  { term: "Coparceners.", body: "Members by birth, sons and daughters alike, who share in the HUF’s assets." },
  { term: "Members.", body: "Others in the family, such as the Karta’s spouse, who are part of the HUF." },
];

export type Testimonial = {
  title: string;
  quote: string;
  author: string;
  avatar?: Asset;
  /** Fallback avatar: initial on a coloured circle */
  avatarColor?: string;
};

export const testimonials: Testimonial[] = [
  {
    title: "Awesome experience",
    quote:
      "Awesome experience. Finger print login feature, switching between multiple accounts, smooth and user friendly functions and many more features are really good.",
    author: "Sudeep Jain",
    avatar: assets.avatarSudeep,
  },
  {
    title: "Really Fast",
    quote:
      "this app is really fast. i am able to place orders in less than 2 seconds literally from searching to placing orders. maza aaya. highly recommended",
    author: "bala@1119",
    avatarColor: "#7c4ddb",
  },
  {
    title: "Love it",
    quote:
      "Amazing application and featuress. Being a begineer, I tried a few trading applications. This app gives you information about everything so it’s easier to understand markets. Love it",
    author: "Namita Shah",
    avatarColor: "#0b5ba8",
  },
];

// TODO: replace with real blog posts
export const blogPosts = [
  { title: "How do I open a HUF demat and trading account online with ArihantPlus?", readTime: "3 minutes read", href: "https://support.arihantplus.com/support/solutions/articles/33000316346-how-do-i-open-a-huf-demat-and-trading-account-online-with-arihantplus-" },
];

type FAQAnswer =
  | string
  | {
    type: "text";
    content: string;
  }
  | {
    type: "list";
    content: string[];
  };

type FAQ = {
  q: string;
  a: FAQAnswer[];
};

export const faqs: FAQ[] = [
  {
    q: "Can I open an HUF Trading and Demat Account online with Arihant Capital?",
    a: [
      {
        type: "text",
        content:
          "Yes. Arihant Capital provides a completely online account-opening facility for HUF (Hindu Undivided Family) accounts. The account is operated by the Karta of the HUF.",
      },
    ]
  },
  {
    q: "What documents are required to open an HUF account?",
    a: [
      {
        type: "text",
        content:
          "The following documents/details are required:",
      },
      {
        type: "list",
        content: [
          "HUF PAN Card",
          "Karta's PAN Card and Aadhaar Card",
          "HUF bank account details",
          "Details and signatures of all coparceners/members",
          "HUF address proof",
          "Karta's live selfie and specimen signature"
        ],
      },
    ],
  },
  {
    q: "Is it mandatory to have a bank account in the HUF's name?",
    a: [
      {
        type: "text",
        content:
          "Yes. The bank account must be in the name of the HUF. A personal savings account of the Karta or any coparcener cannot be used.",
      },
    ]
  },
  {
    q: "Do all HUF members need to complete Aadhaar verification and e-Sign?",
    a: [
      {
        type: "text",
        content:
          "No. Only the Karta needs to complete Aadhaar/Digi Locker verification, live selfie, and Aadhaar-based e-Sign. Other coparceners/members need to provide their details and signatures.",
      },
    ]
  },
  {
    q: "How much time does it take to activate an HUF account?",
    a: [
      {
        type: "text",
        content:
          "Generally, the account is activated within 15 minutes after successful Aadhaar e-Sign, subject to document verification and exchange confirmation.",
      },
    ]
  },
];

export type FooterLink = { label: string; href: string };

export const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Equity", href: "https://www.arihantcapital.com/equity-trading-account" },
      { label: "Mutual Funds & SIP", href: "https://www.arihantcapital.com/invest-in-mutual-funds" },
      { label: "NPS", href: "https://www.arihantcapital.com/national-pension-scheme-nps" },
      { label: "Fixed Income", href: "https://www.arihantcapital.com/fixed-income" },
    ],
  },
  {
    title: "Media Center",
    links: [
      { label: "About Us", href: "https://www.arihantcapital.com/about-us" },
      { label: "Investor Relations", href: "https://www.arihantcapital.com/investor-relations" },
      { label: "Press Releases", href: "https://www.arihantcapital.com/media-center/press-releases" },
    ],
  },
  {
    title: "Other Links",
    links: [
      { label: "Careers", href: "https://www.arihantcapital.com/careers" },
      { label: "Login to trade", href: "https://web.arihantplus.com/" },
    ],
  },
  {
    title: "Connect With Us",
    links: [
      { label: "Contact Us", href: "https://www.arihantcapital.com/contact-us" },
      { label: "Support", href: "https://support.arihantcapital.com/support/home" },
      { label: "Fund Transfer", href: "https://www.arihantcapital.com/fund-transfer" },
      { label: "Partner with us", href: "https://www.arihantcapital.com/business-partner" },
    ],
  },
];

export const importantLinks: FooterLink[] = [
  { label: "BSE", href: "https://www.bseindia.com" },
  { label: "NSE", href: "https://www.nseindia.com" },
  { label: "SEBI", href: "https://www.sebi.gov.in" },
];

export type SocialName = "facebook" | "linkedin" | "twitter" | "instagram" | "youtube";
export const socialLinks: { name: SocialName; label: string; href: string }[] = [
  { name: "facebook", label: "Facebook", href: "https://www.facebook.com/arihantcapitalmarket" },
  { name: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/arihant-capital-markets-ltd/mycompany/" },
  { name: "twitter", label: "X (Twitter)", href: "https://x.com/ArihantPlus" },
  { name: "instagram", label: "Instagram", href: "https://www.instagram.com/arihant_plus" },
  { name: "youtube", label: "YouTube", href: "https://www.youtube.com/@arihant_plus" },
];

export const reviews = [
  {
    "id": 32,
    "attributes": {
      "reviewer_name": "Nikita Bilala, Jaipur",
      "reviewer_place": null,
      "review_description": "<p>Most financial firms try to sell products. But Arihant was different. I reached out casually, just seeking an opinion, and I was surprised by how sincere their advisor was. He took time to understand my income, responsibilities, and dreams. He explained how mutual funds work, how I dont need a big amount to start investing through SIP and even shared insights on evaluating mutual funds schemes not just based on returns. He suggested a mix of mutual funds &nbsp;based on suitability. It’s been three years, and the results speak for themselves. I never felt sold to - I felt guided.</p>",
      "reviewer_image": {
        "data": {
          "id": 1055,
          "attributes": {
            "url": "https://d1uenl0z1eg3km.cloudfront.net/Nikita_Bilala_Jaipur_b487500d21.png",
            "alternativeText": "Nikita Bilala Jaipur",
            "mime": "image/png",
            "ext": ".png"
          }
        }
      }
    }
  },
  {
    "id": 31,
    "attributes": {
      "reviewer_name": "Ankit Agarwal, Dubai",
      "reviewer_place": null,
      "review_description": "<p>During the market crash last year in 2024, I was ready to withdraw everything. I was scared of losing my savings. But my Arihant advisor personally called me, explained the situation, and walked me through the historical cycles. He even rebalanced my portfolio into safer funds temporarily. That single piece of advice helped me avoid losses and stay on track. Having someone to talk to made all the difference.</p>",
      "reviewer_image": {
        "data": {
          "id": 1053,
          "attributes": {
            "url": "https://d1uenl0z1eg3km.cloudfront.net/Ankit_Agarwal_Dubai_0a42563e41.png",
            "alternativeText": "Ankit Agarwal Dubai",
            "mime": "image/png",
            "ext": ".png"
          }
        }
      }
    }
  },
  {
    "id": 30,
    "attributes": {
      "reviewer_name": "Nidhi Bakliwal, Indore",
      "reviewer_place": null,
      "review_description": "<p>I was totally confused about where to invest - debt funds, ELSS, large cap, hybrid—everything sounded the same. Arihant didn’t just give me a list - they explained everything patiently. Now, I understand my portfolio, how each fund works, and what goal it’s targeting. That education changed my mindset from ‘just investing’ to ‘investing smartly’.</p>",
      "reviewer_image": {
        "data": null
      }
    }
  },
  {
    "id": 33,
    "attributes": {
      "reviewer_name": "DEVEN",
      "reviewer_place": null,
      "review_description": "<p>First I thought its a boring app but after using it i felt good enjoy the trading its have many option in first use u will understand the easy process its seems boring but after using it feels good and motivate as for trading easy options supporting stuff solving customers query fast process and helpful and useful at same time …. All the best keep shining 💖😊</p>",
      "reviewer_image": {
        "data": null
      }
    }
  },
  {
    "id": 37,
    "attributes": {
      "reviewer_name": "Priyank Chourasiya",
      "reviewer_place": null,
      "review_description": "<p>Easy, Fast and smooth app and best futures for example Bracket Order and Cover Order GTD order available Best Recommendation stock news and chart option.</p>",
      "reviewer_image": {
        "data": null
      }
    }
  }
]
