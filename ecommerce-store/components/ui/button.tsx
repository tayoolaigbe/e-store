import { forwardRef } from 'react';

import { cn } from '@/libs/utils';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, disabled, type = 'button', ...props }, ref) => {
		return (
			<button
				type={type}
				className={cn(
					`w-auto rounded-full bg-blackborderborder-transparentpx-5 py-3 disabled:cursor-not-allowed disabled:opacity-50text-whitefont-semiboldhover:opacity-75transition`,
					disabled && 'opacity-75 cursor-not-allowed',
					className
				)}
				disabled={disabled}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = 'Button';

export default Button;
