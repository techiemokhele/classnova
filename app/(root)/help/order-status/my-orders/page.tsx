"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { OrderProps } from "@/types";
import myOrdersData from "@/assets/app/myOrdersData.json";
import { formatDecimalNumber, generateSlug } from "@/libs/utils";
import { NoResultsFoundComponent } from "@/components";

const MyOrdersPage = () => {
  const router = useRouter();

  const [orders, setOrders] = useState<OrderProps[]>(myOrdersData);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof OrderProps;
    direction: string;
  } | null>(null);

  const handleSort = (key: keyof OrderProps) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    const sortedOrders = [...orders].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setOrders(sortedOrders);
    setSortConfig({ key, direction });
  };

  const navigateToProductDetail = (slug: string) => {
    router.push(`/shop/product/${slug}`);
  };

  return (
    <>
      {orders.length > 0 ? (
        <div className="flex flex-col container mx-auto pt-16 pb-6">
          <p className="text-3xl text-white font-bold">Orders</p>

          <div className="overflow-x-auto mt-6">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("productName")}
                  >
                    Order
                  </th>

                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("productPrice")}
                  >
                    Price
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("orderDate")}
                  >
                    Order Date
                  </th>
                  <th
                    onClick={() => handleSort("orderNumber")}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider cursor-pointer"
                  >
                    Order Number
                  </th>
                  <th
                    onClick={() => handleSort("deliveryDate")}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider cursor-pointer"
                  >
                    Delivery Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="bg-gray-900 divide-y divide-gray-700">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-400 flex justify-center items-center">
                        {order.quantity}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        onClick={() =>
                          navigateToProductDetail(
                            generateSlug(order.productName)
                          )
                        }
                        className="flex items-center cursor-pointer"
                      >
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-md"
                            src={order.productImage}
                            alt={order.productName}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">
                            {order.productName}
                          </div>
                          <div className="text-[10px] text-gray-400 line-clamp-1">
                            {order.productDescription}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-400">
                        R{formatDecimalNumber(order.productPrice)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-400">
                        {order.orderDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-400">
                        #{order.orderNumber}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-400">
                        {order.deliveryDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className={`text-sm ${
                          order.status === "return"
                            ? "text-red-500"
                            : order.status === "pending"
                            ? "text-amber-500"
                            : order.status === "complete"
                            ? "text-green-500"
                            : ""
                        }`}
                      >
                        {order.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <NoResultsFoundComponent
            title="No previous orders found"
            message="Please complete your orders and visit again later"
          />
        </div>
      )}
    </>
  );
};

export default MyOrdersPage;
