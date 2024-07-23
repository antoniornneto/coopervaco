import Image from "next/image";
import logo from "../../../public/assets/logo.svg";
import avatar from "../../../public/assets/erasmo.jpg";
import Button from "@/components/Button";
import { Pencil, Trash2, Download, Eye } from "lucide-react";

export default function Home() {
  const atas = [
    {
      date: "15/07/2024",
      title: "Apresentação do protótipo",
    },
    {
      date: "11/07/2024",
      title: "Discussões dos tópicos",
    },
    {
      date: "10/07/2024",
      title: "Orçamento referente ao sistema de atas",
    },
    {
      date: "18/07/2024",
      title: "Reunião para tratar da ata eletrônica",
    },
  ];
  return (
    <>
      <header className="h-32 flex">
        <div className="w-96 h-full bg-zinc-300 flex justify-center">
          <Image src={logo} alt="logo da cooperativa" />
        </div>
        <div className="bg-secundary flex flex-1 w-full px-10 items-center text-white">
          <div className="flex items-center gap-2 ml-auto">
            <div>
              <h1>Dr. Erasmo</h1>
              <span>Mat.: 0967</span>
            </div>
            <Image
              className="w-20 h-20 rounded-full border-2 border-white"
              src={avatar}
              alt={`Avatar do usuario`}
            />
          </div>
        </div>
      </header>

      <main className="flex flex-col space-y-10 font-roboto">
        <section className="w-11/12 flex flex-1 items-center gap-10 py-8 mx-auto">
          <h1 className="text-5xl">Atas de Reuniões</h1>
          <select
            className="border-[1px] border-zinc-200 rounded-lg w-36 h-8 px-5"
            name=""
            id=""
          >
            <option value="">2024</option>
          </select>
          <Button style={"w-32 h-8"}>Criar Ata</Button>
        </section>

        <div className="w-11/12 mx-auto">
          <div className="flex gap-6 mb-4">
            <label className="flex gap-2" htmlFor="signedAtas">
              <input id="signedAtas" type="checkbox" />
              Atas assinadas
            </label>
            <label className="flex gap-2" htmlFor="pendentAtas">
              <input id="pendentAtas" type="checkbox" />
              Atas pendentes
            </label>
          </div>
          <div className="">
            {atas.map((ata, index) => {
              return (
                <div
                  key={index}
                  className="border-[1px] border-zinc-300 h-16 flex items-center text-xl px-3 py-5 justify-between"
                >
                  <div className="flex items-center gap-20">
                    <span>{ata.date}</span>
                    <span>{ata.title}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>70%</span>
                    <Pencil color="#000000" />
                    <Trash2 color="#000000" />
                    <Download color="#000000" />
                    <Eye color="#000000" />
                    <Button style={"w-32 h-8 rounded-3xl text-sm"}>
                      Assinar Ata
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
