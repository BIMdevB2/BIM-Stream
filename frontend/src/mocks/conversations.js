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
      text: "I'll bring the soundtrack.",
      time: "19:36",
    },
    messages: [
      {
        id: "m-dutch-1",
        senderId: "dutch",
        text: "I'll bring the soundtrack.",
        time: "19:36",
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
      text: "Thanks for watching the tutorial.",
      time: "Yesterday",
    },
    messages: [
      {
        id: "m-john-1",
        senderId: "john",
        text: "Thanks for watching the tutorial.",
        time: "Yesterday",
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
