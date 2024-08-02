import { KeyboardBackspace } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <div>
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspace className="cursor-pointer" onClick={handleBack} />
        <h1 className="py-3 text-xl font-bold opacity-90 ml-5">
          Code with Guih
        </h1>
      </section>
      <section>
        <img
          className="w-[100%] h-[12rem] object-cover "
          src="https://media.licdn.com/dms/image/D4E16AQFYHULIwBjYjg/profile-displaybackgroundimage-shrink_350_1400/0/1709664823673?e=1727913600&v=beta&t=qaJ6LL8adkQPgCDZrfGNstd9Jkz0tCNJ32VUPVpUlao"
          alt=""
        />
      </section>
      <section>
        <div className="flex justify-between items-center mt-5 h-[5rem]">
          <Avatar
            src="https://www.linkedin.com/in/guilherme-fonseca-dos-santos-a49594207/"
            alt="code with guih"
            sx={{width:"10rem", height:"10rem"}}
          />
        </div>
      </section>
    </div>
  );
}
