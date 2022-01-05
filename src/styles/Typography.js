import { createGlobalStyle } from 'styled-components';
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import GilroyExtraBold from '../assets/fonts/Gilroy-ExtraBold.otf';
import GilroyLight from '../assets/fonts/Gilroy-Light.otf';

const Typography = createGlobalStyle`
	@font-face {
		font-family: 'RobotoMono Regular';
		src: url(${RobotoMonoRegular});
		font-style: normal;
	}
	@font-face {
		font-family: 'Montserrat SemiBold';
		src: url(${MontserratSemiBold});
		font-style: normal;
	}
	@font-face {
		font-family: 'Montserrat Bold';
		src: url(${MontserratBold});
		font-style: normal;
	}
	@font-face {
		font-family: 'Gilroy ExtraBold';
		src: url(${GilroyExtraBold});
		font-style: normal;
	}
	@font-face {
		font-family: 'Gilroy Light';
		src: url(${GilroyLight});
		font-style: normal;
	}


	html{
		font-family: 'Gilroy ExtraBold';
		color: var(--gray-1);
	}
	*{
		font-family: 'Gilroy Light';
		color: var(--gray-1);
	}
	h1,h2,h3,h4,h5,h6{
		font-family: 'Gilroy ExtraBold'
	}
`;

export default Typography;