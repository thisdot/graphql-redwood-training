import type {
  EditEventRegistrantById,
  UpdateEventRegistrantInput,
} from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import EventRegistrantForm from 'src/components/EventRegistrant/EventRegistrantForm';

export const QUERY = gql`
  query EditEventRegistrantById($id: String!) {
    eventRegistrant: eventRegistrant(id: $id) {
      id
      email
      firstName
      lastName
      displayName
      jobTitle
      company
      profilePicture
      dateOfBirth
      language
      ipAddress
      notes
      createdAt
      updatedAt
      cancelledAt
      checkedInAt
      eventId
    }
  }
`;
const UPDATE_EVENT_REGISTRANT_MUTATION = gql`
  mutation UpdateEventRegistrantMutation(
    $id: String!
    $input: UpdateEventRegistrantInput!
  ) {
    updateEventRegistrant(id: $id, input: $input) {
      id
      email
      firstName
      lastName
      displayName
      jobTitle
      company
      profilePicture
      dateOfBirth
      language
      ipAddress
      notes
      createdAt
      updatedAt
      cancelledAt
      checkedInAt
      eventId
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({
  eventRegistrant,
}: CellSuccessProps<EditEventRegistrantById>) => {
  const [updateEventRegistrant, { loading, error }] = useMutation(
    UPDATE_EVENT_REGISTRANT_MUTATION,
    {
      onCompleted: () => {
        toast.success('EventRegistrant updated');
        navigate(routes.eventRegistrants());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (
    input: UpdateEventRegistrantInput,
    id: EditEventRegistrantById['eventRegistrant']['id']
  ) => {
    updateEventRegistrant({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit EventRegistrant {eventRegistrant?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EventRegistrantForm
          eventRegistrant={eventRegistrant}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
