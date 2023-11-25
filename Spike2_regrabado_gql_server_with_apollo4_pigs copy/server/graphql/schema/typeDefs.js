//use variable gql IF `#graphql .... ` doesn't work for you
const gql = String.raw;

const typeDefs = gql`
  enum MissionStatus {
    NOT_STARTED
    IN_PROGRESS
    COMPLETED
  }
  type Superhero {
    id: ID!
    name: String!
    secretIdentity: String!
    superpowers: [String!]!
    assignedMission: Mission
  }

  type Mission {
    id: ID!
    name: String!
    description: String!

    assignedTo: [Superhero]
    status: MissionStatus
  }

  type Query {
    superheroes: [Superhero]
    missions: [Mission]
    superhero(id: ID!): Superhero
    mission(id: ID!): Mission
  }

  type Mutation {
    addSuperhero(newSuperhero: AddSuperheroInput): Superhero
    addMission(newMission: AddMissionInput): Mission
    deleteSuperhero(id: ID!): Superhero
    deleteMission(id: ID!): Mission
    updateSuperhero(id: ID!, edits: EditSuperheroInput): Superhero
  }

  input AddSuperheroInput {
    name: String!
    secretIdentity: String!
    superpowers: [String!]!
    assignedMission: ID
  }
  input AddMissionInput {
    name: String!
    description: String!
    assignedTo: ID
    status: MissionStatus
  }
  input EditSuperheroInput {
    secretIdentity: String
    name: String
    superpowers: [String]
    assignedMission: String
  }
`;

export default typeDefs;
