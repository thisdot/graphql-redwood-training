import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/EventSession/EventSessionsCell';
import { timeTag, truncate } from 'src/lib/formatters';

import type {
  DeleteEventSessionMutationVariables,
  FindEventSessions,
} from 'types/graphql';

const DELETE_EVENT_SESSION_MUTATION = gql`
  mutation DeleteEventSessionMutation($id: String!) {
    deleteEventSession(id: $id) {
      id
    }
  }
`;

const EventSessionsList = ({ eventSessions }: FindEventSessions) => {
  const [deleteEventSession] = useMutation(DELETE_EVENT_SESSION_MUTATION, {
    onCompleted: () => {
      toast.success('EventSession deleted');
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

  const onDeleteClick = (id: DeleteEventSessionMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete eventSession ' + id + '?')) {
      deleteEventSession({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Start at</th>
            <th>End at</th>
            <th>Capacity</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Event id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {eventSessions.map((eventSession) => (
            <tr key={eventSession.id}>
              <td>{truncate(eventSession.id)}</td>
              <td>{truncate(eventSession.name)}</td>
              <td>{truncate(eventSession.description)}</td>
              <td>{timeTag(eventSession.startAt)}</td>
              <td>{timeTag(eventSession.endAt)}</td>
              <td>{truncate(eventSession.capacity)}</td>
              <td>{timeTag(eventSession.createdAt)}</td>
              <td>{timeTag(eventSession.updatedAt)}</td>
              <td>{truncate(eventSession.eventId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.eventSession({ id: eventSession.id })}
                    title={'Show eventSession ' + eventSession.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEventSession({ id: eventSession.id })}
                    title={'Edit eventSession ' + eventSession.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete eventSession ' + eventSession.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(eventSession.id)}
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
  );
};

export default EventSessionsList;
