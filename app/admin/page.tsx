export default function AdminDashboard() {
      return (
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
          <ul className="space-y-3">
            <li><a href="/admin/products" className="text-blue-600">Manage Products</a></li>
            <li><a href="/admin/orders" className="text-blue-600">View Orders</a></li>
            <li><a href="/admin/blog" className="text-blue-600">Manage Blog</a></li>
          </ul>
        </div>
      );
    }