import { useRef, useEffect } from "react";

export default function LogNbRenders() {
  const compteur = useRef(1);

  useEffect(() => {
    compteur.current = compteur.current + 1;
  });

  return <div className="logs">Nb Render : {compteur.current}</div>;
}
