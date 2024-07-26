import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.svg";
import Button from "@/components/Button";

const inputStyle = "w-96 h-16 bg-zinc-200 rounded-lg text-lg px-4";

export default function Page() {
  return (
    <main className="flex">
      <title>Área de Login</title>
      <div className="backgroundImageLogin w-1/2 h-screen bg-cover"></div>
      <div className="w-1/2 h-screen flex justify-center items-center">
        <form className="flex flex-col space-y-5">
          <h1 className="font-medium text-3xl">Login</h1>
          <input
            className={inputStyle}
            id="login"
            type="email"
            placeholder="E-mail"
          />
          <input
            className={inputStyle}
            id="password"
            type="password"
            placeholder="Senha"
          />
          <Link
            href={""}
            className="text-zinc-600 text-sm self-end font-bold hover:underline"
          >
            Esqueci minha senha
          </Link>

          {/* LINK COMPONENT TEMPORARIO PARA REALIZAR LOGIN */}
          <Button
            type="submit"
            className="h-14 bg-primary text-white flex justify-center items-center rounded-lg hover:bg-primary/85"
          >
            Login
          </Button>

          <Link
            className="bg-transparent h-14 rounded-xl flex justify-center items-center font-bold text-primary border-[1px] border-primary hover:bg-primary hover:text-white"
            href={"/create-new-user"}
            prefetch={false}
          >
            Cadastrar-me
          </Link>

          <Image
            className="self-center"
            width={200}
            src={logo}
            alt="logo da cooperativa"
          />
        </form>
      </div>
    </main>
  );
}
