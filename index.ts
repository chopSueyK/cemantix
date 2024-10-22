import { serve } from "std/http/server.ts";
async function handler(_req: Request): Promise<Response> {
  return new Response("Hello World");
}

serve(handler);

