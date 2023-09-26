import { Request, Response } from "express";
import { User } from "../models/user";
import { collections } from "../db/database";
import { ObjectId } from "mongodb";

export const showAllUsers = async (_req: Request, res: Response) => {
  try {
    const user = await collections.user?.find({}).toArray();
    if (user) res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const showUser = async (_req: Request, res: Response) => {
  const id = _req.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const user = await collections.user?.findOne(query);

    if (user) res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const saveUser = async (_req: Request, res: Response) => {
  const newUser = _req.body;
  try {
    const result = await collections.user?.insertOne(newUser);

    if (result) res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateUser = async (_req: Request, res: Response) => {
  const id = _req.params?.id;

  try {
    const content: User = _req.body as User;

    const query = { _id: new ObjectId(id) };
    const result = await collections.user?.updateOne(query, { $set: content });
    if (result) res.status(200).send('successfully user update');
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteUser = async (_req: Request, res: Response) => {
  const id = _req.params?.id;

  try {
    const query = { _id: new ObjectId(id) };

    const result = await collections.user?.deleteOne({ query });
    if (result) res.status(200).send('user delete');
  } catch (error) {
    res.status(500).send(error);
  }
};
