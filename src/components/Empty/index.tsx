import Link from "next/link"

import Button from "../Button"

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}
const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to Home</Button>
      </Link>
    )}
  </div>
)

export default Empty
