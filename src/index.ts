export default {
  async fetch(request: Request): Promise<Response> {
    return new Response("OK", {
      status: 200,
      headers: {
        "content-type": "text/plain"
      }
    });
  }
};
