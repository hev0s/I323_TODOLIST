import { describe, it, expect } from 'vitest';
import {
    getCharacterCount,
    getWordCount,
    getUniqueSortedWords,
    getLongestWord,
    getVowelCount
} from './GestionnaireDesTaches';

describe('Analyseur de texte fonctionnel', () => {
    const testSentence = "Bonjour tout le monde, bonjour le soleil !";

    it('devrait retourner le nombre exact de caractères', () => {
        // 42 caractères, espaces et ponctuation inclus
        expect(getCharacterCount(testSentence)).toBe(42);
    });

    it('devrait retourner le nombre de mots', () => {
        expect(getWordCount(testSentence)).toBe(7);
    });

    it('devrait retourner la liste des mots uniques triés alphabétiquement', () => {
        const expected = ["bonjour", "le", "monde", "soleil", "tout"];
        expect(getUniqueSortedWords(testSentence)).toEqual(expected);
    });

    it('devrait retourner le mot le plus long', () => {
        // "Bonjour" a 7 lettres. "bonjour" aussi, le premier rencontré (ou défini par reduce) est retourné.
        expect(getLongestWord(testSentence)).toBe("Bonjour");
    });

    it('devrait retourner le nombre total de voyelles', () => {
        // b(o)nj(ou)r t(ou)t l(e) m(o)nd(e), b(o)nj(ou)r l(e) s(o)l(ei)l -> 15
        expect(getVowelCount(testSentence)).toBe(15);
    });

    it('devrait gérer correctement une chaîne vide', () => {
        const emptyString = "";
        expect(getCharacterCount(emptyString)).toBe(0);
        expect(getWordCount(emptyString)).toBe(0);
        expect(getUniqueSortedWords(emptyString)).toEqual([]);
        expect(getLongestWord(emptyString)).toBe("");
        expect(getVowelCount(emptyString)).toBe(0);
    });
});