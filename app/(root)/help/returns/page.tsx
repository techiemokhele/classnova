import ComingSoonComponent from "@/components/sections/ComingSoonComponent";

const ReturnsPage = () => {
  return (
    <div className="flex flex-col container py-16 text-white">
      <h1 className="font-extrabold mb-4 text-[32px]">Returns Policy</h1>
      <p className="text-[10px] mb-4">Last updated: July 03, 2024</p>
      <p className="text-[10px] mb-4">
        At ClassNova, our mission is to redefine online shopping by curating a
        diverse selection of high-quality products that inspire and delight our
        customers. We aim to provide a seamless shopping experience that
        prioritizes customer satisfaction, innovation, and community support.
        Through our platform, we strive to empower small businesses and local
        artisans, fostering economic growth and promoting sustainable consumer
        choices.
      </p>

      <h2 className="text-2xl font-bold mb-4">Returns Policy</h2>
      <p className="text-[10px] mb-4">
        We want you to be completely satisfied with your purchase. If you are
        not satisfied, our returns policy includes the following:
      </p>
      <ul className="list-disc px-8 mb-4">
        <li className="text-[10px]">
          <span className="font-bold">Return Period:</span> Items can be
          returned within 30 days of delivery.
        </li>
        <li className="text-[10px]">
          <span className="font-bold">Condition of Items:</span> Returned items
          must be in their original condition and packaging, including all tags
          and labels.
        </li>
        <li className="text-[10px]">
          <span className="font-bold">Return Process:</span> To initiate a
          return, please contact our customer support team for a return
          authorization and instructions.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Non-Returnable Items</h2>
      <p className="text-[10px] mb-4">
        Certain items are non-returnable for reasons of health, safety, and
        quality assurance. These include:
      </p>
      <ul className="list-disc px-8 mb-4">
        <li className="text-[10px]">
          Personal care items (e.g., cosmetics, skincare products)
        </li>
        <li className="text-[10px]">Perishable goods (e.g., food, flowers)</li>
        <li className="text-[10px]">Custom or personalized items</li>
        <li className="text-[10px]">Gift cards</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Damaged or Incorrect Items</h2>
      <p className="text-[10px] mb-4">
        If you receive a damaged or incorrect item, please contact us within 7
        days of receipt. We will arrange for a replacement or refund:
      </p>
      <ul className="list-disc px-8 mb-4">
        <li className="text-[10px]">
          <span className="font-bold">Contact Us:</span> Provide your order
          number and details of the issue. Include photos if possible.
        </li>
        <li className="text-[10px]">
          <span className="font-bold">Resolution:</span> We will process your
          request and arrange for a return, replacement, or refund as quickly as
          possible.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Refunds</h2>
      <p className="text-[10px] mb-4">
        Once your return is received and inspected, we will notify you of the
        approval or rejection of your refund:
      </p>
      <ul className="list-disc px-8 mb-4">
        <li className="text-[10px]">
          <span className="font-bold">Approval:</span> If approved, your refund
          will be processed and a credit will automatically be applied to your
          original method of payment within a certain number of days.
        </li>
        <li className="text-[10px]">
          <span className="font-bold">Partial Refunds:</span> In some cases,
          only partial refunds are granted (if applicable), such as items not in
          their original condition, damaged, or missing parts for reasons not
          due to our error.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Exchanges</h2>
      <p className="text-[10px] mb-4">
        We only replace items if they are defective or damaged. If you need to
        exchange it for the same item, contact our customer support team.
      </p>

      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-[10px] mb-4">
        For any questions or concerns about our shipping and delivery policy,
        please contact us:
      </p>
      <p className="text-[10px] mb-4">
        <span className="font-bold">Email:</span> support@classnova.com
      </p>
      <p className="text-[10px] mb-4">
        <span className="font-bold">Phone:</span> +1 (123) 456-7890
      </p>
      <p className="text-[10px] mb-4">
        <span className="font-bold">Address:</span> 1234 Elm Street, Suite 567,
        Springs, Gauteng, South Africa
      </p>
    </div>
  );
};

export default ReturnsPage;
