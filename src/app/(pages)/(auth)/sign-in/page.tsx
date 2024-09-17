'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Suspense } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const singInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof singInForm>

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({})

  async function handleSignIn(data: SignInForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="p-8 bg-background">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Access NekoFinance
            </h1>
            <p className="text-sm text-muted-foreground">
              Control your expenses
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label>Your E-mail</Label>
              <Input type="email" id="email " {...register('email')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </Suspense>
  )
}
