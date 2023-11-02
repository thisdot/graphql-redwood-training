import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import EventRegistrantForm from 'src/components/EventRegistrant/EventRegistrantForm';

import type { CreateEventRegistrantInput } from 'types/graphql';

const CREATE_EVENT_REGISTRANT_MUTATION = gql`
  mutation CreateEventRegistrantMutation($input: CreateEventRegistrantInput!) {
    createEventRegistrant(input: $input) {
      id
    }
  }
`;

const NewEventRegistrant = () => {
  const [createEventRegistrant, { loading, error }] = useMutation(
    CREATE_EVENT_REGISTRANT_MUTATION,
    {
      onCompleted: () => {
        toast.success('EventRegistrant created');
        navigate(routes.eventRegistrants());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input: CreateEventRegistrantInput) => {
    createEventRegistrant({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New EventRegistrant</h2>
      </header>
      <div className="rw-segment-main">
        <EventRegistrantForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewEventRegistrant;
