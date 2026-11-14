export const categories = [
  "For you",
  "Subscriptions",
  "Video games",
  "Cinema & creation",
  "Education",
  "Music",
  "Discussion",
];

export const liveStreams = [
  {
    id: "night-city",
    title: "Night City hasn't given up all its secrets (PART 2 - Final Part)",
    creator: "Micah Bell",
    category: "Video games",
    subscribed: true,
    viewers: "1.8K",
    image: "../../../public/images/street.avif",
    avatar: "../../../public/images/Micah.webp",
  },
  {
    id: "midnight-composition",
    title: "We're composing together until midnight",
    creator: "Dutch van der Linde",
    category: "Music",
    subscribed: false,
    viewers: "856",
    image: "../../../public/images/musicStudio.avif",
    avatar: "../../../public/images/dutch.webp",
  },
  {
    id: "behind-the-scenes",
    title: "Behind the Scenes: How I Create Educational Content",
    creator: "John Marston",
    category: "Cinema & creation",
    subscribed: true,
    viewers: "643",
    image: "../../../public/images/IT.avif",
    avatar: "../../../public/images/jhon.webp",
  },
];

export const directMessages = [
  {
    name: "Sadie Adler",
    message: "Want to join the Beyond stream tonight?",
    time: "2 min",
    avatar: "../../../public/images/sadie.jpeg",
  },
  {
    name: "Micah Bell",
    message: "Ready for a Night City session?",
    time: "18 min",
    avatar: "../../../public/images/Micah.webp",
  },
  {
    name: "Javier Escuella",
    message: "Catch you later, going offline for tonight!",
    time: "1 hr",
    avatar: "../../../public/images/javier.jpg",
  },
];

export const liveInvitations = [
  {
    name: "Sadie Adler",
    details: "Beyond · Duo stream with Dutch van der Linde",
    time: "21:00",
    avatar: "../../../public/images/sadie.jpeg",
  },
  {
    name: "John Marston",
    details: "Education & Talks · Live Q&A",
    time: "22:30",
    avatar: "../../../public/images/jhon.webp",
  },
];

export const CURRENT_USER = {
  id: "arthur",
  name: "Arthur Morgan",
  handle: "@Arthur32_",
  avatar: "/images/arthur.jpeg",
};

export const MOCK_CONVERSATIONS = [
  {
    id: "conv-sadie",
    status: "accepted",
    unreadCount: 1,
    dateLabel: "Today · October 11, 2026",
    user: {
      id: "sadie",
      name: "Sadie Adler",
      handle: "@sadie_adler",
      category: "Creation & cinema",
      online: true,
      verified: true,
      avatar: "/images/sadie.jpeg",
    },
    lastMessage: {
      text: "Perfect. See you in the live!",
      time: "20:42",
    },
    messages: [
      {
        id: "m1",
        senderId: "sadie",
        text: "Hey Arthur! Want to join the Beyond stream tonight? We're looking at all the details we missed the first time.",
        time: "20:35",
      },
      {
        id: "m2",
        senderId: "arthur",
        text: "Absolutely. The lighthouse scene has been on my mind all day.",
        time: "20:38",
        read: true,
      },
      {
        id: "m3",
        senderId: "sadie",
        text: "Then you're in the right place. Dutch is joining me at 21:00 for a behind-the-scenes Q&A.",
        time: "20:39",
      },
      {
        id: "m4",
        senderId: "sadie",
        type: "live-invite",
        tag: "LIVE INVITATION",
        title: "Cinema told by two.",
        subtitle: "Sadie Adler × Dutch van der Linde · Tonight at 21:00",
      },
      {
        id: "m5",
        senderId: "arthur",
        text: "I'm watching now. Can't wait for the duo!",
        time: "20:41",
        read: true,
      },
      {
        id: "m6",
        senderId: "sadie",
        text: "Perfect. See you in the live!",
        time: "20:42",
      },
    ],
  },
  {
    id: "conv-micah",
    status: "accepted",
    unreadCount: 2,
    dateLabel: "Today · October 11, 2026",
    user: {
      id: "micah",
      name: "Micah Bell",
      handle: "@micah_bell",
      category: "Video games",
      online: true,
      verified: false,
      avatar: "/images/Micah.webp",
    },
    lastMessage: {
      text: "Ready for a Night City session?",
      time: "20:24",
    },
    messages: [
      {
        id: "m-micah-1",
        senderId: "arthur",
        text: "Hey Micah, still streaming tonight?",
        time: "20:20",
        read: true,
      },
      {
        id: "m-micah-2",
        senderId: "micah",
        text: "Yeah man, just setting up the lobby.",
        time: "20:23",
      },
      {
        id: "m-micah-3",
        senderId: "micah",
        text: "Ready for a Night City session?",
        time: "20:24",
      },
    ],
  },
  {
    id: "conv-dutch",
    status: "accepted",
    unreadCount: 0,
    dateLabel: "Today · October 11, 2026",
    user: {
      id: "dutch",
      name: "Dutch van der Linde",
      handle: "@dutch_vdl",
      category: "Art & discussion",
      online: false,
      verified: true,
      avatar: "/images/dutch.webp",
    },
    lastMessage: {
      text: "You: Sounds awesome, see you at 21:00!",
      time: "19:38",
    },
    messages: [
      {
        id: "m-dutch-1",
        senderId: "dutch",
        text: "Arthur, are you joining Sadie's stream tonight?",
        time: "19:32",
      },
      {
        id: "m-dutch-2",
        senderId: "arthur",
        text: "Count me in, I wouldn't miss it.",
        time: "19:34",
        read: true,
      },
      {
        id: "m-dutch-3",
        senderId: "dutch",
        text: "I'll bring the soundtrack.",
        time: "19:36",
      },
      {
        id: "m-dutch-4",
        senderId: "arthur",
        text: "Sounds awesome, see you at 21:00!",
        time: "19:38",
        read: true,
      },
    ],
  },
  {
    id: "conv-john",
    status: "accepted",
    unreadCount: 0,
    dateLabel: "Yesterday",
    user: {
      id: "john",
      name: "John Marston",
      handle: "@john_marston",
      category: "Education",
      online: false,
      verified: false,
      avatar: "/images/jhon.webp",
    },
    lastMessage: {
      text: "You: Anytime man, keep it up!",
      time: "Yesterday",
    },
    messages: [
      {
        id: "m-john-1",
        senderId: "john",
        text: "Hey Arthur, did you check out my new editing guide?",
        time: "Yesterday",
      },
      {
        id: "m-john-2",
        senderId: "arthur",
        text: "Yeah, super clear and helpful as always!",
        time: "Yesterday",
        read: true,
      },
      {
        id: "m-john-3",
        senderId: "john",
        text: "Thanks for watching the tutorial.",
        time: "Yesterday",
      },
      {
        id: "m-john-4",
        senderId: "arthur",
        text: "Anytime man, keep it up!",
        time: "Yesterday",
        read: true,
      },
    ],
  },
  {
    id: "req-javier",
    status: "pending",
    unreadCount: 0,
    dateLabel: "Oct 11, 2026 · 19:42",
    user: {
      id: "javier",
      name: "Javier Escuella",
      handle: "@javier_escuella",
      category: "Music & live",
      online: false,
      verified: false,
      avatar: "/images/javier.jpg",
    },
    lastMessage: {
      text: '"Hey Arthur, want to exchange a few ideas for the next stream?"',
      time: "Oct 11, 2026 · 19:42",
    },
    messages: [
      {
        id: "m-javier-1",
        senderId: "javier",
        text: '"Hey Arthur, want to exchange a few ideas for the next stream?"',
        time: "Oct 11, 2026 · 19:42",
      },
    ],
  },
];
