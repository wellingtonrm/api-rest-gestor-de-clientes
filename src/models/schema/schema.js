const {makeExecutableSchema} = require('graphql-tools');
const  usuarioML             = require('./types/usuarioML')
const inputUsuarioML          = require('./inputs/usuarioML')
const  resolvers             = require('./resolvers');




const SchemaDefinition =  `
 type Query {
    AllUsuariosML(_id: String):[usuarioML] 
  }
 type Mutation {
     registerUsuarioML(input: inputUsuarioML): String
   }
  schema {
    query: Query
    mutation: Mutation
    
  }
`;



const make = makeExecutableSchema({
  typeDefs: [SchemaDefinition, usuarioML, inputUsuarioML],
  resolvers:resolvers 
}); 
module.exports = make;