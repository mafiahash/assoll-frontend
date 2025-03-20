const GlobalConfig = {
	common: {
		buttons: {
			primary: {
				bg: '#222325',
				hoverBg: '#222325',
				borderColor: 'none',
				hoverBorderColor: 'none',
				activeBorderColor: 'none',
				textColor: '#ffffff',
			},
			secondary: {
				bg: '#ffffff',
				hoverBg: '#222325',
				hoverTextColor: '#ffffff',
				borderColor: '#DDDDDD',
				hoverBorderColor: 'none',
				activeBorderColor: 'none',
				textColor: '#222325',
			},
		},
		modal: {
			modalBackBg: '#fff',
			modalBackOpacity: '1',
			modalWindowShadow: 'none',
		},

		base: {
			btnBorderRadius: '0px',
		},
	},
}

const IntroConfig = {
	container: {
		borderRadius: '0px',
		border: 'none',
		boxShadow: '0px 4px 8px 0px rgba(34, 60, 80, 0.2)',
	},
	controls: {
		inputIconColor: '#ffffff',
	},
}

export { GlobalConfig, IntroConfig }
