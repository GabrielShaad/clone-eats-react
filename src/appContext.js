import React from "react";

const appContext = React.createContext({});

export const AppProvider = appContext.Provider;
export const AppConsumer = appContext.Consumer;
