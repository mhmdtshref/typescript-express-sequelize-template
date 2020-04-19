import sequelize from './sequelize'
import User from './User'

import relations from './relations'

Object.values(relations).forEach((relationsFunction: Function) => {
  relationsFunction()
})

export default {
  sequelize,
  User,
}
