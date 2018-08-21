import { ResolverMap } from "../../../types/graphql-utils";
import { Room } from "../../../entity/Room";

export const resolvers: ResolverMap = {
  Room: {
    pictureUrl: (parent, _, { url }) =>
      parent.pictureUrl && `${url}/images/${parent.pictureUrl}`,
    hotel: ({ hotelId }, _) => Room.findOne({ hotelId })
  },
  Query: {
    findRooms: async () => {
      return Room.find();
    }
  }
};
