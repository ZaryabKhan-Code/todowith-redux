"use client";
import { Provider } from "react-redux";
import { store } from "../redux/store";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body suppressHydrationWarning>{children}</body>
      </Provider>
    </html>
  );
}
