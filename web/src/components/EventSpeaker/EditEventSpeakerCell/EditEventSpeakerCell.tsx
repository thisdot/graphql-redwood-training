import type {
  EditEventSpeakerById,
  UpdateEventSpeakerInput,
} from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import EventSpeakerForm from 'src/components/EventSpeaker/EventSpeakerForm';

export const QUERY = gql`
  query EditEventSpeakerById($id: String!) {
    eventSpeaker: eventSpeaker(id: $id) {
      id
      firstName
      lastName
      jobTitle
      company
      profilePicture
      bio
      dateOfBirth
      language
      ipAddress
      createdAt
      updatedAt
      eventId
    }
  }
`;
const UPDATE_EVENT_SPEAKER_MUTATION = gql`
  mutation UpdateEventSpeakerMutation(
    $id: String!
    $input: UpdateEventSpeakerInput!
  ) {
    updateEventSpeaker(id: $id, input: $input) {
      id
      firstName
      lastName
      jobTitle
      company
      profilePicture
      bio
      dateOfBirth
      language
      ipAddress
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
  eventSpeaker,
}: CellSuccessProps<EditEventSpeakerById>) => {
  const [updateEventSpeaker, { loading, error }] = useMutation(
    UPDATE_EVENT_SPEAKER_MUTATION,
    {
      onCompleted: () => {
        toast.success('EventSpeaker updated');
        navigate(routes.eventSpeakers());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (
    input: UpdateEventSpeakerInput,
    id: EditEventSpeakerById['eventSpeaker']['id']
  ) => {
    updateEventSpeaker({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit EventSpeaker {eventSpeaker?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EventSpeakerForm
          eventSpeaker={eventSpeaker}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
