/**
 * Utilitaires : Extrait les mots d'une chaîne en ignorant la ponctuation.
 */
const extractWords = (text) => text.match(/[\wÀ-ÿ]+/g) || [];

/**
 * Retourne le nombre de caractères.
 */
export const getCharacterCount = (text) => text.length;

/**
 * Retourne le nombre de mots.
 */
export const getWordCount = (text) => extractWords(text).length;

/**
 * Retourne la liste des mots uniques, triés par ordre alphabétique.
 */
export const getUniqueSortedWords = (text) => {
    const words = extractWords(text).map(w => w.toLowerCase());
    return [...new Set(words)].sort();
};

/**
 * Retourne le mot le plus long.
 */
export const getLongestWord = (text) => {
    return extractWords(text).reduce(
        (longest, current) => (current.length > longest.length ? current : longest),
        ""
    );
};

/**
 * Retourne le nombre total de voyelles.
 */
export const getVowelCount = (text) => {
    const vowelsMatch = text.match(/[aeiouyàâäéèêëîïôöùûüœ]/gi);
    return vowelsMatch ? vowelsMatch.length : 0;
};