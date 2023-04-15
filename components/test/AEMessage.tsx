import React from "react";
import Screen from "../layout/Screen";

type Props = {
  points: number;
};

const AEMessage = ({ points }: Props) => {
  if (points >= 0 && points <= 18) {
    return (
      <Screen
        title="Desgaste Emocional: BAJO"
        body={
          <div className="text-justify ">
        <h2 className="font-bold">Desgaste Emocional: BAJO</h2>
        <p className="my-4">La presente sub-escala representa la vivencia de estar exhausto, abrumado, ”quemado” emocionalmente por las demandas del trabajo. Implica pérdida de energía, desgaste y fatiga. </p>
        <p>Su resultado es BAJO. Esto significa que no ha mostrado indicadores significativos para el Desgaste Emocional.</p>
      </div>
        }
      />
    );
  } else if (points >= 19 && points <= 26) {
    return (
     <Screen
        title="Desgaste Emocional: MEDIO"
        body={
          <div className="text-justify">
          <p className="my-4">La presente sub-escala representa la vivencia de estar exhausto, abrumado, ”quemado” emocionalmente por las demandas del trabajo. Implica pérdida de energía, desgaste y fatiga. </p>
          <p>Su resultado es MEDIO. Esto implica que no se observan indicadores significativos para el Desgaste Emocional. Asimismo, tampoco ha sido bajo, por lo que es importante prevenir su evolución negativa para que en un futuro no sea alta. Se sugiere monitorear sus niveles de energía y agotamiento, para estar motivado y tener éxito a nivel profesional.</p>
        </div>
        }
      />
    );
  } else {
    return (
      <Screen
        title="Desgaste Emocional: ALTO"
        body={
          <div className="text-justify">
        <p className="my-4">Esta sub-escala representa la vivencia de estar exhausto, abrumado, ”quemado” emocionalmente por las demandas del trabajo. Implica pérdida de energía, desgaste y fatiga.</p>
        <p>Su resultado es ALTO. Esto indica que podría tener síntomas compatibles con el Desgaste Emocional. La sensación de estar quemado emocionalmente podría afectar su capacidad profesional. Sería necesario que tome medidas de prevención para evitar que afecte su vida laboral y personal.</p>
      </div>
        }
      />
    );
  }
};

export default AEMessage;
