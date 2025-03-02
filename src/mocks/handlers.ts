import { http, HttpResponse } from "msw";

/* handlers: what ever request you want to mock you need an handler. interception  */
export const handlers = [
  http.get("/resource", ({ request }) => {
    return HttpResponse.json([
      { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
      { id: 2, name: "Smith Williams", email: "smithwilliams@gmail.com" },
    ]);
  }),
];
