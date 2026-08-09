import { CalendarIcon, ClockIcon, PinIcon, CalendarPlusIcon } from './Icons'
import Countdown from './Countdown'
import Reveal from './Reveal'
import venuePhoto from '../assets/venue.jpg'
import { googleCalendarUrl } from '../utils/googleCalendar'

const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=JKAB+Park+Trincomalee'

export default function Details() {
  return (
    <section id="details">
      <Reveal className="center">
        <p className="eyebrow">Save the Date</p>
        <h2 className="section-title">Our Nikkah Ceremony</h2>
        <p className="section-copy">
          Come, share our happiness, bless our new beginning with your duas,
          and make our day even more special with your presence.
        </p>

        <div className="detail-rows">
          <div className="detail-row">
            <span className="detail-icon-wrap">
              <CalendarIcon />
            </span>
            <div>
              <div className="detail-label">Date</div>
              <div className="detail-value">05th September 2026</div>
            </div>
          </div>

          <div className="detail-row">
            <span className="detail-icon-wrap">
              <ClockIcon />
            </span>
            <div>
              <div className="detail-label">Time</div>
              <div className="detail-value">12:00 PM Onwards</div>
            </div>
          </div>

          <div className="detail-row">
            <span className="detail-icon-wrap">
              <PinIcon />
            </span>
            <div>
              <div className="detail-label">Venue</div>
              <div className="detail-value">JKAB Park, Hall No. 03</div>
              <a className="map-link" href={MAP_URL} target="_blank" rel="noreferrer">
                Open in Maps
              </a>
            </div>
          </div>
        </div>

        <Reveal as="div" variant="photo" className="frame-soft venue-photo">
          <img src={venuePhoto} alt="The gold and floral arch stage set up for the Nikkah at JKAB Park" />
        </Reveal>
        <p className="venue-caption">Our ceremony stage at JKAB Park, Trincomalee</p>

        <Countdown />

        <div className="action-row">
          <a
            className="action-button primary"
            href={googleCalendarUrl}
            target="_blank"
            rel="noreferrer"
          >
            <CalendarPlusIcon />
            Add to Google Calendar
          </a>
        </div>
      </Reveal>
    </section>
  )
}
