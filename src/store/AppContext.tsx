import { createContext, useContext, useReducer } from "react";
import { useLocalStorage } from "../hooks/useHelpers";

type ctxProps = {
  login: boolean;
  register: boolean;
  forgotPassword: boolean;
  demoVideo: boolean;
  privacy_policy: boolean;
  terms_conditions: boolean;
  cookies: boolean;
  contact_us: boolean;
  active_menu: string;
};
type ActionType =
  | { type: "login"; payload: boolean }
  | { type: "register"; payload: boolean }
  | { type: "forgotPassword"; payload: boolean }
  | { type: "demoVideo"; payload: boolean }
  | { type: "privacy_policy"; payload: boolean }
  | { type: "terms_conditions"; payload: boolean }
  | { type: "cookies"; payload: boolean }
  | { type: "contact_us"; payload: boolean }
  | { type: "active_menu"; payload: string };

type AppCtxType = {
  state: ctxProps;
  dispatch: React.Dispatch<ActionType>;
};

const initVal: ctxProps = {
  login: false,
  register: false,
  forgotPassword: false,
  demoVideo: false,
  privacy_policy: false,
  terms_conditions: false,
  cookies: false,
  contact_us: false,
  active_menu: "home",
};

const ctxReducer = (state: ctxProps, action: ActionType): ctxProps => {
  switch (action.type) {
    case "login":
      return { ...initVal, login: action.payload };
    case "register":
      return { ...initVal, register: action.payload };
    case "forgotPassword":
      return { ...initVal, forgotPassword: action.payload };
    case "demoVideo":
      return { ...initVal, demoVideo: action.payload };
    case "privacy_policy":
      return { ...initVal, privacy_policy: action.payload };
    case "terms_conditions":
      return { ...initVal, terms_conditions: action.payload };
    case "cookies":
      // const { localStore } = useLocalStorage();
      // state.cookies = localStore.acceptCookies;
      return { ...initVal, cookies: action.payload };
    case "contact_us":
      return { ...initVal, contact_us: action.payload };
    case "active_menu":
      return { ...initVal, ...state, active_menu: action.payload };
    default:
      return initVal;
  }
};

export const AppContext = createContext<AppCtxType | undefined>(undefined);

const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(ctxReducer, initVal);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within AppStateProvider");
  }
  return context;
};

export default AppStateProvider;
