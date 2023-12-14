const express = require("express");
const router = express.Router()
const ProductController = require('../controllers/ProductController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', ProductController.createProduct)
/**
     * @api {POST} /api/product/create Create Product
     * @apiVersion 1.0.0
     * @apiName create
     * @apiGroup Product
     * @apiPermission Admin
     *
     * @apiDescription Create on the system
     *
     * @apiParam {String} name The name of the product.
     * @apiParam {String} image The image URL of the product.
     * @apiParam {String} type The type/category of the product.
     * @apiParam {Number} price The price of the product.
     * @apiParam {Number} countInStock The available stock count of the product.
     * @apiParam {Number} rating The rating of the product.
     * @apiParam {String} description The description of the product.
     * @apiParam {Number} discount The discount percentage applied to the product.
     *
     * @apiExample Example usage:
     * curl -i -X POST -d '{"name":"duy1","image":"duy1-img.png","type":"duy1","price":5000000,"countInStock":14,"rating":5.0,"description":"duy1","discount":1}' http://localhost:3000/products/create
     *
     * @apiSuccess {Object} product The created product.
     * @apiSuccess {String} product.name The name of the product.
     * @apiSuccess {String} product.image The image URL of the product.
     * @apiSuccess {String} product.type The type/category of the product.
     * @apiSuccess {Number} product.price The price of the product.
     * @apiSuccess {Number} product.countInStock The available stock count of the product.
     * @apiSuccess {Number} product.rating The rating of the product.
     * @apiSuccess {String} product.description The description of the product.
     * @apiSuccess {Number} product.discount The discount percentage applied to the product.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
    *     {
     *       "product": {
     *         "name": "duy1",
     *         "image": "duy1-img.png",
     *         "type": "duy1",
     *         "price": 5000000,
     *         "countInStock": 14,
     *         "rating": 5.0,
     *         "description": "duy1",
     *         "discount": 1
     *       }
     *     }
     *
     * @apiError BadRequest Invalid request data.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "error": "Bad Request",
     *       "message": "Invalid request data"
     *     }
**/
router.put('/update/:id', authMiddleWare, ProductController.updateProduct)

router.get('/get-details/:id', ProductController.getDetailsProduct)

router.delete('/delete/:id', authMiddleWare, ProductController.deleteProduct)
router.get('/get-all', ProductController.getAllProduct)
router.post('/delete-many', authMiddleWare, ProductController.deleteMany)
router.get('/get-all-type', ProductController.getAllType)
/**
 * @api {POST} /api/product/get-all-type getAllType Product
 * @apiVersion 1.0.0
 * @apiName getAllType
 * @apiGroup Product
 * @apiPermission User
 * @api {get} /api/product
 * @apiName GetProductList
 * @apiGroup Products
 * 
 * @apiDescription Get on the system
 * @apiSuccess {String} status      Status of the response (e.g., "OK").
 * @apiSuccess {String} message     Message indicating the result of the request (e.g., "Success").
 * @apiSuccess {Array}  data        Array of product names.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "OK",
 *      "message": "Success",
 *      "data": [
 *        "Hat",
 *        "Jacket",
 *        "Shoe",
 *        "Short",
 *        "Sweater(hoodie)",
 *        "T-shirt",
 *        "crossbody bag",
 *        "duy1",
 *        "test1",
 *        "trouser"
 *      ]
 *    }
 */

module.exports = router