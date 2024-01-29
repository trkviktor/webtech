import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
  h1: (props: any) => (
    <h1 {...props} className="large-text">
      {props.children}
    </h1>
  ),
}

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
