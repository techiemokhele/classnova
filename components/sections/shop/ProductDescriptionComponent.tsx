const ProductDescriptionComponent = () => {
  return (
    <div className="flex flex-row wf-full py-8 space-x-4">
      <div className="flex flex-col w-1/2 space-y-2">
        <h4 className="text-white text-l font-bold uppercase">Description</h4>

        <p className="text-white text-[10px] font-thin">
          your ultimate destination for quality and style. Each product in our
          collection is carefully curated to ensure exceptional craftsmanship
          and innovative design. From elegant apparel to cutting-edge
          electronics, we offer a diverse range of items to suit every taste and
          need. Our commitment to sustainability means you can shop with
          confidence, knowing that our products are both stylish and
          environmentally friendly. Experience the perfect blend of luxury and
          functionality with Classnova. Elevate your lifestyle and discover the
          difference with our premium offerings. Shop now and join the Classnova
          community for exclusive deals and updates.
        </p>
      </div>

      <div className="flex flex-col w-1/2 space-y-2">
        <h4 className="text-white text-l font-bold uppercase">Shipping</h4>

        <p className="text-white text-[10px] font-thin">
          At ClassNova, we prioritize getting your purchases to you swiftly and
          securely. We offer multiple shipping methods to suit your needs,
          including standard, expedited, and express shipping. Standard shipping
          is economical and reliable, typically delivering within 5-7 business
          days. For those who need their items sooner, our expedited shipping
          option reduces delivery time to 2-3 business days. For urgent needs,
          our express shipping ensures delivery within 1-2 business days. We
          also provide tracking on all orders, so you can stay updated on your
          shipment's progress. Your satisfaction is our priority, and we strive
          to provide a seamless delivery experience.
        </p>
      </div>
    </div>
  );
}

export default ProductDescriptionComponent