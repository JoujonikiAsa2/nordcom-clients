'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiAlertCircle, FiCheckCircle, FiClock, FiPackage, FiRefreshCw, FiCreditCard, FiTruck } from 'react-icons/fi';
import Loader from '@/components/shared/Loader';

interface OrderItem {
  id: string;
  productId: string;
  quantity: number;
  price: number;
}

interface Payment {
  id: string;
  orderId: string;
  method: string;
  amount: number;
  status: string;
}

interface Order {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  orderItems: OrderItem[];
  payment: Payment[];
  paymentStatus: string;
  shippingFee: number;
  shippingId: string;
  status: string;
  totalAmount: number;
  totalProduct: number;
}

const statusConfig = {
  PENDING: { 
    color: 'bg-yellow-100 text-yellow-800', 
    icon: <FiClock className="mr-1" />,
    label: 'Pending'
  },
  PROCESSING: { 
    color: 'bg-blue-100 text-blue-800', 
    icon: <FiRefreshCw className="mr-1 animate-spin" />,
    label: 'Processing'
  },
  COMPLETED: { 
    color: 'bg-green-100 text-green-800', 
    icon: <FiCheckCircle className="mr-1" />,
    label: 'Completed'
  },
  CANCELLED: { 
    color: 'bg-red-100 text-red-800', 
    icon: <FiAlertCircle className="mr-1" />,
    label: 'Cancelled'
  },
  SHIPPED: {
    color: 'bg-purple-100 text-purple-800',
    icon: <FiTruck className="mr-1" />,
    label: 'Shipped'
  }
};

const paymentStatusConfig = {
  PAID: {
    color: 'bg-green-100 text-green-800',
    icon: <FiCheckCircle className="mr-1" />,
    label: 'Paid'
  },
  UNPAID: {
    color: 'bg-yellow-100 text-yellow-800',
    icon: <FiClock className="mr-1" />,
    label: 'Unpaid'
  },
  FAILED: {
    color: 'bg-red-100 text-red-800',
    icon: <FiAlertCircle className="mr-1" />,
    label: 'Failed'
  },
  REFUNDED: {
    color: 'bg-blue-100 text-blue-800',
    icon: <FiCreditCard className="mr-1" />,
    label: 'Refunded'
  }
};

const MyOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userToken = sessionStorage.getItem("accessToken");
        
        if (!userToken) {
          router.push('/login');
          return;
        }

        const response = await fetch('https://nordcom-backend-server.vercel.app/api/v1/order/my-orders', {
          method: 'GET',
          headers: {
            'Authorization': `${userToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setOrders(data?.data || []);
      } catch (err) {
        console.error('Failed to fetch orders:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [router]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <FiAlertCircle className="h-5 w-5 text-red-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 text-sm text-red-600 hover:text-red-500 font-medium"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (orders?.length === 0) {
    return (
      <div className="text-center py-12">
        <FiPackage className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-medium text-gray-900">No orders found</h3>
        <p className="mt-1 text-sm text-gray-500">You havent placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center mb-6">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Order History</h1>
          <p className="mt-2 text-sm text-gray-600">
            A list of all your recent orders including order details, status, and payment information.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white shadow overflow-hidden rounded-lg border border-gray-200">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Order #{order.id.slice(0, 8).toUpperCase()}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Placed on {formatDate(order.createdAt)}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 flex space-x-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusConfig[order.status as keyof typeof statusConfig]?.color || 'bg-gray-100 text-gray-800'}`}>
                    {statusConfig[order.status as keyof typeof statusConfig]?.icon || <FiClock className="mr-1" />}
                    {statusConfig[order.status as keyof typeof statusConfig]?.label || order.status}
                  </span>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${paymentStatusConfig[order.paymentStatus as keyof typeof paymentStatusConfig]?.color || 'bg-gray-100 text-gray-800'}`}>
                    {paymentStatusConfig[order.paymentStatus as keyof typeof paymentStatusConfig]?.icon || <FiCreditCard className="mr-1" />}
                    {paymentStatusConfig[order.paymentStatus as keyof typeof paymentStatusConfig]?.label || order.paymentStatus}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200">
              {order.orderItems.map((item) => (
                <div key={item.id} className="px-4 py-5 sm:px-6 sm:grid sm:grid-cols-5 sm:gap-4">
                  <div className="sm:col-span-2">
                    <p className="text-sm font-medium text-gray-500">Product ID</p>
                    <p className="mt-1 text-sm text-gray-900">{item.productId.slice(0, 8)}...</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Quantity</p>
                    <p className="mt-1 text-sm text-gray-900">{item.quantity}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Price</p>
                    <p className="mt-1 text-sm text-gray-900">{formatCurrency(item.price)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Subtotal</p>
                    <p className="mt-1 text-sm text-gray-900">{formatCurrency(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4 py-5 sm:px-6">
              <div className="flex justify-between">
                <div className="text-sm text-gray-500">
                  <p>Shipping Fee: {formatCurrency(order.shippingFee)}</p>
                  <p className="mt-1">Shipping ID: {order.shippingId.slice(0, 8)}...</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-500">Total Amount</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {formatCurrency(order.totalAmount + order.shippingFee)}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-4 py-4 sm:px-6 bg-gray-50 text-right">
              <button
                onClick={() => router.push(`/dashboard/orders/${order.id}`)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#101940] hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View Order Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;