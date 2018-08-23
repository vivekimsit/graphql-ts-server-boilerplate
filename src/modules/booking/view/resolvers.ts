import { ResolverMap } from "../../../types/graphql-utils";
import { Booking } from "../../../entity/Booking";

export const resolvers: ResolverMap = {
  Query: {
    viewBooking: async (_, { id }) => {
      return Booking.findOne({ where: { id } });
    }
  }
};
