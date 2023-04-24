import mongoose from "mongoose";
const mongoUrl: any = process.env.MONGO_URI;
const conectarDB = async () => {
  try {
    const connection = await mongoose.connect(mongoUrl, {});

    const url = `${connection.connection.host} : ${connection.connection.port}`;

    console.log(`Mongo db en  ${url}`);
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

export default conectarDB;
