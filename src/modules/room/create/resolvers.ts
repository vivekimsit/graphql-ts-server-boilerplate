import * as shortid from "shortid";
import { createWriteStream } from "fs";

import { ResolverMap } from "../../../types/graphql-utils";
import { Room } from "../../../entity/Room";

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
    createRoom: async (
      _,
      { input: { picture, amenities, ...data } },
      { session }
    ) => {
      const pictureUrl = picture ? await processUpload(picture) : null;

      const room = Room.create({
        ...data,
        pictureUrl
      });

      room.amenities = amenities;
      await room.save();

      console.log(session);
      return true;
    }
  }
};
