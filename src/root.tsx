// @refresh reload
import { Links, Meta, Routes, Scripts } from 'solid-start/root';
import { ErrorBoundary } from 'solid-start/error-boundary';
import { Suspense } from 'solid-js';

export default function Root() {
  return (
    <html lang="en" class="h-full">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body class="antialiased h-full">
        <ErrorBoundary>
          <Suspense>
            <Routes />
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  );
}