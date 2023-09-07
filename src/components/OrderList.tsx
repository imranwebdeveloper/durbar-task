import { orderList } from "../db/orderList";

const OrderList = () => {
  return (
    <div>
      <div className="flex justify-between mt-2 gap-4 px-4 text-[#B0CAD1]">
        <p className="flex-1">Customer</p>
        <p className="flex-1">Order ID</p>
        <p className="flex-1">Product</p>
        <p className="flex-1">Quantity</p>
        <p className="flex-1">Price</p>
        <p className="flex-1 ">Status</p>
      </div>

      {orderList.map((order, i) => {
        return (
          <div
            key={i}
            className="py-4 px-6 rounded bg-[#32363f] font-semibold flex gap-4 justify-between items-center mt-4  "
          >
            <p className="flex-1">{order.customerName}</p>
            <p className="flex-1">#{order.orderId}</p>
            <p className="flex-1">{order.product_name}</p>
            <p className="flex-1">{order.qty}</p>
            <p
              className={` flex-1 ${
                order.status === "Paid"
                  ? "text-green-500"
                  : order.status === "Pending"
                  ? "text-[#FA9441]"
                  : "text-[#F75757]"
              }`}
            >
              ${order.price}
            </p>
            <div className="flex-1">
              <button
                className={` py-2 w-[120px] rounded-full text-sm  ${
                  order.status === "Paid"
                    ? "bg-green-500"
                    : order.status === "Pending"
                    ? "bg-[#FA9441]"
                    : "bg-[#F75757]"
                }`}
              >
                {order.status}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
