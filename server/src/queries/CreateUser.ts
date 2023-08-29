import { driver } from "../driver/Neo4j.connect";
import { User } from "../types/User";

const CreateUser = ({id, name, img, wallet, key}: User) => {
  const session = driver.session();
  
  try {
    console.log("Creating user");

    session.run(`
      CREATE (:User{
        id: "${id}", 
        name: "${name}", 
        img: "${img}", 
        wallet: ${wallet ?? 0.00} 
        ${key && `, key: "${key}"`}
      })
    `);
  } finally {
    session.close();
  }
};

export default CreateUser;