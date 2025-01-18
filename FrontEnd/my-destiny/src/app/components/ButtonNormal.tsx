import Link from "next/link";
import { JSX } from "react";

export function BtnStyle(): string {
  const myBtnStyle:string = "w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg hover:scale-105 transition duration-300 ease-in-out transform flex items-center justify-center mt-1 mb-1";
  return myBtnStyle;
}

export function MyLink({caption, href, target}: {caption:string, href:string, target:string|null}):JSX.Element {
  return (<>
    <Link 
      href={href}
      className={BtnStyle()} 
      target={target ? target : "_self"}>
      <div className="me-auto"></div><div>{caption}</div><div className="ms-auto text-purple-300">&gt;</div>
    </Link>
  </>);
}