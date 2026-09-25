// Fictional jobs and people only. Schedule.jsx renders these offline responses.
export const crew = [
  ["a", "Cleaner A", "#b9d7f4"],
  ["b", "Cleaner B", "#bce4cd"],
  ["c", "Cleaner C", "#f8d49d"],
  ["d", "Cleaner D", "#d7c8ee"],
  ["e", "Cleaner E", "#f3c4ca"],
].map(([id, name, color]) => ({
  id: `demo-${id}`,
  profile_first_name: name,
  profile_last_name: "",
  profile_color: color,
  account_type: "child_user",
}));
const week = [
  [
    ["a", "08:00", "10:30"],
    ["b", "08:30", "11:00"],
    ["c", "09:00", "12:00"],
    ["d", "11:30", "14:30"],
    ["a", "12:00", "14:00"],
    ["e", "13:00", "15:30"],
    ["b", "15:00", "17:00"],
    ["d", "15:15", "17:00"],
  ],
  [
    ["c", "08:00", "10:00"],
    ["a", "08:30", "11:00"],
    ["e", "09:00", "12:00"],
    ["b", "11:30", "14:00"],
    ["d", "12:30", "15:00"],
    ["a", "13:00", "15:30"],
    ["c", "15:15", "17:00"],
    ["e", "15:00", "17:00"],
  ],
  [
    ["d", "08:00", "11:00"],
    ["b", "08:15", "10:15"],
    ["a", "09:00", "11:30"],
    ["c", "10:45", "13:15"],
    ["e", "12:00", "15:00"],
    ["b", "13:00", "15:30"],
    ["d", "14:00", "16:00"],
    ["a", "15:00", "17:00"],
  ],
  [
    ["e", "08:00", "10:30"],
    ["c", "08:30", "11:30"],
    ["b", "09:15", "11:15"],
    ["a", "11:15", "13:45"],
    ["d", "12:00", "14:30"],
    ["e", "13:00", "15:00"],
    ["c", "14:45", "17:00"],
    ["b", "15:00", "17:00"],
  ],
  [
    ["b", "08:00", "10:00"],
    ["d", "08:30", "11:00"],
    ["c", "09:00", "12:00"],
    ["a", "10:30", "13:00"],
    ["e", "11:30", "14:00"],
    ["b", "13:00", "15:30"],
    ["d", "14:30", "17:00"],
    ["c", "15:00", "17:00"],
  ],
];
const minutes = (t) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3));
const types = [
  "Weekly clean",
  "Biweekly clean",
  "Initial clean",
  "Deep clean",
  "Biweekly clean",
  "Move-out clean",
  "Weekly clean",
  "Biweekly clean",
];
export const scheduleVisits = week.flatMap((day, d) =>
  day.map(([person, start, end], i) => ({
    id: `demo-visit-${d}-${i}`,
    job_id: `demo-job-${d}-${i}`,
    business_id: "demo-business",
    location_id: "demo-location",
    customer_name: `Sample ${String(d * 8 + i + 1).padStart(2, "0")}`,
    scheduled_date: `2026-09-${21 + d}`,
    scheduled_time: start,
    end_time: end,
    estimated_hours: (minutes(end) - minutes(start)) / 60,
    status: "scheduled",
    assigned_user_ids: [`demo-${person}`],
  })),
);
export const scheduleJobs = scheduleVisits.map((visit, i) => ({
  id: visit.job_id,
  title: types[(i + Math.floor(i / 8)) % types.length],
}));
