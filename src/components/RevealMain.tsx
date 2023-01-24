import { useEffect } from "react";

export default function RevealMain({ children }) {
  useEffect(() => {
    // This will be executed in the browser (client-side).
    const clientSideInitialization = async () => {
      // load modules in browser
      const Reveal = await (await import("reveal.js")).default;
      const Markdown = await (
        await import("reveal.js/plugin/markdown/markdown.esm")
      ).default;
      const deck = new Reveal({
        plugins: [Markdown],
      });
      deck.initialize();
    };
    clientSideInitialization();
  });

  return (
    <div className="reveal" style={{ width: "100vh", height: "100vh" }}>
      <div className="slides">{children}</div>
    </div>
  );
}
