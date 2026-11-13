export const USER_PROFILE = {
  id: 'USR-0032',
  name: 'Arthur Morgan',
  username: 'Arthur32_',
  email: 'Arthur@exemple.fr',
  avatarUrl: '/images/arthur.jpeg',
  bannerUrl: '/images/BIM_Photo.jpg',
  memberSince: 'SEPTEMBER 2026',
  stats: {
    channelsFollowed: 24,
    videosWatched: 18,
    videosPosted: 3,
  },
  isHistoryPrivate: true,
};

export const WATCH_HISTORY = [
  {
    id: 'hist-001',
    title: 'A night on the edge of the unknown.',
    thumbnailUrl: '/images/BIM_Photo.jpg',
    creator: {
      username: 'Sadie Adler',
      avatarUrl: '/images/sadie.jpeg',
    },
    watchedAt: 'Today · 20:41',
    statusText: 'Live · Watching now',
  },
  {
    id: 'hist-002',
    title: 'Behind the Scenes: How I Create Educational Content',
    thumbnailUrl: '/images/BIM_Photo.jpg',
    creator: {
      username: 'John Marston',
      avatarUrl: '/images/jhon.webp',
    },
    watchedAt: 'Today · 18:12',
    statusText: '08:42 of 24:16',
  },
  {
    id: 'hist-003',
    title: "Night City hasn't given up all its secrets (PART 1)",
    thumbnailUrl: '/images/BIM_Photo.jpg',
    creator: {
      username: 'Micah Bell',
      avatarUrl: '/images/Micah.webp',
    },
    watchedAt: 'Yesterday · 22:16',
    statusText: '34:18 of 46:32',
  },
  {
    id: 'hist-004',
    title: "We're composing together until midnight",
    thumbnailUrl: '/images/BIM_Photo.jpg',
    creator: {
      username: 'Dutch van der Linde',
      avatarUrl: '/images/dutch.webp',
    },
    watchedAt: 'Oct 8 · 21:30',
    statusText: 'Finished · 1:12:08',
  },
];

export const POSTED_VIDEOS = [
  {
    id: 'video-101',
    title: 'A study in light and shadows',
    thumbnailUrl: '/images/BIM_Photo.jpg',
    creator: {
      id: 'USR-0032',
      username: 'Arthur Morgan',
      avatarUrl: '/images/arthur.jpeg',
      verified: true,
    },
    views: 246,
    publishedAt: 'Oct 6, 2026',
    duration: '06:48',
    status: 'Published',
    featured: true,
  },
  {
    id: 'video-102',
    title: 'Night walks: a city after dark',
    thumbnailUrl: '/images/BIM_Photo.jpg',
    creator: {
      id: 'USR-0032',
      username: 'Arthur Morgan',
      avatarUrl: '/images/arthur.jpeg',
      verified: true,
    },
    views: 183,
    publishedAt: 'Oct 3, 2026',
    duration: '08:12',
    status: 'Published',
    featured: true,
  },
  {
    id: 'video-103',
    title: 'Sounds of a quiet evening',
    thumbnailUrl: '/images/BIM_Photo.jpg',
    creator: {
      id: 'USR-0032',
      username: 'Arthur Morgan',
      avatarUrl: '/images/arthur.jpeg',
      verified: true,
    },
    views: 92,
    publishedAt: 'Sep 28, 2026',
    duration: '04:36',
    status: 'Published',
    featured: false,
  },
];