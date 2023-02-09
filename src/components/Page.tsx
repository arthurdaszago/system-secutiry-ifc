import { Box, BoxProps } from "@mui/material";
import { Head, Main } from "next/document";
import { forwardRef, ReactNode } from "react";

interface Props extends BoxProps {
    children: ReactNode;
    meta?: ReactNode;
    title: string;
}


const Page = forwardRef<HTMLDivElement, Props>(({ children, title = '', meta, ...other }, ref) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                {meta}
            </Head>

            <Box ref={ref} {...other}>
                {children}
            </Box>
        </>
    )
})