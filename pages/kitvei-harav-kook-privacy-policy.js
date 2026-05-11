import Head from "next/head";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy — כתבי הרב קוק</title>
        <meta
          name="description"
          content="Privacy Policy for the כתבי הרב קוק mobile application."
        />
      </Head>
      <main dir="ltr" className="bg-white text-gray-800 min-h-screen py-12 px-6">
        <article className="max-w-3xl mx-auto leading-relaxed">
          <h1 className="text-4xl font-extrabold mb-2">
            Privacy Policy — כתבי הרב קוק
          </h1>
          <p className="text-gray-500 mb-8">
            <strong>Last updated:</strong> 2026-05-11
          </p>

          <p className="mb-6">
            This Privacy Policy describes how the{" "}
            <strong>כתבי הרב קוק</strong> mobile application (&ldquo;the
            App&rdquo;) handles information. The App is a digital library of
            the writings of Rabbi Abraham Isaac HaKohen Kook zt&quot;l, provided
            as-is for learning and study.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">TL;DR</h2>
          <p className="mb-6">
            <strong>
              The App does not collect, transmit, sell, or share any personal
              data.
            </strong>{" "}
            Everything you do in the App stays on your device.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">
            1. Information We Do Not Collect
          </h2>
          <p className="mb-3">
            The App does <strong>not</strong> collect any of the following:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Personal identifiers (name, email address, phone number, etc.)</li>
            <li>Account information (the App has no user accounts or login)</li>
            <li>Location data</li>
            <li>Contacts, photos, calendar, microphone, or camera access</li>
            <li>Advertising identifiers</li>
            <li>Crash logs, analytics, or telemetry sent to us or to third parties</li>
            <li>Reading history, bookmarks, or preferences sent off-device</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">
            2. Information Stored Locally on Your Device
          </h2>
          <p className="mb-3">
            The App stores a small amount of data{" "}
            <strong>locally on your device only</strong>, using the operating
            system&apos;s standard local-storage mechanism (
            <code>SharedPreferences</code> on Android /{" "}
            <code>NSUserDefaults</code> on iOS). This may include:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Your preferred font size</li>
            <li>Your bookmarks</li>
            <li>Other in-app preferences (e.g., last-read position)</li>
          </ul>
          <p className="mb-6">
            This data <strong>never leaves your device</strong>. It is not
            transmitted to us or to any server. Uninstalling the App removes
            this data.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">3. Network Activity</h2>
          <p className="mb-3">
            The App is designed to work <strong>fully offline</strong>. All
            book content is bundled with the App and read from local storage.
            The App does not make network requests to retrieve content,
            analytics, or advertising.
          </p>
          <p className="mb-6">
            The platform itself (Apple App Store, Google Play) may collect
            standard download and installation statistics independently of the
            App. That collection is governed by Apple&apos;s and Google&apos;s
            own privacy policies, not by this policy.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">
            4. Third-Party Services
          </h2>
          <p className="mb-6">
            The App does not integrate with third-party analytics, advertising
            networks, crash-reporting services, or social-media SDKs.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">
            5. Children&apos;s Privacy
          </h2>
          <p className="mb-6">
            The App is suitable for all ages and does not knowingly collect any
            information from children or from anyone else.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">
            6. Content and Copyright
          </h2>
          <p className="mb-6">
            The App provides classical Jewish texts authored by Rabbi A.I. Kook
            zt&quot;l. The texts are presented for personal learning and study.
            The App itself does not host user-generated content.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">
            7. Changes to This Policy
          </h2>
          <p className="mb-6">
            If this policy is updated, the &ldquo;Last updated&rdquo; date
            above will change. Because the App does not collect data, material
            privacy-impacting changes are not expected.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">8. Contact</h2>
          <p className="mb-6">
            For questions about this Privacy Policy, contact:
          </p>
          <p className="mb-6">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:ynonra@gmail.com"
              className="text-appRed-500 underline"
            >
              ynonra@gmail.com
            </a>
          </p>
        </article>
      </main>
    </>
  );
};

PrivacyPolicyPage.getLayout = (page) => page;

export default PrivacyPolicyPage;
