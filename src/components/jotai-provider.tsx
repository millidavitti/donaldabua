"use client";

import { Provider } from "jotai";
import React, { ReactNode } from "react";
import { jotaiStore } from "./jotai-store";

export default function JotaiProvider({ children }: { children: ReactNode }) {
	return <Provider store={jotaiStore}>{children} </Provider>;
}
