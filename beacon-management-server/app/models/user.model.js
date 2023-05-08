module.exports = mongoose => {
  
	var schema = mongoose.Schema({			
			email: {
				type: String,
				required: true,
				unique: true,
			},
			password: {
				type: String,
				required: true,
			},
			user_role: {
				type: Number,  // 0: 超级管理员, 1: 总公司, 2: 分包商, 3:工地
				required: true,
			}
		},
		{ timestamps: true }
	);

	const User = mongoose.model("users", schema);
	return User;
};