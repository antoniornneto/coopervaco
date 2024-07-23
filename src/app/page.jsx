import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.svg";

const inputStyle = "w-96 h-16 bg-zinc-200 rounded-lg text-lg px-4";

export default function Page() {
  return (
    <main className="flex">
      <div className="backgroundImageLogin w-1/2 h-screen bg-cover"></div>
      <div className="w-1/2 h-screen flex justify-center items-center">
        <div className="flex flex-col space-y-5">
          <h1 className="font-medium text-3xl">Login</h1>
          <input className={inputStyle} type="text" placeholder="Matrícula" />
          <input className={inputStyle} type="password" placeholder="Senha" />
          <Link
            href={""}
            className="text-zinc-600 text-sm self-end font-bold hover:underline"
          >
            Esqueci minha senha
          </Link>

          <span className="text-xs text-zinc-300">
            *Insira a mesma senha usada no sistema da CURIA
          </span>

          {/* LINK COMPONENT TEMPORARIO PARA REALIZAR LOGIN */}
          <Link
            className="h-14 bg-primary text-white flex justify-center items-center rounded-lg hover:bg-primary/85"
            href={"/home"}
          >
            Login
          </Link>
          <Button
            type={"submit"}
            textColor="primary"
            style={
              "bg-transparent border-[1px] border-primary hover:text-white"
            }
          >
            Cadastrar-me
          </Button>
          <Image className="self-center" src={logo} alt="logo da cooperativa" />
        </div>
      </div>
    </main>
  );
}
