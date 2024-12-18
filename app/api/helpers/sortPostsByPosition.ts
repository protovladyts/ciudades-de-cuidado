import { Post } from "../wordpress/types/Post";

export function sortPostsByPosition(posts: Post[]): Post[] {
  return posts.sort((a, b) => {
    // Si ambos tienen posiciones negativas, se ordenan igualmente al final
    if (a.position < 0 && b.position < 0) return 0;
    // Si uno tiene posición negativa, va al final
    if (a.position < 0) return 1;
    if (b.position < 0) return -1;
    // Orden ascendente si ambos tienen posiciones no negativas
    return a.position - b.position;
  });
}
