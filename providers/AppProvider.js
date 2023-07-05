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

export const AppContext = createContext();

const engine =
  typeof window !== "undefined" ? new Styletron() : new StyletronServer();

const AppContainer = styled("div", ({ $theme }) => ({
  backgroundColor: $theme.colors.primary50,
  minHeight: "100dvh", // full height
  width: "100%", // full width
  margin: 0,
}));

export const AppProvider = ({ children }) => {
  // Add your site-wide state and functionality here

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <ScreenClassProvider>
          <SanityProvider>
            <AppContext.Provider
              value={
                {
                  /* Provide your state and functions here */
                }
              }
            >
              <AppContainer>{children}</AppContainer>
            </AppContext.Provider>
          </SanityProvider>
        </ScreenClassProvider>
      </BaseProvider>
    </StyletronProvider>
  );
};
