'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Suspense } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export default function SignIn() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({})

  async function handleSignIn(data: signInForm) {
    console.log(data)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Sign in success')
      router.push('/')
    } catch (error) {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="p-8 bg-background">
        <Button variant={'ghost'} asChild className="absolute top-8 right-8">
          <Link href={'/sign-up'}>Create Account</Link>
        </Button>

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
