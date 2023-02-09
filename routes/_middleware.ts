import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 509,
  site: "meu-site-teste",
  domains: ["meu-site-teste.deco.site"],
});