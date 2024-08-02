let express = require('express');
let router = express.Router();

let { handleUserData, handleInsertUrl, handleShortID } = require('../Controllers/UserApis')


router.route('/').get(handleUserData).post(handleInsertUrl)

router.route('/:shortID').get(handleShortID)


module.exports = router