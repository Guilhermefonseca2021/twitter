import { Avatar } from "@mui/material";
import { useFormik } from "formik";
import ImageIcon from '@mui/icons-material/Image'
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required")
})

export default function HomeSection() {
  const handleSubmit = (values: { content: string, image: string }) => {
    console.log("values", values)
  }

  // to manager our states to send the data.
  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = (file: ) => {

  }

  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold placeholder-opacity-90">Home</h1>
      </section>
      <section className={`pb-10`}>
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
              <div className="flex justify-between items-cneter mt-5">
                <div className="flex space-x-5 items-center">
                  <ImageIcon className="text-[#1d9bf0]" />
                  <input type="file" name="imageFile" className="hidden" onChange={handleSelectImage} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
