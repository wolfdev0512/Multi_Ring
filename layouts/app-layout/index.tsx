import dynamic from "next/dynamic";

export { default as Header } from "./Header";
export const Footer = dynamic(() => import("./Footer"));
