import { ConfigProvider } from 'antd';
import deDe from 'antd/lib/locale/de_DE';
import enUS from 'antd/lib/locale/en_US';
import { ThemeProvider } from 'styled-components';
import { AppRouter } from './components/router/AppRouter';
import { ThemeSwitcher } from '@app/components/common/ThemeSwitcher';
import { useLanguage } from './hooks/useLanguage';
import GlobalStyle from './styles/GlobalStyle';
import { useAppSelector } from './hooks/reduxHooks';
import { useMemo } from 'react';
import { darkTheme } from './styles/themes/dark/darkTheme';
import lightTheme from './styles/themes/light/lightTheme';

function App() {
  const theme = useAppSelector((state) => state.theme.theme);
  const currentTheme = useMemo(() => (theme === 'dark' ? darkTheme : lightTheme), [theme]);

  const { language } = useLanguage();
  return (
    <>
      <meta name="theme-color" content={currentTheme.colors.main.primary} />
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <ConfigProvider locale={language === 'en' ? enUS : deDe}>
          <ThemeSwitcher theme={theme}>
            <AppRouter />
          </ThemeSwitcher>
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
