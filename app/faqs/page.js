import AccordionItem from "../../components/Accordions/AccordionItem";
import { accrodiansData } from "../../constants/accordions";

const Accordion = () => {
    return (
        <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:px-20 px-10 lg:pt-[20px] lg:pb-[90px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                FAQ
                            </span>
                            <h2 className="text-2xl md:text-4xl font-semibold capitalize text-center py-6 sm:text-4xl">
                                Any Questions? Look Here
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                  

                        {
                            accrodiansData?.map((item,index) => {
                                return (
                                    <div key={index} className="w-full px-4 lg:w-1/2">
                                        <AccordionItem
                                            header={item.header}
                                            text={item.paragraph}
                                        />
                                    </div>
                                )
                            })
                        }

                </div>
            </div>

            <div className="absolute bottom-0 right-0 z-[-1]">
                <svg
                    width="1440"
                    height="3000"
                    viewBox="0 0 1440 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="1308.65"
                            y1="1142.58"
                            x2="602.827"
                            y2="-418.681"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#F5F2FD" stop-opacity="0.36" />
                            <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                            <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default Accordion;