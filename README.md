# B.I.M Stream

**Be In your Mood Stream (B.I.M Stream)** is a streaming application that lets users publish videos, host live streams, react to videos, and participate in the streams they watch.

This repository contains the product, technical, and operational documentation for B.I.M Stream.

---

## Table of Contents

- [Overview](#overview)
- [Core Features](#core-features)
- [User Roles](#user-roles)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [Video Publishing](#video-publishing)
- [Live Streaming](#live-streaming)
- [Reactions and Engagement](#reactions-and-engagement)
- [Roadmap](#roadmap)
- [License](#license)

---

## Overview

B.I.M Stream enables creators and viewers to interact in one platform:

- Creators upload and publish videos.
- Creators start live streams and engage with their audience in real time.
- Viewers react to videos and participate in live streams.
- The platform supports discovery, engagement, moderation, and creator growth.

### Product Goals

1. Make video publishing simple and fast.
2. Provide reliable, low-latency live streaming.
3. Encourage interaction through reactions, comments, and live participation.
4. Keep the community safe through moderation and reporting tools.
5. Scale smoothly as creators, viewers, and concurrent streams grow.

---

## Core Features

### Video Publishing

- Upload videos from mobile or web.
- Support common video formats such as MP4, MOV, and WebM.
- Automatic transcoding into multiple resolutions.
- Video thumbnails, titles, descriptions, tags, and categories.
- Draft, scheduled, published, and archived states.
- View counts, likes, reactions, comments, and share links.

### Live Streaming

- Start a live stream from the app or creator dashboard.
- Real-time chat and audience participation.
- Live reactions and viewer counters.
- Stream preview before going live.
- End stream manually or automatically after inactivity.
- Save completed live streams as replay videos.

### Viewer Participation

- Watch videos and live streams.
- React to videos with emojis or custom reactions.
- Comment on videos.
- Join live chat.
- Follow creators and receive notifications.
- Share videos and streams externally.

### Discovery

- Home feed with recommended videos.
- Trending videos and live streams.
- Search by title, creator, tag, or category.
- Category and hashtag browsing.
- Creator profiles with video libraries and live status.

---

## User Roles

| Role | Capabilities |
|---|---|
| Guest | Browse public videos and streams, view limited content |
| Viewer | Watch, react, comment, follow creators, participate in live chat |
| Creator | Publish videos, start live streams, manage content and audience |
| Moderator | Review reports, remove violating content, warn or restrict users |
| Administrator | Manage users, roles, platform settings, monetization, and moderation policies |

---

## Getting Started

### Installation

```bash
git clone [https://github.com/BIMdevB2/BIM-Stream.git]((https://github.com/BIMdevB2/BIM-Stream.git))
cd bim-stream
cp .env.example .env
```

## Architecture

B.I.M Stream follows a modular architecture:

```
B.I.M Stream/
├── backend/              # Contains all server-side code and APIs
│   
├── frontend/             # Contains all client-side code for user interfaces
│   ├── src/              # Main source code for frontend applications
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Application pages/views
│   │   ├── assets/       # Images, fonts, and other static assets
│   │   ├── services/     # Frontend services for API interaction
│   │   └── store/        # State management (e.g., Redux, Vuex, Context API)
│   ├── public/           # Publicly accessible assets (e.g., index.html)
│   ├── tests/            # Frontend unit and E2E tests
│   └── package.json      # Frontend dependencies and scripts
├── docs/                 # Project documentation (e.g., API docs, setup guides)
├── scripts/              # Automation scripts (e.g., deployment, data seeding)
├── .github/              # GitHub Actions or other CI/CD configurations
├── .gitignore            # Specifies intentionally untracked files to ignore
├── CONTRIBUTING.md       # Project contributing rules
├── LICENSE               # Project usage authorization
└── README.md             # Project overview and quick start guide (This document)
```

## Video Publishing

### Upload Flow

1. User selects a video file.
2. Client requests a secure upload URL.
3. Video is uploaded directly to object storage.
4. Backend creates a video record with status `processing`.
5. Transcoding worker generates multiple renditions.
6. Thumbnail and preview assets are generated.
7. Video status changes to `ready`.
8. Creator publishes the video or schedules it.

### Supported Video States

| State | Description |
|---|---|
| `draft` | Created but not visible publicly |
| `processing` | Uploaded and being transcoded |
| `ready` | Processed and available to publish |
| `scheduled` | Set to publish at a future time |
| `published` | Publicly visible |
| `unlisted` | Accessible only by direct link |
| `archived` | Hidden from feeds and search |
| `removed` | Removed for policy or legal reasons |

---

## Reactions and Engagement

### Video Reactions

- Users can react to published videos.
- One reaction type per user per video by default.
- Reaction counts are aggregated asynchronously.
- Creators can view reaction analytics.

### Comments

- Comments support text, emojis, and timestamps.
- Comments can be liked, reported, deleted, and moderated.
- Creators can pin, hide, or disable comments.

---

## Roadmap

### Phase 1: Core Platform

- User accounts and profiles
- Video upload and playback
- Basic reactions and comments
- Creator channels

### Phase 2: Live Streaming

- Live stream creation
- Real-time chat
- Live reactions
- Stream replays

### Phase 3: Growth and Discovery

- Recommendations
- Search and trending
- Notifications
- Creator analytics

### Phase 4: Community and Monetization

- Advanced moderation tools
- Creator subscriptions
- Virtual gifts
- Paid live events
- Ad-supported content options

---

## License

This project is under Apache 2.0 license