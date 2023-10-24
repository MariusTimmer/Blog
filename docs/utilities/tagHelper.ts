export function buildTagLink(tagName: string): string {
    return tagName.replace(" ", "-").toLowerCase();
}