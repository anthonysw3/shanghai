import React, { createContext } from "react";

// Base Web
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Server as StyletronServer } from "styletron-engine-atomic";
import { BaseProvider, LightTheme } from "baseui";
import { styled } from "baseui";

// Sanity
import { SanityProvider } from "./SanityContext";

// Grid
import { ScreenClassProvider } from "react-grid-system";

// Hooks
import { useLayer } from "../src/components/utils/hooks/useLayer";

// Components
import Layer from "../src/components/containers/Layer";

export const AppContext = createContext();

const engine =
  typeof window !== "undefined" ? new Styletron() : new StyletronServer();

const AppContainer = styled("div", ({ $theme }) => ({
  backgroundColor: $theme.colors.primary50,
  minHeight: "100vh", // full height
  width: "100%", // full width
  margin: 0,
}));

export const AppProvider = ({ children }) => {
  // const { layers, openLayer, closeLayer } = useLayer();

  return (
    /*
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <ScreenClassProvider>
          <SanityProvider>
            <AppContext.Provider value={{ openLayer, closeLayer }}>
              <Layer layers={layers} closeLayer={closeLayer} />
              */ <AppContainer>{children}</AppContainer> /*
            </AppContext.Provider>
          </SanityProvider>
        </ScreenClassProvider>
      </BaseProvider>
    </StyletronProvider>*/
  );
};
