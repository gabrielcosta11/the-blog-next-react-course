import ErrorMessage from "../components/ErrorMessage";

export default function NotFound() {
    return (
        <>
            <ErrorMessage
                content='Erro 404 - A página que você está tentando acessar não existe neste site.'
                contentTitle="404"
                pageTitle="Página não encontrada"
            />
        </>
    )
} 