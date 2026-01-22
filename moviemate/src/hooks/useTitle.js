export default function useTitle(title) {
    document.title = title ? `${title} - MovieMate` : 'MovieMate';
    return document.title;
}