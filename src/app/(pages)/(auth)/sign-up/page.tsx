'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

import { Suspense } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const signUpForm = z.object({
  email: z.string().email(),
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  password: z
    .string()
    .min(6, { message: 'Password should have at least 6 characters' }),
})

type SignUpForm = z.infer<typeof signUpForm>

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>({})

  async function handleSignUp(data: SignUpForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast.success('Sign In success')
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="p-8 bg-background">
        <Button variant={'ghost'} asChild className="absolute top-8 right-8">
          <Link href={'/sign-in'}>Log in</Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create Account
            </h1>
            <p className="text-sm text-muted-foreground">
              Control your expenses
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label>E-mail</Label>
              <Input type="email" id="email " {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label>First Name</Label>
              <Input type="text" id="firstName " {...register('firstName')} />
            </div>

            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input type="text" id="lastName " {...register('lastName')} />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" id="password " {...register('password')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </Suspense>
  )
}
