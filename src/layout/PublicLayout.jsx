import RootLayout from "./RootLayout";

function PublicLayout({ children }) {
  return (
    <>
      <RootLayout>{children}</RootLayout>
    </>
  );
}

export default PublicLayout;
