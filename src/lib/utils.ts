import clsx, { ClassValue } from "clsx";

/**
 * Função utilitária para manipular classes do Bootstrap.
 * Combina lógica condicional e classes adicionais.
 *
 * @param inputs Lista de classes condicionais ou fixas
 * @returns String de classes unificadas
 */
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

/**
 * Remove a barra final de uma URL ou caminho, caso ela exista.
 *
 * @param path - A URL ou caminho a ser normalizado.
 * @returns O caminho sem a barra final.
 *
 * @example
 * // Remove a barra final
 * removeTrailingSlash("/example/") // "/example"
 *
 * // Mantém o caminho inalterado
 * removeTrailingSlash("/example") // "/example"
 */
export function removeTrailingSlash(path: string): string {
    return path.replace(/\/$/, "");
}

/**
 * Cria uma URL com parâmetros de consulta, mesclando parâmetros antigos e novos.
 *
 * Parâmetros com valor `undefined` serão removidos da URL.
 *
 * @param href - A URL base.
 * @param oldParams - Parâmetros existentes (query string atual).
 * @param newParams - Parâmetros a serem adicionados ou atualizados.
 * @returns Uma string de URL com os parâmetros atualizados.
 *
 * @example
 * const href = "/search";
 * const oldParams = { query: "react", page: "2" };
 * const newParams = { page: undefined, category: "programming" };
 *
 * createURL(href, oldParams, newParams);
 * // Resultado: "/search?query=react&category=programming"
 */
export function createURL(
    href: string,
    oldParams: Record<string, string>,
    newParams: Record<string, string | undefined>
): string {
    const params = new URLSearchParams(oldParams);

    Object.entries(newParams).forEach(([key, value]) => {
        if (value === undefined) {
            params.delete(key);
        } else {
            params.set(key, value);
        }
    });

    return `${href}?${params.toString()}`;
}
