import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Replicate from "npm:replicate@0.34.1";

Deno.serve(async (req) => {
  try {
    const { query } = await req.json();

    if (!Deno.env.get("REPLICATE_API_TOKEN")) {
      throw new Error("REPLICATE_API_TOKEN is required");
    }

    const replicate = new Replicate();

    const output: any = await replicate.run(
      "meta/meta-llama-3-8b-instruct",
      {
        input: {
          prompt: query,
          max_new_tokens: 2000,
          min_new_tokens: 0,
          debug: false,
          top_k: 50,
          top_p: 1,
          temperature: 0.5,
        },
      },
    );
    return new Response(output.join(""), {
      headers: { "Content-Type": "text/plain" },
      status: 200,
    });
  } catch (error) {
    return new Response(error, {
      headers: { "Content-Type": "text/plain" },
      status: 500,
    });
  }
});
