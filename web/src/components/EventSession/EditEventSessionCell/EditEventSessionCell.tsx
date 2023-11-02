import type {
  EditEventSessionById,
  UpdateEventSessionInput,
} from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import EventSessionForm from 'src/components/EventSession/EventSessionForm';

export const QUERY = gql`
  query EditEventSessionById($id: String!) {
    eventSession: eventSession(id: $id) {
      id
      name
      description
      startAt
      endAt
      capacity
      createdAt
      updatedAt
      eventId
    }
  }
`;
const UPDATE_EVENT_SESSION_MUTATION = gql`
  mutation UpdateEventSessionMutation(
    $id: String!
    $input: UpdateEventSessionInput!
  ) {
    updateEventSession(id: $id, input: $input) {
      id
      name
      description
      startAt
      endAt
      capacity
      createdAt
      updatedAt
      eventId
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({
  eventSession,
}: CellSuccessProps<EditEventSessionById>) => {
  const [updateEventSession, { loading, error }] = useMutation(
    UPDATE_EVENT_SESSION_MUTATION,
    {
      onCompleted: () => {
        toast.success('EventSession updated');
        navigate(routes.eventSessions());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (
    input: UpdateEventSessionInput,
    id: EditEventSessionById['eventSession']['id']
  ) => {
    updateEventSession({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit EventSession {eventSession?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EventSessionForm
          eventSession={eventSession}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
