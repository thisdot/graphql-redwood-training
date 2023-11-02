import EventSessionCell from 'src/components/EventSession/EventSessionCell';

type EventSessionPageProps = {
  id: string;
};

const EventSessionPage = ({ id }: EventSessionPageProps) => {
  return <EventSessionCell id={id} />;
};

export default EventSessionPage;
