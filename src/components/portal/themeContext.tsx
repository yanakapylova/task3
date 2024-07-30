import { createContext } from "react";

interface ContextInterface {
    isDark: boolean,
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = createContext<ContextInterface>({isDark: true, setIsDark: () => {}})