import { SiAdobeindesign } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { SiMaterialdesign } from "react-icons/si";
import { CgDesignmodo } from "react-icons/cg";
import { SiAffinitydesigner } from "react-icons/si";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";
import { AiFillProduct } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdDatasetLinked } from "react-icons/md";
import { SiAzuredevops } from "react-icons/si";

export const getIconByJobTitle = (jobTitle) => {
    switch (jobTitle.toLowerCase()) {
        case "ux designer":
            return <SiMaterialdesignicons className="text-teal-500 size-5" />;
        case "ui designer":
            return <MdDesignServices className="text-teal-500 size-5" />;
        case "graphic designer":
            return <SiMaterialdesign className="text-teal-500 size-5" />;
        case "visual designer":
            return <CgDesignmodo className="text-teal-500 size-5" />;
        case "product designer":
            return <SiAffinitydesigner className="text-teal-500 size-5" />;
        case "interaction designer":
            return (
                <SiInteractiondesignfoundation className="text-teal-500 size-5" />
            );
        case "frontend developer":
            return <FaCss3Alt className="text-teal-500 size-5" />;
        case "backend developer":
            return <FaNode className="text-teal-500 size-5" />;
        case "marketing specialist":
            return <SiMarketo className="text-teal-500 size-5" />;
        case "product manager":
            return <AiFillProduct className="text-teal-500 size-5" />;
        case "customer support representative":
            return <RiCustomerService2Fill className="text-teal-500 size-5" />;
        case "data analyst":
            return <MdDatasetLinked className="text-teal-500 size-5" />;
        case "devops engineer":
            return <SiAzuredevops className="text-teal-500 size-5" />;
        default:
            return <SiAdobeindesign className="text-teal-500 size-5" />;
    }
};

export const generateSlug = (productName) => {
    return productName.toLowerCase().replace(/\s+/g, '-');
};

export const formatNumber = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K";
    } else {
        return num;
    }
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

export const formatDecimalNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
};