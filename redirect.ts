// redirect.ts

const redirectUrl = "http://srv233786.hoster-test.ru/red4/red/tom/";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
