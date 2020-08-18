import React from 'react';
import { Wrapper } from './components/Wrapper';
import './index.css'
import { I18nProvider, LOCALES } from './i18n'
import { useSelector } from 'react-redux';

function App(props) {

  const language = useSelector(state => state.main.language)

  return (
    <div className="app">
      <I18nProvider locale={language}>
        <Wrapper />
      </I18nProvider>
    </div>
  );
}

export default App;
