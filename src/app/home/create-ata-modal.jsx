export default function CreateAtaModal({ closeModal }) {
  return (
    <div className="fixed inset-0 bg-black/60 text-black flex items-center justify-center shadow-lg">
      <div className="bg-white w-[754px] h-[526px] rounded-xl p-4 space-y-4 flex flex-col">
        <div className="">
          <h1 className="text-2xl">Participantes da reunião</h1>
          <span className="text-sm text-zinc-500">
            Selecione as pessoas que irão participar da reunião
          </span>
        </div>

        <div className="flex-1">
          <div className="border-[1px] border-zinc-300 h-16 flex items-center text-xl px-3 py-5 justify-between">
            <div className="flex items-center gap-20">
              <span>Mat.: 0236</span>
              <span>Bárbara Cunha</span>
            </div>
          </div>
          <div className="border-[1px] border-zinc-300 h-16 flex items-center text-xl px-3 py-5 justify-between">
            <div className="flex items-center gap-20">
              <span>Mat.: 0236</span>
              <span>Bárbara Cunha</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="text-white bg-primary rounded-3xl text-sm font-medium px-4 py-2 hover:bg-primary/85">
            Próximo
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="text-primary bg-zinc-200 border-[1px] border-primary rounded-3xl text-sm font-medium px-4 py-2 hover:bg-zinc-200/60"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
