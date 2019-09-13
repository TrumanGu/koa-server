/*
let requireDirectory = require('require-directory')
module.exports = requireDirectory(module)
*/

import User from './user.controller'
import Test from './test.controller'
import FileUpDown from './fileUpDown.controller'
import Page from './page.controller'

export { User, Test, FileUpDown, Page }