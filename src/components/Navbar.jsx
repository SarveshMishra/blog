import React from "react";
import { Heading } from "./navbar";
import { theme } from "../global_theme";
import { ThemeProvider } from "styled-components";
export const Navbar = () => {
	return (
		<ThemeProvider theme={theme}>
			<Heading>Navbar</Heading>
		</ThemeProvider>
	);
};
