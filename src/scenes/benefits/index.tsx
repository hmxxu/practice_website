import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { BenefitType } from '@/shared/types';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphics from '@/assets/BenefitsPageGraphic.png';

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: 'State of the Art Facilities',
        description:
            'yapyapyap yapyap yapyapyap yap yap yap yapyap yapyap yapyapyap yap yap yapyapyap',
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
            'yapyapyap yapyap yapyapyap yap yap yap yapyap yapyap yapyapyap yap yap yapyapyap',
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: 'Expert and pro trainers',
        description:
            'yapyapyap yapyap yapyapyap yap yap yap yapyap yapyap yapyapyap yap yap yapyapyap',
    },
];

const container = {
    hidden: {},
    visiable: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* Header */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>MORE THAN JUST A GYM.</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and
                        classes to get you to your ultimate fitness goals with
                        ease. We provide true care into each and every member.
                    </p>
                </motion.div>

                {/* Benefits */}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* Graphics and description */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-20 md:flex">
                    {/* Graphic */}
                    <img
                        className="mx-auto"
                        alt="benefits-page-graphic"
                        src={BenefitsPageGraphics}
                    />

                    {/* Description */}
                    <div>
                        {/* Title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{' '}
                                        <span className="text-primary-500">
                                            FIT
                                        </span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        {/* Description */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                                yapyapyap yapyap yapyapyap yap yap yap yapyap
                                yapyap yapyapyap yap yap yapyapyap yapyapyap
                                yapyap yapyapyap yap yap yap yapyap yapyap
                                yapyapyap yap yap yapyapyap yapyapyap yapyap
                                yapyapyap yap yap yap yapyap yapyap yapyapyap
                            </p>
                            <p className="my-5">
                                yapyapyap yapyap yapyapyap yap yap yap yapyap
                                yapyap yapyapyap yap yap yapyapyap yapyapyap
                                yapyap yapyapyap yap yap yap yapyap yapyap
                                yapyapyap yap yap yapyapyap yapyapyap yapyap
                                yapyapyap yap yap yap yapyap yapyap yapyapyap
                            </p>
                        </motion.div>
                        {/* Button */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Benefits;
