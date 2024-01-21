"use client";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Loading from "./loading";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <body suppressHydrationWarning>
            <children />
          </body>
        </Suspense>
      </Provider>
    </html>
  );
}
