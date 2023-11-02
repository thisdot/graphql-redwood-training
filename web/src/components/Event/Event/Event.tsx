import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { formatEnum, timeTag } from 'src/lib/formatters';

import type {
  DeleteEventMutationVariables,
  FindEventById,
} from 'types/graphql';

const DELETE_EVENT_MUTATION = gql`
  mutation DeleteEventMutation($id: String!) {
    deleteEvent(id: $id) {
      id
    }
  }
`;

interface Props {
  event: NonNullable<FindEventById['event']>;
}

const Event = ({ event }: Props) => {
  const [deleteEvent] = useMutation(DELETE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event deleted');
      navigate(routes.events());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id: DeleteEventMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete event ' + id + '?')) {
      deleteEvent({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Event {event.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{event.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{event.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{event.description}</td>
            </tr>
            <tr>
              <th>Timezone</th>
              <td>{event.timezone}</td>
            </tr>
            <tr>
              <th>Start at</th>
              <td>{timeTag(event.startAt)}</td>
            </tr>
            <tr>
              <th>End at</th>
              <td>{timeTag(event.endAt)}</td>
            </tr>
            <tr>
              <th>Venue type</th>
              <td>{formatEnum(event.venueType)}</td>
            </tr>
            <tr>
              <th>Venue name</th>
              <td>{event.venueName}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{event.address}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{event.country}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{event.city}</td>
            </tr>
            <tr>
              <th>State or province</th>
              <td>{event.stateOrProvince}</td>
            </tr>
            <tr>
              <th>Postal code</th>
              <td>{event.postalCode}</td>
            </tr>
            <tr>
              <th>Registration start at</th>
              <td>{timeTag(event.registrationStartAt)}</td>
            </tr>
            <tr>
              <th>Registration end at</th>
              <td>{timeTag(event.registrationEndAt)}</td>
            </tr>
            <tr>
              <th>Currency</th>
              <td>{event.currency}</td>
            </tr>
            <tr>
              <th>Capacity</th>
              <td>{event.capacity}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(event.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(event.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEvent({ id: event.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(event.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default Event;
