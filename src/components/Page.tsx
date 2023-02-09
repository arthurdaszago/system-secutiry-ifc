import { Box, BoxProps } from "@mui/material";
import Head from "next/head";
import { forwardRef, ReactNode } from "react";

interface Props extends BoxProps {
    children: ReactNode;
    meta?: ReactNode;
    title: string;
}

// eslint-disable react/display-name
const Page = forwardRef<HTMLDivElement, Props>(({ children, title = '', meta, ...other }, ref) => {
    return (
        <>
            <Head>
                <title>{`${title} | System security`}</title>
                {meta}
            </Head>

            <Box ref={ref} {...other}>
                {children}
            </Box>
        </>
    )
})