import type {
  QueryResolvers,
  MutationResolvers,
  EventSessionRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const eventSessions: QueryResolvers['eventSessions'] = () => {
  return db.eventSession.findMany();
};

export const eventSession: QueryResolvers['eventSession'] = ({ id }) => {
  return db.eventSession.findUnique({
    where: { id },
  });
};

export const createEventSession: MutationResolvers['createEventSession'] = ({
  input,
}) => {
  return db.eventSession.create({
    data: input,
  });
};

export const updateEventSession: MutationResolvers['updateEventSession'] = ({
  id,
  input,
}) => {
  return db.eventSession.update({
    data: input,
    where: { id },
  });
};

export const deleteEventSession: MutationResolvers['deleteEventSession'] = ({
  id,
}) => {
  return db.eventSession.delete({
    where: { id },
  });
};

export const EventSession: EventSessionRelationResolvers = {
  event: (_obj, { root }) => {
    return db.eventSession.findUnique({ where: { id: root?.id } }).event();
  },
  speaker: (_obj, { root }) => {
    return db.eventSpeaker.findUnique({ where: { id: root?.eventSpeakerId } });
  },
  registrants: (_obj, { root }) => {
    return db.eventSession
      .findUnique({ where: { id: root?.id } })
      .registrants();
  },
};
