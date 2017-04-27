var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
} else {
  process.env.PORT = 80;
  process.env.MONGODB_URI = 'mongodb://todo-app-user:todo-app-pw@ds151060.mlab.com:51060/todo-app-api';
}
