import Logo from '@/assets/Logo.png';

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p>
                        yapyapyap yapyap yapyapyap yap yap yap yapyap yapyap
                        yapyapyap yap yap yapyapyap yapyapyap yapyap yapyapyap
                        yap yap yapyapyap yapyapyap yapyap
                    </p>
                    <p>CopyWrite tag here Rights reserved GGGGG</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">yap yapyapyap yap yap yap y</p>
                    <p className="my-5">yap yapyapyap yap yap yap y</p>
                    <p>yapyapyap yap</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p>(123)456-7890</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
