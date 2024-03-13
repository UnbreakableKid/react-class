import { useMutation } from "@tanstack/react-query";
import { addDog } from "../dogAPI";
import type { NewDog } from "@repo/database/types";

const AddDogMutation = () => {
	return useMutation({
		mutationFn: ({ name, breed, age }: NewDog) => addDog(name, breed, age),
	});
};
export default AddDogMutation;
