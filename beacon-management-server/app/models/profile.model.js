module.exports = mongoose => {
  
	var schema = mongoose.Schema({			
			first_name: {
				type: String,
				required: true,
			},
			last_name: {
				type: String,
				required: true,
			},
			photo: {
				type: String,
            },
			phone_number: {
				type: String,
            },
			user_id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'users',
			}
		},
		{ timestamps: true }
	);

	const Profile = mongoose.model("profiles", schema);
	return Profile;
};