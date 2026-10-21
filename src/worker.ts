import { SITE } from './data/site';

type Env = {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
};

const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1']);

const isPreviewHost = (hostname: string): boolean =>
  hostname.endsWith('.workers.dev') || hostname.endsWith('.pages.dev');

const shouldBypassCanonicalRedirect = (url: URL): boolean =>
  LOCAL_HOSTS.has(url.hostname) || isPreviewHost(url.hostname);

const needsCanonicalRedirect = (url: URL): boolean =>
  url.protocol !== 'https:' || url.hostname !== SITE.domain;

const buildCanonicalUrl = (url: URL): string => {
  const canonical = new URL(url.toString());
  canonical.protocol = 'https:';
  canonical.hostname = SITE.domain;
  canonical.port = '';
  return canonical.toString();
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (!shouldBypassCanonicalRedirect(url) && needsCanonicalRedirect(url)) {
      return Response.redirect(buildCanonicalUrl(url), 301);
    }

    return env.ASSETS.fetch(request);
  }
};
