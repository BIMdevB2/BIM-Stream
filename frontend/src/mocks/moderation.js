export const CURRENT_ADMIN = { id: "ADM-001", name: "B.I.M Admin" };

// Dates ISO (fuseau Paris, CEST october)
// status : "active" | "permanent" | "expired" | "unbanned"
// end = null for permanent ban ; for "unbanned", end = date of unban
export const BANNED_USERS = [
  {
    id: "BAN-1042",
    user: { name: "Ethan Brooks", handle: "@ethan_b", userId: "USR-0821" },
    start: "2026-10-11T18:24:00+02:00",
    end: "2026-10-18T18:24:00+02:00",
    reason: "Repeated harassment in live chat",
    status: "active",
  },
  {
    id: "BAN-1041",
    user: { name: "Nora Hayes", handle: "@norah", userId: "USR-0619" },
    start: "2026-10-11T16:10:00+02:00",
    end: "2026-10-12T16:10:00+02:00",
    reason: "Spam and unsolicited links",
    status: "active",
  },
  {
    id: "BAN-1038",
    user: { name: "Owen Clarke", handle: "@owen_c", userId: "USR-0445" },
    start: "2026-10-08T09:30:00+02:00",
    end: null,
    reason: "Repeated community rule violations",
    status: "permanent",
  },
  {
    id: "BAN-1035",
    user: { name: "Mia Turner", handle: "@mia_t", userId: "USR-0732" },
    start: "2026-10-08T14:00:00+02:00",
    end: "2026-10-10T14:00:00+02:00",
    reason: "Disruptive chat behavior",
    status: "expired",
  },
  {
    id: "BAN-1032",
    user: { name: "Leo Bennett", handle: "@leo_b", userId: "USR-0588" },
    start: "2026-10-07T11:45:00+02:00",
    end: "2026-10-11T18:05:00+02:00",
    reason: "Impersonation · appeal approved",
    status: "unbanned",
  },
];

// Reports
export const REPORTS = [
  { id: "REP-2301", status: "open", priority: true, reason: "Harassment" },
  { id: "REP-2302", status: "open", priority: true, reason: "Hate speech" },
  { id: "REP-2303", status: "open", priority: false, reason: "Spam" },
  { id: "REP-2304", status: "open", priority: false, reason: "Spam" },
  { id: "REP-2305", status: "open", priority: false, reason: "Impersonation" },
  { id: "REP-2306", status: "open", priority: false, reason: "Inappropriate content" },
  { id: "REP-2307", status: "open", priority: false, reason: "Off-topic" },
];

// Stats
export const WEEKLY_STATS = {
  resolved: 24,
  resolvedScope: "Across live chat and messages",
  liftedExpired: 4,
  liftedAppeal: 1,
};

// type : "ban-created" | "ban-lifted" (used in the badges)
export const RECENT_ACTIVITY = [
  {
    id: "act-1",
    type: "ban-created",
    title: "Ethan Brooks · BAN-1042",
    description: "7-day restriction for repeated harassment.",
    date: "2026-10-11T18:24:00+02:00",
    adminId: "ADM-001",
  },
  {
    id: "act-2",
    type: "ban-lifted",
    title: "Leo Bennett · BAN-1032",
    description: "Appeal reviewed and approved. Access restored.",
    date: "2026-10-11T18:05:00+02:00",
    adminId: "ADM-001",
  },
];

//
export const DURATION_OPTIONS = [
  { value: "1d", label: "1 day", days: 1 },
  { value: "7d", label: "7 days", days: 7 },
  { value: "30d", label: "30 days", days: 30 },
  { value: "permanent", label: "Permanent", days: null },
];

// Starting form values
export const BAN_FORM_DEFAULTS = {
  userId: "",
  duration: "7d",
  reason: "",
};

// Calculated datas

export const isActiveBan = (ban) =>
  ban.status === "active" || ban.status === "permanent";

// FilterBar : All · Active · Past bans
export const getBanFilterCounts = (bans) => ({
  all: bans.length,
  active: bans.filter(isActiveBan).length,
  past: bans.filter((b) => !isActiveBan(b)).length,
});

// for the 4 StatCard
export const getModerationStats = (bans, reports, weekly) => {
  const temporary = bans.filter((b) => b.status === "active").length;
  const permanent = bans.filter((b) => b.status === "permanent").length;
  const openReports = reports.filter((r) => r.status === "open");
  const priority = openReports.filter((r) => r.priority).length;

  return [
    {
      id: "active-bans",
      label: "Active bans",
      value: temporary + permanent,
      hint: `${temporary} temporary · ${permanent} permanent`,
    },
    {
      id: "open-reports",
      label: "Open reports",
      value: openReports.length,
      hint: `${priority} require priority review`,
    },
    {
      id: "resolved",
      label: "Resolved this week",
      value: weekly.resolved,
      hint: weekly.resolvedScope,
    },
    {
      id: "lifted",
      label: "Bans lifted this week",
      value: weekly.liftedExpired + weekly.liftedAppeal,
      hint: `${weekly.liftedExpired} expired · ${weekly.liftedAppeal} successful appeal`,
    },
  ];
};

// BanForm : date of end of ban = start + duration (null if permanent)
export const computeBanEnd = (start, days) => {
  if (days === null) return null;
  const end = new Date(start);
  end.setDate(end.getDate() + days);
  return end;
};

// Used in BannedUserrow and ActivityItem

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric", timeZone: "Europe/Paris",
  });

export const formatTime = (iso) =>
  new Date(iso).toLocaleTimeString("en-GB", {
    hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris",
  });