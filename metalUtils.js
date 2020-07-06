export function countsAsAYes(word) {
    const firstLetter = word.charAt(0);
    const yesY = firstLetter === 'y' || 'Y';
    return true;
};