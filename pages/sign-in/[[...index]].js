import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return<>
  <div className="items-center justify-center flex h-[100vh]">
    <SignIn />;
  </div>
  </> 
}