import { Avatar, Button } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useFormik } from "formik";
import ImageIcon from "@mui/icons-material/Image";
import * as Yup from "yup";
import { FmdGood, TagFaces } from "@mui/icons-material";
import TweetCard from "./TweetCard";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),
});

export default function HomeSection() {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleSubmit = (values: { content: string; image: File | null }) => {
    console.log("values", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: null,
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = (event: ChangeEvent<HTMLInputElement>) => {
    setUploadingImage(true);
    const files = event.target.files;
    if (files && files.length > 0) {
      const imgFile = files[0];
      formik.setFieldValue("image", imgFile);
      setSelectedImage(imgFile);
      console.log(uploadingImage);
    } else {
      setUploadingImage(false); // Reset the uploading state if no file is selected
      console.log(selectedImage);
    }
  };

  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold placeholder-opacity-90">Home</h1>
      </section>
      <section className="pb-10">
        <div className="flex">
          <Avatar
            alt="username"
            src="https://avatars.githubusercontent.com/u/92196697?s=400&u=c8473d18c654efa12f36df9ccf3315dac1c1c5d9&v=4"
          />
          <div className="w-full ml-4">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="What is happening..."
                  className="border-none outline-none text-xl bg-transparent w-full"
                  {...formik.getFieldProps("content")}
                />
                {formik.touched.content && formik.errors.content ? (
                  <span className="text-red-500">{formik.errors.content}</span>
                ) : null}
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label
                    htmlFor="imageFile"
                    className="flex items-center space-x-2 rounded-md cursor-pointer"
                  >
                    <ImageIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      id="imageFile"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <FmdGood className="text-[#1d9bf0] cursor-pointer" />
                  <TagFaces className="text-[#1d9bf0] cursor-pointer" />
                </div>
              </div>
              <div>
                <Button
                  sx={{
                    width: "100%",
                    borderRadius: "20px",
                    paddingY: "8px",
                    paddingX: "20px",
                    bgColor: "#1d9bf0",
                  }}
                  variant="contained"
                >
                  Tweet
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        {[1,1,1,1].map(() => <TweetCard />)}
      </section>
    </div>
  );
}
