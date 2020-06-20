import { User } from "../models";
import { WhereAttributeHash } from "sequelize/types";

export class UserService {
    index = (where?: WhereAttributeHash): Promise<User[]> => {
        return User.findAll({ where });
    }
}
