import { createContext, useContext, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";

export type Langue = "fr" | "en";

type ContexteLangueType = {
  langue: Langue;
  changerLangue: Dispatch<SetStateAction<Langue>>;
};

const ContexteLangue = createContext<ContexteLangueType | undefined>(undefined);

type PropriétésFournisseurLangue = {
  children: ReactNode;
};

export const FournisseurLangue = ({ children }: PropriétésFournisseurLangue) => {
  const [langue, changerLangue] = useState<Langue>("fr");

  return (
    <ContexteLangue.Provider value={{ langue, changerLangue }}>
      {children}
    </ContexteLangue.Provider>
  );
};

export const useLangue = () => {
  const contexte = useContext(ContexteLangue);
  if (!contexte) {
    throw new Error(
      "useLangue doit être utilisé à l'intérieur de FournisseurLangue"
    );
  }
  return contexte;
};


