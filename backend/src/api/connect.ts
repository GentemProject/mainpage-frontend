import mongoose from 'mongoose';
import { config } from '../utils/config';

mongoose.connect(config.X_MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'projects',
});
mongoose.set("useCreateIndex", true);
mongoose.connection.on("on", console.log.bind("error en la conexion"))

export { mongoose }