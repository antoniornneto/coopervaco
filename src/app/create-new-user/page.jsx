"use client";

import Button from "@/components/Button";
import Warning from "@/components/ErrorWarning";
import { useState } from "react";

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
  const [isUserRegister, setIsUserRegister] = useState(false);
  const [warningMessage, setWarningMessage] = useState(
    "Os campos com * precisam ser preenchidos conforme os exemplos."
  );

  //Funções que capturam os valores do formulário
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

  // Função que muda o estado da mensagem de erro
  function fieldMissingError() {
    setIsMissingFillFieldError(true);
  }

  function userRegisterSuccessfuly() {
    setIsUserRegister(true);
  }

  //Função que registra o usuário no banco de dados
  function registerNewUser(event) {
    event.preventDefault();
    if (name.length === 0) {
      const nameError =
        'O campo "Nome Completo" é obrigatório e deve ser preenchido conforme o exemplo.';
      fieldMissingError();

      setWarningMessage(nameError);

      setTimeout(() => {
        setIsMissingFillFieldError(false);
      }, 5000);

      return;
    }

    if (role.length === 0) {
      const roleError =
        'O campo "Cargo" é obrigatório e deve ser preenchido conforme o exemplo.';

      fieldMissingError();

      setWarningMessage(roleError);

      setTimeout(() => {
        setIsMissingFillFieldError(false);
      }, 5000);

      return;
    }

    if (celphone.length === 0) {
      const telError =
        'O campo "Telefone" é obrigatório e deve ser preenchido conforme o exemplo.';

      fieldMissingError();

      setWarningMessage(telError);

      setTimeout(() => {
        setIsMissingFillFieldError(false);
      }, 5000);

      return;
    }

    if (birthday.length === 0) {
      const birthdayError =
        'O campo "Data de Nascimento" é obrigatório e deve ser preenchido conforme o exemplo.';

      fieldMissingError();

      setWarningMessage(birthdayError);

      setTimeout(() => {
        setIsMissingFillFieldError(false);
      }, 5000);

      return;
    }

    if (registration.length === 0) {
      const registrationError =
        'O campo "Número de Matrícula" é obrigatório e deve ser preenchido conforme o exemplo.';

      fieldMissingError();

      setWarningMessage(registrationError);

      setTimeout(() => {
        setIsMissingFillFieldError(false);
      }, 5000);

      return;
    }

    if (email.length === 0) {
      const emailError =
        'O campo "E-mail de Acesso" é obrigatório e deve ser preenchido conforme o exemplo.';

      fieldMissingError();

      setWarningMessage(emailError);

      setTimeout(() => {
        setIsMissingFillFieldError(false);
      }, 5000);

      return;
    }

    if (password.length === 0) {
      const passwordError =
        'O campo "Senha de Acesso" é obrigatório e deve ser preenchido conforme o exemplo.';

      fieldMissingError();
      setWarningMessage(passwordError);

      setTimeout(() => {
        setIsMissingFillFieldError(false);
      }, 5000);

      return;
    }

    const file = signature;
    console.log(file);

    const User = {
      name: name.toString(),
      role: role.toString(),
      tel: celphone.toString(),
      birthday: new Date(birthday),
      registration: parseInt(registration),
      email: email.toString(),
      password: password.toString(),
    };

    try {
      fetch("/api/add-user", {
        method: "POST",
        headers: {
          "Contet-Type": "application/json",
        },
        body: JSON.stringify(User),
      });
    } catch (error) {
      const erro =
        "Erro de rota, verifique se o fetch está preenchido corretamente";
      console.log(erro);
    }

    setName("");
    setRole("");
    setBirthday("");
    setCelphone("");
    setEmail("");
    setPassword("");
    setRegistration("");

    const registerSuccessful = "Usuário cadastrado com sucesso!";
    setWarningMessage(registerSuccessful);
    userRegisterSuccessfuly();

    setTimeout(() => {
      setIsUserRegister(false);
    }, 5000);
  }

  return (
    <main className="w-screen h-screen flex flex-col my-32 items-center">
      <title>Registre-se</title>
      {}

      <form
        className="w-[1200px] flex flex-col px-40 space-y-6"
        action=""
        onSubmit={registerNewUser}
        method="post"
      >
        <div>
          <h1 className="font-medium text-5xl mb-4">Registre-se</h1>
          <span className="text-zinc-300">
            *Utilize o mesmo e-mail e senha da CÚRIA
          </span>
        </div>

        <div className="h-10">
          {isMissingFillFieldError && (
            <Warning
              className={"bg-red-400 text-red-900 rounded-xl p-3 w-fit"}
              msg={warningMessage}
            />
          )}
          {isUserRegister && (
            <Warning
              className={"bg-green-400 text-green-900 rounded-xl p-3 w-fit"}
              msg={warningMessage}
            />
          )}
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="name">Nome Completo*</label>
            <input
              className="h-12 border-[1px] border-zinc-300 rounded-lg px-2"
              type="text"
              id="name"
              placeholder="Ex.: Joana Cooperfield Clinton Obama"
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
            <label htmlFor="birthday">Data de Nascimento*</label>
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
          <Button className={"flex-1 h-10"} type={"submit"}>
            Criar Conta
          </Button>
          <a href="/" className="flex-1">
            <Button className={"h-10 w-full"}>Voltar</Button>
          </a>
        </div>
      </form>
    </main>
  );
}
