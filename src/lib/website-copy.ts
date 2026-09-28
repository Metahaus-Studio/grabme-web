/** Presentation only. Keep source archives and API records unchanged. */
export function websiteCopy(value: string): string {
    return value.replace(/\s*\u2014\s*/g, ', ').replace(/\u2013/g, '-');
}
