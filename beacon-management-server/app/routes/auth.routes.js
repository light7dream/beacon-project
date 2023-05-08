// const { verifySignUp, authJwt } = require("../middleware");
// const controller = require("../controllers/auth.controller");

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	// app.post("/api/account/register", 
	// [ verifySignUp.checkDuplicateUsernameOrEmail ], 
	// controller.signup);

	// app.post("/api/account/login", 
	// controller.signin);

	// app.post("/api/account/me", [
	// 	authJwt.verifyToken
	// ], controller.me);

	// app.post("/api/account/profile", [
	// authJwt.verifyToken
	// ], controller.update);

	// app.post("/api/account/resetpassword", [
	// authJwt.verifyToken
	// ], controller.resetPassword);

	// app.post("/api/account/photo", [
	// authJwt.verifyToken
	// ], controller.updatePhoto);

	// app.delete("/api/account/photo", [
	// authJwt.verifyToken
	// ], controller.removePhoto);
};
