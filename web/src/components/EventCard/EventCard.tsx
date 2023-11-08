import { FC } from 'react';

import { useQuery } from '@redwoodjs/web';

import { timeTag } from 'src/lib/formatters';
type EventCardProps = {
  id: string;
};

const EventCard: FC<EventCardProps> = ({ id }) => {
  const { data, loading, error } = useQuery(
    gql`
      query FindEventById($id: String!) {
        event(id: $id) {
          ...EventCardFragment
        }
      }
    `,
    {
      variables: {
        id,
      },
    }
  );

  if (loading) {
    return 'loading...';
  }

  if (error) {
    return `Error: ${error.message}`;
  }

  const { event } = data;

  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <strong>{timeTag(event.startAt)}</strong>
      <p>{event.description}</p>
    </div>
  );
};

export default EventCard;
