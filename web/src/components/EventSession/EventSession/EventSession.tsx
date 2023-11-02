import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { timeTag } from 'src/lib/formatters';

import type {
  DeleteEventSessionMutationVariables,
  FindEventSessionById,
} from 'types/graphql';

const DELETE_EVENT_SESSION_MUTATION = gql`
  mutation DeleteEventSessionMutation($id: String!) {
    deleteEventSession(id: $id) {
      id
    }
  }
`;

interface Props {
  eventSession: NonNullable<FindEventSessionById['eventSession']>;
}

const EventSession = ({ eventSession }: Props) => {
  const [deleteEventSession] = useMutation(DELETE_EVENT_SESSION_MUTATION, {
    onCompleted: () => {
      toast.success('EventSession deleted');
      navigate(routes.eventSessions());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id: DeleteEventSessionMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete eventSession ' + id + '?')) {
      deleteEventSession({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            EventSession {eventSession.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{eventSession.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{eventSession.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{eventSession.description}</td>
            </tr>
            <tr>
              <th>Start at</th>
              <td>{timeTag(eventSession.startAt)}</td>
            </tr>
            <tr>
              <th>End at</th>
              <td>{timeTag(eventSession.endAt)}</td>
            </tr>
            <tr>
              <th>Capacity</th>
              <td>{eventSession.capacity}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(eventSession.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(eventSession.updatedAt)}</td>
            </tr>
            <tr>
              <th>Event id</th>
              <td>{eventSession.eventId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEventSession({ id: eventSession.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(eventSession.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default EventSession;
