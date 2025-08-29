"use client";
import { ReactNode } from "react";
import { queryClient } from "./query-client";
import { QueryClientProvider as ClientProvider } from "@tanstack/react-query";
export default function QueryClientProvider({
	children,
}: {
	children: ReactNode;
}) {
	return <ClientProvider client={queryClient}>{children} </ClientProvider>;
}
