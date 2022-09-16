import { InputHTMLAttributes } from 'react'

interface iInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function Input({...rest}: iInputProps) {

   return (
      <input 
         {...rest}
         className='bg-zinc-900 py-3 px-4 rounded text-sm placaholder:text-zinc-500'
      />
   )

}

export { Input }