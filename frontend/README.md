# B.I.M Stream — Frontend

## 1. Overview

B.I.M Stream (Be In your Mood Stream) is a React application for discovering content, watching videos, following live streams, joining conversations, viewing profiles, and moderating users.

The frontend uses React 19, Vite, and React Router. It is a single-page application currently powered primarily by mock data.

The source code is organized by feature:

- each feature contains its pages and components;
- shared components are placed under `src/shared/`;
- local demonstration data is placed under `src/mocks/`;
- components mainly use CSS Modules or existing global stylesheets.

## 2. Technologies

- React 19
- React DOM 19
- React Router 8
- Vite 8
- Bootstrap 6
- Font Awesome
- CSS Modules

## 3. Installation and Commands

Run the following commands from the `frontend` directory:

```bash
npm install
```

Available scripts:

```bash
npm run dev      # Vite development server
npm run build    # production build in dist/
npm run lint     # ESLint validation
npm run preview  # preview the production build
```

## 4. Screens and Current Routes

Routes are declared in `src/app/router.jsx`.

| Screen | Component | Route |
| --- | --- | --- |
| Login | `LoginPage` | `/LoginPage` |
| Registration | `RegisterPage` | `/RegisterPage` |
| Home | `HomePage` | `/` |
| Video | `VideoPage` | `/VideoPage` |
| Live stream | `LivePage` | `/LivePage` |
| Messages | `MessagesPage` | `/MessagesPage` |
| Profile | `ProfilePage` | `/ProfilePage` |
| Moderation | `ModerationPage` | `/ModerationPage` |

The current pages are static or controlled with local component state. Dynamic routes previously proposed, such as `/videos/:videoId`, `/live/:streamId`, `/users/:username`, and `/messages/:conversationId`, are not yet configured.

Unknown routes are rendered by `PageNotFound`.

## 5. Current Directory Structure

```text
frontend/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── App.jsx
│   │   ├── router.jsx
│   │   └── layouts/
│   │       ├── AppLayout.jsx
│   │       └── AuthLayout.jsx
│   ├── features/
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── discovery/
│   │   ├── interactions/
│   │   ├── live/
│   │   ├── messages/
│   │   ├── profile/
│   │   └── videos/
│   ├── mocks/
│   ├── shared/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── Styles/
│   │   └── ui/
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

The `interactions/` directory and several `hooks/`, `api/`, and `ui/` directories currently contain `.gitkeep` files or placeholders for future development.

## 6. Implemented Features

### Authentication

- login and registration forms;
- authentication layout with a contextual visual;
- local state for form fields;
- reusable social buttons;
- structure prepared for future validation and session management.

### Discovery

- home page;
- mood filters;
- featured content;
- active live streams;
- upcoming event;
- community panel;
- data sourced from `src/mocks/discovery.js`.

### Videos

- video player;
- video information;
- comments;
- upcoming videos;
- locally managed ratings, following, comments, and autoplay;
- data sourced from `src/mocks/videos.js`.

### Live Streaming

- live page;
- stream information;
- chat with tabs;
- reactions and local messages;
- data sourced from `src/mocks/stream.js` and `src/mocks/initialMessages.js`.

### Private Messages

- conversation list;
- local search and filters;
- message history;
- message composer;
- data sourced from `src/mocks/conversations.js`.

### Profile

- profile header;
- published videos;
- watch history;
- local tabs;
- data sourced from `src/mocks/profile.js`.

### Administration

- moderation statistics;
- banned-user list;
- search and filters;
- ban form;
- unban action;
- recent activity;
- data sourced from `src/mocks/moderation.js`.

## 7. Layouts

`AuthLayout` wraps the login and registration pages with a dedicated presentation.

`AppLayout` provides:

- a header;
- a sidebar;
- a content area rendered by React Router through `<Outlet />`.

The `Header` and `Sidebar` components are centralized in `src/shared/layouts/`.

## 8. Mock Data

Local data is maintained in `src/mocks/`:

- `conversations.js`
- `discovery.js`
- `followedChannels.js`
- `initialMessages.js`
- `moderation.js`
- `profile.js`
- `reactions.js`
- `stream.js`
- `videos.js`

Most interactions use `useState` or local hooks. They are not persisted or connected to a backend.

## 9. Styles

The main styles are distributed across:

- `src/App.css`;
- `src/index.css`;
- component-adjacent `.module.css` files;
- `src/shared/Styles/tokens.css`.

The actual directory name is `Styles` with a capital letter. Imports must match this exact case on systems with case-sensitive file systems, including Linux and macOS.

`tokens.css` centralizes radii, spacing, and colors specific to private messages. Other colors used by the header, sidebar, and screens remain distributed across the existing stylesheets.

## 10. Network and API Dependencies

The frontend does not currently contain a complete API layer or an operational shared `api/` directory.

Future backend integration should:

- centralize requests in `api/` modules or a shared client;
- use consistent contracts for data and errors;
- handle loading, success, error, and empty states;
- protect administration routes according to backend permissions;
- progressively replace mock data.

## 11. Validation Status

The frontend can be compiled with:

```bash
npm run build
```

At this stage:

- no automated tests are committed;
- no `.env.example` file is present;
- the `tests/` and `tests/e2e/` directories have not yet been created;
- ESLint issues should be checked with `npm run lint`;
- user journeys should be checked in the browser after changes.

## 12. Recommended Structure for Future Development

Add only the directories required by a feature:

```text
src/features/<feature>/
├── components/
├── hooks/
├── pages/
└── api/
```

Follow these rules:

- feature-specific components remain in their feature;
- `shared/` must not depend on any feature;
- a page assembles components and does not contain all complex logic;
- network requests pass through an API layer;
- styles and tests remain close to their components;
- reusable components are only created when a real need exists.

## 13. Route Convention

A future evolution can align routes with readable URLs:

| Screen | Proposed Route |
| --- | --- |
| Login | `/login` |
| Registration | `/register` |
| Home | `/` |
| Video | `/videos/:videoId` |
| Live stream | `/live/:streamId` |
| Messages | `/messages` and `/messages/:conversationId` |
| Profile | `/users/:username` |
| Moderation | `/admin/moderation` |

This convention requires simultaneous updates to the router, navigation, internal links, and tests.

## 14. References

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vite.dev/)
