import Banner from './components/Banner';
import BigTitle from './components/typography/BigTitle';
import CenteredText from './components/layout/CenteredText';
import ComplementarityTitle from './components/typography/ComplementarityTitle';
import FlexCenter from './components/layout/FlexCenter';
import Logo from './components/Logo';
import LogoWrapper from './components/LogoWrapper';
import Button from './components/Button';
import Margin from './components/spacing/Margin';
import Flex from './components/layout/Flex';
import CopyrightNotice from './components/CopyrightNotice';
import './App.css';

export default function App() {
    return (
        <>
            <Banner />
            <LogoWrapper>
                <FlexCenter>
                    <Logo src="/img/logo.png" />
                </FlexCenter>
            </LogoWrapper>
            <FlexCenter>
                <CenteredText>
                    <ComplementarityTitle margin="32px 0 8px 0">Welcome to</ComplementarityTitle>
                    <BigTitle>Wego Klub!</BigTitle>
                    <Margin margin="48px 0">
                        <Flex direction="row" justify="space-between" alignItems="center">
                            <Margin margin="0 12px 0 0">
                                <Button variant="primary" target="_blank" href="https://discord.gg/v7RmnZMwdW">
                                    Join the Discord
                                </Button>
                            </Margin>
                            or
                            <Margin margin="0 0 0 12px">
                                <Button
                                    variant="secondary"
                                    target="_blank"
                                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                >
                                    Find out more
                                </Button>
                            </Margin>
                        </Flex>
                    </Margin>
                </CenteredText>
            </FlexCenter>
            <CopyrightNotice>&copy; {new Date().getFullYear()} Wego Klub!</CopyrightNotice>
        </>
    );
}
