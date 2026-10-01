import { useEffect, useMemo } from "react";

function App() {
  const targetUrl = useMemo(() => {
    return `allinone://verify-email${window.location.search}`;
  }, []);

  useEffect(() => {
    window.location.replace(targetUrl);
  }, [targetUrl]);

  return (
    <div style={styles.page}>
      <h2>Opening AllInOne…</h2>

      <p style={styles.text}>
        If the app does not open, tap the button below on the phone where
        AllInOne is installed.
      </p>

      <a href={targetUrl} style={styles.button}>
        Open AllInOne
      </a>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "system-ui, sans-serif",
    textAlign: "center",
    padding: "15vh 24px",
    color: "#0f172a",
  },

  text: {
    lineHeight: 1.6,
    maxWidth: "520px",
    margin: "0 auto",
  },

  button: {
    display: "inline-block",
    marginTop: "16px",
    padding: "14px 24px",
    borderRadius: "12px",
    background: "#2563eb",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
  },
};

export default App;
