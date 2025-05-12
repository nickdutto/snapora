import type { EventHandler, EventHandlerRequest } from "@tanstack/react-start/server";

import { createStartAPIHandler, defaultAPIFileRouteHandler } from "@tanstack/react-start/api";

const handler: EventHandler<EventHandlerRequest, Promise<Response>> = createStartAPIHandler(
  defaultAPIFileRouteHandler,
);

export default handler;
