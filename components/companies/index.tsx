import React from "react";
import Shopify from "./icons/shopify";
import Coinbase from "./icons/coinbase";
import Dropbox from "./icons/dropbox";
import Intercom from "./icons/intercom";
import Marvel from "./icons/marvel";
import Automattic from "./icons/automattic";

function Companies() {
  const companies = [Shopify, Coinbase, Dropbox, Intercom, Marvel, Automattic];

  return (
    <section className="py-[96px] app-container items-center flex flex-col gap-12">
      <p className="text-xl-medium text-center text-grey-600">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className="flex items-center gap-[69px] flex-wrap justify-center">
        {companies.map((Item, idx) => (
          <Item key={idx} />
        ))}
      </div>
    </section>
  );
}

export default Companies;
