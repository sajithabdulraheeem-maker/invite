// 12:00 PM–3:00 PM on 05 Sep 2026 in Sri Lanka (UTC+5:30),
// expressed in UTC for Google's calendar template URL.
const START_UTC = '20260905T063000Z'
const END_UTC = '20260905T093000Z'

const params = new URLSearchParams({
  action: 'TEMPLATE',
  text: 'Aazeez & Fasleena — Nikkah',
  dates: `${START_UTC}/${END_UTC}`,
  details:
    'With the blessings of Allah, join us as we celebrate the beginning of our forever.',
  location: 'JKAB Park, Hall No. 03, Trincomalee',
  ctz: 'Asia/Colombo',
})

export const googleCalendarUrl = `https://calendar.google.com/calendar/render?${params.toString()}`
