import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Server-only check for whether a real photo has been dropped into
 * public/photos/. Lets pages reference photos that don't exist yet without
 * breaking — see components/PhotoPlaceholder.tsx and README.md for the
 * naming convention. Once the file exists, the next build/request picks it
 * up automatically — no code changes needed.
 */
export function photoExists(relPath: string): boolean {
  return existsSync(join(process.cwd(), "public", relPath));
}
