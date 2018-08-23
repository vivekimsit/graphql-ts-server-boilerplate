import { ResolverMap } from "../../../types/graphql-utils";
import { Hotel } from "../../../entity/Hotel";

export const resolvers: ResolverMap = {
  Query: {
    findHotels: async () => {
      return Hotel.find({ relations: ["address"] });
    }
  }
};
