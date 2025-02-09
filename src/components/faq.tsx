export default function Faq() {
    return (
        <div className="max-w-[1100px] mx-auto mb-50 w-[90vw]">
            <div className="text-center ">
                <h4 className="text-5xl font-bold">FAQs</h4>
                <p className="text-slate-700 my-8 lg:my-14 text-lg">Here are some of the most frequently asked questions about our platform. If you have any other questions, feel free to reach out to our support team.</p>
            </div>
            <div className="flex flex-col gap-5">
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold text-[1.2rem] lg:text-[1.3rem]">How do I create an account?</div>
                    <div className="collapse-content ">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-[1.2rem] ">I forgot my password. What should I do?</div>
                    <div className="collapse-content">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-[1.2rem]">How do I update my profile information?</div>
                    <div className="collapse-content">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-[1.2rem]">How can I contact support?</div>
                    <div className="collapse-content">You can contact our support team via the "Contact Us" page or by emailing support@ourplatform.com.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-[1.2rem]">Is there a mobile app available?</div>
                    <div className="collapse-content">Yes, our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play.</div>
                </div>
            </div>
        </div>
    )
}