import { RequestHandler } from "express";
import multer from "multer";
import aws from "aws-sdk";
import { v4 } from "uuid";

const storage = multer.memoryStorage();

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

export const multerMiddleware = multer({ storage }).single("image");

export const imageUpload: RequestHandler = (req, res, next) => {
  if (req.file) {
    const fileType = req.file.originalname.split(".")[1];
    const imageName = v4() + "." + fileType;

    const params: aws.S3.PutObjectRequest = {
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: v4() + "." + fileType,
      Body: req.file.buffer,
    };

    s3.upload(params, (error, data) => {
      if (error) {
        res.status(500).send({ error });
      }
      // console.log(data);
      const imageUrl = data.Location;
      req.user!.imageUrl = imageUrl!;
      return next();
    });
  } else {
    next();
  }
};
