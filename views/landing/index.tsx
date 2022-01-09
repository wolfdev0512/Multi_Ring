import dynamic from "next/dynamic";

export const Hero = dynamic(() => import("./Hero"));
export const Vision = dynamic(() => import("./Vision"));
export const Work = dynamic(() => import("./Work"));
export const Started = dynamic(() => import("./Started"));
export const Faq = dynamic(() => import("./Faq"));
