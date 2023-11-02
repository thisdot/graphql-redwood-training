export const schema = gql`
  type Event {
    id: String!
    name: String!
    description: String
    timezone: String!
    startAt: DateTime!
    endAt: DateTime!
    venueType: EventVenueType!
    venueName: String
    address: String
    country: String
    city: String
    stateOrProvince: String
    postalCode: String
    registrationStartAt: DateTime!
    registrationEndAt: DateTime!
    currency: String!
    capacity: Int
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum EventVenueType {
    IN_PERSON
    ONLINE
    HYBRID
  }

  type Query {
    events: [Event!]! @requireAuth
    event(id: String!): Event @requireAuth
  }

  input CreateEventInput {
    name: String!
    description: String
    timezone: String!
    startAt: DateTime!
    endAt: DateTime!
    venueType: EventVenueType!
    venueName: String
    address: String
    country: String
    city: String
    stateOrProvince: String
    postalCode: String
    registrationStartAt: DateTime!
    registrationEndAt: DateTime!
    currency: String!
    capacity: Int
  }

  input UpdateEventInput {
    name: String
    description: String
    timezone: String
    startAt: DateTime
    endAt: DateTime
    venueType: EventVenueType
    venueName: String
    address: String
    country: String
    city: String
    stateOrProvince: String
    postalCode: String
    registrationStartAt: DateTime
    registrationEndAt: DateTime
    currency: String
    capacity: Int
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @requireAuth
    updateEvent(id: String!, input: UpdateEventInput!): Event! @requireAuth
    deleteEvent(id: String!): Event! @requireAuth
  }
`;
