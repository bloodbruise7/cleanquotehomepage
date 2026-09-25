// Fictional jobs and people only. Schedule.jsx renders these offline responses.
export const crew = [
  ["a", "Cleaner A", "#b9d7f4"],
  ["b", "Cleaner B", "#bce4cd"],
  ["c", "Cleaner C", "#f8d49d"],
].map(([id, name, color]) => ({
  id: `demo-${id}`,
  profile_first_name: name,
  profile_last_name: "",
  profile_color: color,
  account_type: "child_user",
}));

// Longer cleans, room between stops, and deliberately uneven daily workloads.
const week = [
  [
    ["a", "08:00", "11:00", "Weekly clean"],
    ["a", "12:00", "16:00", "Biweekly clean"],
    ["b", "08:00", "14:00", "Deep clean"],
    ["c", "10:00", "14:00", "Biweekly clean"],
  ],
  [
    ["a", "08:00", "12:00", "Biweekly clean"],
    ["b", "08:00", "16:00", "Move-out clean"],
    ["c", "10:00", "14:00", "Biweekly clean"],
  ],
  [
    ["a", "08:00", "11:00", "Weekly clean"],
    ["c", "10:00", "14:00", "Biweekly clean"],
  ],
  [
    ["a", "08:00", "11:00", "Weekly clean"],
    ["a", "12:00", "16:00", "Biweekly clean"],
    ["b", "08:00", "12:00", "Biweekly clean"],
    ["b", "13:00", "17:00", "Biweekly clean"],
    ["c", "10:00", "14:00", "Biweekly clean"],
  ],
  [
    ["a", "08:00", "11:00", "Weekly clean"],
    ["b", "09:00", "15:00", "Initial clean"],
  ],
];
const minutes = (t) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3));
const entries = week.flatMap((day, d) =>
  day.map(([person, start, end, title], i) => ({
    person,
    start,
    end,
    title,
    d,
    i,
  })),
);
export const scheduleVisits = entries.map(
  ({ person, start, end, d, i }, index) => ({
    id: `demo-visit-${d}-${i}`,
    job_id: `demo-job-${d}-${i}`,
    business_id: "demo-business",
    location_id: "demo-location",
    customer_name: `Sample ${String(index + 1).padStart(2, "0")}`,
    scheduled_date: `2026-09-${21 + d}`,
    scheduled_time: start,
    end_time: end,
    estimated_hours: (minutes(end) - minutes(start)) / 60,
    status: "scheduled",
    assigned_user_ids: [`demo-${person}`],
  }),
);
export const scheduleJobs = scheduleVisits.map((visit, i) => ({
  id: visit.job_id,
  title: entries[i].title,
}));
