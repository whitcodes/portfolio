import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"

export default function Policies() {
    return (
        <main className="h-screen max-h-screen flex flex-col items-start justify-start w-full gap-4 pt-16 pr-2 sm:pr-16 overflow-y-auto pb-16">
            <h2 className="text-2xl sm:text-4xl">policies &amp; terms</h2>
            <p className="text-gray-400 max-w-2xl">
                Every freelance engagement is different, so none of this is set in stone — if something
                below doesn&apos;t fit your project, <span className="text-teal-400">reach out</span> and
                we&apos;ll work out a plan that makes sense for both of us.
            </p>

            <div className="text-lg flex flex-col w-full max-w-2xl">
                <span className="text-teal-700 text-xl sm:text-2xl mb-2">.business_info <span className="text-white">&#10100;</span></span>
                <div className="pl-4 pb-4 flex flex-col gap-1 text-gray-300">
                    <p><span className="text-gray-500">operating as:</span> whitcodes (DBA)</p>
                    <p><span className="text-gray-500">registered to:</span> Whit Reiley Milan, Sole Proprietorship</p>
                    <p><span className="text-gray-500">based in:</span> Austin, Texas, USA</p>
                    <p><span className="text-gray-500">currency:</span> all prices and invoices are in USD ($)</p>
                </div>
                <span className="text-white mb-4">&#10101;</span>

                <Accordion type="multiple" className="w-full">
                    <AccordionItem value="tos" className="border-gray-700">
                        <AccordionTrigger className="text-teal-700 text-xl sm:text-2xl hover:no-underline hover:text-teal-400">
                            .terms_of_service
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 flex flex-col gap-3 text-gray-300 text-base">
                            <p>
                                These terms cover general freelance work done through whitcodes. Project-specific details
                                (scope, timeline, price) are always agreed on in writing — usually a proposal or short
                                contract — before any work begins, and that document takes priority over anything below.
                            </p>
                            <p>
                                Project scope, deliverables, and included revisions are defined up front. Work outside
                                that scope, or revision requests beyond what was agreed to, are quoted and billed
                                separately before starting.
                            </p>
                            <p>
                                Code, designs, and other deliverables transfer to the client once the project is paid
                                in full. Until then, ownership stays with whitcodes.
                            </p>
                            <p>
                                Timely feedback, content, and access (hosting, repos, APIs, etc.) from the client are
                                needed to keep a project on schedule — delays on the client&apos;s side can shift delivery
                                dates accordingly.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="payment" className="border-gray-700">
                        <AccordionTrigger className="text-teal-700 text-xl sm:text-2xl hover:no-underline hover:text-teal-400">
                            .payment_terms
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 flex flex-col gap-3 text-gray-300 text-base">
                            <p>
                                For most projects: a 50% deposit is due before work starts, with the remaining balance
                                due at completion, before final delivery or launch. Larger projects may instead be
                                split into milestone payments tied to project phases.
                            </p>
                            <p>Invoices are sent electronically, and payment is due within the timeframe stated on the invoice.</p>
                            <p>
                                None of this is rigid — if a different schedule, split, or arrangement would work better
                                for your budget or timeline, bring it up and we&apos;ll figure out something fair.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="refund" className="border-gray-700">
                        <AccordionTrigger className="text-teal-700 text-xl sm:text-2xl hover:no-underline hover:text-teal-400">
                            .refund_policy
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 flex flex-col gap-3 text-gray-300 text-base">
                            <p>
                                Deposits reserve project time and cover initial planning, so they&apos;re generally
                                non-refundable once work has started. If a project is cancelled before any work begins,
                                the deposit is refundable.
                            </p>
                            <p>
                                For milestone-based projects, refunds for a partially completed milestone are evaluated
                                based on the work already done at the time of cancellation.
                            </p>
                            <p>
                                If something feels off about a charge or deliverable, say so — the goal is a fair outcome
                                for both sides, not a rigid rule.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="cancellation" className="border-gray-700">
                        <AccordionTrigger className="text-teal-700 text-xl sm:text-2xl hover:no-underline hover:text-teal-400">
                            .cancellation_policy
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 flex flex-col gap-3 text-gray-300 text-base">
                            <p>
                                Either side can cancel a project with written notice (an email is fine). As much notice
                                as possible is appreciated so work can be wound down cleanly.
                            </p>
                            <p>
                                The client is billed for work completed up to the cancellation date; any amount paid
                                beyond that is handled per the refund policy above.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="privacy" className="border-gray-700">
                        <AccordionTrigger className="text-teal-700 text-xl sm:text-2xl hover:no-underline hover:text-teal-400">
                            .privacy_policy
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 flex flex-col gap-3 text-gray-300 text-base">
                            <p>
                                The only personal data this site collects is what you submit through the contact
                                form — your name, email address, and message. That&apos;s sent directly to whit@whitcodes.dev
                                via a transactional email provider (Resend) solely to respond to your inquiry.
                            </p>
                            <p>
                                That information isn&apos;t sold, shared with third parties, or used for marketing. It&apos;s
                                kept only as long as needed to respond to you and for basic business records.
                            </p>
                            <p>
                                This site doesn&apos;t use analytics or tracking cookies. Any data collected during an
                                actual client project (e.g. for a web app being built) is covered separately by that
                                project&apos;s agreement.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </main>
    )
}
