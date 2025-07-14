import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
    return (
        <button className={`${styles} bg-blue-600 border`}>
            {title}
        </button>
    )
}

export default Button;