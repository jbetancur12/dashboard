import { ConfigProvider } from 'antd';
import deDe from 'antd/lib/locale/de_DE';
import enUS from 'antd/lib/locale/en_US';
import { AppRouter } from '@app/components/router/AppRouter';
import { useLanguage } from './hooks/useLanguage';

function App() {
   const { language } = useLanguage();
  return (
    <>
    <ConfigProvider locale={language === 'en' ? enUS : deDe}>
<AppRouter />
    </ConfigProvider>
    </>
  );
}

export default App;
