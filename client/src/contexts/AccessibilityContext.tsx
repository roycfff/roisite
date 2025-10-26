import React, { createContext, useContext, useEffect, useState } from "react";

export interface AccessibilitySettings {
  fontSize: number; // percentage
  contrast: "normal" | "high" | "dark";
  lineSpacing: number; // percentage
  letterSpacing: number; // percentage
  dyslexicFont: boolean;
  cursorSize: "normal" | "large" | "extra-large";
  linkHighlight: boolean;
  readingGuide: boolean;
  textAlign: "left" | "center" | "right";
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSetting: <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => void;
  resetSettings: () => void;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  contrast: "normal",
  lineSpacing: 100,
  letterSpacing: 100,
  dyslexicFont: false,
  cursorSize: "normal",
  linkHighlight: false,
  readingGuide: false,
  textAlign: "left",
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(
  undefined
);

export function AccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const stored = localStorage.getItem("accessibility-settings");
    return stored ? JSON.parse(stored) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem("accessibility-settings", JSON.stringify(settings));

    // Apply settings to document
    const root = document.documentElement;

    // Font size
    root.style.fontSize = `${settings.fontSize}%`;

    // Contrast
    root.classList.remove("contrast-high", "contrast-dark");
    if (settings.contrast === "high") {
      root.classList.add("contrast-high");
    } else if (settings.contrast === "dark") {
      root.classList.add("contrast-dark");
    }

    // Line spacing
    root.style.setProperty("--line-spacing", `${settings.lineSpacing}%`);

    // Letter spacing
    root.style.setProperty(
      "--letter-spacing",
      `${(settings.letterSpacing - 100) * 0.01}em`
    );

    // Dyslexic font
    if (settings.dyslexicFont) {
      root.classList.add("dyslexic-font");
    } else {
      root.classList.remove("dyslexic-font");
    }

    // Cursor size
    root.classList.remove("cursor-large", "cursor-extra-large");
    if (settings.cursorSize === "large") {
      root.classList.add("cursor-large");
    } else if (settings.cursorSize === "extra-large") {
      root.classList.add("cursor-extra-large");
    }

    // Link highlight
    if (settings.linkHighlight) {
      root.classList.add("link-highlight");
    } else {
      root.classList.remove("link-highlight");
    }

    // Reading guide
    if (settings.readingGuide) {
      root.classList.add("reading-guide");
    } else {
      root.classList.remove("reading-guide");
    }

    // Text align
    root.style.setProperty("--text-align", settings.textAlign);
  }, [settings]);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <AccessibilityContext.Provider
      value={{ settings, updateSetting, resetSettings }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within AccessibilityProvider"
    );
  }
  return context;
}
