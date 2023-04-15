import React from "react";

type Props = {
    points: any
};

function Form({ points }: Props) {
  return (
    <div className="bg-orange-200 h-auto w-[360px] mx-auto mt-10 p-6 rounded-lg flex flex-col">
      <p className="bg-blue-100">Tenes o no tenes estrés?</p>
      <p className="bg-blue-100 my-2">Si no tenes felicitaciones</p>
      <p className="bg-blue-100 my-2">Si tenes:</p>
      {points}
      <button className="bg-blue-600 px-4 py-1 rounded-lg mx-auto mt-6 text-white font-semibold">
        Ver resumen con publicidad
      </button>
      <button className="bg-blue-600 px-4 py-1 rounded-lg mx-auto mt-6 text-white font-semibold">
        Ver reusme completo con sign up
      </button>
      <form className="flex flex-col">
        <input
          className="my-1 py-1 px-2 rounded-md"
          type="text"
          placeholder="Email"
        />
        <input
          className="my-1 py-1 px-2 rounded-md"
          type="text"
          placeholder="Password"
        />
        <input
          className="my-1 py-1 px-2 rounded-md"
          type="text"
          placeholder="Nombre"
        />
        <input
          className="my-1 py-1 px-2 rounded-md"
          type="text"
          placeholder="Apellido Opcional"
        />
        <input
          className="my-1 py-1 px-2 rounded-md"
          type="text"
          placeholder="Edad"
        />
        <input
          className="my-1 py-1 px-2 rounded-md"
          type="text"
          placeholder="Sexo"
        />
        <input
          className="my-1 py-1 px-2 rounded-md"
          type="text"
          placeholder="Ocupacion"
        />
        <input
          className="my-1 py-1 px-2 rounded-md"
          type="text"
          placeholder="Horas por día"
        />
        <input
          className="my-1 py-1 px-2 rounded-md"
          type="text"
          placeholder="Nivel de estudios"
        />
        <input
          className="my-1 py-1 px-2 rounded-md"
          type="text"
          placeholder="País"
        />
        <input
          className="my-1 py-1 px-2 rounded-md"
          type="text"
          placeholder="Provincia (Opcional)"
        />

        <button className="bg-blue-600 px-4 py-1 rounded-lg mx-auto mt-6 text-white font-semibold">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Form;
