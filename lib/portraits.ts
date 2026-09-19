import fs from "node:fs";
import path from "node:path";

/**
 * Retourne le chemin public d'un portrait s'il a été déposé dans public/images
 * (ex : pbe.webp, pbe.jpg, pbe.jpeg ou pbe.png), sinon null.
 * Évalué au build (les pages qui l'utilisent sont statiques).
 */
export function findPortrait(name: string): string | null {
  for (const ext of ["webp", "jpg", "jpeg", "png"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "images", `${name}.${ext}`))) {
      return `/images/${name}.${ext}`;
    }
  }
  return null;
}
