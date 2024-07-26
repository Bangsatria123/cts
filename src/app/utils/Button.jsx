import Link from "next/link";

const Button = ({link, tag, padd}) => {
    return (
        <Link href={link}>
        <button className={`bg-secondary text-tertiary rounded-md ${padd} 
        hover:bg-primary hover:text-secondary transition ease duration-300`}>
            {tag}
        </button>
    </Link>
    )
}
export default Button;