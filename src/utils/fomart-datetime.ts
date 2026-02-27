import { log } from "console"
import { format, formatDistanceToNow as dateFsnformatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export function formatDateTime(rawDate: string): string {
    const date = new Date(rawDate)

    return format(date, "dd/MM/yyyy 'ás' hh'h'mm", {locale: ptBR})
}

export function formatDistanceToNow(rawDate: string): string {
    const date = new Date(rawDate)

    return dateFsnformatDistanceToNow(date, {locale: ptBR, addSuffix: true})
}

log(formatDistanceToNow('2026-02-26T11:33:56.907Z'))