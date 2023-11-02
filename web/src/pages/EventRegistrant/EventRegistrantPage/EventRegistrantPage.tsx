import EventRegistrantCell from 'src/components/EventRegistrant/EventRegistrantCell';

type EventRegistrantPageProps = {
  id: string;
};

const EventRegistrantPage = ({ id }: EventRegistrantPageProps) => {
  return <EventRegistrantCell id={id} />;
};

export default EventRegistrantPage;
