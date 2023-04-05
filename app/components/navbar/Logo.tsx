'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {

    const router = useRouter()

    return (
        <div>
            <Image 
                className="md-block cursor-pointer"
                height="30"
                width="150"
                src="/images/logo.svg"
            />
        </div>
    )
}

export default Logo