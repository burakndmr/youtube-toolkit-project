import cn from "classnames";

export const H1 = ({children, className, ...props}: { children: React.ReactNode, className: string | undefined }) =>
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
        {children}
    </h1>

export const H2 = ({children, className, ...props}: { children: React.ReactNode, className: string | undefined }) =>
    <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
        {children}
    </h2>

export const H3 = ({children, className, ...props}: { children: React.ReactNode, className: string | undefined }) =>
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
        {children}
    </h3>

export const H4 = ({children, className, ...props}: { children: React.ReactNode, className: string | undefined }) =>
    <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
        {children}
    </h4>


export const P = ({children, className, ...props}: { children: React.ReactNode, className: string | undefined }) =>
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
        {children}
    </p>

export const Blockquote = ({children, className, ...props}: {
    children: React.ReactNode,
    className: string | undefined
}) =>
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
        {children}
    </blockquote>

export const List = ({children, className, data, ...props}: {
    children: React.ReactNode,
    className: string | undefined,
    data: string[]
}) => {
    return (
        <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
            {data.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
}

export const InlineCode = ({children, className, ...props}: {
    children: React.ReactNode,
    className: string | undefined
}) =>
    <code
        className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)}>
        {children}
    </code>

export const Lead = ({children, className, ...props}: { children: React.ReactNode, className: string | undefined }) =>
    <p className={cn("text-xl text-muted-foreground", className)}>
        {children}
    </p>

export const LargeText = ({children, className, ...props}: {
    children: React.ReactNode,
    className: string | undefined
}) =>
    <p className={cn("text-lg font-semibold", className)}>
        {children}
    </p>

export const SmallText = ({children, className, ...props}: {
    children: React.ReactNode,
    className: string | undefined
}) =>
    <p className={cn("text-sm font-medium leading-none", className)}>
        {children}
    </p>

export const MutedText = ({children, className, ...props}: {
    children: React.ReactNode,
    className: string | undefined
}) =>
    <p className={cn("text-sm text-muted-foreground", className)}>
        {children}
    </p>