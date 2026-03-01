'use client';

import { useEffect } from "react";
import ErrorMessage from "../components/ErrorMessage";

type RootErrorPageProps = {
    error: Error,
    reset: () => void
}

export default function RootErrorPage({error}: RootErrorPageProps) {

    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <>
            <ErrorMessage
                contentTitle='501'
                pageTitle='Erro Interno do Servidor'
                content='Ocorreu um erro do qual nossa aplicação não consegue se recuperar. Tente novamente mais tarde.'
            />
        </>
    )
}