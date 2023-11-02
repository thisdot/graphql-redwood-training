export const schema = gql`
  type EventSpeaker {
    id: String!
    firstName: String!
    lastName: String!
    jobTitle: String
    company: String
    profilePicture: String
    bio: String!
    dateOfBirth: DateTime!
    language: String!
    ipAddress: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    event: Event!
    eventId: String!
    sessions: [EventSession]!
  }

  type Query {
    eventSpeakers: [EventSpeaker!]! @requireAuth
    eventSpeaker(id: String!): EventSpeaker @requireAuth
  }

  input CreateEventSpeakerInput {
    firstName: String!
    lastName: String!
    jobTitle: String
    company: String
    profilePicture: String
    bio: String!
    dateOfBirth: DateTime!
    language: String!
    ipAddress: String!
    eventId: String!
  }

  input UpdateEventSpeakerInput {
    firstName: String
    lastName: String
    jobTitle: String
    company: String
    profilePicture: String
    bio: String
    dateOfBirth: DateTime
    language: String
    ipAddress: String
    eventId: String
  }

  type Mutation {
    createEventSpeaker(input: CreateEventSpeakerInput!): EventSpeaker!
      @requireAuth
    updateEventSpeaker(
      id: String!
      input: UpdateEventSpeakerInput!
    ): EventSpeaker! @requireAuth
    deleteEventSpeaker(id: String!): EventSpeaker! @requireAuth
  }
`;
