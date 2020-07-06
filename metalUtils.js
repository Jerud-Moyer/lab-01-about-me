export function countsAsAYes(word) {
    const firstLetter = word.charAt(0).toLowerCase();
    const yesY = firstLetter === 'y';
    return yesY;
}