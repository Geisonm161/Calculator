import "./NumbersAndCharacters.css";

interface NumbersAndCharactersProps {
  onChange: (value: string) => void; // Cambiado para aceptar un string
  setValueInput: React.Dispatch<React.SetStateAction<string>>;
  valueInput: string;
}

export const NumbersAndCharacters: React.FC<NumbersAndCharactersProps> = ({
  onChange,
  setValueInput,
  valueInput,
}) => {
  return (
    <div className="my-2">
      <div className="container-num">
        <div
          onClick={(e) => onChange((e.target as HTMLElement).innerText)}
          className="num background-color-blue font-bold text-3xl"
        >
          1
        </div>
        <div
          onClick={(e) => onChange((e.target as HTMLElement).innerText)}
          className="num background-color-blue font-bold text-3xl"
        >
          2
        </div>
        <div
          onClick={(e) => onChange((e.target as HTMLElement).innerText)}
          className="num background-color-blue font-bold text-3xl"
        >
          3
        </div>
        <div
          onClick={(e) => onChange((e.target as HTMLElement).innerText)}
          className="num background-color-purple font-bold text-3xl"
        >
          {"-"}
        </div>
      </div>
      <div className="container-num">
        <div
          onClick={(e) => onChange((e.target as HTMLElement).innerText)}
          className="num background-color-blue font-bold text-3xl"
        >
          4
        </div>
        <div
          onClick={(e) => onChange((e.target as HTMLElement).innerText)}
          className="num background-color-blue font-bold text-3xl"
        >
          5
        </div>
        <div
          onClick={(e) => onChange((e.target as HTMLElement).innerText)}
          className="num background-color-blue font-bold text-3xl"
        >
          6
        </div>
        <div
          onClick={(e) => onChange((e.target as HTMLElement).innerText)}
          className="num background-color-purple text-3xl font-bold"
        >
          {"+"}
        </div>
      </div>
      <div className="container-num">
        <div
          onClick={(e) => onChange((e.target as HTMLElement).innerText)}
          className="num background-color-blue font-bold text-3xl"
        >
          7
        </div>
        <div
          onClick={(e) => onChange((e.target as HTMLElement).innerText)}
          className="num background-color-blue font-bold text-3xl"
        >
          8
        </div>
        <div
          onClick={(e) => onChange((e.target as HTMLElement).innerText)}
          className="num background-color-blue font-bold text-3xl"
        >
          9
        </div>
        <div
          onClick={(e) => onChange((e.target as HTMLElement).innerText)}
          className="num background-color-purple font-bold text-3xl"
        >
          {"*"}
        </div>
      </div>
      <div className="container-num">
        <div
          onClick={() => setValueInput("0")}
          className="num font-bold text-3xl"
          style={{ background: "white", color: "black" }}
        >
          CL
        </div>
        <div
          onClick={(e) => onChange((e.target as HTMLElement).innerText)}
          className="num background-color-blue font-bold text-3xl"
        >
          0
        </div>
        <div
          style={{ background: "green" }}
          onClick={() => setValueInput(eval(valueInput))}
          className="num font-bold text-3xl"
        >
          =
        </div>
        <div
          onClick={(e) => onChange((e.target as HTMLElement).innerText)}
          className="num background-color-purple font-bold text-3xl"
        >
          {"/"}
        </div>
      </div>
    </div>
  );
};
