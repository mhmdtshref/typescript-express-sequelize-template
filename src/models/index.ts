import sequelize from './sequelize'
import User from './user.model'

import relations from './relations'

Object.values(relations).forEach((relationsFunction: Function) => {
  relationsFunction()
})

export {
  sequelize,
  User,
}
