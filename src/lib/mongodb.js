const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = process.env.MONGODB_URI

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
})
let clientPromise

try {
	// Connect the client to the server	(optional starting in v4.7)
	clientPromise = client.connect()

	// Send a ping to confirm a successful connection
	console.log('Pinged your deployment. You successfully connected to MongoDB!')
} catch {
	console.log('client promise', clientPromise)
	console.dir
} finally {
	// Ensures that the client will close when you finish/error
	client.close()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
