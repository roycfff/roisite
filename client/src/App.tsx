import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";

function App() {
  return (
    <AccessibilityProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Accessibility Widget Demo
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Click the accessibility button in the bottom-right corner to customize your experience
            </p>
          </header>

          {/* Main Content */}
          <main className="space-y-8">
            {/* Introduction */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Welcome to Our Accessible Website
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                This demo showcases a comprehensive accessibility widget that allows users
                to customize their browsing experience. The widget includes features such
                as font size adjustment, contrast modes, line spacing, and much more.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Everyone deserves access to digital content. Our accessibility tools help
                ensure that your website is usable by people with various needs and
                preferences.
              </p>
            </section>

            {/* Features */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    Font Size Adjustment
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Increase or decrease text size from 80% to 200% for better readability.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    Contrast Modes
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Switch between normal, high contrast, and dark mode themes.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    Line & Letter Spacing
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Adjust spacing between lines and letters for improved reading comfort.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    Dyslexic-Friendly Font
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Enable OpenDyslexic font designed for better readability.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    Cursor Size
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Choose between normal, large, or extra-large cursor sizes.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    Link Highlighting
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Enhance link visibility with bold underlines and colors.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    Reading Guide
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    A horizontal line that follows your cursor for easier reading.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    Text Alignment
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Choose your preferred text alignment: left, center, or right.
                  </p>
                </div>
              </div>
            </section>

            {/* Sample Content */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Sample Article with Links
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Web accessibility is the inclusive practice of ensuring there are no
                  barriers that prevent interaction with, or access to, websites on the
                  World Wide Web by people with physical disabilities, situational
                  disabilities, and socio-economic restrictions on bandwidth and speed.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Visit{" "}
                  <a
                    href="https://www.w3.org/WAI/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    W3C Web Accessibility Initiative
                  </a>{" "}
                  to learn more about accessibility standards. You can also explore{" "}
                  <a
                    href="https://webaim.org/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WebAIM
                  </a>{" "}
                  for practical guidance and resources.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  When websites and web tools are properly designed and coded, people with
                  disabilities can use them. However, currently many sites and tools are
                  developed with accessibility barriers that make them difficult or
                  impossible for some people to use.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Try It Out!
              </h2>
              <p className="text-blue-100 text-lg mb-6">
                Click the accessibility button in the bottom-right corner to customize
                your reading experience. All settings are saved automatically.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started
              </button>
            </section>
          </main>

          {/* Footer */}
          <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 Accessibility Demo. Built with accessibility in mind.</p>
          </footer>
        </div>

        {/* Accessibility Widget */}
        <AccessibilityWidget />
      </div>
    </AccessibilityProvider>
  );
}

export default App;
