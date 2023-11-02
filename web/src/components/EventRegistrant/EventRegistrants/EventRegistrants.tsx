import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/EventRegistrant/EventRegistrantsCell';
import { timeTag, truncate } from 'src/lib/formatters';

import type {
  DeleteEventRegistrantMutationVariables,
  FindEventRegistrants,
} from 'types/graphql';

const DELETE_EVENT_REGISTRANT_MUTATION = gql`
  mutation DeleteEventRegistrantMutation($id: String!) {
    deleteEventRegistrant(id: $id) {
      id
    }
  }
`;

const EventRegistrantsList = ({ eventRegistrants }: FindEventRegistrants) => {
  const [deleteEventRegistrant] = useMutation(
    DELETE_EVENT_REGISTRANT_MUTATION,
    {
      onCompleted: () => {
        toast.success('EventRegistrant deleted');
      },
      onError: (error) => {
        toast.error(error.message);
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Display name</th>
            <th>Job title</th>
            <th>Company</th>
            <th>Profile picture</th>
            <th>Date of birth</th>
            <th>Language</th>
            <th>Ip address</th>
            <th>Notes</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Cancelled at</th>
            <th>Checked in at</th>
            <th>Event id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {eventRegistrants.map((eventRegistrant) => (
            <tr key={eventRegistrant.id}>
              <td>{truncate(eventRegistrant.id)}</td>
              <td>{truncate(eventRegistrant.email)}</td>
              <td>{truncate(eventRegistrant.firstName)}</td>
              <td>{truncate(eventRegistrant.lastName)}</td>
              <td>{truncate(eventRegistrant.displayName)}</td>
              <td>{truncate(eventRegistrant.jobTitle)}</td>
              <td>{truncate(eventRegistrant.company)}</td>
              <td>{truncate(eventRegistrant.profilePicture)}</td>
              <td>{timeTag(eventRegistrant.dateOfBirth)}</td>
              <td>{truncate(eventRegistrant.language)}</td>
              <td>{truncate(eventRegistrant.ipAddress)}</td>
              <td>{truncate(eventRegistrant.notes)}</td>
              <td>{timeTag(eventRegistrant.createdAt)}</td>
              <td>{timeTag(eventRegistrant.updatedAt)}</td>
              <td>{timeTag(eventRegistrant.cancelledAt)}</td>
              <td>{timeTag(eventRegistrant.checkedInAt)}</td>
              <td>{truncate(eventRegistrant.eventId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.eventRegistrant({ id: eventRegistrant.id })}
                    title={
                      'Show eventRegistrant ' + eventRegistrant.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEventRegistrant({ id: eventRegistrant.id })}
                    title={'Edit eventRegistrant ' + eventRegistrant.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete eventRegistrant ' + eventRegistrant.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(eventRegistrant.id)}
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

export default EventRegistrantsList;
