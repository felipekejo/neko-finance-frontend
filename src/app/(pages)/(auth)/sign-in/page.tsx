import { Suspense } from "react";

export default function SignIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="p-8">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Access NekoFinance</h1>
            <p className="text-sm text-muted-foreground">Control your expenses</p>
          </div>
          <form className="flex flex-col gap-4">
            <div>

            </div>
            
          </form>

          
        </div>
      </div>
    </Suspense>
    
  )
}