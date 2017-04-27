var mongoose = require('mongoose');

const localUrl = 'mongodb://localhost:27017/TodoApp';
const mLabUrl = 'mongodb://todo-app-user:todo-app-pw@ds151060.mlab.com:51060/todo-app-api';
mongoose.Promise = global.Promise;

mongoose.connect(mLabUrl);

module.exports = {mongoose};
