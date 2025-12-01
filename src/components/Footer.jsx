export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 mt-auto p-4">
      <div className="container mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Buris. All Rights Reserved.</p>
      </div>
    </footer>
  );
}