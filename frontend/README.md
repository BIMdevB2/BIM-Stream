# B.I.M Stream — Frontend Organization

## 1. Overview and goals

B.I.M Stream (Be In your Mood Stream) is an application where users can publish videos,
watch and broadcast live streams, react to content, and participate in conversations.

The frontend will be developed in ReactJS.

We use a **feature-based** organization: each contibutor owns a coherent user journey,
while the application structure and reusable UI components are shared.

Goals:

- Avoid building three visually inconsistent interfaces.
- Reduce simultaneous changes to the same files.
- Reuse useful components and logic.
- Integrate everyone's work regularly.
- Make progress with mock data before the backend is available.

The routes, filenames, colors, and contracts below are proposals to agree on together.
Details that are difficult to read in the screenshot should be checked against the original designs.

## 2. Pages and routes

| Screen                             | React page         | Proposed route                                  |
| ---------------------------------- | ------------------ | ----------------------------------------------- |
| 1 — Registration                  | `RegisterPage`   | `/register`                                   |
| 2 — Login                         | `LoginPage`      | `/login`                                      |
| 3 — Home / discovery              | `HomePage`       | `/`                                           |
| 4 — Live stream and chat          | `LivePage`       | `/live/:streamId`                             |
| 5 — Video on demand               | `VideoPage`      | `/videos/:videoId`                            |
| 6 — Private messages              | `MessagesPage`   | `/messages` and `/messages/:conversationId` |
| 7 — User profile                  | `ProfilePage`    | `/users/:username`                            |
| 8 — Moderation and administration | `ModerationPage` | `/admin/moderation`                           |

Before implementing each screen, identify reusable elements: top bar, sidebar, video cards, avatars, buttons, and forms.

Follow this sequence:

1. Break down the design into components.
2. Build a static version using the data model.
3. Add interactions and state.

## 3. Component categories

| Category                   | Examples                                                | Location                    |
| -------------------------- | ------------------------------------------------------- | --------------------------- |
| Generic UI components      | `Button`, `Input`, `Avatar`, `Modal`, `Badge` | `shared/ui/`              |
| Reusable domain components | `VideoCard`, `VideoPlayer`, `ReactionBar`         | Inside the relevant feature |
| Page-specific components   | `ModerationQueue`, `ProfileHeader`, `LiveChat`    | Inside the relevant feature |

A component used only once can stay local. Do not try to make everything generic from the start.

## 4. Recommended directory structure

This example uses JavaScript and JSX.

```
bim-stream-frontend/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── App.jsx
│   │   ├── router.jsx
│   │   ├── providers.jsx
│   │   └── layouts/
│   │       ├── AuthLayout.jsx
│   │       ├── AppLayout.jsx
│   │       └── 
│   ├── features/
│   │   ├── auth/
│   │   │   ├── pages/
│   │   │   │   ├── LoginPage.jsx
│   │   │   │   └── RegisterPage.jsx
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   └── RegisterForm.jsx
│   │   │   ├── hooks/
│   │   │   ├── api/
│   │   │   │   └── auth.api.js
│   │   │   └── AuthProvider.jsx
│   │   ├── discovery/
│   │   │   ├── pages/
│   │   │   │   └── HomePage.jsx
│   │   │   └── components/
│   │   │       ├── FeaturedContent.jsx
│   │   │       └── MoodFilters.jsx
│   │   ├── videos/
│   │   │   ├── pages/
│   │   │   │   └── VideoPage.jsx
│   │   │   ├── components/
│   │   │   │   ├── VideoCard.jsx
│   │   │   │   ├── VideoPlayer.jsx
│   │   │   │   └── VideoGrid.jsx
│   │   │   ├── hooks/
│   │   │   └── api/
│   │   │       └── videos.api.js
│   │   ├── live/
│   │   │   ├── pages/
│   │   │   │   └── LivePage.jsx
│   │   │   ├── components/
│   │   │   │   ├── LiveChat.jsx
│   │   │   │   └── StreamInfo.jsx
│   │   │   ├── hooks/
│   │   │   └── api/
│   │   ├── interactions/
│   │   │   ├── components/
│   │   │   │   ├── ReactionBar.jsx
│   │   │   │   └── CommentThread.jsx
│   │   │   └── api/
│   │   ├── messages/
│   │   │   ├── pages/
│   │   │   │   └── MessagesPage.jsx
│   │   │   ├── components/
│   │   │   │   ├── ConversationList.jsx
│   │   │   │   ├── MessageThread.jsx
│   │   │   │   └── MessageComposer.jsx
│   │   │   ├── hooks/
│   │   │   └── api/
│   │   ├── profile/
│   │   │   ├── pages/
│   │   │   │   └── ProfilePage.jsx
│   │   │   ├── components/
│   │   │   │   └── ProfileHeader.jsx
│   │   │   └── api/
│   │   └── moderation/
│   │       ├── pages/
│   │       │   └── ModerationPage.jsx
│   │       ├── components/
│   │       │   ├── ModerationQueue.jsx
│   │       │   └── ReportDetails.jsx
│   │       └── api/
│   ├── shared/
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   ├── Avatar/
│   │   │   ├── Modal/
│   │   │   └── Badge/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── api/
│   │   │   └── client.js
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── styles/
│   │   │   ├── tokens.css
│   │   │   └── global.css
│   │   └── pages/
│   │       └── PageNotFound.jsx
│   │  
│   ├── mocks/
│   │   ├── users.js
│   │   ├── videos.js
│   │   ├── streams.js
│   │   └── conversations.js
│   ├── assets/
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── tests/
│   └── e2e/
├── .env.example
├── package.json
└── README.md
```

### Keep styles and tests next to their components

```
VideoCard.jsx
VideoCard.module.css
VideoCard.test.jsx
```

Create `hooks/`, `api/`, and `components/` directories only when needed. This structure is a target, not a requirement to create empty folders immediately.

### Dependency rules

- `shared/` must not depend on any feature.
- A page assembles components; it should not contain all of the screen's logic.
- Network requests go through `api/` files, rather than being implemented directly in every button.
- Domain components stay in their feature even when reused elsewhere: `VideoCard` stays in `videos/`, including when displayed on a profile.
- If two features start importing each other, extract their shared part or coordinate them through the page that assembles them.

## 5. Shared layouts

```
AuthLayout
├── Visual / introduction
└── Login or registration form

AppLayout
├── Header
├── Sidebar
└── Page content
```

Do not copy the header and navigation into every internal page.

With React Router, use nested routes and `<Outlet />` inside layouts to render child pages. Navigation changes can then be made in one place.

## 6. Work allocation

Each teammate should deliver complete functionality: interface, states, integration, and tests. Avoid a rigid split such as one person handling CSS, another components, and another APIs.

| Owner      | Main scope                                            | Related shared elements                         |
| ---------- | ----------------------------------------------------- | ----------------------------------------------- |
| Teammate A | Registration, login, profile                          | Forms, avatars, session management              |
| Teammate B | Home, video on demand                                 | Video cards, player, grids, reactions, comments |
| Teammate C | Live streaming and chat, private messages, moderation | Message composition, lists, moderation table    |

### Balance the workload

This allocation groups related components, but C's scope may be more complex because of real-time features and moderation.

- A helps with moderation after completing authentication and profile work.
- B provides a player that can be used by both VOD and live pages.
- C keeps public live chat and private messaging distinct, even when visual components are shared.
- Reassess the workload after estimating tasks.

Being the main owner means coordinating and reviewing, not being the only person allowed to edit the files.

## 7. Establish a common foundation first

### Decisions to make together

- [X] A shared styling approach, such as CSS Modules.
- [X] Icon library.
- [X] Route names.
- [X] Data and error formats.
- [X] Base components and visual rules.
- [X] Verification commands and Git conventions.

### Design tokens

Centralize colors, spacing, and border randing in `shared/styles/tokens.css`.

```css
:root {
  --color-bg: #0b0d10;
  --color-surface: #14181f;
  --color-border: #282e38;
  --color-text: #f5f6f8;
  --color-muted: #9ca3af;
  --color-primary: #ff8a24;

  --radius-sm: 6px;
  --radius-md: 10px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
}
```

### Initial work allocation

| Teammate | Initial work                              |
| -------- | ----------------------------------------- |
| A        | Forms, buttons, inputs                    |
| B        | Cards, player foundation, mock video data |
| C        | Layout, navigation, route list            |

Review this foundation together before building all screens.

## 8. Data contracts and backend integration

Agree on data shapes and component interfaces early so everyone can work in parallel.

### Example video data

```js
const video = {
  id: "video-001",
  title: "A night on the edge of the unknown",
  thumbnailUrl: "/images/video-001.jpg",
  playbackUrl: "/media/demo.mp4",
  creator: {
    id: "user-001",
    username: "arthur",
    avatarUrl: "/images/avatar-001.jpg",
  },
  views: 1240,
  durationSeconds: 480,
};
```

These URLs are illustrative: the corresponding assets must be provided before they can be used.

### Example player interface

```jsx
<VideoPlayer
  src={video.playbackUrl}
  poster={video.thumbnailUrl}
  isLive={false}
/>
```

Teammates should understand the accepted props without reading the entire component implementation.

## 9. Git workflow

### Short-lived branches per task

```text
main
├── feat/auth-pages
├── feat/home-feed
├── feat/videos
├── feat/private-messages
└── feat/user-profile
```

Rules:

- Keep `main` reusable.
- Each branch covers a limited task, not several weeks of work.
- Submit every change through a pull request.
- Have another teammate review before merging.
- Announce changes to shared components to the other teammates.
- Protect `main` and configure required approvals and checks when these options are available for the repository.

### Pull request template

```text
Goal*:
Affected page or feature*:

Changes*:
- ...

Screenshot: (optional)
Remaining work: (optional)
```

### Example: splitting messaging work

Avoid one pull request for the entire messaging feature. Prefer:

1. Visual structure.
2. Conversation selection.
3. Message history integration.
4. Sending and receiving.
5. Error handling and reconnection.

## 10. Development phases

| Phase                   | Work                                                    | Expected outcome              |
| ----------------------- | ------------------------------------------------------- | ----------------------------- |
| 1 — Foundation         | Project setup, styles, layouts, routes, base components | Navigable application         |
| 2 — Static version     | Eight screens with mock data                            | Visually consistent interface |
| 3 — Local interactions | Forms, tabs, filters, conversation selection            | Testable user journeys        |
| 4 — Integration        | Session, API, video playback, real-time functionality   | Connected features            |
| 5 — Validation         | Errors, permissions, responsive behavior, tests         | Demo-ready version            |

Do not leave live playback and real-time integration until the end. Run an early technical proof of concept with the intended backend solution, even during the static phase.

## 11. Definition of done

A page is not finished simply because it looks like the screenshot.

- [ ] The route works, including direct access.
- [ ] The UI matches the design and agreed viewport sizes.
- [ ] Expected interactions work.
- [ ] Loading, empty, error, and success states are handled where relevant.
- [ ] Forms display useful errors.
- [ ] Keyboard navigation and labels have been checked.
- [ ] Relevant tests and project checks pass.
- [ ] Another teammate has reviewed and tried the user journey.

For administration, distinguish the interface from permissions: plan validation with the backend team for both authorized access and rejected actions.

## 12. Daily coordination

Hold a daily check-in of approximately ten minutes:

1. What has been integrated.
2. What comes next.
3. Blockers.
4. Shared components that may change.

The priority is to deliver a coherent application regularly, rather than assembling three large blocks only at the end.

## 13. Reference documentation

- [React — Thinking in React](https://react.dev/learn/thinking-in-react): breaking down designs, building a static version, and managing state.
- [React Router — Routing](https://reactrouter.com/start/declarative/routing): nested routes and layouts.
