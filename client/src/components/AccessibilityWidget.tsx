import { useAccessibility } from "@/contexts/AccessibilityContext";
import { cn } from "@/lib/utils";
import {
  Accessibility,
  Minus,
  Plus,
  RotateCcw,
  Type,
  X,
} from "lucide-react";
import { useState } from "react";

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSetting, resetSettings } = useAccessibility();

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50",
          "w-14 h-14 rounded-full",
          "bg-blue-600 hover:bg-blue-700",
          "text-white shadow-lg",
          "flex items-center justify-center",
          "transition-all duration-200",
          "focus:outline-none focus:ring-4 focus:ring-blue-300",
          "aria-label"
        )}
        aria-label="Accessibility Options"
        title="Accessibility Options"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Accessibility className="w-6 h-6" />
        )}
      </button>

      {/* Panel */}
      {isOpen && (
        <div
          className={cn(
            "fixed bottom-24 right-6 z-50",
            "w-96 max-h-[80vh] overflow-y-auto",
            "bg-white dark:bg-gray-800 rounded-lg shadow-2xl",
            "border border-gray-200 dark:border-gray-700",
            "p-6 space-y-6",
            "animate-in slide-in-from-bottom-4 duration-200"
          )}
          role="dialog"
          aria-label="Accessibility Settings"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Accessibility className="w-5 h-5" />
              Accessibility
            </h2>
            <button
              onClick={resetSettings}
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              title="Reset all settings"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>

          {/* Font Size */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              <Type className="w-4 h-4 inline mr-2" />
              Font Size: {settings.fontSize}%
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  updateSetting("fontSize", Math.max(80, settings.fontSize - 10))
                }
                className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                aria-label="Decrease font size"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="range"
                min="80"
                max="200"
                step="10"
                value={settings.fontSize}
                onChange={(e) =>
                  updateSetting("fontSize", parseInt(e.target.value))
                }
                className="flex-1"
                aria-label="Font size slider"
              />
              <button
                onClick={() =>
                  updateSetting("fontSize", Math.min(200, settings.fontSize + 10))
                }
                className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                aria-label="Increase font size"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Contrast */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Contrast Mode
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["normal", "high", "dark"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => updateSetting("contrast", mode)}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium capitalize",
                    "border-2 transition-colors",
                    settings.contrast === mode
                      ? "border-blue-600 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                      : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                  )}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Line Spacing */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Line Spacing: {settings.lineSpacing}%
            </label>
            <input
              type="range"
              min="100"
              max="200"
              step="10"
              value={settings.lineSpacing}
              onChange={(e) =>
                updateSetting("lineSpacing", parseInt(e.target.value))
              }
              className="w-full"
              aria-label="Line spacing slider"
            />
          </div>

          {/* Letter Spacing */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Letter Spacing: {settings.letterSpacing}%
            </label>
            <input
              type="range"
              min="100"
              max="150"
              step="5"
              value={settings.letterSpacing}
              onChange={(e) =>
                updateSetting("letterSpacing", parseInt(e.target.value))
              }
              className="w-full"
              aria-label="Letter spacing slider"
            />
          </div>

          {/* Dyslexic Font */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Dyslexic-Friendly Font
            </label>
            <button
              onClick={() => updateSetting("dyslexicFont", !settings.dyslexicFont)}
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                settings.dyslexicFont ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
              )}
              role="switch"
              aria-checked={settings.dyslexicFont}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  settings.dyslexicFont ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
          </div>

          {/* Cursor Size */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Cursor Size
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["normal", "large", "extra-large"] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => updateSetting("cursorSize", size)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium capitalize",
                    "border-2 transition-colors",
                    settings.cursorSize === size
                      ? "border-blue-600 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                      : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                  )}
                >
                  {size.replace("-", " ")}
                </button>
              ))}
            </div>
          </div>

          {/* Link Highlight */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Highlight Links
            </label>
            <button
              onClick={() =>
                updateSetting("linkHighlight", !settings.linkHighlight)
              }
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                settings.linkHighlight ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
              )}
              role="switch"
              aria-checked={settings.linkHighlight}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  settings.linkHighlight ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
          </div>

          {/* Reading Guide */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Reading Guide
            </label>
            <button
              onClick={() =>
                updateSetting("readingGuide", !settings.readingGuide)
              }
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                settings.readingGuide ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
              )}
              role="switch"
              aria-checked={settings.readingGuide}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  settings.readingGuide ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
          </div>

          {/* Text Alignment */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Text Alignment
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["left", "center", "right"] as const).map((align) => (
                <button
                  key={align}
                  onClick={() => updateSetting("textAlign", align)}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium capitalize",
                    "border-2 transition-colors",
                    settings.textAlign === align
                      ? "border-blue-600 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                      : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                  )}
                >
                  {align}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Reading Guide Line */}
      {settings.readingGuide && (
        <div
          className="fixed left-0 right-0 h-0.5 bg-blue-500 pointer-events-none z-40"
          style={{
            top: "var(--reading-guide-y, 50%)",
          }}
        />
      )}
    </>
  );
}
