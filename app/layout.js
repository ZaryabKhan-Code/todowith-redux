"use client";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some async operation (e.g., fetching initial data)
    const fetchData = async () => {
      // Perform your async operation here
      // For example, you can use setTimeout to simulate loading
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Once the data is loaded, set loading to false
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <html lang="en">
      <Provider store={store}>
        <body suppressHydrationWarning>
          {loading ? (
            <div>Loading...</div>
          ) : (
            // Render the actual content when loading is complete
            children
          )}
        </body>
      </Provider>
    </html>
  );
}
