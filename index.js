const { ApolloServer } = require('apollo-server')
const typeDefs = require('./Schema/index.js')
const resolvers = require('./Resolvers/index.js')
const conectarDB = require('./config/db.js')




// Conectar a la base de datos

conectarDB()


 // servidor
 const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => {
    //console.log(req.headers['authorization']);
    
    const token = req.headers['authorization'] || ''
    if(token) {
      try {
        
      } catch (error) {
        
      }
    }
  }
 });

// arrancar el sevidor
server.listen().then( ({url}) => {
    console.log(`Servidor listo en la URL ${url}`)
})