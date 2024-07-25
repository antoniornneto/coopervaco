"use client";

import Link from "next/link";
import { useState } from "react";
import { POST } from "../api/add-ata/route";

export default function CreateNewAccount() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [celphone, setCelphone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [registration, setRegistration] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signature, setSignature] = useState("");

  const [isMissingFillFieldError, setIsMissingFillFieldError] = useState(false);

  function handleName(name) {
    setName(name);
  }

  function handleRole(role) {
    setRole(role);
  }

  function handleCel(celphone) {
    setCelphone(celphone);
  }

  function handleBirthday(birthday) {
    setBirthday(birthday);
  }

  function handleRegistration(registration) {
    setRegistration(registration);
  }

  function handleEmail(email) {
    setEmail(email);
  }

  function handlePassword(password) {
    setPassword(password);
  }

  function handleSignature(e) {
    console.log(e.target.files[0]);
    // setSignature(e.target.file[0]);
  }

  function fieldMissingError() {
    setIsMissingFillFieldError(true);
  }

  function getUser(event) {
    if (name === "") {
      event.preventDefault();

      fieldMissingError();

      setTimeout(() => {
        setIsMissingFillFieldError(false);
      }, 3000);

      return;
    } else {
      event.preventDefault();

      const file = signature;
      console.log(file);

      // const User = {
      //   name: name.toString(),
      //   role: role.toString(),
      //   tel: celphone.toString(),
      //   birthday: new Date(birthday),
      //   registration: parseInt(registration),
      //   email: email.toString(),
      //   password: password.toString(),
      // };

      // try {
      //   fetch("/api/add-ata", {
      //     method: "POST",
      //     headers: {
      //       "Contet-Type": "application/json",
      //     },
      //     body: JSON.stringify(User),
      //   });
      // } catch (error) {
      //   console.log(error);
      // }

      setName("");
      setRole("");
      setBirthday("");
      setCelphone("");
      setEmail("");
      setPassword("");
      setRegistration("");
    }
  }

  return (
    <main className="w-screen h-screen flex flex-col my-32 items-center">
      <form
        className="w-[1200px] flex flex-col px-40 space-y-6"
        action=""
        onSubmit={getUser}
        method="post"
      >
        <h1 className="font-medium text-5xl mb-4">Registre-se</h1>

        <div className="h-10">
          {isMissingFillFieldError && (
            <div className="bg-red-400 text-red-900 w-fit p-3 rounded-xl">
              Os campos com * precisam ser preenchidos.
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="name">Nome*</label>
            <input
              className="h-12 border-[1px] border-zinc-300 rounded-lg px-2"
              type="text"
              id="name"
              placeholder="Ex.: Joana Cooperfield"
              onChange={(e) => handleName(e.target.value)}
              value={name}
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="role">Cargo*</label>
            <input
              className="h-12 border-[1px] border-zinc-300 rounded-lg px-2"
              type="text"
              id="role"
              placeholder="Ex.: Diretor Financeiro"
              onChange={(e) => handleRole(e.target.value)}
              value={role}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="celphone">Telefone*</label>
            <input
              className="h-12 border-[1px] border-zinc-300 rounded-lg px-2"
              type="tel"
              id="celphone"
              placeholder="Ex.: 31987651243"
              onChange={(e) => handleCel(e.target.value)}
              value={celphone}
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="birthday">Data de Nascimento</label>
            <input
              className="h-12 border-[1px] border-zinc-300 rounded-lg px-2"
              type="date"
              id="birthday"
              onChange={(e) => handleBirthday(e.target.value)}
              value={birthday}
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="registration">Número de Matrícula*</label>
            <input
              className="h-12 w-72 border-[1px] border-zinc-300 rounded-lg px-2"
              type="number"
              id="registration"
              placeholder="Ex.: 9805"
              onChange={(e) => handleRegistration(e.target.value)}
              value={registration}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="email">Email de Acesso*</label>
            <input
              className="h-12 border-[1px] border-zinc-300 rounded-lg px-2"
              type="email"
              id="email"
              placeholder="Insira um e-mail válido para acessar"
              onChange={(e) => handleEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="password">Senha para acesso*</label>
            <input
              className="h-12 border-[1px] border-zinc-300 rounded-lg px-2"
              type="password"
              id="password"
              placeholder="Insira a nova senha para login"
              onChange={(e) => handlePassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="signature">
            Insira a foto da assinatura* (.jpg, .jpeg, .png)
          </label>
          <input
            className="h-12 border-[1px] border-zinc-300 rounded-lg px-2 py-2 flex flex-1"
            type="file"
            id="signature"
            src=""
            alt=""
            onChange={handleSignature}
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="h-14 bg-primary text-white text-xl rounded-lg flex justify-center self-center items-center flex-1 hover:bg-primary/85 cursor-pointer"
            value={"Criar Conta"}
          >
            Criar Conta
          </button>

          <Link
            className="h-14 bg-primary text-white text-xl rounded-lg flex justify-center self-center items-center flex-1 hover:bg-primary/85"
            href={"/"}
          >
            Voltar
          </Link>
        </div>
      </form>
    </main>
  );
}
