import dynamic from "next/dynamic";

// Make sure this is dynamically imported as a client component
const PaymentWrapper = dynamic(
  () => import("@/components/payment/PaymentWrapper"),
  {
    ssr: true,
  }
);

const PaymentPage = async ({ params }: { params: { orderId: string } }) => {
  const { orderId } = params;

  return (
    <div className="w-full min-h-[80vh] flex justify-center items-center">
      <PaymentWrapper orderId={orderId} />
    </div>
  );
};

export default PaymentPage;
