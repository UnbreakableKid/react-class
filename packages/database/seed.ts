//add a few dogs to the database
import { insertDog } from "./database";

insertDog("Fido", "Golden Retriever", 3);
insertDog("Rex", "German Shepherd", 5);
insertDog("Buddy", "Labrador", 2);
insertDog("Max", "Poodle", 4);
insertDog("Charlie", "Beagle", 6);
insertDog("Jack", "Bulldog", 3);

console.log("Dogs added successfully");
