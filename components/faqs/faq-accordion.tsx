"use client"

import { Accordion } from "@mantine/core";
import classes from "./faqs.module.css";
import AccordionOpened from "./icons/accordion-opened";
import AccordionClosed from "./icons/accordion-closed";

const faqs = [
    {
      value: "How many participants can join a ClearLink video conference?",
      description:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      value: "Can I use ClearLink on multiple devices?",
      description:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      value: "Is ClearLink compatible with other video conferencing platforms?",
      description:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      value: "How does ClearLink ensure the security of my video conferences?",
      description:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      value: "Do I need to download any software to use ClearLink?",
      description:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      value: "What kind of customer support does ClearLink provide?",
      description:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
  ];
  
  const items = faqs.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

function FaqAccordion() {
  return (
    <Accordion
      defaultValue="How many participants can join a ClearLink video conference?"
      classNames={{
        chevron: classes.chevron,
        label: classes.label,
        content: classes.content,
        item: classes.item,
        control: classes.control,
      }}
      className="w-full max-[662px]:min-w-full min-w-[513px]"
      chevron={
        <span>
          <AccordionOpened className="open-accordion" />
          <AccordionClosed className="close-accordion" />
        </span>
      }
    >
      {items}
    </Accordion>
  );
}

export default FaqAccordion;
