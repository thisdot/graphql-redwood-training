import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { timeTag } from 'src/lib/formatters';

import type {
  DeleteEventSpeakerMutationVariables,
  FindEventSpeakerById,
} from 'types/graphql';

const DELETE_EVENT_SPEAKER_MUTATION = gql`
  mutation DeleteEventSpeakerMutation($id: String!) {
    deleteEventSpeaker(id: $id) {
      id
    }
  }
`;

interface Props {
  eventSpeaker: NonNullable<FindEventSpeakerById['eventSpeaker']>;
}

const EventSpeaker = ({ eventSpeaker }: Props) => {
  const [deleteEventSpeaker] = useMutation(DELETE_EVENT_SPEAKER_MUTATION, {
    onCompleted: () => {
      toast.success('EventSpeaker deleted');
      navigate(routes.eventSpeakers());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id: DeleteEventSpeakerMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete eventSpeaker ' + id + '?')) {
      deleteEventSpeaker({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            EventSpeaker {eventSpeaker.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{eventSpeaker.id}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{eventSpeaker.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{eventSpeaker.lastName}</td>
            </tr>
            <tr>
              <th>Job title</th>
              <td>{eventSpeaker.jobTitle}</td>
            </tr>
            <tr>
              <th>Company</th>
              <td>{eventSpeaker.company}</td>
            </tr>
            <tr>
              <th>Profile picture</th>
              <td>{eventSpeaker.profilePicture}</td>
            </tr>
            <tr>
              <th>Bio</th>
              <td>{eventSpeaker.bio}</td>
            </tr>
            <tr>
              <th>Date of birth</th>
              <td>{timeTag(eventSpeaker.dateOfBirth)}</td>
            </tr>
            <tr>
              <th>Language</th>
              <td>{eventSpeaker.language}</td>
            </tr>
            <tr>
              <th>Ip address</th>
              <td>{eventSpeaker.ipAddress}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(eventSpeaker.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(eventSpeaker.updatedAt)}</td>
            </tr>
            <tr>
              <th>Event id</th>
              <td>{eventSpeaker.eventId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEventSpeaker({ id: eventSpeaker.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(eventSpeaker.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default EventSpeaker;
