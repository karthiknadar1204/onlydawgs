const Footer = () => {
	return (
		<footer className='bg-gray-900 text-white py-6 md:py-8 border-t border-gray-700'>
			<div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 h-full'>
				<p className='text-center md:text-left text-sm md:text-base leading-loose'>
					Built by{" "}
					<a
						href='https://twitter.com/uchiha_katsuki_'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4 text-blue-400 hover:text-blue-500'
					>
                        Karthik Nadar For KitKat
					</a>
					. The source code is available on{" "}
					<a
						href='https://github.com/karthiknadar1204'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4 text-blue-400 hover:text-blue-500'
					>
						GitHub
					</a>
					.
				</p>
				<div className='flex items-center justify-center md:justify-end'>
					<a
						href='https://github.com/karthiknadar1204'
						target='_blank'
						rel='noreferrer'
						className='text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='h-6 w-6'
						>
							<path d='M12 .296c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.113.793-.261.793-.579 0-.286-.011-1.244-.016-2.258-3.338.726-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.834 2.809 1.304 3.494.998.109-.775.419-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.311.469-2.381 1.236-3.222-.124-.304-.536-1.527.118-3.181 0 0 1.008-.323 3.302 1.23.957-.266 1.982-.399 3.002-.404 1.018.005 2.044.138 3.002.404 2.292-1.553 3.299-1.23 3.299-1.23.656 1.654.244 2.877.118 3.181.767.841 1.236 1.911 1.236 3.222 0 4.609-2.803 5.623-5.473 5.921.43.371.814 1.102.814 2.222 0 1.606-.015 2.904-.015 3.299 0 .319.19.694.801.576C20.565 22.092 24 17.593 24 12.296c0-6.627-5.373-12-12-12z'/>
						</svg>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
