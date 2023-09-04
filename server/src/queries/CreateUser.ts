import { driver } from "../driver/Neo4j.connect";
import { User } from "../types/User";

const CreateUser = (user: User) => {
  const session = driver.session();
  
  try {
    console.log("Creating user");

    session.run(`
      CREATE (:User{
        id: "${user.id}", 
        name: "${user.name}", 
        img: "${user.img}", 
        role: "${user.role}"
        ${user.role === "USER" && `, canViewKeys: ${user.canViewKeys}`}
        ${user.role === "ADMIN" && `, canViewKeys: ${user.canViewKeys || []}, canEditKeys: ${user.canEditKeys || []}`}
        ${user.key && `, key: "${user.key}"`}
      })
    `);
  } finally {
    session.close();
  }
};

export default CreateUser;