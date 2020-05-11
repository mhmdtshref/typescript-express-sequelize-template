import { User } from "../models";
import { WhereAttributeHash } from "sequelize/types";

export const index = (where?: WhereAttributeHash) => {
    return User.findAll({ where });
}