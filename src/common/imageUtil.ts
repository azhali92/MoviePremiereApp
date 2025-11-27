export function constructImageUrl(endUrl: string): string {
  return `${process.env.IMAGE_BASEURL}/w300${endUrl}`;
}
