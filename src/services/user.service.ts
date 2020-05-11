import { User } from "../models";
import { WhereAttributeHash } from "sequelize/types";

export const index = (where?: WhereAttributeHash): Promise<User[]> => {
    return User.findAll({ where });
}