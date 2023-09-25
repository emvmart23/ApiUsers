import { connect } from "mongoose";
// import dotenv from "dotenv";

// dotenv.config()

export const ConnectDatabase = async () => {
  try {
    if (!process.env.MONGO_URI) {
        console.log('variable',process.env.MONGO_URI)
      throw new Error("url not defined");
    }

    const conn = await connect(process.env.MONGO_URI);
    console.log("conectado a la base de datos");
  } catch (error) {
    console.log(error);
  }
};
