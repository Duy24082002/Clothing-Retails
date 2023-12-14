const express = require("express");
const router = express.Router()
const userController = require('../controllers/UserController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('/sign-up', userController.createUser)
/**
     * @api {POST} /api/user/sign-up Sign Up User
     * @apiVersion 1.0.0
     * @apiName Sign Up
     * @apiGroup Users
     * @apiPermission Every type of user
     *
     * @apiDescription Sign Up on the system
     *
     * @apiParam {String} name User's name.
     * @apiParam {String} email User's email address.
     * @apiParam {String} password User's password.
     * @apiParam {String} confirmPassword Confirm user's password.
     * @apiParam {String} phone User's phone number.
     * @apiParamExample {json} Request-Example:
 * {
 *    "name": "quang anh2",
 *    "email": "qa1@gmail.com",
 *    "password": "123123",
 *    "confirmPassword": "123123",
 *    "phone": "123456789"
 * }
     * @apiExample Example usage:
     * curl -i http://localhost:3001/api/user/sign-up
     *
     * @apiSuccess {String} status ERR
     * @apiSuccess {String} message The password is equal confirmPassword
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *      {
     *           "status": "ERR",
     *          "message": "The password is equal confirmPassword"
     *      }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "invalid input"
     *     }
     */
router.post('/sign-in', userController.loginUser)
router.post('/log-out', userController.logoutUser)
router.put('/update-user/:id', authUserMiddleWare, userController.updateUser)
router.delete('/delete-user/:id', authMiddleWare, userController.deleteUser)
router.get('/getAll', authMiddleWare, userController.getAllUser)
router.get('/get-details/:id', authUserMiddleWare, userController.getDetailsUser)
router.post('/refresh-token', userController.refreshToken)
router.post('/delete-many', authMiddleWare, userController.deleteMany)

module.exports = router