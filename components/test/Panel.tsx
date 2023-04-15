import React, { useEffect, useState } from 'react';

function Panel() {
    return (
      <div className="shadow-2xl p-8 rounded-lg text-white min-w-[380px] max-w-[400px] lg:flex lg:flex-col lg:items-center lg:justify-center ">
      <h1 className="text-2xl font-bold mb-4">Panel de Seguimiento</h1>
        <div className="shadow-2xl p-8 rounded-lg text-white max-w-[1000px] lg:flex lg:flex-col lg:items-center lg:justify-center ">
          <p className="text-gray-200 mb-4">
            <strong>Consigna:</strong><br/>
            Responda las siguientes preguntas con respecto a su estado anémico en el espacio laboral, siendo:
            <br/>
            <strong>Nunca</strong> = Nunca
            <br/>
            <strong>1 Vez al Año</strong> = Raramente
            <br/>
            <strong>1 Vez al Mes</strong> = Cada Tanto
            <br/>
            <strong>1 Vez por Semana</strong> = Seguido
            <br/>
            <strong>A Diario</strong> = Siempre
            <br/>
            Recuerde responder de la forma más sincera para que el sistema pueda brindarle un resultado más preciso.
          </p>
        </div>
      </div>
    );
    
  }

export default Panel