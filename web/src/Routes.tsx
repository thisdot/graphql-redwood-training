// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router';

import ScaffoldLayout from 'src/layouts/ScaffoldLayout';

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="EventRegistrants" titleTo="eventRegistrants" buttonLabel="New EventRegistrant" buttonTo="newEventRegistrant">
        <Route path="/event-registrants/new" page={EventRegistrantNewEventRegistrantPage} name="newEventRegistrant" />
        <Route path="/event-registrants/{id}/edit" page={EventRegistrantEditEventRegistrantPage} name="editEventRegistrant" />
        <Route path="/event-registrants/{id}" page={EventRegistrantEventRegistrantPage} name="eventRegistrant" />
        <Route path="/event-registrants" page={EventRegistrantEventRegistrantsPage} name="eventRegistrants" />
      </Set>
      <Set wrap={ScaffoldLayout} title="EventSpeakers" titleTo="eventSpeakers" buttonLabel="New EventSpeaker" buttonTo="newEventSpeaker">
        <Route path="/event-speakers/new" page={EventSpeakerNewEventSpeakerPage} name="newEventSpeaker" />
        <Route path="/event-speakers/{id}/edit" page={EventSpeakerEditEventSpeakerPage} name="editEventSpeaker" />
        <Route path="/event-speakers/{id}" page={EventSpeakerEventSpeakerPage} name="eventSpeaker" />
        <Route path="/event-speakers" page={EventSpeakerEventSpeakersPage} name="eventSpeakers" />
      </Set>
      <Set wrap={ScaffoldLayout} title="EventSessions" titleTo="eventSessions" buttonLabel="New EventSession" buttonTo="newEventSession">
        <Route path="/event-sessions/new" page={EventSessionNewEventSessionPage} name="newEventSession" />
        <Route path="/event-sessions/{id}/edit" page={EventSessionEditEventSessionPage} name="editEventSession" />
        <Route path="/event-sessions/{id}" page={EventSessionEventSessionPage} name="eventSession" />
        <Route path="/event-sessions" page={EventSessionEventSessionsPage} name="eventSessions" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Events" titleTo="events" buttonLabel="New Event" buttonTo="newEvent">
        <Route path="/events/new" page={EventNewEventPage} name="newEvent" />
        <Route path="/events/{id}/edit" page={EventEditEventPage} name="editEvent" />
        <Route path="/events/{id}" page={EventEventPage} name="event" />
        <Route path="/events" page={EventEventsPage} name="events" />
      </Set>

      <Route path="/" redirect="/events" name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
