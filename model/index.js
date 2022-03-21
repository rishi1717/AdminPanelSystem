const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(
	`mongodb+srv://${process.env.db_user}:${process.env.db_pass}@${process.env.cluster}.mongodb.net/${process.env.dbname}?retryWrites=true&w=majority`,
	(err) => {
		if (err) {
			console.log(err.message)
			console.log("error connecting MongoDB")
		} else {
			console.log("Connected to MongoDB")
		}
	}
)

// "mongodb://localhost:27017/userAdmin"
// `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@${process.env.cluster}.mongodb.net/${process.env.dbname}?retryWrites=true&w=majority`
