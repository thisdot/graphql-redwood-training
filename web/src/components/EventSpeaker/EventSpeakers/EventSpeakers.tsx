import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/EventSpeaker/EventSpeakersCell';
import { timeTag, truncate } from 'src/lib/formatters';

import type {
  DeleteEventSpeakerMutationVariables,
  FindEventSpeakers,
} from 'types/graphql';

const DELETE_EVENT_SPEAKER_MUTATION = gql`
  mutation DeleteEventSpeakerMutation($id: String!) {
    deleteEventSpeaker(id: $id) {
      id
    }
  }
`;

const EventSpeakersList = ({ eventSpeakers }: FindEventSpeakers) => {
  const [deleteEventSpeaker] = useMutation(DELETE_EVENT_SPEAKER_MUTATION, {
    onCompleted: () => {
      toast.success('EventSpeaker deleted');
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

  const onDeleteClick = (id: DeleteEventSpeakerMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete eventSpeaker ' + id + '?')) {
      deleteEventSpeaker({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Job title</th>
            <th>Company</th>
            <th>Profile picture</th>
            <th>Bio</th>
            <th>Date of birth</th>
            <th>Language</th>
            <th>Ip address</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Event id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {eventSpeakers.map((eventSpeaker) => (
            <tr key={eventSpeaker.id}>
              <td>{truncate(eventSpeaker.id)}</td>
              <td>{truncate(eventSpeaker.firstName)}</td>
              <td>{truncate(eventSpeaker.lastName)}</td>
              <td>{truncate(eventSpeaker.jobTitle)}</td>
              <td>{truncate(eventSpeaker.company)}</td>
              <td>{truncate(eventSpeaker.profilePicture)}</td>
              <td>{truncate(eventSpeaker.bio)}</td>
              <td>{timeTag(eventSpeaker.dateOfBirth)}</td>
              <td>{truncate(eventSpeaker.language)}</td>
              <td>{truncate(eventSpeaker.ipAddress)}</td>
              <td>{timeTag(eventSpeaker.createdAt)}</td>
              <td>{timeTag(eventSpeaker.updatedAt)}</td>
              <td>{truncate(eventSpeaker.eventId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.eventSpeaker({ id: eventSpeaker.id })}
                    title={'Show eventSpeaker ' + eventSpeaker.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEventSpeaker({ id: eventSpeaker.id })}
                    title={'Edit eventSpeaker ' + eventSpeaker.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete eventSpeaker ' + eventSpeaker.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(eventSpeaker.id)}
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

export default EventSpeakersList;
