import { createContext, useState } from "react";
import { ChildrenType } from "@/types/context/common";

// context types
interface ExampleType {
  accessToken: string;
  changeAcessToken: (token: string) => void;
}

// 기본값
const initalValue: ExampleType = {
  accessToken: "",
  changeAcessToken: (token) => {
    console.log(token);
  },
};

// context
export const ExampleContext = createContext(initalValue);

export const ExampleProvider = ({ children }: ChildrenType) => {
  const [token, setToken] = useState("");

  const changeAcessToken = (newToken: string) => {
    if (!newToken) return;
    setToken(newToken);
  };

  return (
    <ExampleContext.Provider
      value={{ accessToken: token, changeAcessToken: changeAcessToken }}
    >
      {children}
    </ExampleContext.Provider>
  );
};
