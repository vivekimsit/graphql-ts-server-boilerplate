import * as shortid from "shortid";
import { createWriteStream } from "fs";

import { ResolverMap } from "../../../types/graphql-utils";
import { Hotel } from "../../../entity/Hotel";
import { Address } from "../../../entity/Address";

const storeUpload = async (stream: any, mimetype: string): Promise<any> => {
  const extension = mimetype.split("/")[1];
  const id = `${shortid.generate()}.${extension}`;
  const path = `images/${id}`;

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ id, path }))
      .on("error", reject)
  );
};

const processUpload = async (upload: any) => {
  const { stream, mimetype } = await upload;
  const { id } = await storeUpload(stream, mimetype);
  return id;
};

export const resolvers: ResolverMap = {
  Mutation: {
    createHotel: async (_, { input: { picture, ...data } }, { session }) => {
      const thumbnailUrl = picture ? await processUpload(picture) : null;

      const address = Address.create({ ...data.address });
      await address.save();

      const hotel = Hotel.create({
        ...data,
        thumbnailUrl,
        userId: "e058f212-2d3f-42d4-938b-1c2568058491"
      });

      hotel.address = address;
      await hotel.save();

      console.log(session);
      return true;
    }
  }
};
