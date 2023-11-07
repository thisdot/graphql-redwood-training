export const schema = gql`
  type EventSession {
    id: String!
    name: String!
    description: String
    startAt: DateTime!
    endAt: DateTime!
    capacity: Int
    createdAt: DateTime!
    updatedAt: DateTime!
    event: Event!
    eventId: String!
    eventSpeakerId: String
    speaker: EventSpeaker
    registrants: [EventRegistrant]
  }

  type Query {
    eventSessions: [EventSession!]! @requireAuth
    eventSession(id: String!): EventSession @requireAuth
  }

  input CreateEventSessionInput {
    name: String!
    description: String
    startAt: DateTime!
    endAt: DateTime!
    capacity: Int
    eventId: String!
  }

  input UpdateEventSessionInput {
    name: String
    description: String
    startAt: DateTime
    endAt: DateTime
    capacity: Int
    eventId: String
  }

  type Mutation {
    createEventSession(input: CreateEventSessionInput!): EventSession!
      @requireAuth
    updateEventSession(
      id: String!
      input: UpdateEventSessionInput!
    ): EventSession! @requireAuth
    deleteEventSession(id: String!): EventSession! @requireAuth
  }
`;
