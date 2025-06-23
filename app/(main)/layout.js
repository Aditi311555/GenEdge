// app/(main)/layout.js
export default function Layout({ children }) {
  return (
    <div className="pt-16"> {/* adjust pt-16 based on your header height */}
      {children}
    </div>
  );
}
