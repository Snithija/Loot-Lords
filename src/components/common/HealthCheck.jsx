import React, { useEffect, useState } from "react";

const HealthCheck = () => {
  const [checks, setChecks] = useState({
    react: false,
    router: false,
    contexts: false,
    styles: false,
  });

  useEffect(() => {
    const runChecks = () => {
      // Check React
      if (typeof React !== "undefined") {
        setChecks((prev) => ({ ...prev, react: true }));
      }

      // Check Router
      try {
        import("react-router-dom").then(() => {
          setChecks((prev) => ({ ...prev, router: true }));
        });
      } catch (error) {
        console.error("Router check failed:", error);
      }

      // Check Contexts
      try {
        import("../../context/CartContext").then(() => {
          setChecks((prev) => ({ ...prev, contexts: true }));
        });
      } catch (error) {
        console.error("Context check failed:", error);
      }

      // Check if styles are loaded
      if (
        document.querySelector("style") ||
        document.querySelector('link[rel="stylesheet"]')
      ) {
        setChecks((prev) => ({ ...prev, styles: true }));
      }
    };

    runChecks();
  }, []);

  const allPassed = Object.values(checks).every(Boolean);

  if (process.env.NODE_ENV === "production" && allPassed) {
    return null; // Don't show in production if all checks pass
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white border border-gray-300 rounded-lg p-3 shadow-lg z-50 text-xs">
      <div className="font-semibold mb-2">Health Check</div>
      <div className="space-y-1">
        <div
          className={`flex items-center gap-2 ${checks.react ? "text-green-600" : "text-red-600"}`}
        >
          <span>{checks.react ? "✅" : "❌"}</span>
          React
        </div>
        <div
          className={`flex items-center gap-2 ${checks.router ? "text-green-600" : "text-red-600"}`}
        >
          <span>{checks.router ? "✅" : "❌"}</span>
          Router
        </div>
        <div
          className={`flex items-center gap-2 ${checks.contexts ? "text-green-600" : "text-red-600"}`}
        >
          <span>{checks.contexts ? "✅" : "❌"}</span>
          Contexts
        </div>
        <div
          className={`flex items-center gap-2 ${checks.styles ? "text-green-600" : "text-red-600"}`}
        >
          <span>{checks.styles ? "✅" : "❌"}</span>
          Styles
        </div>
      </div>
    </div>
  );
};

export default HealthCheck;
