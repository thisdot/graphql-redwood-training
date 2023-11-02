import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { timeTag } from 'src/lib/formatters';

import type {
  DeleteEventRegistrantMutationVariables,
  FindEventRegistrantById,
} from 'types/graphql';

const DELETE_EVENT_REGISTRANT_MUTATION = gql`
  mutation DeleteEventRegistrantMutation($id: String!) {
    deleteEventRegistrant(id: $id) {
      id
    }
  }
`;

interface Props {
  eventRegistrant: NonNullable<FindEventRegistrantById['eventRegistrant']>;
}

const EventRegistrant = ({ eventRegistrant }: Props) => {
  const [deleteEventRegistrant] = useMutation(
    DELETE_EVENT_REGISTRANT_MUTATION,
    {
      onCompleted: () => {
        toast.success('EventRegistrant deleted');
        navigate(routes.eventRegistrants());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onDeleteClick = (id: DeleteEventRegistrantMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete eventRegistrant ' + id + '?')
    ) {
      deleteEventRegistrant({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            EventRegistrant {eventRegistrant.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{eventRegistrant.id}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{eventRegistrant.email}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{eventRegistrant.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{eventRegistrant.lastName}</td>
            </tr>
            <tr>
              <th>Display name</th>
              <td>{eventRegistrant.displayName}</td>
            </tr>
            <tr>
              <th>Job title</th>
              <td>{eventRegistrant.jobTitle}</td>
            </tr>
            <tr>
              <th>Company</th>
              <td>{eventRegistrant.company}</td>
            </tr>
            <tr>
              <th>Profile picture</th>
              <td>{eventRegistrant.profilePicture}</td>
            </tr>
            <tr>
              <th>Date of birth</th>
              <td>{timeTag(eventRegistrant.dateOfBirth)}</td>
            </tr>
            <tr>
              <th>Language</th>
              <td>{eventRegistrant.language}</td>
            </tr>
            <tr>
              <th>Ip address</th>
              <td>{eventRegistrant.ipAddress}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{eventRegistrant.notes}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(eventRegistrant.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(eventRegistrant.updatedAt)}</td>
            </tr>
            <tr>
              <th>Cancelled at</th>
              <td>{timeTag(eventRegistrant.cancelledAt)}</td>
            </tr>
            <tr>
              <th>Checked in at</th>
              <td>{timeTag(eventRegistrant.checkedInAt)}</td>
            </tr>
            <tr>
              <th>Event id</th>
              <td>{eventRegistrant.eventId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEventRegistrant({ id: eventRegistrant.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(eventRegistrant.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default EventRegistrant;
