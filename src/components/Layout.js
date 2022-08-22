import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'

// We want to use it in all our pages.

const theme = {}

// if (typeof window !== "undefined") {
//     require("smooth-scroll")('a[href*="#"]')
// }

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <main>
                {children}
            </main>
        </ThemeProvider>
    )
}

export default Layout