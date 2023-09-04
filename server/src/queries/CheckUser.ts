import { driver } from "../driver/Neo4j.connect";
import { User } from "../types/User";
import CreateUser from "./CreateUser";

const CheckUser = async (user: User) => {
  const session = driver.session();

  try {
    const result = await session.run(`
      MATCH (user:User{id: "${user.id}", name: "${user.name}"})
      RETURN user
    `);

    const users = result.records.map(record => record.get('user').properties);

    const chosedUser = users[0];

    if (chosedUser) {
      return chosedUser;
    } else {
      CreateUser(user);
      return user;
    }
  } finally {
    session.close();
  };
};

export default CheckUser;