// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Flow State Timer</Title>
        <Meta
          name="description"
          content="Reach flow state with a pomodoro timer that learns from you."
        />
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <div class="m-4 flex justify-between items-center">
              <h1>Flow State Timer</h1>
              <div class="flex items-center space-x-4">
                <A href="/about">
                  <span>?</span>
                  <span class="sr-only">About</span>
                </A>
                <A href="/roadmap">
                  <span>O</span>
                  <span class="sr-only">Roadmap</span>
                </A>
              </div>
            </div>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
