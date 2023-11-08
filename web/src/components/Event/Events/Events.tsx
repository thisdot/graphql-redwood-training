import type { DeleteEventMutationVariables, FindEvents } from 'types/graphql';

import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/Event/EventsCell';
import EventCard from 'src/components/EventCard/EventCard';
import { formatEnum, timeTag, truncate } from 'src/lib/formatters';

const DELETE_EVENT_MUTATION = gql`
  mutation DeleteEventMutation($id: String!) {
    deleteEvent(id: $id) {
      id
    }
  }
`;

const EventsList = ({ events }: FindEvents) => {
  const [deleteEvent] = useMutation(DELETE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event deleted');
    },
    onError: (error) => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id: DeleteEventMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete event ' + id + '?')) {
      deleteEvent({ variables: { id } });
    }
  };

  return (
    <>
      <div className="event-card-layout">
        {events.map((event) => (
          <EventCard id={event.id} key={event.id} />
        ))}
      </div>
      <div className="rw-segment rw-table-wrapper-responsive">
        <table className="rw-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Timezone</th>
              <th>Start at</th>
              <th>End at</th>
              <th>Venue type</th>
              <th>Venue name</th>
              <th>Address</th>
              <th>Country</th>
              <th>City</th>
              <th>State or province</th>
              <th>Postal code</th>
              <th>Registration start at</th>
              <th>Registration end at</th>
              <th>Currency</th>
              <th>Capacity</th>
              <th>Created at</th>
              <th>Updated at</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{truncate(event.id)}</td>
                <td>{truncate(event.name)}</td>
                <td>{truncate(event.description)}</td>
                <td>{truncate(event.timezone)}</td>
                <td>{timeTag(event.startAt)}</td>
                <td>{timeTag(event.endAt)}</td>
                <td>{formatEnum(event.venueType)}</td>
                <td>{truncate(event.venueName)}</td>
                <td>{truncate(event.address)}</td>
                <td>{truncate(event.country)}</td>
                <td>{truncate(event.city)}</td>
                <td>{truncate(event.stateOrProvince)}</td>
                <td>{truncate(event.postalCode)}</td>
                <td>{timeTag(event.registrationStartAt)}</td>
                <td>{timeTag(event.registrationEndAt)}</td>
                <td>{truncate(event.currency)}</td>
                <td>{truncate(event.capacity)}</td>
                <td>{timeTag(event.createdAt)}</td>
                <td>{timeTag(event.updatedAt)}</td>
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.event({ id: event.id })}
                      title={'Show event ' + event.id + ' detail'}
                      className="rw-button rw-button-small"
                    >
                      Show
                    </Link>
                    <Link
                      to={routes.editEvent({ id: event.id })}
                      title={'Edit event ' + event.id}
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      title={'Delete event ' + event.id}
                      className="rw-button rw-button-small rw-button-red"
                      onClick={() => onDeleteClick(event.id)}
                    >
                      Delete
                    </button>
                  </nav>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EventsList;
