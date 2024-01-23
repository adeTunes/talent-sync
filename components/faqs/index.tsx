import FaqAccordion from "./faq-accordion";



function FAQs() {
  return (
    <section className="flex max-[830px]:flex-col py-[96px] gap-10 app-container">
      <div className="flex max-w-[547px] flex-col gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-lg-semibold text-blue-700">Support</p>
          <h2 className="display-lg-semibold max-[950px]:text-[36px] text-grey-800">FAQs</h2>
        </div>
        <p className="text-xs-regular max-[950px]:text-[18px] text-gray-500">
          Everything you need to know about the product and billing. Can&apos;t
          find the answer you&apos;re looking for? Please chat to our friendly
          team.
        </p>
      </div>
      <FaqAccordion />
    </section>
  );
}

export default FAQs;
