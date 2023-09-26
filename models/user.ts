import { ObjectId } from "mongodb";

interface User {
  id: ObjectId;
  name: string;
  lastName: string;
  email?: string;
  numberPhone?: string;
}

export { User };
