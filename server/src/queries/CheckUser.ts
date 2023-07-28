import { driver } from "../driver/Neo4j.connect";
import { User } from "../types/User";
import CreateUser from "./CreateUser";

const CheckUser = async ({id, name, img, wallet, key}: User) => {
  const session = driver.session();

  try {
    const result = await session.run(`
      MATCH (user:User{id: "${id}", name: "${name}"})
      RETURN user
    `);

    const users = result.records.map(record => record.get('user').properties as User);

    const user = users[0];

    if (user) {
      return user;
    } else {
      CreateUser({id, name, img, wallet, key});
      return {id, name, img, wallet: wallet ?? 0.00, key} satisfies User;
    }
  } finally {
    session.close();
  };
};

export default CheckUser;