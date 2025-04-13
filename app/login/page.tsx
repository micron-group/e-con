export default function LoginPage() {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <form className="w-full max-w-sm p-6 bg-white shadow-xl rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
            <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
          </form>
        </div>
      );
    }