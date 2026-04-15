export const Footer = () => {
    return (
        <footer className="py-16 px-8">
            <div className="
                flex flex-col gap-12 md:flex-row md:flex-wrap md:justify-between
            ">
                <div className="w-64 flex flex-col justify-between gap-4">
                    <h3>Authority Ledger</h3>
                    <p className="
                        text-sm text-[#64748B]
                    ">The premier choice for high-growth enterprise marketing and digital architecture.</p>
                </div>
                <div className="w-64 flex flex-col justify-between gap-4">
                    <h3>Company</h3>
                    <span>About Us</span>
                    <span>Case Studies</span>
                    <span>Careers</span>
                </div>
                <div className="w-64 flex flex-col justify-between gap-4">
                    <h3>Services</h3>
                    <span>Performance SEO</span>
                    <span>Paid Media</span>
                    <span>Brand Identity</span>
                </div>
                <div className="w-64 flex flex-col justify-between gap-4">
                    <h3>Connect</h3>
                    <span>Linked In</span>
                    <span>Instagram</span>
                    <span>Twitter (X)</span>
                </div>
            </div>
            <div className="
                flex flex-col md:flex-row md:justify-between pt-8
            ">
                <span className="text-center">© 2024 Authority Ledger. All rights reserved.</span>
                <div className="flex justify-center md:justify-between gap-8">
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}